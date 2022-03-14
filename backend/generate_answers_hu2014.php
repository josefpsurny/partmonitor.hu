<?php
  //generates answers for regions from google files
  
//path to generate (relative)
$path = '../www/';

//answers
/*$fanswers = array(
  'hu2014' => file("https://docs.google.com/spreadsheet/pub?key=0Ah0TJXObccZydFRGbktnVERSMGxzOUpQOGlsZVJkaVE&output=txt"),
);*/ 

$fanswers = array(
 'hu2014' => file("./source/hu2014_answers.tsv"), //https://docs.google.com/spreadsheet/ccc?key=0As-ZabyYqo6tdFZZTnVvTFoyU2E0VUs5bmk5WlpuSUE&usp=sharing
);

//print_r($fanswers);die();
$answers0 = array();
foreach ($fanswers as $key=>$file) {
  foreach ($file as $row) {
    //$answers0[$key][] = str_getcsv($row);
    $answers0[$key][] = explode("\t",$row);
  }
}


//clean duplicates, leave the last one
$a_senat = array_reverse($answers0['hu2014']);
foreach ($a_senat as $rkey=>$r) {

    if (isset($r[4]) and isset($codes[trim($r[4])]))
      unset($a_senat[$rkey]);
    else $codes[trim($r[4])] = true;

}
$answers0['hu2014'] = array_reverse($a_senat);
//print_r($answers0);die();

//questions complete
//$file = file("https://docs.google.com/spreadsheet/pub?key=0Ah0TJXObccZydGpVM3djNnhseXd3YVdiMk1OWktLenc&output=csv");
$file = file("./source/hu2014_questions.tsv");

//print_r($file);die();

//read questions
foreach ($file as $row) {
  $row_ar = str_getcsv($row,"\t");
  //print_r($row_ar);die();
  $region_code = 'hu2014'; //$row_ar[0];
  $id = $row_ar[0];
  $question = trim($row_ar[2]); //mind it! (different from question generation)
  //$description = $row_ar[3];
   
  $questions[$region_code][] = array(
    'id' => $id,
    'name' => '',
    //'description' => $description,
    'question' => $question,
  );
  
}

array_shift($questions['hu2014']);
//print_r($questions);die();

//parties = candidates
//$fparties = file("https://docs.google.com/spreadsheet/pub?key=0Am65qMOA9x34dGVhU2RkcTdWeFdwYU90bnhHSFlabFE&output=csv");
$fparties = file("./source/hu2014_parties.tsv");
$parties = array();
//print_r($fparties);die();
foreach ($fparties as $row) {
  $row_ar = str_getcsv($row,"\t");
  if ($row_ar[3] == '1') {
	  $unique_code = $row_ar[2];
	  //$constituency_code = '';//$row_ar[0];
	  $name = $row_ar[0];
	  $short_name = $row_ar[1];
	  //$last_name = $row_ar[1];
	  //$first_name = $row_ar[0];
	  //$name = $first_name . " " . $last_name;
	  //$party = $row_ar[2];
	  $parties[$unique_code] = array(
		'unique_code' => $unique_code,
		//'constituency_code' => $constituency_code,
		'region_code' => 'hu2014',
		'name' => $name,
		//'party'=>$party,
		//'first_name' => $first_name,
		//'last_name' => $last_name,
		'short_name' => $short_name,
	  ); 
  }
}

//array_shift($parties);
//print_r($parties);die();
foreach ($answers0 as $key=>$region) {
  $keys = array();
  $i = 0;
  foreach ($region[0] as $fkey => $first_row) {
    //get rid of "1. ", etc.
    $fr_ar = explode(". ",$first_row);
    if (count($fr_ar) > 1)
      array_shift($fr_ar);
    $first_row = implode(". ",$fr_ar);
    $keys[trim($first_row)] = $fkey;
    //unique code
    if (trim($first_row) == 'Biztonsági kód')
      $unique_code_column[$key] = trim($fkey);
    $i++;
  }
  //print_r($questions[$key]);die();
   //print_r($keys);die();
  /*$ids = array();
  foreach ($questions[$key] as $q) {
    if (isset($keys[trim($q['question'])])) {
      $ids[$keys[trim($q['question'])]] = $q['id'];
    } else {
      $ids[$keys[trim($q['question'])]] = null;
    }
  }
  $answers_id[$key] = $ids;*/

}
//print_r($keys);die();
$details = array();
foreach ($answers0 as $key=>$region) {
  array_shift($region);
  //array_shift($region);
  $i = 1;
  foreach ($region as $row) {
    //print_r($row);die();
    $vote = array();
    $onedetail = array();
    for($j = 5; $j<=104; $j= $j + 2) {
      $id = 100+($j-3)/2;
      $vote[$id] = answer2value($row[$j]);
      //details
      $party = $parties[$row[$unique_code_column[$key]]];
      if (trim($row[$j+1]) != '') {
        $onedetail[$id] = trim($row[$j+1]);
      }
    }
    $details[friendly_url($party['short_name'],'hu_HU.UTF-8')] = $onedetail;
    if (isset($parties[$row[$unique_code_column[$key]]])) {
      $party = $parties[$row[$unique_code_column[$key]]];
      $data[$key][] = array(
        'vote' => $vote,
        //'last_name' => $party['last_name'],
        //'first_name' => $party['first_name'],
        'short_name' => $party['short_name'],
        'name' => $party['name'],
        //'party' => $party['party'],
        //'constituency_code' => $party['constituency_code'],
        'friendly_name' => friendly_url($party['short_name'],'hu_HU.UTF-8'),
        'id' => $i,
      );
      $i++;
    } else {
      //report wrong unique key
      echo $key . "::" . $row[$unique_code_column[$key]] . "<br/>\n";
    }
  }
  //print_r($data);die();
  
  //if direcotry not existing, create it
   $dir = $path . '2014-es-orszaggyulesi-valasztas/';
   if(!file_exists($dir)) 
     mkdir($dir);
 
 
  $fout = fopen ($dir . 'answers.json', "w+");
  $json = json_encode($data[$key]);
  fwrite($fout,$json);
  fclose($fout);
}  
  
  print_r($data);
  

$fout = fopen ($dir . 'details_ser.txt', "w+");
	$json = serialize($details);
	fwrite($fout,$json);
	fclose($fout);

function answer2value($a) {
  if (($a == 'Igen') or ($a == 'IGEN')) return 1;
  if (($a == 'Nem') or ($a == 'NEM')) return -1;
  else return 0;
}

/**
* creates "friendly url" version of text, translits string (gets rid of diacritics) and substitutes ' ' for '-', etc.
* @return friendly url version of text
* example:
* friendly_url('klub ČSSD')
*     returns 'klub-cssd'
*/
function friendly_url($text,$locale = 'cs_CZ.utf-8') {
    $old_locale = setlocale(LC_ALL, "0");
setlocale(LC_ALL,$locale);
$url = $text;
$url = preg_replace('~[^\\pL0-9_]+~u', '-', $url);
$url = trim($url, "-");
$url = iconv("utf-8", "us-ascii//TRANSLIT", $url);
$url = strtolower($url);
$url = preg_replace('~[^-a-z0-9_]+~', '', $url);
setlocale(LC_ALL,$old_locale);
return $url;
}

  
?>
