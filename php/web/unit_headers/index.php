<?php

namespace App;

require_once 'application.php';

$app = new Application();

$app->get('/', function ($get, $arguments) {
    return 'hellow world';
});

$app->get('/sign_in', function ($get, $arguments) {
    $headers = getallheaders();

    http_response_code(302);
    header("Location: http://localhost:3000");

    return print_r($headers, true);

});

$app->run();
