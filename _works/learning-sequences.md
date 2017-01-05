---
layout: work
title: Learning to generate text and audio
description: Generating text and audio sequences with LSTM networks
year: 2015
thumbnail: /images/home/thumb_learning-sequences.jpg
redirect_from: /works/learning-sequences.html
---

Advances in techniques for predicting sequence elements have improved our ability to create generative sequences in various styles. The following are audio and text sequences generated using [Long Short Term Memory (LSTM)](https://en.wikipedia.org/wiki/Long_short-term_memory) neural networks in the style of various source texts and audio samples. 

I produced audio with [Matt Vitelli's GRUV library](https://github.com/MattVitelli/GRUV) which trains a [recurrent neural network](https://en.wikipedia.org/wiki/Recurrent_neural_network) on music to produce new samples of audio in the style of the source audio. Some novel and promising results, but overfitting is evident, with fragments from the source audio being audible in the outputs. More work needs to be done in this area. Some of the outputs:

<center>
<p>
	John Coltrane -- Blue Train
</p>
<p>
	<iframe width="60%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219255494&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
</p>

<p>
	Frédéric Chopin -- Nocturnes
</p>
<p>
	<iframe width="60%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219782465&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
</p>

<p>
	Vibraphone sample
</p>
<p>
	<iframe width="60%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219784219&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
</p>
</center>

<p>
I used the char-rnn technique <a href="https://karpathy.github.io/2015/05/21/rnn-effectiveness/">first described</a> and <a href="https://github.com/karpathy/char-rnn">implemented</a> by Andrej Karpathy</a> and re-implemented in <a href="https://github.com/pfnet/chainer">Chainer</a> by <a href="https://github.com/yusuketomoto/chainer-char-rnn">Yusuke Tomoto<a/> to create some text sequences trained on various corpora.
</p>

<center>
<p>
	Book of Genesis
	<br/>
	<img src="/images/learning-sequences/genesis.jpg" />
</p>
<p>
	State of the union addresses by George W. Bush, 2001-2008
	<br/>
	<img src="/images/learning-sequences/gwbush.jpg" />
</p>
<p>
	War & Peace by Leo Tolstoy
	<br/>
	<img src="/images/learning-sequences/warandpeace.jpg" />
</p>
</center>

<p>
Some more personal texts were generated trained on <a href="https://twitter.com/genekogan/status/631147300996444160">my Gmail</a> and on <a href="https://twitter.com/genekogan/status/630843297615978496">my personal journal</a>.
</p>
