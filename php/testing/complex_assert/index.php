<?php

namespace App;

require_once 'QueryBuilder.php';

$qurey = QueryBuilder::from('table');

/* echo $qurey->toSql() . PHP_EOL; */
/* echo $qurey->where('id', 12)->toSql() . PHP_EOL; */
echo QueryBuilder::from('table')->where('id', 12)->toSql() . PHP_EOL;

/* var_dump($qurey->where('id', 12)); */
/* $p = $qurey->where('id', 12); */
/* var_dump($qurey->where('id', 12)); */
