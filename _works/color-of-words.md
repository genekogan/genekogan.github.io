---
layout: work
title: Color of words
description: Finding the hidden color distribution behind words, phrases, concepts
year: 2011
thumbnail: /images/home/thumb_color-of-words.jpg
includes: [lightbox]
---

This project sought to discover the implicit colors of words, phrases, and concepts. A set of words was selected and run through a google image search. The color distribution of the first hundred images was analyzed and re-synthesized using a [self-organizing map (SOM)](http://en.wikipedia.org/wiki/Self-organizing_map), a machine learning algorithm for clustering and visualizing data. The SOM was implemented using [ofxSelfOrganizingMap](http://www.github.com/genekogan/ofxSelfOrganizingMap). <!-- To emphasize the peaks and smooth out spurious colors, the covariance matrix of the GMM was divided by 10. -->

After the google images were downloaded, a [Gaussian mixture model](http://en.wikipedia.org/wiki/Mixture_model) was fit to the distribution of pixel colors. A self-organizing map of the color distribution was produced by randomly sampling from the resulting smoothed GMM.

Below is a series of results in categories: seasons, biomes, holidays, food, sky, film, politics, animals, and sports.

{::nomarkdown}
<center>
	<table border=0>
		<tr>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_winter.jpg" data-lightbox="example-set" data-title="winter"><img src="/images/colors-of-words/thumb_SOM_reg_winter.jpg" alt="Winter" ></a><br><center>Winter</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_spring.jpg" data-lightbox="example-set" data-title="spring"><img src="/images/colors-of-words/thumb_SOM_reg_spring.jpg" alt="Spring" ></a><br><center>Spring</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_summer.jpg" data-lightbox="example-set" data-title="summer"><img src="/images/colors-of-words/thumb_SOM_reg_summer.jpg" alt="Summer" ></a><br><center>Summer</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_fall.jpg" data-lightbox="example-set" data-title="fall"><img src="/images/colors-of-words/thumb_SOM_reg_fall.jpg" alt="Fall" ></a><br><center>Fall</center></td>
		</tr>
	</table>
	<p>
	<table border=0>
		<tr>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_desert.jpg" data-lightbox="example-set" data-title="desert"><img src="/images/colors-of-words/thumb_SOM_reg_desert.jpg" alt="Desert" ></a><br><center>Desert</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_tundra.jpg" data-lightbox="example-set" data-title="tundra"><img src="/images/colors-of-words/thumb_SOM_reg_tundra.jpg" alt="Tundra" ></a><br><center>Tundra</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_savanna.jpg" data-lightbox="example-set" data-title="savanna"><img src="/images/colors-of-words/thumb_SOM_reg_savanna.jpg" alt="Savanna" ></a><br><center>Savanna</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_prairie.jpg" data-lightbox="example-set" data-title="prairie"><img src="/images/colors-of-words/thumb_SOM_reg_prairie.jpg" alt="Prairie" ></a><br><center>Prairie</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_rainforest.jpg" data-lightbox="example-set" data-title="rainforest"><img src="/images/colors-of-words/thumb_SOM_reg_rainforest.jpg" alt="Rainforest" ></a><br><center>Rainforest</center></td>
		</tr>
	</table>
	<p>
	<table border=0>
		<tr>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_valentine.jpg" data-lightbox="example-set" data-title="Valentine's Day"><img src="/images/colors-of-words/thumb_SOM_reg_valentine.jpg" alt="Valentine's Day" ></a><br><center>Valentine's Day</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_halloween.jpg" data-lightbox="example-set" data-title="Halloween"><img src="/images/colors-of-words/thumb_SOM_reg_halloween.jpg" alt="Halloween" ></a><br><center>Halloween</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_stpatricksday.jpg" data-lightbox="example-set" data-title="St. Patrick's Day"><img src="/images/colors-of-words/thumb_SOM_reg_stpatricksday.jpg" alt="St. Patrick's Day" ></a><br><center>St. Patrick's Day</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_christmas.jpg" data-lightbox="example-set" data-title="Christmas"><img src="/images/colors-of-words/thumb_SOM_reg_christmas.jpg" alt="Christmas" ></a><br><center>Christmas</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_hanukkah.jpg" data-lightbox="example-set" data-title="Hanukkah"><img src="/images/colors-of-words/thumb_SOM_reg_hanukkah.jpg" alt="Hanukkah" ></a><br><center>Hanukkah</center></td>
		</tr>
	</table>
	<p>
	<table border=0>
		<tr>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_apples.jpg" data-lightbox="example-set" data-title="apples"><img src="/images/colors-of-words/thumb_SOM_reg_apples.jpg" alt="Apple" ></a><br><center>Apple</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_banana.jpg" data-lightbox="example-set" data-title="banana"><img src="/images/colors-of-words/thumb_SOM_reg_banana.jpg" alt="Banana" ></a><br><center>Banana</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_tomatoes.jpg" data-lightbox="example-set" data-title="tomatoes"><img src="/images/colors-of-words/thumb_SOM_reg_tomatoes.jpg" alt="Tomatoes" ></a><br><center>Tomatoes</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_grapes.jpg" data-lightbox="example-set" data-title="grapes"><img src="/images/colors-of-words/thumb_SOM_reg_grapes.jpg" alt="Grapes" ></a><br><center>Grapes</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_broccolli.jpg" data-lightbox="example-set" data-title="broccolli"><img src="/images/colors-of-words/thumb_SOM_reg_broccolli.jpg" alt="Broccolli" ></a><br><center>Broccolli</center></td>
		</tr>
	</table>
	<p>
	<table border=0>
		<tr>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_day.jpg" data-lightbox="example-set" data-title="day"><img src="/images/colors-of-words/thumb_SOM_reg_day.jpg" alt="Day" ></a><br><center>Day</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_night.jpg" data-lightbox="example-set" data-title="night"><img src="/images/colors-of-words/thumb_SOM_reg_night.jpg" alt="Night" ></a><br><center>Night</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_aurora.jpg" data-lightbox="example-set" data-title="aurora"><img src="/images/colors-of-words/thumb_SOM_reg_aurora.jpg" alt="Aurora" ></a><br><center>Aurora</center></td>
		</tr>
	</table>
	<p>
	<table border=0>
		<tr>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_casablanca.jpg" data-lightbox="example-set" data-title="Casablanca"><img src="/images/colors-of-words/thumb_SOM_reg_casablanca.jpg" alt="Casablanca (film)" ></a><br><center>Casablanca (film)</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_minority_report.jpg" data-lightbox="example-set" data-title="Minority Report"><img src="/images/colors-of-words/thumb_SOM_reg_minority_report.jpg" alt="Minority Report (film)" ></a><br><center>Minority Report (film)</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_thegoodthebadtheugly.jpg" data-lightbox="example-set" data-title="The Good, The Bad, The Ugly"><img src="/images/colors-of-words/thumb_SOM_reg_thegoodthebadtheugly.jpg" alt="The Good, The Bad, and The Ugly (film)" ></a><br><center>The Good, The Bad, and The Ugly (film)</center></td> 
		</tr>
	</table>
	<p>
	<table border=0>
		<tr>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_democrat.jpg" data-lightbox="example-set" data-title="Democrat"><img src="/images/colors-of-words/thumb_SOM_reg_democrat.jpg" alt="Democrat" ></a><br><center>Democrat</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_republican.jpg" data-lightbox="example-set" data-title="Republican"><img src="/images/colors-of-words/thumb_SOM_reg_republican.jpg" alt="Republican" ></a><br><center>Republican</center></td>
		</tr>
	</table>
	<p>
	<table border=0>
		<tr>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_penguin.jpg" data-lightbox="example-set" data-title="penguin"><img src="/images/colors-of-words/thumb_SOM_reg_penguin.jpg" alt="Penguin" ></a><br><center>Penguin</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_bear.jpg" data-lightbox="example-set" data-title="bear"><img src="/images/colors-of-words/thumb_SOM_reg_bear.jpg" alt="Bear" ></a><br><center>Bear</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_lion.jpg" data-lightbox="example-set" data-title="lion"><img src="/images/colors-of-words/thumb_SOM_reg_lion.jpg" alt="Lion" ></a><br><center>Lion</center></td>
		</tr>
	</table>
	<p>
	<table border=0>
		<tr>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_basketball.jpg" data-lightbox="example-set" alt="basketball"><img src="/images/colors-of-words/thumb_SOM_reg_basketball.jpg" alt="Basketball" ></a><br><center>Basketball</center></td>
			<td cellpadding="5" width="180"><a class="example-image-link" href="/images/colors-of-words/SOM_reg_ski.jpg" data-lightbox="example-set" alt="skiing"><img src="/images/colors-of-words/thumb_SOM_reg_ski.jpg" alt="Skiing" ></a><br><center>Skiing</center></td>
		</tr>
	</table>
	
</center>

{:/nomarkdown}

