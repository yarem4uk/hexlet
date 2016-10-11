<?php
$dnk = 'UGCACCAGAAUU';
/* $rna = []; */


function toRna($dnk){
    $map = ['G' => 'C', 'C' => 'G', 'A' => 'T', 'U' => 'A'];
    $arr = str_split($dnk);
    foreach($arr as $key)
        $rna[] = $map[$key];
    return implode($rna);
}
echo toRna($dnk);
