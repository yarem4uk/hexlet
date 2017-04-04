<?php

namespace App;

require_once 'application.php';
require_once 'src/renderer.php';
require_once 'response.php';

use function App\Renderer\render;
use function App\response;


$users = [
    1 => [
        ['id' => 3, 'name' => 'john'],
        ['id' => 4, 'name' => 'ada']
    ]
];

$app = new Application();

$app->get('/', function () use ($users) {
    return response(render('index', ['friends' => $users[1]]));
});

$app->post('/users', function ($meta, $params, $arguments) {
    if (!isset($params['email'])) {
        return response('Expected email')->withStatus(400);
    }
    return response()->redirect('/');
});


$app->get('/users/:id/friends', function ($meta, $params, $arguments) use ($users) {
    if (!isset($users[$arguments['id']])) {
        return response(['error' => 'message not found'])->withStatus(404)->format('json');
    }
    $response = response($users[$arguments['id']])->format('json');
    return $response;
});

$app->run();
