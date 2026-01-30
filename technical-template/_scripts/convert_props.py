import os
import re
import yaml

"""
Converts specialized inline metadata:

```
---
tag: [note/knowledge]

---

----
**Created**:: 2023-03-13
**Modified**:: 2023-03-13
**Category**:: #laser
**Folder**:: Beam Profile
**Tags**:: #laser/modes
**Links**:: 
    - [link1](https://www.link1.com)
    - [link2](https://www.link2.com)

----
```

into yaml properties:

```
---
Category: laser
Created: '2023-03-13'
Folder: Beam Profile
Links:
- https://www.link1.com
- https://www.link2.com
Modified: '2023-03-13'
Tags:
- note/knowledge
- laser/modes
- laser
---
```
"""

def convert_inline_to_yaml(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    sections = re.findall(r'(-{3,})\n(.+?)\n\1', content, re.DOTALL)
    existing_yaml_str = ''
    inline_metadata = ''

    for dashes, section_content in sections:
        if len(dashes) == 3:  # YAML frontmatter is enclosed within three dashes
            existing_yaml_str = section_content
        elif len(dashes) == 4:  # Inline metadata is enclosed within four dashes
            inline_metadata = section_content
    
    
    existing_yaml = {}
    if existing_yaml_str:
        existing_yaml = yaml.safe_load(existing_yaml_str)

    if not inline_metadata:
        return  # No inline metadata found

    new_yaml = existing_yaml.copy()  # Copy existing YAML front matter

    # Process each line in the inline metadata
    for line in inline_metadata.split('\n'):
        if re.match(r'\*\*.*\*\*::', line):
            res = re.search(r'\*\*(.*?)\*\*::\s*(.+)', line)
            if res:
                key, value = res.groups()

                #format tags properly
                if key == "Tags":
                    tags = [tag.strip().strip('#') for tag in value.split(',')]
                    new_yaml.setdefault('Tags', []).extend(tags)
                # Remove '#' from Category
                elif key == "Category":
                    value = value.strip('#')
                    new_yaml[key] = value
                elif key == "Links":
                    new_yaml.setdefault('Links', [])
                elif key == "Resources":
                    new_yaml.setdefault('Resources', [])
                else:   
                    new_yaml[key] = value

        elif re.match(r'\s*-\s*\[.*\]\(.*\)', line):  # Links
            try:
                link = re.search(r'\s*-\s*\[.*\]\((.*)\)', line)
                if hasattr(link, 'group'):
                    new_yaml.setdefault('Links', []).append(link.group(1))
            except AttributeError:
                link = None
        #regex match backlinks (i.e - '[[.*]]')
        elif re.match(r'\s*-\s*\[\[(.*?)\]\]', line):
            try:
                #extract link and append to Resources
                resource = re.search(r'\s*-\s*(\[\[(.*?)\]\])', line)
                if hasattr(resource, 'group'):
                    new_yaml.setdefault('Resources', []).append(f'{resource.group(1)}')
            except AttributeError:
                resource = None

    # Add Category to tags
    new_yaml['Tags'].append(new_yaml['Category'])

    # Merge 'tags' from existing YAML with 'Tags' from inline metadata
    if 'Tags' in new_yaml and 'tag' in existing_yaml:
        new_yaml['Tags'].extend(existing_yaml['tag'])
        new_yaml['Tags'] = list(set(new_yaml['Tags']))  # Remove duplicates
    elif 'tag' in existing_yaml:
        new_yaml['Tags'] = existing_yaml['tag']

    if 'tag' in new_yaml:
        new_yaml.pop('tag')  # Rename 'Tags' to 'tags'

    
    if "" in new_yaml['Tags']:
        new_yaml['Tags'].remove("")

    #remove value from Modified key if Modified key exists
    if 'Modified' in new_yaml:
        new_yaml['Modified'] = ''

    # Replace both the existing YAML front matter and the inline metadata with the new YAML front matter
    new_content = re.sub(r'---\n(.+?)\n---', '', content, flags=re.DOTALL)
    new_content = re.sub(r'----\n(.+?)\n----', '', new_content, flags=re.DOTALL)
    yaml_str = yaml.dump(new_yaml, default_flow_style=False)
    new_content = '---\n' + yaml_str + '---\n' + new_content

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

# Replace 'your_directory' with the directory containing your notes
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.md'):
            convert_inline_to_yaml(os.path.join(root, file))