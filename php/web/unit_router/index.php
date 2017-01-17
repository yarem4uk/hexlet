<?php

namespace App;

require_once 'application.php';


/* function server($url) */
/* { */
/*     if ('/' === $url) { */
/*         return "<h1>welcome to php</h1>"; */
/*     } else if (preg_match('/^\/about\/?$/', $_SERVER['REQUEST_URI'])) { */
/*         return "<h1>about company</h1>"; */
/*     } */
/* } */

/* echo server($_SERVER['REQUEST_URI']); */

$routes = [
    ['/', function () {
        return '<p>main page</p>';
    }],
    ['/sign_in', function () {
        return 'you signed in';
    }]
];

$app = new Application($routes);
$app->run();
