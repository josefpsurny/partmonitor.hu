<!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Demográfiai kérdések</title>
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
	<!--<link rel="stylesheet" href="../_assets/css/jqm-docs.css"/>-->

	<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
	<!--<script src="../../docs/_assets/js/jqm-docs.js"></script>-->
	<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.js"></script>
	

	
	</head>
  <body>
   <div data-role="page" id="page">
   

	<div data-role="header">
		<h2>Demográfiai kérdések</h2>
	</div><!-- /header -->  
	
	<div data-role="content">	
	<style>
	 {literal}.ui-dialog-contain {max-width:900px;} .odd {background-color:#def;} .even{background-color:#edf}{/literal}
	</style>
	<script>
	
	  $('.input-previously').ready(function() { 
	    $('.input-previously').change( function() {  //see http://api.jquery.com/change/  SmittyDesign's note
	      answer = $(this).attr( 'value');
          if (answer == 'yes') {
            $('#optional-part').show("slow");
          } else {
            $('#optional-part').hide("slow");
          }
	    });
	  });
	</script>
	<!--<a href="#popup" data-rel="popup">Open Popup</a>-->
	<div data-role="popupx" id="popup" class="ui-content">
	  <!-- Here is the form -->
	  <p>Szeretnénk néhány demográfiai jellemzőt Önről megtudni, természetesen szem elõtt tartva az anonimitást. Kérjük, jelölje meg, hogy az alábbiak közül mi igaz Önre!<p>
	  <form action="save_research.php" method="post" data-ajax="false">
	   
	    <p>Ha nem kívánja ezeket az adatokat megadni, kérjük kattintson az átugrás gombra, és ugorjon tovább a <button type="submit" data-mini="true" data-inline="true" name="upper-submit" value="upper-submit" >Voksmonitorra!</button></p>
	   
	    

	    
	    <!-- sex -->
	    <fieldset data-role="controlgroup" data-type="horizontal" class="odd"> 
		  <legend><b>Az Ön neme:</b></legend>
	      {foreach $data.sex as $item}      
         	  <input type="radio" name="input-sex" id="input-sex-{$item.0}" value="{$item.0}"  {if (isset($item.2))}selected="selected"{/if} />
         	  <label for="input-sex-{$item.0}">{$item.1}</label>
	      {/foreach}
	    </fieldset>
	    
	    <!-- age -->
	    <fieldset data-role="controlgroup" data-type="horizontal" class="even" > 
		  <legend><b>z Ön korcsoportja:</b></legend>
	      {foreach $data.age as $item}      
         	  <input type="radio" name="input-age" id="input-age-{$item.0}" value="{$item.0}"  {if (isset($item.2))}selected="selected"{/if} />
         	  <label for="input-age-{$item.0}">{$item.1}</label>
	      {/foreach}
	    </fieldset>
	    
	    <!-- education -->
	    <fieldset data-role="controlgroup" data-type="horizontal"  class="odd"> 
		  <legend><b>Az Ön legmagasabb iskolai végzettsége:</b></legend>
	      {foreach $data.education as $item}      
         	  <input type="radio" name="input-education" id="input-education-{$item.0}" value="{$item.0}"  {if (isset($item.2))}selected="selected"{/if} />
         	  <label for="input-education-{$item.0}">{$item.1}</label>
	      {/foreach}
	    </fieldset>
	    
	    <!-- municipality -->
	    <fieldset data-role="controlgroup" data-type="horizontal"  class="even"> 
		  <legend><b>Az Ön lakóhelye:</b></legend>
		  <select name="select-choice-municipality" id="select-choice-municipality">
	      {foreach $data.municipality as $item}  
	        <option value="{$item.0}">{$item.1}</option>
	      {/foreach}
	      </select>
	    </fieldset>
	    
	    <!-- social values -->
	    <fieldset data-role="controlgroup" data-type="horizontal"  class="odd"> 
	      <legend><b>Jellemző rám - BÁRMENNYIT MEGJELÖLHET:</b></legend>
		  <label for="select-choice-socval" class="select"><b>Jellemző rám - BÁRMENNYIT MEGJELÖLHET:</b></label>
		  <select name="select-choice-socval[]" id="select-choice-socval" multiple="multiple" data-native-menu="false">
		  <option>Jellemző rám - BÁRMENNYIT MEGJELÖLHET</option>
	      {foreach $data.socval as $item}  
	        <option value="{$item.0}">{$item.1}</option>
	      {/foreach}
	      </select>
	    </fieldset>

	    
	    <button type="submit" name="submit" value="submit" data-theme="e" data-icon="arrow-r" data-iconpos="right">Köszönjük, hogy megadta ezeket az adatokat. Folytassuk a Voksmonitor Budapest 2014 kérdéseivel.</button>
	    
	    
	  
	  </form>
	</div> <!-- /popup -->
	</div> <!-- /content -->
	</div> <!-- /page -->
	
	<!-- google analytics -->
	<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-8592359-7']);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
  
  </body>
</html>
