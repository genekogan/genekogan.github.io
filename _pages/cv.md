---
layout: default
title: "CV"
---

{% assign cv = site.data.cv %}

<div id="about">
	<div id="cv_bio">
		Gene Kogan is an artist and a programmer who is interested in generative systems, artificial intelligence, and software for creativity and self-expression. He is a collaborator within numerous <a href="https://www.github.com/genekogan">open-source</a> software projects, and leads <a href="/workshops">workshops</a> and demonstrations on topics at the intersection of code, art, and technology activism. Gene initiated and contributes to <a href="https://ml4a.github.io">ml4a</a>, a free book about machine learning for artists, activists, and citizen scientists. He regularly publishes <a href="https://ml4a.github.io/classes">video lectures</a>, writings, and tutorials to facilitate a greater public understanding of the topic.<br/><br/>Feel free to <a href="mailto:kogan dot gene at gmail dot com">e-mail me</a>.
	</div>	
	<div id="cv_elsewhere" class="cv_section">
		<ul>
			<li><a href="https://www.twitter.com/genekogan">Twitter</a></li>
			<li><a href="https://www.github.com/genekogan">Github</a></li>
			<li><a href="https://www.vimeo.com/genekogan">Vimeo</a></li>
			<li><a href="https://www.youtube.com/user/ekogan19/videos">YouTube</a></li>
			<li><a href="https://www.flickr.com/genekogan">Flickr</a></li>
			<li><a href="https://www.soundcloud.com/genekogan">SoundCloud</a></li>
			<li><a href="https://www.medium.com/@genekogan">Medium</a></li>
			<li><a href="https://electricdosa.tumblr.com">Tumblr</a></li>
			<li><a href="https://www.instagram.com/genekogan">Instagram</a></li>
			<li><a href="https://www.facebook.com/genekogan1">Facebook</a></li>
	    </ul>
	</div>
	<div class="cv_section">
		<div class="cv_heading">Talks</div>
		{% for c in cv.talks %}
		{% if c.extended != true %}
		<div class="talk">
			<div class="date">{{ c.date }}</div>
			<div class="where">{{ c.where }}</div>
			<div class="name">{{ c.name }}</div>
			<div class="links">
				{% if c.info %}
					<div class="info_link">
						<a href="{{ c.info }}">[info]</a>
					</div>
				{% endif %}
				{% if c.video %}
					<div class="video_link">
						<a href="{{ c.video }}">[video]</a>
					</div>
				{% endif %}
			</div>
		</div>
		{% endif %}
		{% endfor %}			
	</div>
	<div id="teaching" class="cv_section">
		<div class="cv_heading">Teaching</div>
		{% for c in cv.teaching %}
		{% if c.extended != true %}
		<div class="teaching_">
			<div class="date">{{ c.dates }}</div>
			<div class="where">{{ c.where }}</div>
			<div class="name">{{ c.name }}</div>
			<div class="links">
				{% if c.info %}
					<div class="info_link">
						<a href="{{ c.info }}">[info]</a>
					</div>
				{% endif %}
				{% if c.info2 %}
					<div class="info_link">
						<a href="{{ c.info2 }}">[info]</a>
					</div>
				{% endif %}
				{% if c.video %}
					<div class="video_link">
						<a href="{{ c.video }}">[video]</a>
					</div>
				{% endif %}
				{% if c.photo %}
					<div class="video_link">
						<a href="{{ c.photo }}">[photos]</a>
					</div>
				{% endif %}
			</div>
		</div>
		{% endif %}			
		{% endfor %}			
	</div>
	<div class="cv_section">
		<div class="cv_heading">Residencies</div>
		{% for c in cv.residencies %}
		<div class="residency">
			<div class="date">{{ c.dates }}</div>
			<div class="where">{{ c.where }}</div>
			<div class="name">{{ c.name }}</div>
			<div class="links">
				{% if c.info %}
					<div class="info_link">
						<a href="{{ c.info }}">[info]</a>
					</div>
				{% endif %}
				{% if c.video %}
					<div class="video_link">
						<a href="{{ c.video }}">[video]</a>
					</div>
				{% endif %}
			</div>
		</div>
		{% endfor %}
	</div>
	<div class="cv_section">
		<div class="cv_heading">Publications</div>
		{% for c in cv.publications %}
		<div class="publication">
			<div class="date">{{ c.date }}</div>
			<div class="where">{{ c.authors }}</div>
			<div class="name">"{{c.title}}" @ {{c.publication}}</div>
			<div class="links">
				{% if c.pdf %}
					<div class="info_link">
						<a href="{{ c.pdf }}">[pdf]</a>
					</div>
				{% endif %}
			</div>
		</div>
		{% endfor %}
	</div>
	<div class="cv_section">
		<div class="cv_heading">Education, grants/awards</div>
		<div class="education">
			<div class="date">2012-2013</div>
			<div class="where"><a href="http://srishti.ac.in/">Srishti School of Art</a>, Design & Technology, Bangalore, India</div>
			<div class="name">Fulbright Scholarship</div>
			<div class="links"><div class="info_link"><a href="http://www.usief.org.in/2012-2013-USFellows/students/Kogan-Gennady.html">[info]</a></div></div>
		</div>
		<div class="education">
			<div class="date">2004-2008</div>
			<div class="where"><a href="http://apam.columbia.edu/">Columbia University</a>, New York, NY</div>
			<div class="name">B.S. Applied mathematics</div>
			<div class="links"></div>
		</div>
	</div>
</div>