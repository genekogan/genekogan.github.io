---
layout: default
title: A Book from the Sky 天书
description: Exploring the Latent Space of Chinese Handwriting
year: 2015
thumbnail_mp4: /images/home/thumb_a-book-from-the-sky.mp4
thumbnail_webm: /images/home/thumb_a-book-from-the-sky.webm
redirect_from: /works/a-book-from-the-sky2.html
---

<script type="text/javascript" src="/js/jquery-1.8.3.min.js"></script>

{::nomarkdown}


<style>		
h1 {
	font-size: 24px;
}
h2 {
	font-size: 20px;
}
p {
	width:720px;
	line-height:150%;
	margin-left: auto;
	margin-right: auto;
}
a:link, a:visited, a:hover, a:active {
	color:gray;
	text-decoration:none;
	border-bottom: dashed 1px gray;
}
a {
	background-color:#fff;
	color:#444;
}
a:hover {
	background-color:#eee;
	/*color:#ee7600;*/
	/*border-bottom: dashed 1px #ee7600;*/
}
a.nick:link, a.nick:visited, a.nick:active {
	color:#006400;
	border-bottom: dashed 1px #006400;
}		
.cn {
	font-size:18px;
}		
#abfts_header {
	width:720px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom:0px;
	padding-bottom:0px;
}
.container{
	margin-bottom:0px;
	padding-bottom:0px;
}
#header_title {
	display: inline-block;
}
#header_thumbnail {
	display: inline-block;
	margin-right:40px;
	padding:20px;
	float:right;
	width:84px;
}
.heading {
	font-size:20px;			
}
#realfaketable {
	margin-left:auto;
	margin-right:auto;
	margin-top:50px;
	padding-bottom:40px;
	font-size:20px;
	vertical-align:middle;
	text-align:center;
}
#realfaketable .te {
	font-size:10px;
}
#realfaketableheader {
	height:50px;
}
.zloops, .interpolations {
	text-align:center;
	margin-top:6px;
	margin-right:auto;
	margin-left:auto;
	text-align:center;
}
.zloops.bottom, .interpolations.bottom {
	margin-bottom:32px;
}		
.zloop, .interpolation {
	vertical-align:top;
	margin-left:auto;
	margin-right:auto;
	display: inline-block;
	width:116px;
	text-align:center;
	font-size:15px;
	line-height:125%;
	padding:5px;
}
.zloop img {
	padding-bottom:3px;
}		
.arithmetic {
	width:100px;
}
.arithmetic_sign {
	display: inline-block;
	font-size:72px;
	color:#999;
}
.radical {
	width:250px;
}
.radical img {
	padding:15px;
}
#matrixtable {
	margin-top:30px;
	margin-bottom:50px;
	margin-left:auto;
	margin-right:auto;
	text-align:center;
	vertical-align:middle;
}
#matrixtable .rowlabel {
	padding-right:20px;
	font-size:18px;
}
#matrixtable .en {
	font-size:14px;
}
#matrixtable .columnlabel {
	padding-bottom:15px;
	padding-top:8px;
	font-size:18px;
}
.tc {
	font-weight: bold;
}
.banner {
	padding-top:100px;
}		
</style>


<div id="abfts_header">
	<div id="header_title">
		<h1 class="en">A Book from the Sky 天书</h1>
		<h1 class="cn">天書</h1>
		<h2 class="en">Exploring the Latent Space of Chinese Handwriting</h2>
		<h2 class="cn">制造手寫的漢字</h1>
		<h3 class="en"><a href="#cn" onclick="javascript:toggleChinese();">讀中文摘要</a></h2>
		<h3 class="cn"><a href="#" onclick="javascript:toggleEnglish();">讀英文技術說明</a></h2>
	</div>
	<div id="header_thumbnail">
		<video loop autoplay width=80>
			<source src="/images/a-book-from-the-sky/top3.mp4" type="video/mp4">
			<source src="/images/a-book-from-the-sky/top3.webm" type="video/webm">
		</video>
	</div>	
</div>		

