---
layout: work
title: Deepdream prototypes
description: Images produced with Google's inceptionism/deepdream neural networks
year: 2015
thumbnail_mp4: /images/home/thumb_deepdream.mp4
thumbnail_webm: /images/home/thumb_deepdream.webm
includes: [lightbox]
redirect_from: /works/deepdream.html
---

A series of images produced using [Google's inceptionism/deepdream](http://googleresearch.blogspot.com/2015/06/inceptionism-going-deeper-into-neural.html) code released in July 2015. The software uses [artificial neural networks](https://en.wikipedia.org/wiki/Artificial_neural_network) trained on large sets of classified images used by Google for image recognition. The [code](https://github.com/google/deepdream) accepts images as inputs and iteratively evolves the pixel values towards some coherent resemblance to the image classes it knows, producing wild images of "pig-snails," "camel-birds," "dog-fish," and the famous "puppy slugs," among many other categories.

I was able to get interesting animations by iteratively zooming into the output and oscillating which of the layers to enhance in the network.

<center>
<p>
	<video loop autoplay>
		<source src="/images/deepdream/deepzoom.mp4" type="video/mp4">
		<source src="/images/deepdream/deepzoom.webm" type='video/webm;codecs="vp8,vorbis"'>
	</video>
	<video loop autoplay>
		<source src="/images/deepdream/deep-prototypes.mov" type="video/mp4">
		<source src="/images/deepdream/deep-prototypes.webm" type='video/webm;codecs="vp8,vorbis"'>
	</video>
</p>
</center>

<p>
Enhancing different layers (like 'inception_3a/relu_5x5_reduce') let me find some of the lesser-seen classes like these chalice-like bowls.
</p>

<center>
<p>
<img src="/images/deepdream/bowls.jpg">
</p>
</center>

<p>
A <a href="https://www.flickr.com/photos/genekogan/albums/72157655463879190">gallery</a> of images including paintings by Da Vinci, Klimt, Monet, Schiele, and Picasso, photos of Bagan, Lake Indawgyi, and Shwedagon Pagoda in Burma/Myanmar, Jaaga in Bangalore, and some fireworks.
</p>	

<center>
<p>
	<a href="/images/deepdream/davinci.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_davinci.jpg" /></a>
	<a href="/images/deepdream/monet1.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_monet1.jpg" /></a>
	<a href="/images/deepdream/picasso.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_picasso.jpg" /></a>
	<a href="/images/deepdream/schiele.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_schiele.jpg" /></a>
	<a href="/images/deepdream/klimt.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_klimt.jpg" /></a>
	<a href="/images/deepdream/ganesh1.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_ganesh1.jpg" /></a>
	<a href="/images/deepdream/ganesh2.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_ganesh2.jpg" /></a>
	<a href="/images/deepdream/cappucinno.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_cappucinno.jpg" /></a>
	<a href="/images/deepdream/fireworks1.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_fireworks1.jpg" /></a>
	<a href="/images/deepdream/fireworks2.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_fireworks2.jpg" /></a>
	<a href="/images/deepdream/indawgyi_sunset.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_indawgyi_sunset.jpg" /></a>
	<a href="/images/deepdream/indawgyi.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_indawgyi.jpg" /></a>
	<a href="/images/deepdream/jaaga.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_jaaga.jpg" /></a>
	<a href="/images/deepdream/bagan.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_bagan.jpg" /></a>
	<a href="/images/deepdream/shwedagon1.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_shwedagon1.jpg" /></a>
	<a href="/images/deepdream/shwedagon2.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_shwedagon2.jpg" /></a>
	<a href="/images/deepdream/mamoru.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_mamoru.jpg" /></a>
	<a href="/images/deepdream/rio.jpg" rel="lightbox[dd]"><img src="/images/deepdream/thumb_rio.jpg" /></a>
</p>

</center>