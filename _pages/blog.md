---
layout: default
title: "blog"
---

{% for post in site.writings %}
<div id="work">
	<div id="blog_date" class="post">
		<a href="{{post.url}}">{{ post.date | date_to_long_string }}</a>
	</div>
	<div id="blog_title" class="post">
		<a href="{{post.url}}">{{ post.title }}</a>
	</div>
	<div id="blog_subtitle" class="post">
		{{ post.subtitle }}
	</div>
	<div id="blog_post" class="post">
		{{ post.content }}
	</div>
</div>
<hr width="80%">
{% endfor %}