<p class="en">
	These images were created by a <a href="http://arxiv.org/abs/1511.06434">deep convolutional generative adversarial network</a> (DCGAN) trained on a <a href="http://www.iapr-tc11.org/mediawiki/index.php/Harbin_Institute_of_Technology_Opening_Recognition_Corpus_for_Chinese_Characters_(HIT-OR3C)">database</a> of handwritten Chinese characters, made with <a href="https://github.com/Newmu/dcgan_code">code</a> by <a href="https://twitter.com/alecrad">Alec Radford</a> based on the paper by Radford, <a href="http://lukemetz.github.io/">Luke Metz</a>, and <a href="http://soumith.ch/">Soumith Chintala</a> in November 2015.
</p>
<p class="cn">
	這些圖像是由於 <a href="http://arxiv.org/abs/1511.06434">deep convolutional generative adversarial network</a> (DCGAN) 創造的，訓練在手寫漢字的<a href="http://www.iapr-tc11.org/mediawiki/index.php/Harbin_Institute_of_Technology_Opening_Recognition_Corpus_for_Chinese_Characters_(HIT-OR3C)">語料庫</a>上，使用<a href="https://twitter.com/alecrad">Alec Radford</a>製作<a href="https://github.com/Newmu/dcgan_code">的軟件</a>，而基於Radford，<a href="http://lukemetz.github.io/">Luke Metz</a>和<a href="http://soumith.ch/">Soumith Chintala</a>2015年十一月所出版的文章。
</p>

<p class="en">
	The title is a reference to the <a href="https://en.wikipedia.org/wiki/A_Book_from_the_Sky">1988 book</a> by <a href="http://www.xubing.com/index.php/site/projects/year/1991/book_from_the_sky">Xu Bing</a>, who composed thousands of fictitious glyphs in the style of traditional Mandarin prints of the Song and Ming dynasties.
</p>

<p class="cn">
	標題是引用<a href="https://zh.wikipedia.org/wiki/%E5%BE%90%E5%86%B0">徐冰</a>1988出版的《天書》。在此本，藝術家刻製兩千餘模仿宋明朝的“偽漢字”。
</p>

<p>
	<a href="http://yann.lecun.com/exdb/mnist/"><img src="/images/a-book-from-the-sky/digits.gif" width=84 style="float:right;margin:10px" /></a>
</p>
<p class="en">
A DCGAN is a type of <a href="http://colah.github.io/posts/2014-07-Conv-Nets-Modular/">convolutional neural network</a> which is capable of learning an abstract representation of a collection of images. It achieves this via competition between a "generator" which fabricates fake images and a "discriminator" which tries to discern if the generator's images are authentic (<a href="http://torch.ch/blog/2015/11/13/gan.html#balancing-the-gan-game">more details</a>). After training, the generator can be used to convincingly generate samples reminiscent of the originals.
</p>
<p class="en">
Below, a DCGAN is trained on a labeled subset of ~1M handwritten simplified Chinese characters, after which the generator is able to produce fake images of characters not found in the original dataset.
</p>
<p class="cn">
	DCGAN (捲積人工神經網絡) 是一種人工神經網絡。DCGAN能分析語料庫原文的真實漢字的圖像而能製造模仿偽漢字，如下。
</p>

<p>
	<table id="realfaketable" border=0 cellpadding=0 cellspacing=0>
		<tr id="realfaketableheader">
			<td></td>
			<td width=50><span class="tc">是</span><br/><span class="te en">is</span></td>
			<td width=50><span class="tc">在</span><br/><span class="te en">in</span></td>
			<td width=50><span class="tc">不</span><br/><span class="te en">not</span></td>
			<td width=50><span class="tc">国</span><br/><span class="te en">country</span></td>
			<td width=50><span class="tc">上</span><br/><span class="te en">on</span></td>
			<td width=50><span class="tc">有</span><br/><span class="te en">have</span></td>
			<td width=50><span class="tc">大</span><br/><span class="te en">large</span></td>
			<td width=50><span class="tc">为</span><br/><span class="te en">for</span></td>
			<td width=50><span class="tc">年</span><br/><span class="te en">year</span></td>
			<td width=50><span class="tc">以</span><br/><span class="te en">with</span></td>
			<td width=50><span class="tc">出</span><br/><span class="te en">out</span></td>
			<td width=50><span class="tc">分</span><br/><span class="te en">minute</span></td>
			<td width=50><span class="tc">市</span><br/><span class="te en">city</span></td>
			<td width=50><span class="tc">学</span><br/><span class="te en">learn</span></td>
			<td width=50><span class="tc">来</span><br/><span class="te en">come</span></td>
			<td width=50><span class="tc">日</span><br/><span class="te en">day</span></td>
			<td width=50><span class="tc">能</span><br/><span class="te en">can</span></td>
			<td width=50><span class="tc">理</span><br/><span class="te en">reason</span></td>
		</tr>
		<tr>
			<td class="rowlabel">
				<span class="en">real</span>
				<span class="cn">真实</span>
			</td>
			<td rowspan=2 colspan=18 width=900>
				<img src="/images/a-book-from-the-sky/realfake.png" />
			</td>
		</tr>
		<tr>
			<td class="rowlabel">							
				<span class="en">generated&nbsp;</span>
				<span class="cn">制造的&nbsp;</span>
			</td>
		</tr>
	</table>
