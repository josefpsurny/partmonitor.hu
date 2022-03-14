{if !empty($refused)}     
      <p class="box-center-match match-winner-box">   {$text.refused_table_description}</p>
      
	  <div class="question ui-body ui-body-{$partner['swatch_question_body']}">	  
	    <ul data-role="listview" data-theme="{$partner['swatch_question_body']}">
	      {foreach $refused as $m}
	        <li data-theme="c"><img src="../../image/1x1.png" class="president2014-sprite president2014-sprite-{$m->friendly_name}" alt="{$m->last_name}"/>
	        <h3>{$m->last_name|truncate:35:"...":true} <span class="ui-li-desc" style='display: inline'">{$m->first_name|truncate:45:"...":true}</span></h3>
	        <div class="computer"><p class="ui-li-desc"><a href="#popup{$m->id}" data-rel="popup">{$text.refused_explanation}</a></p></div>
	        <p class="ui-li-aside">
	        <span class="computer result-number result-neutral">? %</span>
	        <span class="mobile ui-li-count">? %</span>
	       </p>
	        
	        </li>
	        <div data-role="popup" id="popup{$m->id}">
	            <a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>
	            <p>{$m->message}<p>
            </div>
	      {/foreach}
	    </ul>
	  </div>      
{/if}
{if !empty($missing)}
	  <p class="box-center-match match-winner-box">{$text.missing_table_description}</p>
	 

	  <div class="question ui-body ui-body-{$partner['swatch_question_body']}">	  
	    <ul data-role="listview" data-theme="{$partner['swatch_question_body']}">
	      {foreach $missing as $m}
	        <li data-theme="c"><img src="../../image/1x1.png" class="president2014-sprite president2014-sprite-{$m->friendly_name}" alt="{$m->last_name}"/>
	        <h3>{$m->last_name|truncate:35:"...":true}</h3>
	        <div class="computer"><p class="ui-li-desc">{$m->first_name|truncate:45:"...":true}</p></div>
	        <p class="ui-li-aside">
	        <span class="computer result-number result-neutral">? %</span>
	        <span class="mobile ui-li-count">? %</span>
	       </p>
	        
	        </li>
	      {/foreach}
	    </ul>
	  </div>
{/if}
