<?php

namespace App;

require_once 'application.php';

$app = new Application();

/* * $app->get('/users/(?P<id>\d+)', function ($params, $arguments) { *1/ */
/*     return json_encode($arguments); */
/* }); */

$app->get('/', function ($params, $arguments) {
    return 'hellow world';
});

/* $app->get('/users/:id', function ($params, $arguments) { */
/*     return json_encode($arguments); */
/* }); */

$app->get('/sign_in', function ($params, $arguments) {
    $headers = getallheaders();

    http_response_code(302);
    /* header('Location: http://' . $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . '/'); */
    header("Location: http://localhost:3000");
    return print_r($headers, true);
});

/* $app->get('/users/(?P<userId>\d+)/articles/(?P<id>[\w-]+)', function ($params, $arguments) { */
/*     return json_encode($arguments); */
/* }); */

/* $app->get('/users/:userId/photos/:id', function ($params, $arguments) { */
/*     return json_encode($arguments); */
/* }); */

$app->run();
