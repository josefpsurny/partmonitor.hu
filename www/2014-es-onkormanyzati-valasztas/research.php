<?php
session_start();

// put full path to Smarty.class.php
require('/usr/local/lib/php/Smarty/Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir('../../smarty/templates/2014-es-onkormanyzati-valasztas');
$smarty->setCompileDir('../../smarty/templates_c');

//get the utm (campaign) links
// http://www.mequoda.com/articles/subscription_websites/the-mysterious-utm-code-explained/
$us = array('source','medium','campaign','unique');
$utms = array();
foreach ($us as $u) {
  if (isset($_GET['utm_'.$u])) {
    $utms[$u] = sanitize(($_GET['utm_'.$u]));
  }
}
$data['utm'] = $utms;

$data['sex'] = array(
  array('woman', 'férfi'),
  array('man', 'nő'),
);

$data['education'] = array(
  array('ed1', 'Elvégzett/abbahagyott általános iskola'),
  array('ed2', 'Általános iskola után elvégzett OKJ-s tanfolyam (ami még nem minősül szakiskolai végzettségnek)'),
  array('ed3','Szakmunkásképző/szakiskola'),
  array('ed4','Szakközépiskola (érettségivel)'),
  array('ed5','Gimnázium (érettségivel)'),
  array('ed6','Főiskola/ egyetemi alapképzés (BA)'),
  array('ed7','Egyetem/ egyetemi mesterképzés (MA/MSc)'),
  array('ed8','Egyetemi végzettségnél magasabb (pl. Phd)')
);

$data['age'] = array(
  array('x-18', '(18 év alatti)'),
  array('18-24', '18-24 éves'),
  array('25-29','25-29 éves'),
  array('30-39','30-39 éves'),
  array('40-49','40-49 éves'),
  array('50-59','50-59 éves'),
  array('60-69','60-69 éves'),
  array('69-x','69 évnél idősebb')
);

$data['municipality'] = array(
array('k1','1. kerület'),
array('k2','2. kerület'),
array('k3','3. kerület'),
array('k4','4. kerület'),
array('k5','5. kerület'),
array('k6','6. kerület'),
array('k7','7. kerület'),
array('k8','8. kerület'),
array('k9','9. kerület'),
array('k10','10. kerület'),
array('k11','11. kerület'),
array('k12','12. kerület'),
array('k13','13. kerület'),
array('k14','14. kerület'),
array('k15','15. kerület'),
array('k16','16. kerület'),
array('k17','17. kerület'),
array('k18','18. kerület'),
array('k19','19. kerület'),
array('k20','20. kerület'),
array('k21','21. kerület'),
array('k22','22. kerület'),
array('k23','23. kerület'),
array('kx','Nem Budapesten lakom'),
);

$data['socval'] = array(
array('sv1','Azt teszem, amit szeretek.'),
array('sv2','A hagyományok, szokások megtartására törekszem.'),
array('sv3','A saját céljaimat választom, bízok magamban.'),
array('sv4','Biztonságot adok szeretteimnek.'),
array('sv5','Csak néhány olyan dolog van, ami igazán érdekel.'),
array('sv6','Egész életem során tanulni szeretnék.'),
array('sv7','Előrejutásra törekszem az élet számos területén.'),
array('sv8','Hosszú távú kapcsolatokra törekszem mind a szerelemben, mind a barátság terén.'),
array('sv9','Kimutatom tiszteletemet elődeink iránt.'),
array('sv10','Kreativitással, nagy képzelőerővel rendelkezem.'),
array('sv11','Mindenki számára egyenlő esélyeket szeretnék.'),
array('sv12','Szeretek különbözni másoktól.'),
array('sv13','Szeretem az anyagi javakat, sok pénzt birtokolni.'),
array('sv14','Szeretem, ha az életem nem változik jelentősen egyik hétről a másikra.'),
array('sv15','Szeretem, ha változatos az életem.'),
array('sv16','Szeretnék egy évet vagy többet eltölteni egy másik országban.'),
array('sv17','Tehetségesebbnek tartom magam az átlagnál.'),
array('sv18','Tiszteletben tartom a vallási, faji, etnikai különbségeket.'),

);


$smarty->assign('data',$data);
$smarty->display('research.tpl');
