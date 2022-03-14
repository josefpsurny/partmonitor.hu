<div class="box-center-match match-winner-box">
  <p>{$text.result_winner_computer}</p>
  <div class="ui-grid-b computer">
  
	<div class="ui-block-a">
	</div>  
	<div class="ui-block-b">
	  <div class="match-winner-block">
	    <a href="../compare.php?{$query_string}&id={$results[0].id}&match={$results[0].result_percent}" data-rel="dialog" style="text-decoration:none">
		  <div><img src="../../image/vuc2013/{$results[0].friendly_name}.jpg" width="122" height="155" alt="{$results[0].name}" title="{$results[0].name}" /></div>
		  <div class="match-winner">{$results[0].first_name}<br/>{$results[0].last_name}<br/><span style="font-size:0.75em;line-height:100%">{$results[0].party}</span></div>
		  <div class="match-winner-percentage"><span class="match-winner-percentage-number">{$results[0].result_percent}</span> %</div>
		</a>
	  </div>
	</div>
	<div class="ui-block-c">
	</div>  
	
</div><!-- /grid-b -->

	<div class="mobile">
	  <div class="match-winner-block">
	      <div class="ui-grid-a">
	        <div class="ui-block-a">
			  <div style="color:#{$winner_color[0]}" class="match-winner">{$results[0].first_name}<br/>{$results[0].last_name}</div>
			  <div style="color:#{$winner_color[0]}">{$results[0].party}</div>
		    </div>
		    <div class="ui-block-b">
			  <div class="match-winner-percentage"><span class="match-winner-percentage-number">{$results[0].result_percent}</span> %</div>
		    </div>
	      </div>
	  </div>
    </div>
	<!--<p>Dle zadaných odpovědí je Vám nejblíže se shodou <strong>{$results[0].result_percent}&nbsp;%</strong> :</p>
	<div style="color:#{$winner_color}" class="match-winner">{$results[0].first_name} {$results[0].last_name}</div>-->

<!--<a data-role="button" data-theme="c" title="Sdílej výsledky na Facebooku" 
    href="http://www.facebook.com/sharer.php?s=100&amp;p[url]=http://VolebniKalkulacka.cz&amp;p[images][0]=http://volebnikalkulacka.cz/image/logo.png&amp;p[title]=VolebníKalkulačka.cz&amp;p[summary]={$facebook_text}" target="_blank"  data-role="none">
     <img src="../../image/fb_logo.png" 
       alt="Sdílej na Facebooku" /><span class="match-fb-text">Sdílej <span class="computer">výsledky </span>na Facebooku</span>
</a>-->

	<a data-role="button" data-theme="c" href={include "psp2013-match-facebook-link.tpl"}	  
		   target='_blank'><img src="../../image/fb_logo.png" 
		   alt="{$text.result_share_results_on_facebook}" />
	<span class="match-fb-text">{$text.result_winner_share}</a>
</div>