</p>

<p>
	<span class="heading en"><b>Exploring the latent space</b></span>
	<span class="heading cn"><b>探索潛在的空間</b></span>
</p>

<p class="en">
	The generator is parameterized by a vector within a high-dimensional latent space, allowing us to peer into its imagination. By traversing this space, we can explore the generator's perception of possible characters.
</p>
<p class="cn">
	我們可以探索人工神經網絡製造軟件所幻想的偽漢字。
</p>


<p>
	<div class="zloops">										
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Have.gif" >
			<br/>有<span class="en">&nbsp;have</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_learn.gif" >
			<br/>学<span class="en">&nbsp;learn</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_day.gif" >
			<br/>天<span class="en">&nbsp;sky</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_child.gif" >
			<br/>子<span class="en">&nbsp;child</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_It is.gif" >
			<br/>是<span class="en">&nbsp;is</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_force.gif" >
			<br/>力<span class="en">&nbsp;strength</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_To.gif" >
			<br/>到<span class="en">&nbsp;to</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_From.gif" >
			<br/>从<span class="en">&nbsp;from</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_air.gif" >
			<br/>空<span class="en">&nbsp;air</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_OK.gif" >
			<br/>行<span class="en">&nbsp;do</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Time.gif" >
			<br/>时<span class="en">&nbsp;time</span>
		</div>				
	</div>
	<div class="zloops">														
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Come.gif" >
			<br/>来<span class="en">&nbsp;come</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_body.gif" >
			<br/>身<span class="en">&nbsp;body</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Do not.gif" >
			<br/>不<span class="en">&nbsp;not</span>
		</div>				
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Department.gif" >
			<br/>司<span class="en">&nbsp;control</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Large.gif" >
			<br/>大<span class="en">&nbsp;large</span>
		</div>				
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_and.gif" >
			<br/>和<span class="en">&nbsp;and</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_before.gif" >
			<br/>前<span class="en">&nbsp;before</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Beijing.gif" >
			<br/>京<span class="en">&nbsp;Beijing</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_buy.gif" >
			<br/>买<span class="en">&nbsp;buy</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_By.gif" >
			<br/>者<span class="en">&nbsp;By</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_can.gif" >
			<br/>可<span class="en">&nbsp;can</span>
		</div>
	</div>
	<div class="zloops">	
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Capital.gif" >
			<br/>资<span class="en">&nbsp;Capital</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_car.gif" >
			<br/>车<span class="en">&nbsp;car</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_city.gif" >
			<br/>市<span class="en">&nbsp;city</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_class.gif" >
			<br/>班<span class="en">&nbsp;class</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Close.gif" >
			<br/>合<span class="en">&nbsp;Close</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_color.gif" >
			<br/>色<span class="en">&nbsp;color</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Correct.gif" >
			<br/>对<span class="en">&nbsp;Correct</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_country.gif" >
			<br/>国<span class="en">&nbsp;country</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Culture.gif" >
			<br/>文<span class="en">&nbsp;Culture</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Current.gif" >
			<br/>现<span class="en">&nbsp;Current</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Eye.gif" >
			<br/>目<span class="en">&nbsp;Eye</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Family.gif" >
			<br/>户<span class="en">&nbsp;Family</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Female.gif" >
			<br/>女<span class="en">&nbsp;Female</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_for.gif" >
			<br/>为<span class="en">&nbsp;for</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_four.gif" >
			<br/>四<span class="en">&nbsp;four</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Green.gif" >
			<br/>生<span class="en">&nbsp;Green</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_hair.gif" >
			<br/>发<span class="en">&nbsp;hair</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_hand.gif" >
			<br/>手<span class="en">&nbsp;hand</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_he.gif" >
			<br/>他<span class="en">&nbsp;he</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_heart.gif" >
			<br/>心<span class="en">&nbsp;heart</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_I.gif" >
			<br/>我<span class="en">&nbsp;I</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_in.gif" >
			<br/>中<span class="en">&nbsp;in</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_industry.gif" >
			<br/>业<span class="en">&nbsp;industry</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Item.gif" >
			<br/>件<span class="en">&nbsp;Item</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_king.gif" >
			<br/>王<span class="en">&nbsp;king</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Live.gif" >
			<br/>过<span class="en">&nbsp;Live</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_machine.gif" >
			<br/>机<span class="en">&nbsp;machine</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_male.gif" >
			<br/>男<span class="en">&nbsp;male</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Many.gif" >
			<br/>多<span class="en">&nbsp;Many</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_meeting.gif" >
			<br/>会<span class="en">&nbsp;meeting</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Minute.gif" >
			<br/>分<span class="en">&nbsp;Minute</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_month.gif" >
			<br/>月<span class="en">&nbsp;month</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Months.gif" >
			<br/>个<span class="en">&nbsp;Months</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_need.gif" >
			<br/>需<span class="en">&nbsp;need</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_negative.gif" >
			<br/>负<span class="en">&nbsp;negative</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_new.gif" >
			<br/>新<span class="en">&nbsp;new</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_of.gif" >
			<br/>的<span class="en">&nbsp;of</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Office.gif" >
			<br/>任<span class="en">&nbsp;Office</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_old.gif" >
			<br/>老<span class="en">&nbsp;old</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_on.gif" >
			<br/>上<span class="en">&nbsp;on</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_one.gif" >
			<br/>一<span class="en">&nbsp;one</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_open.gif" >
			<br/>开<span class="en">&nbsp;open</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Out.gif" >
			<br/>出<span class="en">&nbsp;Out</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_people.gif" >
			<br/>人<span class="en">&nbsp;people</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_period.gif" >
			<br/>期<span class="en">&nbsp;period</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_positive.gif" >
			<br/>正<span class="en">&nbsp;positive</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Rear.gif" >
			<br/>后<span class="en">&nbsp;Rear</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Reason.gif" >
			<br/>理<span class="en">&nbsp;Reason</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_recognize.gif" >
			<br/>认<span class="en">&nbsp;recognize</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Remember.gif" >
			<br/>记<span class="en">&nbsp;Remember</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Safe.gif" >
			<br/>地<span class="en">&nbsp;Safe</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Say.gif" >
			<br/>说<span class="en">&nbsp;Say</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Scholar.gif" >
			<br/>士<span class="en">&nbsp;Scholar</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Sell.gif" >
			<br/>售<span class="en">&nbsp;Sell</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_shadow.gif" >
			<br/>影<span class="en">&nbsp;shadow</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_she was.gif" >
			<br/>她<span class="en">&nbsp;she</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_small.gif" >
			<br/>小<span class="en">&nbsp;small</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_square.gif" >
			<br/>方<span class="en">&nbsp;square</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_station.gif" >
			<br/>台<span class="en">&nbsp;station</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_still.gif" >
			<br/>仍<span class="en">&nbsp;still</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_surface.gif" >
			<br/>面<span class="en">&nbsp;surface</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Ten thousand.gif" >
			<br/>万<span class="en">&nbsp;Ten thousand</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_The.gif" >
			<br/>所<span class="en">&nbsp;The</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_Theory.gif" >
			<br/>论<span class="en">&nbsp;Theory</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_They.gif" >
			<br/>们<span class="en">&nbsp;They</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_This.gif" >
			<br/>今<span class="en">&nbsp;This</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_three.gif" >
			<br/>三<span class="en">&nbsp;three</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_to make.gif" >
			<br/>成<span class="en">&nbsp;to make</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_two.gif" >
			<br/>二<span class="en">&nbsp;two</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_under.gif" >
			<br/>下<span class="en">&nbsp;under</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_want.gif" >
			<br/>要<span class="en">&nbsp;want</span>
		</div>
	</div>
	<div class="zloops">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_water.gif" >
			<br/>水<span class="en">&nbsp;water</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_week.gif" >
			<br/>周<span class="en">&nbsp;week</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_What.gif" >
			<br/>何<span class="en">&nbsp;What</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_when.gif" >
			<br/>当<span class="en">&nbsp;when</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_will.gif" >
			<br/>将<span class="en">&nbsp;will</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_With.gif" >
			<br/>以<span class="en">&nbsp;With</span>
		</div>
	</div>
	<div class="zloops bottom">
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_world.gif" >
			<br/>世<span class="en">&nbsp;world</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_year.gif" >
			<br/>年<span class="en">&nbsp;year</span>
		</div>
		<div class="zloop">
			<img src="/images/a-book-from-the-sky/zloops/i_z_you.gif" >
			<br/>你<span class="en">&nbsp;you</span>
		</div>
	</div>
