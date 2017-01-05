---
layout: work
title: Birl
description: Physical modeling + training interface for electronic wind instrument
year: 2014
collaborators: Jeff Snyder
thumbnail: /images/home/thumb_birl.jpg
includes: [lightbox]
redirect_from: /works/birl.html
---

The [Birl](http://snyderphonics.com/birl.htm) is an electronic wind instrument which encases a custom circuit with a set of finger pressure sensors, along with a breath pressure and embouchure sensor on the mouthpiece. The device is capable of learning custom sensor-to-synthesis mapping using a neural network and custom training application written in openFrameworks. The synthesis parameters are that of a physical model of a wind instrument, and the audio is generated entirely on a microcontroller in the instrument, or can be sent via OSC to another software application. The hardware was designed by [Jeff Snyder](http://snyderphonics.com).

The software [can be found here](https://github.com/genekogan/Birl).

Click on the below image for a closeup.

<center>
<a href="/images/birl/birl1.jpg" rel="lightbox[birl]"><img src="/images/birl/thumb_birl1.jpg" /></a>
</center>

Training interface and Pedro Eustache playing a trained Birl:

<!--			
<p>
	<img src="/images/birl/birl_interface.png" />	
	<video controls="controls" name="Brad playing the Birl" src="/images/birl/birl_brad.MOV"></video>			
</p>
-->

{:.center}
![Birl interface](/images/birl/birl_interface.png "Birl interface")

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/rEr8X_Q_4ZE" frameborder="0" allowfullscreen></iframe>
<p><a href="/images/birl/birl2.jpg" rel="lightbox[birl]"><img src="/images/birl/thumb_birl2.jpg" /></a></p>
</center>