---
layout: default
title: "CV"
---


{% assign cv = site.data.cv %}



{% for c in cv %}
	{{ c.title }} :: {{ c.date }}
	
{% endfor %}			


