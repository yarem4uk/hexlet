<?php

namespace App;

/* require_once '../src/app/application.php'; */
require_once '../src/app/application.php';
require_once '../src/app/response.php';
require_once '../src/app/renderer/renderer.php';


use function App\Renderer\render;
use function App\response;

$app = new Application();

$goods = ['milk', 'salt', 'beef', 'chiken', 'butter'];

$app->get('/', function ($meta, $params, $arguments, $cookies) use ($goods) {
    /* setcookie('cart', json_encode($goods), time() -1000); */
    return response(render('index', ['goods' => $goods]));
});

$app->get('/cart', function ($meta, $params, $arguments, $cookies) {


    if (empty($cookies)) {
        /* error_log(print_r('empty', true)); */
        $cart = [];
    } else {
        $cart = json_decode($cookies['cart'], true);
        /* error_log(print_r($cookies, true)); */
    }

    return response(render('cart', ['goods' => $cart]));
});

$app->post('/cart', function ($meta, $params, $arguments, $cookies) {
    $good = $params['good'];

    if (!array_key_exists('cart', $cookies)) {
        $cart = [];
    } else {
        $cart = json_decode($cookies['cart'], true);
        /* error_log(print_r($cart, true)); */
    }

    if (!array_key_exists($good, $cart)) {
        $cart[$good] = 1;
    } else {
        $cart[$good]++;
    }

    return response()->redirect('/cart')->withCookie('cart', json_encode($cart));
});

$app->delete('/cart', function ($meta, $params, $arguments, $cookies) {

    $good = $params['good'];
    $cart = json_decode($cookies['cart'], true);
    unset($cart[$good]);
    return response()->redirect('/cart')->withCookie('cart', json_encode($cart));
});

$app->run();
