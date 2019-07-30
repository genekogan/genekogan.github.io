---
layout: default
title: CV
redirect_from: 
 - /about.html
 - /about/
---

{% assign cv = site.data.cv %}

<div id="cv_main">

<!-- 
	<div id="cv_bio">
		
		<a href="https://www.instagram.com/p/BTOrppKgdzk/?taken-by=genekogan">Gene</a> Kogan is an artist and a programmer who is interested in generative systems, computer science, and software for creativity and self-expression. He is a collaborator within numerous <a href="https://www.github.com/genekogan">open-source</a> software projects, and gives <a href="/workshops">workshops</a> and <a href="#talks">lectures</a> on topics at the intersection of code and art. Gene initiated <a href="https://ml4a.github.io">ml4a</a>, a free book about machine learning for artists, activists, and citizen scientists, and regularly publishes <a href="https://ml4a.github.io/classes">video lectures</a>, writings, and tutorials to facilitate a greater public understanding of the subject.
		
	</div>	

	<div id="cv_elsewhere" class="cv_section">
		<ul>
			<li><a href="https://www.twitter.com/genekogan">Twitter</a></li>
			<li><a href="https://www.github.com/genekogan">Github</a></li>
			<li><a href="https://www.vimeo.com/genekogan">Vimeo</a></li>
			<li><a href="https://www.youtube.com/c/genekogan">YouTube</a></li>
			<li><a href="https://www.flickr.com/genekogan">Flickr</a></li>
			<li><a href="https://www.soundcloud.com/genekogan">SoundCloud</a></li>
			<li><a href="https://www.medium.com/@genekogan">Medium</a></li>
			<li><a href="https://electricdosa.tumblr.com">Tumblr</a></li>
			<li><a href="https://www.instagram.com/genekogan">Instagram</a></li>
			<li><a href="https://www.facebook.com/genekogan1">Facebook</a></li>
			<li><a href="/images/misc/myemail.png">E-mail</a></li>
	    </ul>
	</div>
-->

	<div id="talks" class="cv_section">
		<div class="cv_heading">
			<ul>
				
				<li id="c_all" class="active"><a href="javascript:selectType('all');">Everything</a></li>
				<li id="c_talks"><a href="javascript:selectType('talks');">Talks</a></li>
				<li id="c_teaching"><a href="javascript:selectType('teaching');">Teaching</a></li>
				<li id="c_exhibitions"><a href="javascript:selectType('exhibitions');">Exhibitions</a></li>
				<li id="c_residencies"><a href="javascript:selectType('residencies');">Residencies</a></li>
				<li id="c_papers"><a href="javascript:selectType('papers');">Publications</a></li>
			</ul>
		</div>
		{% for c in cv.talks %}
		<div class="cv_entry {% if c.extended == true %}extended{% endif %}">
			<div class="date">{{ c.date }}</div>
			<div class="type">{{ c.type }}</div>
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
				{% if c.pdf %}
					<div class="info_link">
						<a href="{{ c.pdf }}">[pdf]</a>
					</div>
				{% endif %}
				{% if c.video %}
					<div class="video_link">
						<a href="{{ c.video }}">[video]</a>
					</div>
				{% endif %}
				{% if c.audio %}
					<div class="video_link">
						<a href="{{ c.audio }}">[audio]</a>
					</div>
				{% endif %}
				{% if c.slides %}
					<div class="video_link">
						<a href="{{ c.slides }}">[slides]</a>
					</div>
				{% endif %}
				{% if c.photo %}
					<div class="video_link">
						<a href="{{ c.photo }}">[photos]</a>
					</div>
				{% endif %}
			</div>
		</div>
		{% endfor %}			
	</div>

<!--
	<div id="education" class="cv_section">
		<div class="cv_heading">Education, grants/awards</div>
		<div class="cv_entry">
			<div class="date">2012-2013</div>
			<div class="where"><a href="http://srishti.ac.in/">Srishti School of Art</a>, Design & Technology, Bangalore, India</div>
			<div class="name">Fulbright Scholarship</div>
			<div class="links"><div class="info_link"><a href="http://www.usief.org.in/2012-2013-USFellows/students/Kogan-Gennady.html">[info]</a></div></div>
		</div>
		<div class="cv_entry">
			<div class="date">2004-2008</div>
			<div class="where"><a href="http://apam.columbia.edu/">Columbia University</a>, New York, NY</div>
			<div class="name">B.S. Applied mathematics</div>
			<div class="links"></div>
		</div>
	</div>
-->

</div>


<script>
	
	function displayAllEntries() {
		var d = document.getElementsByClassName("cv_entry extended");
		for(var i = 0; i < d.length; i++){ d[i].style.display = "block"; }
	};

	function selectType(selectedType) {
		document.getElementById("c_all").className = '';
		document.getElementById("c_talks").className = '';
		document.getElementById("c_teaching").className = '';
		document.getElementById("c_exhibitions").className = '';
		document.getElementById("c_residencies").className = '';
		document.getElementById("c_papers").className = '';

		var types = ['talk', 'interview', 'podcast', 'workshop', 'class', 'installation', 'exhibition', 'performance', 'residency', 'paper'];
		if (selectedType == 'all') {
			document.getElementById("c_all").className = 'active';
		} else if (selectedType == 'talks') {
			types = ['talk', 'interview', 'podcast'];
			document.getElementById("c_talks").className = 'active';
		} else if (selectedType == 'teaching') {
			types = ['workshop', 'class'];
			document.getElementById("c_teaching").className = 'active';
		} else if (selectedType == 'exhibitions') {
			types = ['installation', 'exhibition', 'performance'];
			document.getElementById("c_exhibitions").className = 'active';
		} else if (selectedType == 'residencies') {
			types = ['residency'];
			document.getElementById("c_residencies").className = 'active';
		} else if (selectedType == 'papers') {
			types = ['paper'];
			document.getElementById("c_papers").className = 'active';
		}
		var d = document.getElementsByClassName("cv_entry");
		for(var i = 0; i < d.length; i++){ 
			if (types.indexOf(d[i].getElementsByClassName("type")[0].textContent) > -1) {
				
				if (d[i].className.split(" ").indexOf("extended") == -1) {
					d[i].style.display = "block";
				}
			} else {
				d[i].style.display = "none";
			}
		}
	};

	function highlightUpcoming() {
		var today = new Date(new Date() - 86400000);
		var d = document.getElementsByClassName("cv_entry");
		for(var i = 0; i < d.length; i++){ 
			var text = d[i].children[0].textContent;
			var split = text.indexOf("-")
			if (split != -1) {
				text = text.substring(0, split);
			}
			var date = new Date(text);
			if (date.getTime() >= today.getTime()) {
				d[i].className += " upcoming";
			}
		}
	};

	window.onload = function() {
		if (window.location.hash=="#all") {
			displayAllEntries();
		}
		if (window.location.hash=="#teaching") {
			selectType('teaching');
		}
		highlightUpcoming();
	};

</script>
