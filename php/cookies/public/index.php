<?php

namespace App;

require_once '../src/app/application.php';
require_once '../src/app/response.php';
require_once '../src/app/renderer/renderer.php';


use function App\Renderer\render;
use function App\response;

$app = new Application();

$app->get('/', function ($meta, $params, $arguments, $cookies, $session) {
    $session->start();
    $nickname = $session->get('nickname');
    return response(render('index', ['nickname' => $nickname]));
});


$app->get('/session/new', function ($meta, $params, $arguments, $cookies, $session) {
    $session->start();
    return response(render('new'));
});

$app->post('/session', function ($meta, $params, $arguments, $cookies, $session) {
    $session->start();
    $session->set('nickname', $params['nickname']);
    return response()->redirect('/');
});

$app->delete('/session', function ($meta, $params, $arguments, $cookies, $session) {
    $session->start();
    $session->destroy();
    return response()->redirect('/');
});

$app->run();
