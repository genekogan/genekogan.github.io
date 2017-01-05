---
layout: blog
title: "Logger"
subtitle: ""
comments: true
date: 2012/9/25
redirect_from: /writing/intro-to-logger.html
---

{::nomarkdown}
<p>
	In the days before I moved to India, I wrote a lightweight piece of software I've been calling logger, which serves as a sort of quick entry electronic journal which I use, in the broadest sense, to record my life. The notes range from mundane records of the things I do everyday to wry observations about life here to momentary ideas I have for projects to technical questions and notes-to-self. A quick keyboard shortcut lets me pull up a text field to add an entry, as seen below. The project is mostly a personal one, maybe the most personal I've done, though I have <a href="https://github.com/genekogan/Logger">published the code on Github</a>.
</p>
<p>
	<center>
	<img src="/images/writing/logger-entry.jpg" />
	</center>
</p>
<p>
	After I submit the text, it is augmented with a timestamp and my geolocation data at that moment, and added to the growing database of entries. The location data is gathered with a Python script I wrote which determines my precise latitude and longitude by triangulating the locations of nearby wireless access points using Google Maps API, a method suggested to me by my friend John Gallagher who works at <a href="http://www.foursquare.com">FourSquare</a>, a mobile app which handles geolocation in a similar way, as do Google and many others. The short code snippet for this can also be found <a href="http://www.github.com/genekogan/wifi_geolocation">on my Github</a>.
</p>
<p>
	Additionally, I'm reserving special characters in the logs to track particular objects over time. Names of people are prefixed with <i>~</i>, locations prefixed by a <i>@</i>, tags/projects/misc by a <i>#</i>, ideas by a <i>!</i>, and questions by a <i>?</i>. As in Twitter, these characters will make it possible to isolate subjects of interest to me. Given the integration of very fine-grained geolocation, I am also able to track and cross-reference location as well.
</p>
<p>
	The last noteworthy feature is its accessibility through the OSX app <a href="http://www.alfredapp.com/">Alfred</a>, which is a Spotlight replacement that lets you run scripts. This makes it very quick and easy to add an entry.
</p>	
<p>
	This project has basically three objectives. The first is to preserve those memories which inevitably dissolve over time. It's not so much a fear of forgetting, because even an obscure memory can be quickly dusted off if evoked by some clue. I think memories are sort of like trinkets buried in the back of your closet; you'd recognize one if it were presented to you, but when is the next time you are going to happen to look over there? That must be why people keep diaries and journals, something I never really did much of.
</p>
<p>
	The second motivation, and far geekier one, is for self-analysis. That aspect is greatly influenced by <a href="http://bits.blogs.nytimes.com/2010/02/09/an-annual-report-on-one-mans-life/">Nicholas Felton</a> whose annual report on his year neatly deconstructs even the most esoteric components of his life. It's mostly curiosity, but I think data can tell a story that I wouldn't otherwise notice because of ignorance or forgetfulness, and most interesting of all, bias. Interesting the human mind's tendency towards self-deceit, <a href="http://www.sciencedaily.com/releases/2012/09/120906123324.htm?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+sciencedaily%2Fscience_society+%28ScienceDaily%3A+Science+%26+Society+News%29">"hindsight bias"</a>, to justify and revise history as probably some evolutionary self-defense mechanism to keep sanity. Time distorts recollection, and by forcing myself to write it down, I'm more likely to confront trails of thought I'm otherwise likely to forget or suppress ("that idea really went nowhere did it?") and less likely to lie about them ("i never really thought it was a good idea to begin with...")
</p>
<p>
	At the moment, I've stopped developing the software and am leaving the analytical part for sometime in the future; for now I am simply using it to log and build up a database worth mining later. I've made around 1200 entries so far in six weeks, and expect I may have over 10,000 if I keep the habit up over a year.
</p>
<p>
	Some important questions remain to be answered. To what extent are the results of the project publicized? Are these to remain my private records, or do I practice "radical openness" and just keep the raw notes publicly accessible, forfeiting my privacy like Ai Weiwei? What's the difference between total secrecy and total transparency? Not much probably -- it's those in-between circumstances where some parties have access to the data to which others do not where the discrepancies begin to have the most pronounced effect. I'm not too concerned for now, but these are issues to resolve in the future.
</p>
{:/nomarkdown}
