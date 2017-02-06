---
layout: work
title: Visualizing my field recordings
description: Visualizing field recording samples with PCA and audio analysis
year: 2012
thumbnail: /images/home/thumb_field-rec-navigator.jpg
redirect_from: /writing/field-rec-navigator.html
---

{::nomarkdown}
<p>
	<img src="http://genekogan.com/images/xinjiang-hunza/thumb_xinjiang-hunza-compilation-2.jpg" style="float:right;">
	I'm beginning to work on a project which I've been tossing around for the last few weeks, which involves visualizing and navigating through my field recordings. I've had an interest in field recording for the past few years, and have incorporated it into a few projects in the past: see <a href="http://www.alongthekarakoram.com">Along the Karakoram</a>, <a href="http://genekogan.com/works/xinjiang-hunza-compilation.html">Xinjiang-Hunza compilation</a>, <a href="http://turbulence.org/soundtransit/search/artistinfo.php?id=473">Sound Transit</a>, and <a href="http://soundcloud.com/genekogan/stone-barns">Stone Barns recording</a>. 
</p>
<p>
	<iframe width="20%" height="166" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F51667833&amp;auto_play=false&amp;show_artwork=false&amp;color=23521d" style="float:left;"></iframe>
	I am inclined towards field recording by interests in recollection and documentation through sound, i.e. <a href="http://www.phonography.org/word.htm">"phonography"</a>, sound ecology (e.g. <a href="http://en.wikipedia.org/wiki/R._Murray_Schafer">R. Murray Schafer</a>, <a href="http://www.sfu.ca/~westerka/">Hildegard Westerkamp</a>), and sound art/musique concrète (e.g. <a href="http://www.michelchion.com/v1/">Michel Chion</a>, <a href="http://www.chriswatson.net">Chris Watson</a>, <a href="http://www.franciscolopez.net">Francisco López</a>). Like the latter two, I am interested in sound design, finding complementary and contrasting sounds from the real world, and using them as a palette for composition. My recorder has collected samples from bazaars, alleys, malls, protests, temples, forests, elevator shafts, pig pens, and various other locations which occasionally draw funny looks from people or animals.
</p>
<p>
	Because I compile many hours of recordings, I can gain some agility in managing my collection via audio processing techniques to help organize those sounds along various parameters of interest, and find clusters of similar sounds and complementary sound pairs. I am aided here by <a href="https://www.jyu.fi/hum/laitokset/musiikki/en/research/coe/materials/mirtoolbox">MIRtoolbox</a>, a MATLAB-based library for <a href="http://en.wikipedia.org/wiki/Music_information_retrieval">music information retrieval</a>, made by a group at the University of Jyväskylä in Finland. MIRtoolbox fluidly handles a number of common audio tasks. With it I automatically segmented the raw recordings into a collection of relatively self-contained sound events ranging from half a second  to  more than 10 seconds long. The segmentation algorithm attempts to optimally divide each recording to maximize the dissimilarity among all segment pairs, example shown below.
</p>
	<center>
	<a href="/images/field-rec-navigator/audio-segmentation.jpg" rel="lightbox[fieldrecnav]"><img src="/images/field-rec-navigator/thumb_audio-segmentation.jpg" /></a>
	</center>
<p>
	I then extract features from the segments, which are various quantities characterizing the dynamics and timbre of the sound, providing for a compact representation of each segment, with similar groups of sounds having relatively similar representations (ideally). Some of those features are shown below: spectral flux is a measure of the dispersion of the sound among all frequency bands (loosely related to the "noisiness" of the sound), roughness can be interpreted as a measure of dissonance in the signal, brightness is a measure of how much of the sound's energy is contained in frequencies above 1500 Hz, and RMS (root mean squared) energy corresponds to the average energy level, correlating to loudness.
</p>
<p>
	<center>
	<a href="/images/field-rec-navigator/audio-features.jpg" rel="lightbox[fieldrecnav]"><img src="/images/field-rec-navigator/thumb_audio-features.jpg" /></a>
	</center>
</p>
<p>
	The resulting high-dimensional matrix describing all these segments is then finally reduced to a three-dimensional one via <a href="http://en.wikipedia.org/wiki/Principal_component_analysis">principal component analysis</a>. I can then plot the audio segments in a three-dimensional view, as seen below. The colors refer to different source audio files, and not surprisingly, segments from within the same file tend to cluster together. But there is some overlap among sounds contained in different files, and its these pairs where I hope to find unexpectedly nice juxtapositions.
</p>
<p>
	<center>
	<a href="/images/field-rec-navigator/field-rec-3d.jpg" rel="lightbox[fieldrecnav]"><img src="/images/field-rec-navigator/thumb_field-rec-3d.jpg" /></a>
	</center>
</p>
<p>
	I'm using <a href="http://supercollider.sourceforge.net/">SuperCollider</a> to handle the audio playback; meanwhile Processing runs the visual and interactive component, and communicates with SuperCollider via open sound control (OSC).  My goal is to create a high-level interface that lets me effectively navigate through all this audio content, and slowly incorporate musical elements into it, building towards a sort of musical instrument with typical features like loops and filters. I will post more later when I am closer to having something of a demo.
</p>
{:/nomarkdown}
