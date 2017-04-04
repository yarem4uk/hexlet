<?php

namespace App;

require_once 'application.php';

$app = new Application();

$data = [
    ['id' => 4, 'age' => 15],
    ['id' => 3, 'age' => 28],
    ['id' => 8, 'age' => 3],
    ['id' => 1, 'age' => 23]
];

$app->get('/', function ($get) use ($data){
    if (array_key_exists('sort', $get)) {
        list($field, $direction) = explode(' ', $get['sort']);
        usort($data, function ($left, $right) use ($field, $direction) {
            if ($left[$field] == $right[$field]) {
                return 0;
            }
            if ($direction == 'ask') {
                return ($left[$field] < $right[$field]) ? -1 : 1;
            } elseif ( $direction == 'desk') {
                return ($left[$field] > $right[$field]) ? -1 : 1;
            }
        });
    } 
    return json_encode($data);
});

$app->run();
