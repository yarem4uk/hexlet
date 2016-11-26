<?php

namespace App;

require_once 'DynamicProps.php';

$ob = new DynamicProps(); 

/* $ob->setCustom('root', '/'); */
/* $ob->setArr('user', '/user'); */

/* var_dump($ob->getArr); */
/* var_dump($ob); */

/* print_r($ob->getCustom()); */
$ob->custom = 'hellow';
/* $ob->custom = ['name'=>'url']; */
/* var_dump($ob->custom); */
/* echo '\n'; */
var_dump($ob->getarr());
echo $ob->custom;
echo "\n";
print_r($ob->getarr());
echo "\n";
unset($ob->custom);
echo "\n";
print_r($ob->getarr());