<p/>

<p>
	<span class="heading en"><b>Reading between the lines</b></span>
	<span class="heading cn"><b>筆畫之間</b></span>
</p>

<p class="en">
	Rather than simply exploring the neighborhood around individual characters, we can span the <a href="https://en.wikipedia.org/wiki/Latent_variable">latent space</a> <i>between</i> characters as well. By producing samples along a straight line from one character to the next, we get an impression of imaginary characters which are interpolated from in between real ones, perhaps corresponding to semantically intermediate concepts.
</p>
<p class="cn">
	在兩個真實漢字的差距空間之中，軟件能製造偽漢字。
</p>

<p>
	<div class="interpolations">	
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_eye_face_body.gif" />			
			<br/>目<span class="en">&nbsp;eye</span>
			<br/>面<span class="en">&nbsp;face</span>
			<br/>体<span class="en">&nbsp;body</span> 
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_people1_culture.gif" />			
			<br/>人<span class="en">&nbsp;people</span>
			<br/>文<span class="en">&nbsp;culture</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_recog_remem_learn.gif" />			
			<br/>认<span class="en">&nbsp;recognize</span>
			<br/>记<span class="en">&nbsp;remember</span>
			<br/>学<span class="en">&nbsp;learn</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_city_capital_country_world.gif" />			
			<br/>市<span class="en">&nbsp;city</span>
			<br/>资<span class="en">&nbsp;capital</span>
			<br/>国<span class="en">&nbsp;country</span>
			<br/>世<span class="en">&nbsp;world</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_ymd1.gif" />			
			<br/>年<span class="en">&nbsp;year</span>
			<br/>月<span class="en">&nbsp;month</span>
			<br/>周<span class="en">&nbsp;week</span>
			<br/>日<span class="en">&nbsp;day</span>
		</div>
	</div>
	<div class="interpolations">	
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_airgroundwater.gif" />			
			<br/>空<span class="en">&nbsp;air</span>
			<br/>地<span class="en">&nbsp;ground</span>
			<br/>水<span class="en">&nbsp;water</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_openclose.gif" />			
			<br/>开<span class="en">&nbsp;open</span>
			<br/>合<span class="en">&nbsp;close</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_they_she_he.gif" />			
			<br/>们<span class="en">&nbsp;they</span>
			<br/>她<span class="en">&nbsp;she</span>
			<br/>他<span class="en">&nbsp;he</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_reason_say.gif" />			
			<br/>理<span class="en">&nbsp;reason</span>
			<br/>说<span class="en">&nbsp;say</span>
		</div>
	</div>
	<div class="interpolations">	
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_beijing_capital.gif" />
			<br/>京<span class="en">&nbsp;Beijing</span>
			<br/>资<span class="en">&nbsp;capital</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_beijing_city_capital_country_world.gif" />
			<br/>京<span class="en">&nbsp;Beijing</span>
			<br/>市<span class="en">&nbsp;city</span>
			<br/>资<span class="en">&nbsp;capital</span>
			<br/>国<span class="en">&nbsp;country</span>
			<br/>世<span class="en">&nbsp;world</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_city_country.gif" />
			<br/>市<span class="en">&nbsp;city</span>
			<br/>国<span class="en">&nbsp;country</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_comego.gif" />
			<br/>来<span class="en">&nbsp;come</span>
			<br/>走<span class="en">&nbsp;go</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_culture_family.gif" />
			<br/>文<span class="en">&nbsp;culture</span>
			<br/>户<span class="en">&nbsp;family</span>
		</div>
	</div>
	<div class="interpolations">	
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_largesmall.gif" />
			<br/>大<span class="en">&nbsp;large</span>
			<br/>小<span class="en">&nbsp;small</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_malefemale.gif" />
			<br/>男<span class="en">&nbsp;male</span>
			<br/>女<span class="en">&nbsp;female</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_n1234.gif" />
			<br/>一<span class="en">&nbsp;one</span>
			<br/>二<span class="en">&nbsp;two</span>
			<br/>三<span class="en">&nbsp;three</span>
			<br/>四<span class="en">&nbsp;four</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_oldnew.gif" />
			<br/>老<span class="en">&nbsp;old</span>
			<br/>新<span class="en">&nbsp;new</span>
		</div>
	</div>
	<div class="interpolations">		
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_people1_family.gif" />
			<br/>人<span class="en">&nbsp;people</span>
			<br/>户<span class="en">&nbsp;family</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_people2_culture_family.gif" />
			<br/>民<span class="en">&nbsp;people</span>
			<br/>文<span class="en">&nbsp;culture</span>
			<br/>户<span class="en">&nbsp;family</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_positive_negative.gif" />
			<br/>正<span class="en">&nbsp;positive</span>
			<br/>负<span class="en">&nbsp;negative</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_she_he_i.gif" />
			<br/>她<span class="en">&nbsp;she</span>
			<br/>他<span class="en">&nbsp;he</span>
			<br/>我<span class="en">&nbsp;I</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_they_you_i.gif" />
			<br/>们<span class="en">&nbsp;they</span>
			<br/>你<span class="en">&nbsp;you</span>
			<br/>我<span class="en">&nbsp;I</span>
		</div>
	</div>
	<div class="interpolations bottom">	
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_timecurrent.gif" />
			<br/>时<span class="en">&nbsp;time</span>
			<br/>现<span class="en">&nbsp;current</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_wantneed.gif" />
			<br/>要<span class="en">&nbsp;want</span>
			<br/>需<span class="en">&nbsp;need</span>
		</div>
		<div class="interpolation">
			<img src="/images/a-book-from-the-sky/interpolations/i_you_i.gif" />
			<br/>你<span class="en">&nbsp;you</span>
			<br/>我<span class="en">&nbsp;I</span>
		</div>
	</div>
