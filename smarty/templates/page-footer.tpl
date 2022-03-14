	<div data-role="footer" data-theme="{if isset($partner)}{$partner['swatch_bar']}{else}f{/if}">  
	  <div class="footerContainer"> 
		<div class="right computer">
			<a href="http://kmonitor.hu">
				<img src="../image/klogo.png" title="K-Monitor.hu" alt="K-Monitor.hu"/>
			</a>
		  {if isset($partner) and ($partner['name'] != 'default')}<img src="/image/{$partner['name']}.png">{/if}
		  </div>
		 </div>
	  </div>
	</div>
