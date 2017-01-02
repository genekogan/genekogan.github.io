{% assign page = site.works | where:"title", include.title | first %}

<div class="project">
	{% if page.alt_url %}
		<a href="{{page.alt_url}}">
	{% else %}
		<a href="{{page.url}}">
	{% endif %}
	{% if page.thumbnail_mp4 %}
		<video loop autoplay>
			<source src="{{page.thumbnail_mp4 }}" type="video/mp4">
			<source src="{{page.thumbnail_webm}}" type='video/webm;codecs="vp8,vorbis"'>
		</video>
	{% else %}
		<img src="{{ page.thumbnail }}">
	{% endif %}
		<div class="overlay">
			<div class="overlay_title">
				{{page.title}}
			</div>
			<div class="overlay_meta">
				{{page.year}} {%if page.collaborators %}++ {{page.collaborators}}{% endif %}
			</div>
			<div class="overlay_description">
				{{page.description}}
			</div>
		</div>
	</a>
</div>