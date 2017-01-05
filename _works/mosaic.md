---
layout: work
title: Mosaic
description: Automatic generation of photo mosaics
year: 2010
thumbnail: /images/home/thumb_mosaic.jpg
includes: [lightbox]
redirect_from: /works/mosaic.html
---

Mosaic creates [photo mosaics](http://en.wikipedia.org/wiki/Photographic_mosaic), composited images of many small photographs stitched together in such a way as to resemble a single target photograph.

It's written in Matlab and takes as input a large collection of images, and a single "target image", i.e. the photo the mosaic should represent. It divides the target into a grid, and fits individual photographs into each "pixel" to maximize the overall color similarity between source and target, using an [implementation](http://www.cs.huji.ac.il/~ofirpele/FastEMD/code/) of [Earth Mover's distance](http://en.wikipedia.org/wiki/Earth_mover's_distance). [Code here](https://github.com/genekogan/Auto-Photo-Mosaic), though requires Matlab :(

<center>
<p>
<a href="/images/mosaic/target-antigua.jpg" rel="lightbox[mosaic]"><img src="/images/mosaic/thumb_target-antigua.jpg" /></a>
<a href="/images/mosaic/mosaic-antigua.jpg" rel="lightbox[mosaic]"><img src="/images/mosaic/thumb_mosaic-antigua.jpg" /></a>
</p>
<p>
<a href="/images/mosaic/target-rosieondeck.jpg" rel="lightbox[mosaic]"><img src="/images/mosaic/thumb_target-rosieondeck.jpg" /></a>
<a href="/images/mosaic/mosaic-rosieondeck.jpg" rel="lightbox[mosaic]"><img src="/images/mosaic/thumb_mosaic-rosieondeck.jpg" /></a>
</p>
<p>
<a href="/images/mosaic/target-dilnora.jpg" rel="lightbox[mosaic]"><img src="/images/mosaic/thumb_target-dilnora.jpg" /></a>
<a href="/images/mosaic/mosaic-dilnora.jpg" rel="lightbox[mosaic]"><img src="/images/mosaic/thumb_mosaic-dilnora.jpg" /></a>
</p>
</center>
