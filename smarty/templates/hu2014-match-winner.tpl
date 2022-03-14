<div class="box-center-match match-winner-box">
  <p>{$text.result_winner_computer}</p>
  <div class="ui-grid-b computer">
  
	<div class="ui-block-a">
	  <div class="match-winner-block">
	    <a href="../compare.php?{$query_string}&id={$results[0].id}&match={$results[0].result_percent}" data-rel="dialog" style="text-decoration:none">
		  <div><img src="../../image/hu2014/{$results[0].friendly_name}.jpg" width="155" height="155" alt="{$results[0].name}" title="{$results[0].name}" /></div>
		  <div class="match-winner">{$results[0].short_name}</div>
		  <div class="match-winner-percentage"><span class="match-winner-percentage-number">{$results[0].result_percent}</span> %</div>
		</a>
	  </div>
	</div>  
	<div class="ui-block-b">
	  <div class="match-winner-block">
	    <a href="../compare.php?{$query_string}&id={$results[1].id}&match={$results[1].result_percent}" data-rel="dialog" style="text-decoration:none">
		  <div><img src="../../image/hu2014/{$results[1].friendly_name}.jpg" width="155" height="155" alt="{$results[1].name}" title="{$results[1].name}" /></div>
		  <div class="match-winner">{$results[1].short_name}</div>
		  <div class="match-winner-percentage"><span class="match-winner-percentage-number">{$results[1].result_percent}</span> %</div>
		</a>
	  </div>
	</div>
	<div class="ui-block-c">
	  <div class="match-winner-block">
	    <a href="../compare.php?{$query_string}&id={$results[2].id}&match={$results[2].result_percent}" data-rel="dialog" style="text-decoration:none">
		  <div><img src="../../image/hu2014/{$results[2].friendly_name}.jpg" width="155" height="155" alt="{$results[2].name}" title="{$results[2].name}" /></div>
		  <div class="match-winner">{$results[2].short_name}</div>
		  <div class="match-winner-percentage"><span class="match-winner-percentage-number">{$results[2].result_percent}</span> %</div>
		</a>
	  </div>
	</div>  
	
</div><!-- /grid-b -->

	<div class="mobile">
	  <div class="match-winner-block">
	      <div class="ui-grid-a">
	        <div class="ui-block-a">
			  <div class="match-winner">{$results[0].short_name}</div>
		    </div>
		    <div class="ui-block-b">
			  <div class="match-winner-percentage"><span class="match-winner-percentage-number">{$results[0].result_percent}</span> %</div>
		    </div>
	      </div>
	  </div>
    </div>

	<a data-role="button" data-theme="c" href={include "hu2014-match-facebook-link.tpl"}	  
		   target='_blank'><img src="../../image/fb_logo.png" 
		   alt="{$text.result_share_results_on_facebook}" />
	<span class="match-fb-text">{$text.result_winner_share}</a>
</div>
