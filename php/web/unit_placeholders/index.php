<?php

namespace App;

require_once 'application.php';

$app = new Application();

$app->get('/users/:id', function ($get, $arguments) {
     return json_encode($arguments); 
});

$app->get('/users/:userId/articles/:id', function ($get, $arguments) {
    return json_encode($arguments);
});

/* print_r($app->handlers); */
$app->run();
