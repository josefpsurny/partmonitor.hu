<?php

session_start();

// put full path to Smarty.class.php
require('/usr/local/lib/php/Smarty/Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir('../../../smarty/templates');
$smarty->setCompileDir('../../../smarty/templates_c');
$smarty->setCacheDir('../../../smarty/cache');
$smarty->setConfigDir('../../../smarty/configs');


//extract user values
$user = get_user_values();


//partners
/*if (isset($_GET['partner'])) {
	switch ($_GET['partner']) {
	  case 'mesec': 
		$partner = array('name'=>'mesec','swatch_bar' => 'v', 'swatch_footer' => 'r', 'swatch_question_body' => 'v', 'swatch_progressbar' => 'v', 'answers' => '');
		break;
	  case 'podnikatel':
		$partner = array('name'=>'podnikatel','swatch_bar' => 'w', 'swatch_footer' => 'r', 'swatch_question_body' => 'w', 'swatch_progressbar' => 'w', 'answers' => '_podnikatel');
		break;
	  case 'vitalia':
		$partner = array('name'=>'vitalia','swatch_bar' => 'x', 'swatch_footer' => 'r', 'swatch_question_body' => 'x', 'swatch_progressbar' => 'x', 'answers' => '');
		break;
	  case 'osops':
		$partner = array('name'=>'osops','swatch_bar' => 'x', 'swatch_footer' => 'r', 'swatch_question_body' => 'x', 'swatch_progressbar' => 'x', 'answers' => '_osops');
		break;
	  default:
		$partner = array('name'=>'lupa','swatch_bar' => 'u', 'swatch_footer' => 'r', 'swatch_question_body' => 'u', 'swatch_progressbar' => 'u', 'answers' => '');
	} 
} else */
$partner = array('name'=>'default','swatch_bar' => 'q', 'swatch_footer' => 'r', 'swatch_question_body' => 'q', 'swatch_progressbar' => 'q');

$parties_file = '../answers.json';
$missing = '../noreply.json';
$refused = '../refused.json';

//read parties = candidates
$candidates = json_decode(file_get_contents($parties_file));

//read missing
$missing = json_decode(file_get_contents($missing));
if (empty($missing)) $missing = array();

//read refused
$refused = json_decode(file_get_contents($refused));
if (empty($refused)) $refused = array();

include("../texts.php");

//calculate match, for selected CC only
//$start = microtime(true);
$results = calc_match($user,$candidates);
//$time_taken = microtime(true) - $start;
//echo $time_taken;die();
//print_r($results);die();

//this page
$url = 'http://' . $_SERVER['HTTP_HOST'] . '/' . $_SERVER['REQUEST_URI'] ;

//winner color
//$winner_color[0] = party2color($results[0]['party']);
//$winner_color[1] = party2color($results[1]['party']);
//$winner_color[2] = party2color($results[2]['party']);

$smarty->assign('missing', $missing);
$smarty->assign('refused', $refused);
$smarty->assign('text', $text);
$smarty->assign('partner', $partner);
//$smarty->assign('region', $region);
//$smarty->assign('winner_color', $winner_color);
$smarty->assign('query_string', $_SERVER['QUERY_STRING']);
$smarty->assign('results', $results);
$smarty->assign('url',$url);
$smarty->display('hu2014-match.tpl');

//save results

$str = session_id() . "\t" . "hu2014-" . $partner['name'] . "\t" . date("Y-m-d H:i:s") . "\t" . $_SERVER['QUERY_STRING'] .  "\t" . $_SERVER['REMOTE_ADDR'] . "\n";
$file = fopen('../../result.txt','a');
fwrite($file,$str);
fclose($file);



/**
* party 2 color
*/
function party2color($short_name) {
  $party_color = array(
    "ODS"=>"023484",
    "ČSSD"=>"F18811",
  );

	if (isset($party_color[$short_name])) return $party_color[$short_name];
	else return '808080';

}

/**
* calculates results for one set
*/
function calc_match($user,$set,$extra=2) {
  $results = array();
  //print_r($set);die();
  foreach ($set as $s) {
    $sum = 0;
    $count = 0;
    if (isset($user['vote']) and count($user['vote']) > 0) {
      foreach($user['vote'] as $key => $uv) {
        //weight
        if (isset($user['weight'][$key])) $w = $extra;
        else $w = 1;
        //existing divisions only:
        if ((property_exists($s,'vote')) and (property_exists($s->vote,$key))) {
          $sum = $sum + $w*$s->vote->$key*sign($uv);
          $count = $count + $w;
        }
      }
    }
    if ($count == 0) $count = 1; // to allow match = 0/1 = 0;
    $results[] = array(
      'name' => $s->name,
      'short_name' => $s->short_name,
  	  //'first_name' => $s->first_name,
  	  //'last_name' => $s->last_name,
  	  //'party' => $s->party,
  	  'friendly_name' => $s->friendly_name,
  	  'result' => (1+$sum/$count)/2,
  	  'result_percent' => round((100+100*$sum/$count)/2),
  	  'id' => $s->id,
  	  'random' => rand(0,1000000),
  	  //'sex' => $s->sex,
  	  //'region' => $s->region,
  	  //'party_short_name' => $s->party_short_name,
    );
  }
  //sort by result
  foreach ($results as $key => $row) {
    $result[$key]  = $row['result'];
    $random[$key] = $row['random'];
  }
  array_multisort($result, SORT_DESC, $random, SORT_ASC, $results);
  
  return $results;
}


/**
* extracts user's answers
*/
function get_user_values() {
  $user = array();
  if (count($_GET) > 0) {
    foreach ($_GET as $key => $param) {
      //votes
      if (substr($key,0,2) == 'q-') 
        {if ($param != 0)
          $user['vote'][substr($key,2)] = $param;}
      else if (substr($key,0,2) == 'c-')
        $user['weight'][substr($key,2)] = true;

    }
  } else
    return false;
  
  return $user;

}

/**
* sign function
*/
function sign( $number ) {
    return ( $number > 0 ) ? 1 : ( ( $number < 0 ) ? -1 : 0 );
} 

?>