</p>

<p>
	<span class="heading en"><b>Radical interpolation</b></span>
	<span class="heading cn"><b>部首內插 （插值）</b></span>
</p>
<p class="en">
	Chinese characters are comprised of <a href="https://en.wikipedia.org/wiki/Kangxi_radical"><i>radicals</i></a>, which are graphical components that serve as the most basic semantic grouping of characters and usually hint at the character's meaning. For instance, the characters 们 (<i>they</i>), 仔 (<i>youngster</i>) and 以 (<i>with, using</i>) all contain the radical 人 (<i>person</i>), appearing as 亻 in the first two. One of the most striking results was the preservation of radicals across character interpolations. For example, to the lower left is an interpolation through characters 后 (<i>after</i>), 台 (<i>platform</i>), and 名 (<i>name</i>), which share the radical 口 (<i>mouth</i>), highlighted in red. To the lower right, we traverse a sequence of characters sharing the 人 radical. Remarkably, the 人 appears coherent during the transitions, even as it glides into different forms and positions!
</p>
<p class="cn">
	左下是擁有“口”部首的“后”、“台”、“名”三個字的內插 (interpolation)。 右下是擁有“人”部首的幾個字的系列。在不同的字的轉變，能看得很清楚“人”字的連續性。
</p>

<p>
	<div class="interpolations bottom">										
		<div class="interpolation radical">
			<img src="/images/a-book-from-the-sky/radinterpolations/rad30is.gif" width=80 />			
			<br/><span class="en"><b>Radical 30: 口 (<i>mouth</i>)</b></span>
			<br/>后<span class="en">&nbsp;after</span>
			<br/>台<span class="en">&nbsp;platform</span>
			<br/>名<span class="en">&nbsp;name</span> 
		</div>
		<div class="interpolation radical">
			<img src="/images/a-book-from-the-sky/radinterpolations/rad9is.gif" width=80 />
			<br/><span class="en"><b>Radical 9: 人 (<i>person</i>)</b></span></a>
			<br/>人<span class="en">&nbsp;person</span>
			<br/>从<span class="en">&nbsp;from</span>
			<br/>会<span class="en">&nbsp;meeting</span>
			<br/>今<span class="en">&nbsp;now</span>
			<br/>仍<span class="en">&nbsp;still</span>
			<br/>任<span class="en">&nbsp;office</span>
			<br/>件<span class="en">&nbsp;item</span>
		</div>
	</div>				
