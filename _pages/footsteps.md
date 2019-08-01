---
layout: default
title: Footsteps
description: Where Gene has been
includes: []
---

<script src='https://api.mapbox.com/mapbox-gl-js/v0.30.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v0.30.0/mapbox-gl.css' rel='stylesheet' />

<div id='map' style='width: 100%; height: 770px;'></div>
<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VuZWtvZ2FuIiwiYSI6ImNpdnhyMjU4ODAwMGkyenBrY2F5Y2hoMWgifQ.Tli322RLoV7qBt-tgNRXOQ';
	var map = new mapboxgl.Map({
	    container: 'map',
	    style: 'mapbox://styles/genekogan/cixpidxzs00222sojgjerb9p6',
		center: [-9, 17.5],
		zoom: 1.75
	});
</script>