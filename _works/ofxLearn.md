---
layout: work
title: ofxLearn
description: Machine learning framework for OpenFrameworks
year: 2012
thumbnail: /images/home/thumb_ofxLearn.jpg
redirect_from: /works/ofxLearn.html
---

[ofxLearn](http://www.github.com/genekogan/ofxLearn) is an addon for [OpenFrameworks](http://www.openframeworks.cc/) enabling general-purpose machine learning. It is designed for ease of use, automating most of the gritty details of machine learning procedures like model selection, optimization, and training, while still providing methods to customize those details if desired. It is a high-level wrapper to the free C++ [dlib](http://dlib.net/ml.html) machine learning library.

The library supports supervised and unsupervised learning for applications like gesture recognition, pattern classification, computer vision and listening, and many others.

<center>
	<img src="/images/ofxLearn/ofxLearn_supervised.jpg">
</center>

<center>
	<img src="/images/ofxLearn/ofxLearn_unsupervised.jpg">
</center>

Alongside ofxLearn is [ofxSelfOrganizingMap](http://www.github.com/genekogan/ofxLearn), a separate OpenFrameworks addon implementing a type of unsupervised learning algorithm called a [self-organizing map](http://en.wikipedia.org/wiki/Self-Organizing_Map). An SOM takes a set of data points characterized by feature vectors, and reorganizes them in such a way that similar data points are placed in close proximity. Like the unsupervised learning routines in ofxLearn, it is most useful for pattern identification and clustering.

The included example demonstrates the use of an SOM to analyze and reorganize a set of colored pixels from an image of flowers. I also made an implementation of a self-organizing map in Processing, which was used in [Tidy Photography](/works/tidy-photography.html) and [Color of Words](/works/color-of-words.html). [Code here](http://www.github.com/genekogan/ofxSelfOrganizingMap).

<center>
	<img src="/images/ofxLearn/ofxSelfOrganizingMap.jpg">
</center>