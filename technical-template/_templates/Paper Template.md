---
title: {{title|replace(":", " –")}}
year: {{date | format("YYYY")}}
tags: [paper]
alias: [\@{{citekey}}]
---

**Authors**:: {{authors}}{{directors}}
**Link**:: {{URL}}
**DOI**:: {{DOI}}
**Links**:: 
**Staus**:: #to-read
**Tags**:: {% for t in tags %}#{{t.tag|replace(" ", "-")}}{% if not loop.last %}, {% endif %}{% endfor %}
**Zotero**:: {{pdfZoteroLink}}

## Abstract

{{abstractNote}}
## Notes  

{% for ant in annotations -%}
	{%- if ant.annotatedText -%}
		> "_{{ant.annotatedText}}_"
		> [Page {{ant.page}}](zotero://open-pdf/library/items/{{ant.attachment.itemKey}}?page={{ant.page}}&annotation={{ant.id}})
	{%- endif %}
	
	{%- if ant.imageRelativePath -%}
		![[{{ant.imageRelativePath}}]]
	{%-endif %}

	{%if ant.comment %}
		{{ant.comment}}
	{% endif %}
{% endfor -%}