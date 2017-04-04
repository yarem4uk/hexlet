<?php

namespace App;

require_once 'application.php';
require_once 'response.php';
/* require_once 'src/renderer.php'; */

use function App\response;
use function App\Renderer\render;

$app = new Application();

/* $app->get('/', function () { */
/*     return render('index'); */
/* }); */

$app->get('/about', function () {
    return 'hellow world';
});

/* $app->get('/about', function () { */
/*     return render('about', ['site' => 'hexlet.io']); */
/* }); */

$app->get('/sign_in', function () {
    $headers = getallheaders();
    response()->withStatus(200);
    /* http_response_code(400); */
    return print_r($headers, true);
});

$app->run();
