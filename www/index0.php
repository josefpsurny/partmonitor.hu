<!DOCTYPE html>
<html lang='hu'>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Voksmonitor | választás 2014</title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="author" content="KohoVolit.eu" />
	<meta name="robots" content="index, follow" />
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.css" />
	<link rel="stylesheet" href="./css/hu2014-page.css" />
	<link type="image/x-icon" href="./image/favicon.ico" rel="shortcut icon">

	<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.js"></script>
	<meta property="og:image" content="http://voksmonitor.hu/image/logo.jpg"/>
	<meta property="og:title" content="Voks monitor"/>
	<meta property="og:url" content="http://voksmonitor.hu/"/>
	<meta property="og:site_name" content="Voks monitor"/>
	<meta property="og:type" content="website"/>

	
</head>
<body style="font-family: gill,sans,mt">
<div data-role="page" class="type-home">

	<div data-role="header" data-theme="g" class="header">
	  <h6>&nbsp;</h6>
	</div>

	<div data-role="content" style="margin-left: auto;margin-right: auto;max-width: 500px;color:#888;text-align:center;"  id="type-home-frontpage">
	
	
	

		<h1>Voksmonitor</h1>
		<p>Tudd meg 5 perc alatt, melyik párt áll hozzád a legközelebb!</p>
	


	<ul data-role="listview" data-inset="true" data-theme="c" data-dividertheme="g">
			<li data-role="list-divider"></li>
				<li>
					<a href="2014-es-orszaggyulesi-valasztas" data-ajax="false">
					  <img src='./image/hu.jpg' width="67" height="80">
					  <h2>2014-es országgyűlési választás</h2>
					  <!--<p class="ui-li-desc">Zhoda s názormi kandidátov na prezidenta.</strong></p>-->
					</a>
				</li>
				
	</ul>
  



<div class="ui-grid-b social-block">


        <div class="ui-block-b">
		    <div id="fb-root"></div>
			<script>(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/hu_HU/all.js#xfbml=1";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));</script> 
					  <div class="fb-like" data-href="https://www.facebook.com/Kmonitor" data-send="false" data-layout="box_count" data-width="50" data-show-faces="false"></div>
		</div>		  
		
		<div class="ui-block-b social-g">
		  <div class="right">
			<!-- Place this tag where you want the +1 button to render. -->
			<div class="g-plusone" data-size="tall"></div>

			<!-- Place this tag after the last +1 button tag. -->
			<script type="text/javascript">
			  window.___gcfg = {lang: 'hu'};

			  (function() {
				var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
				po.src = 'https://apis.google.com/js/plusone.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
			  })();
			</script>
		  </div>
		</div>
		
		<div class="ui-block-c social-twitter">
				<div class="right"><a href="https://twitter.com/share" class="twitter-share-button" data-via="KohoVolitEU" data-count ="vertical">Tweet</a></div>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
		</div>
		
	  </div><!-- /grid -->
	  
	 <div>
	   <p style="text-align:justify">A <strong>Voksmonitor</strong> alkalmazás célja, hogy a választók a politikával ne csak a pártok kommunikációján keresztül találkozzanak – hanem megismerjék a különböző pártok programját és álláspontját a legfontosabb szakmai-politikai kérdésekben. <strong>A kérdőív kitöltése körülbelül 5 percet vesz igénybe</strong>.
	 </p>
	 </div> 

	 <!-- counter --> 
	 <div class="counter">
	   <!--<span class="counter-number">
<?php
  //$number = number_format(ceil($filesize/297.2),0,',',' '); original calculation
  $filesize = filesize('result.txt');
  /*if ($filesize < 335527092)
    $number = number_format(684613 + round(($filesize-203466983.6)/1145.192),0,',',' ');  //slowing down
  else
    $number = number_format(ceil($filesize/419.4),0,',',' ');*/
  //$number = number_format(ceil($filesize/419.4) + 1459825,0,',',' '); //1459825 - number by 2013-09-09
  //$number = number_format(ceil($filesize/362.94),0,',',' ');
    $number = number_format(ceil($filesize/339),0,',',' ');
    echo $number;
  
?>
		</span> vyplnených Volebných kalkulačiek-->
	</div>
	<!-- /counter -->
	  
	  				  



	</div> <!-- /content -->
	
		<script type="text/javascript">
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]
            =i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new
            Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.
            parentNode.insertBefore(a,m)
              })(window,document,'script','//www.google-analytics.com/analytics.js         ','ga');

              ga('create', 'UA-49538088-1', 'voksmonitor.hu');
              ga('send', 'pageview');
		</script>
		

	<div data-role="footer" class="footer-docs" data-theme="d">
	    <div data-role="navbar">
		  <ul>
		  	
			<li><a href="info" data-ajax="false">A voksmonitor.hu projektről</a></li>
			<li><a href="embed" data-ajax="false">A voksmonitor beágyazása saját honlapon vagy blogon</a></li>
			
  		  </ul>
	    </div>
	        <p class="right computer" style="position:relative;bottom:10px;">
			  <a href="http://kmonitor.hu">
				<img src="image/klogo.png" title="K-Monitor" alt="K-Monitor"/>
			  </a>
			  <a href="http://kohovolit.eu">
				<img src="image/kvlogo.png" title="KohoVolit.eu" alt="KohoVolit.eu"/>
			  </a>
		  </p>
		   <div>
				<a href="#contact-popup" data-role="button" data-icon="info" data-mini="true" data-inline="true" data-rel="popup">Kapcsolat</a>
				<div data-role="popup"  data-role="popup" id="contact-popup">
					<p> 2014 <a href="http://kmonitor.hu">K-Monitor</a>, email: lederer[at]kmonitor.hu</p>
				</div>
			</div>
			
	</div>
</div>
</body>
</html>
