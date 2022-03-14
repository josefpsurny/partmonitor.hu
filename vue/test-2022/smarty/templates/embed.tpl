<!DOCTYPE html>
<html>
  <head>
    <title>Voksmonitor</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link type="image/x-icon" href="../image/favicon.ico" rel="shortcut icon">
    <link rel="stylesheet" href="//code.jquery.com/mobile/1.1.1/jquery.mobile-1.1.1.min.css" />
	<script src="//code.jquery.com/jquery-1.7.1.min.js"></script>
	<script src="//code.jquery.com/mobile/1.1.1/jquery.mobile-1.1.1.min.js"></script>
	<link rel="stylesheet" href="../css/page.css" />

  </head>

<body>
  <div data-role="page" data-title="Beágyazás | Voksmonitor.hu" data-theme="b" class='page type-interior'>

    <div data-role="header" data-theme="f" class="header">
	  <a href="/" data-role="button" data-icon="home" data-iconpos="notext" data-ajax="false">Voksmonitor.hu</a>
	</div>


  <div data-role="content" class="content">

    <p>A Voksmonitor alkalmazás beágyazásához válaszd ki az aktuális verziót és a megfelelő méretet!</p>


    <div class="box-center-match match-winner-box">

    <div data-role="collapsible-set">

      {foreach $calcs as $calc}
        <div data-role="collapsible" {if isset($calc['selected'])}data-collapsed="false"{/if} data-theme="b" data-content-theme="b">

          <h3>{$calc['name']}</h3>
          {foreach $calc['calc'] as $c}
          	<div data-role="collapsible" {if (isset($calc['selected']) and ($calc['selected']))}data-collapsed="false"{/if} data-theme="d" data-content-theme="d">

            	 <h3>{$c['name']}</h3>
            	 {foreach $sizes as $size}
            	    <div data-role="collapsible" {if (isset($size['selected']) and ($size['selected']))}data-collapsed="false"{/if}  data-theme="e" data-content-theme="e">
            	     <h3>{$size['name']}</h3>
            	     <div data-role="fieldcontain">
						<p>HTML:</p>
						<textarea data-role="none" cols="40" rows="3" name="textarea" id="textarea"><iframe src="https://voksmonitor.hu/{$c['friendly_url']}key={$key}" width="{$size['width']}" height="{$size['height']}" frameborder="0" ></iframe></textarea>
					</div>
            	    </div>
            	 {/foreach}

	        </div>
          {/foreach}

        </div>
      {/foreach}
    </div><!-- main collapsible -->
  </div>
  </div> <!-- /content -->

  <!-- footer -->
  {include "page-footer.tpl"}

  </div> <!-- /page -->


</body>
</html>
