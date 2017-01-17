<?php

namespace App;

$map = [
    'key' => 'value',
    'deep' => [
        'key' => [],
        'deep' => 3,
        'another' => 7
    ]
];

var_dump(array_key_exists('ppp', $map['deep']));

