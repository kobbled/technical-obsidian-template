---
title: {{title|replace(":", " –")}}
tag: [paperitem]
alias: {{citekey}}
---

[[Papers MOC]]

**Authors**:: {{authors}}{{directors}}
**Year**:: {{date | format("YYYY")}}
**Link**:: {{url}}
**DOI**:: {{DOI}}
**Ref-Links**:: 
**Status**::  {% set regExp = r/Status:\s*([^\n]+)(?=\n)/g %}{% set status = regExp.exec(extra) %}{{status[1]}}
**Priority**:: {% set regExp = r/Priority:\s*([^\n]+)(?=\n)/g %}{% set priority = regExp.exec(extra) %}{{priority[1]}}
**Importance**:: {% set regExp = r/Importance:\s*([^\n]+)/g %}{% set importance = regExp.exec(extra) %}{{importance[1]}}
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