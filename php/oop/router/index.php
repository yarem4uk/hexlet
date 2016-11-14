<?php

namespace Theory;

require_once 'Enumerable.php';
require_once 'Router.php';

$router = new Router();

$router->addRoute('root', '/');
$router->addRoute('users', '/users');

echo $router->count();
