<?php

namespace App;

require_once 'application.php';


$app = new Application();

$app->get('/companies', function () {
    return '<p>companies list</p>';
});

$app->post('/companies', function () {
    return '<p>company was created</p>';
});

$app->run();