</p>	
<p>
	<span class="heading en"><b>Linguistic algebra</b></span>
	<span class="heading cn"><b>文字代數</b></span>
</p>
<p class="en">
	An active area of research in computational linguistics is deriving geometric representations of words whose spatial interrelationships closely correlate with their semantic ones. These "word vectors" can be expressed by equations such as <b><a href="https://www.kaggle.com/c/word2vec-nlp-tutorial/details/part-2-word-vectors">&#60;king&#62; − &#60;man&#62; + &#60;woman&#62; = &#60;queen&#62;</a></b>, despite having had no prior knowledge of these words' meanings. 
</p>			
<p class="en">
	Since the DCGAN's ability to interpolate is just a special case of its more general capacity for combining character classes arithmetically, we can attempt to determine if the above analogy and others also underpin our writing systems. Do the following equations match our visual expectations?
</p>
<p class="cn">
	DCGAN雖然不知道漢字圖像的意義，但還能按照數學邏輯執行運算。
</p>

<p>
	<div class="interpolations">										
		<div class="zloop arithmetic">
			<img src="/images/a-book-from-the-sky/arithmetic_king.gif" />			
		<br/>王<br/><span class="en">king</span>
		</div>
		<div class="arithmetic_sign"><b>−</b></div>					
		<div class="zloop arithmetic">
			<img src="/images/a-book-from-the-sky/arithmetic_male.gif" />			
			<br/>男<br/><span class="en">male</span>
		</div>					
		<div class="arithmetic_sign"><b>+</b></div>					
		<div class="zloop arithmetic">
			<img src="/images/a-book-from-the-sky/arithmetic_female.gif" />			
			<br/>女<br/><span class="en">female</span>
		</div>					
		<div class="arithmetic_sign"><b>=</b></div>	
		<div class="zloop arithmetic">	
			<img src="/images/a-book-from-the-sky/arithmetic_queen.gif" />			
		</div>					
	</div>
