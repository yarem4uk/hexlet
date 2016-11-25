<?php

namespace App;

require_once 'DynamicProps.php';

$ob = new DynamicProps([]); 

/* $ob->custom('alex', 74); */
/* print_r($ob->arr); */
var_dump($ob);
print_r($ob->getArr);
