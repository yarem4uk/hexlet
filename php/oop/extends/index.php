<?php 

namespace tags;

require_once 'singltag.php';
require_once 'pairedtag.php';
require_once 'img.php';
require_once 'div.php';

/* $singltag = new SinglTag(1); */

/* $singltag->toString(); */

/* echo "\n"; */
/* $img = new Img(['src' => 'link/to/path', 'sra' => 'link/to/another/path']); */
/* echo $img->toString(); */
/* echo "\n"; */
/* print_r( $img->getAttributes()); */

$div = new Div();
$div4 = new Div();
$div3 = new Div([],[$div4]);
$div2 = new Div(['class' => 'row'], [$div, $div3]);

/* echo $div->getName(); */
/* echo $div2->toString(); */
echo $div->toString();