</p>

<p class="en">
	Since "queen" is usually not expressed as a single character, we can't compare. 
	<!-- but technically this works :)   王 - 人 + 女人 = 女王  -->
</p>
<p class="cn">
	
</p>

<p class="en">
	Below is a matrix of interpolation loops between every pair among the 20 most frequent characters.
</p>
<p class="cn">
	之下有二十個最普通的漢字之中的內插 （又稱插值, interpolations）
</p>

<p>
	<table id="matrixtable" border=0 cellpadding=0 cellspacing=0 >
	  	<tr>
			<td></td><td></td>
			<td class="columnlabel" width=40><span class="tc">是</span></td>
			<td class="columnlabel" width=40><span class="tc">在</span></td>
			<td class="columnlabel" width=40><span class="tc">中</span></td>
			<td class="columnlabel" width=40><span class="tc">不</span></td>
			<td class="columnlabel" width=40><span class="tc">了</span></td>
			<td class="columnlabel" width=40><span class="tc">国</span></td>
			<td class="columnlabel" width=40><span class="tc">上</span></td>
			<td class="columnlabel" width=40><span class="tc">有</span></td>
			<td class="columnlabel" width=40><span class="tc">大</span></td>
			<td class="columnlabel" width=40><span class="tc">为</span></td>
			<td class="columnlabel" width=40><span class="tc">年</span></td>
			<td class="columnlabel" width=40><span class="tc">这</span></td>
			<td class="columnlabel" width=40><span class="tc">个</span></td>
			<td class="columnlabel" width=40><span class="tc">出</span></td>
			<td class="columnlabel" width=40><span class="tc">时</span></td>
			<td class="columnlabel" width=40><span class="tc">分</span></td>
			<td class="columnlabel" width=40><span class="tc">人</span></td>
			<td class="columnlabel" width=40><span class="tc">市</span></td>
			<td class="columnlabel" width=40><span class="tc">行</span></td>
			<td class="columnlabel" width=40><span class="tc">到</span></td>
	  	</tr>
	  	<tr>
	    	<td class="rowlabel" height=34><span class="en">is</span></td>
			<td class="rowlabel"><span class="tc">是</span></td>
			<td colspan=20 rowspan=20  class="mainmatrix" style="height:680px; width:800px; overflow:hidden; padding:0px; margin:0px" >
				<video loop autoplay>
					<source src="/images/a-book-from-the-sky/matrix.mp4" type="video/mp4">
					<source src="/images/a-book-from-the-sky/matrix.webm" type='video/webm;codecs="vp8, vorbis"'>	
				</video>
			</td>
	  	</tr>
		<tr><td class="rowlabel" height=34><span class="en">at</span></td><td class="rowlabel"><span class="tc">在</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">in</span></td><td class="rowlabel"><span class="tc">中</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">not</span></td><td class="rowlabel"><span class="tc">不</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">(past tense)</span></td><td class="rowlabel"><span class="tc">了</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">country</span></td><td class="rowlabel"><span class="tc">国</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">on</span></td><td class="rowlabel"><span class="tc">上</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">have</span></td><td class="rowlabel"><span class="tc">有</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">large</span></td><td class="rowlabel"><span class="tc">大</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">for</span></td><td class="rowlabel"><span class="tc">为</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">year</span></td><td class="rowlabel"><span class="tc">年</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">this</span></td><td class="rowlabel"><span class="tc">这</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">(individual)</span></td><td class="rowlabel"><span class="tc">个</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">out</span></td><td class="rowlabel"><span class="tc">出</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">time</span></td><td class="rowlabel"><span class="tc">时</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">minute</span></td><td class="rowlabel"><span class="tc">分</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">people</span></td><td class="rowlabel"><span class="tc">人</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">city</span></td><td class="rowlabel"><span class="tc">市</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">do</span></td><td class="rowlabel"><span class="tc">行</span></td></tr>
		<tr><td class="rowlabel" height=34><span class="en">to</span></td><td class="rowlabel"><span class="tc">到</span></td></tr>
	</table>
