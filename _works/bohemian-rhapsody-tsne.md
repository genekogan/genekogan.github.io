---
layout: work
title: Bohemian Rhapsody t-SNE
description: A playable t-SNE of audio clips extracted by onset time from Queen's "Bohemian Rhapsody"
year: 2016
thumbnail: /images/home/thumb_bohemian-rhapsody-tsne.jpg
---

The middle section of Queen's Bohemian Rhapsody is segmented by onsets, and a feature vector is extracted (via [librosa](https://github.com/librosa/librosa)) from each chunk. The samples are then embedded into 2-d using [t-SNE](https://lvdmaaten.github.io/tsne/). Software used can be found [here](https://github.com/ml4a/ml4a-ofx).

Click to play.

<center>
<video controls="controls" onclick="this.play()">
<source src="/images/bohemian-rhapsody-tsne/bohemian-rhapsody-tsne.mp4" type="video/mp4">
</video>
</center>
