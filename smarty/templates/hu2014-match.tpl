<!DOCTYPE html>
<html lang='sk'>
  <head>
    <title>{$text.result_title} | {$text.page_header_desktop}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
    <link type="image/x-icon" href="../../image/favicon.ico" rel="shortcut icon">
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.css" />
	<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.js"></script>
	<link rel="stylesheet" href="../../css/hu2014-page.css" />
	
  </head>

  
  <body>
  <div data-role="page" data-title="{$text.result_title}{if $partner['name'] == 'default'} | {$text.page_header_desktop}{/if}" data-theme="c" class='page type-interior partner-{$partner['name']}'>
  
	<!-- header -->
	{include "hu2014-match-header.tpl"}
	<!-- /header -->
	
	<div data-role="content" class="content">
	
		{assign var=results_count value=$results|@count}
		
		<!-- sharer -->
		{include "hu2014-match-sharer.tpl"}

		<!-- winner block -->
		{include "hu2014-match-winner.tpl"}

	    <!-- table -->
	    {include "hu2014-match-table.tpl"}
	    <!-- /table -->
	    
		<!-- table -->
		{if $missing|@count > 0}
	      {include "hu2014-match-missing.tpl"}
	    {/if}
	    <!-- /table -->
	
		<!-- lower part -->
		{include "hu2014-match-low.tpl"}
		<!-- /lower part -->

	</div><!-- /content -->

	<!-- footer -->
	<!--{include "hu2014-match-footer.tpl"}-->
	<!-- /footer -->
    
  </div> <!-- /page -->
  {include "google_analytics.tpl"}
  </body>
</html>
