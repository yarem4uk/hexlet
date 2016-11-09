<?php 

namespace tags;

require_once 'singltag.php';
require_once 'pairedtag.php';
require_once 'img.php';
require_once 'div.php';
require_once 'paragraph.php';

/* $singltag = new SinglTag(1); */

/* $singltag->toString(); */

/* echo "\n"; */
/* $img = new Img(['src' => 'link/to/path', 'sra' => 'link/to/another/path']); */
/* echo $img->toString(); */
/* echo "\n"; */
/* print_r( $img->getAttributes()); */

/* $p = new Paragraph(); */
$p = new Paragraph(['class' => 'row'], []);
$div = new Div();
$div7 = new Div(['paragraph1']);
$div6 = new Div();
$div4 = new Div();
$div3 = new Div(['src' => 'link/to/path'],[$div4, $div4]);
$div5 = new Div([], [$p, $div3]);
/* $div4 = new Div(); */
/* $div3 = new Div([],[$div4]); */
/* $div2 = new Div(['class' => 'row'], [$div, $div3, $div5]); */

/* echo $div->getName(); */
/* echo $div5->toString(); */
echo $div7->toString();
/* echo $div5->toString(); */
/* echo $div2->toString(); */
/* echo $p->toString(); */
/* echo $p->getName(); */
