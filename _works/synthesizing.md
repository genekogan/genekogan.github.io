---
layout: work
title: Experiments with Deep Generator Networks
description: Generating photorealistic images from deep neural networks with DGNs
year: 2016
thumbnail: /images/home/thumb_synthesizing.jpg
includes: [jquery, lightbox]
---


These are some experiments made using [Deep Generator Networks (DGN)](http://www.evolvingai.org/synthesizing) code by [Nguyen, Dosovitskiy, Yosinski, Brox, and Clune](http://www.evolvingai.org/files/nguyen2016synthesizing.pdf) at [Evolving-AI](http://www.evolvingai.org/). DGNs are a class of neural networks which synthesize near-photorealistic samples from a probability distribution learned over a large collection of images.

All of these were generated using their original code, applied to a [caffemodel of Places365](https://github.com/metalbubble/places365). I've selected some of the interesting highlights.


<center>
	<a href="/images/synthesizing/new_classes.png" rel="lightbox[eb]"><img src="/images/synthesizing/thumb_new_classes.png" /></a>
</center>

DGNs are capable of producing many unique samples which are pretty convincing. Here is a series of [buttes](https://en.wikipedia.org/wiki/Butte).
<center>
	<a href="/images/synthesizing/buttes.png" rel="lightbox[eb]"><img src="/images/synthesizing/buttes.png" /></a>
</center>

Here is a series of boathouses. Notice that the DGN has impressively learned to make the water reflective.
<center>
	<a href="/images/synthesizing/boathouses.png" rel="lightbox[eb]"><img src="/images/synthesizing/boathouses.png" /></a>
</center>

Since many image classes have people in them, they have a tendency to generate people as a strange artifact. Curiously reminiscent of [Mario Klingemann's work with DGNs](https://twitter.com/quasimondo/status/755371321534578688).
<center>
	<a href="/images/synthesizing/people.png" rel="lightbox[eb]"><img src="/images/synthesizing/people.png" /></a>
</center>

At the discotheque.
<center>
	<a href="/images/synthesizing/discotheque.png" rel="lightbox[eb]"><img src="/images/synthesizing/discotheque.png" /></a>
</center>

You can animate the process of DGN samples converging on a class.

<center>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">watching DGN samples form. they jostle wildly through a generative space until converging on… a cheeseburger <a href="https://t.co/yEKsTgMweu">pic.twitter.com/yEKsTgMweu</a></p>&mdash; Gene Kogan (@genekogan) <a href="https://twitter.com/genekogan/status/770282729107759104">August 29, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</center>

Here is a [t-SNE of DGN samples generated from every class in CaffeNet](https://www.flickr.com/photos/genekogan/28618285284/in/dateposted/).