</p>

<p class="en">
	The software, data, trained model, and code are preserved in this <a href="https://www.terminal.com/snapshot/a769825a3f5a27ac2b989080be2fe93e5530693e7e0d218764772d104db0bbf8">Terminal snap</a> in which the next command will produce a new version of each image on this page. An extended version of this page with more images can be seen <a href="http://www.genekogan.com/works/a-book-from-the-sky2.html">here</a>.
</p>
<p class="cn">
	此研究計畫主要是公開進行的，而使用了很多網上的意見。軟件代碼<a href="https://www.terminal.com/snapshot/a769825a3f5a27ac2b989080be2fe93e5530693e7e0d218764772d104db0bbf8">在此連結</a>。
</p>
<p class="en">
Thanks to <a href="http://eall.yale.edu/people/nicholas-frisch" class="nick">Nick Frisch</a>, <a href="http://spaceandtim.es/">Francis Tseng</a>, <a href="https://www.twitter.com/dribnet">Tom White</a>, and <a href="http://www.nlpr.ia.ac.cn/liucl/">Cheng-Lin Liu</a> for their contributions, suggestions, and advice.
</p>
<p class="cn">
	感謝 <a href="http://eall.yale.edu/people/nicholas-frisch" class="nick">Nick Frisch</a>, <a href="http://spaceandtim.es/">Francis Tseng</a>, <a href="https://www.twitter.com/dribnet">Tom White</a>, <a href="http://www.nlpr.ia.ac.cn/liucl/">Cheng-Lin Liu</a>的貢獻與建議。
</p>			

<p class="en">
	By <a href="https://www.twitter.com/genekogan">@genekogan</a>, 2015 December 15.
</p>
<p class="cn">
	<a href="https://www.twitter.com/genekogan">@genekogan</a>，2015年12月15日
</p>

<p>
	<center>
		<img src="/images/a-book-from-the-sky/banner.png" class="banner" />
	</center>
</p>

<script>
function toggleChinese() {
	$(".en").hide();
	$(".cn").show();
}
function toggleEnglish() {
	$(".en").show();
	$(".cn").hide();
}	
$(document).ready(function() {
    if (window.location.hash == "#cn") {
        toggleChinese();
    }
	else {
		toggleEnglish();
	}
});
</script>

{:/nomarkdown}
