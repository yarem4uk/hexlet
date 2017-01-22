<?php

namespace App;

require_once 'application.php';


$app = new Application();

$app->get('/users/(?P<id>\d+)', function ($get, $arguments) {
    return json_encode($arguments);
});

$app->get('/users/(?P<id>\d+)/articles(?P<id>[\w-]+)', function ($get, $arguments) {
    return json_encode($arguments);
});

$app->run();
