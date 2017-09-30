<?php

namespace App;

require_once 'application.php';
require_once 'src/renderer.php';

use function App\Renderer\render;

$app = new Application($routes);

/* $app->get('/', function () { */
/*   return render('index', [ */
/*   'site' => 'superoffice.ua']); */
/* }); */

$app->get('/', function () {
  return json_encode($_GET);
});

$app->post('/', function () {
  return json_encode($_GET);
});

/* $app->get('/about', function () { */
/*   return render('about', [ */
/*     'site' => 'hexlet.io', */
/*     'subprojects' => ['battel.hexlet.io', 'map.hexlet.io'] */
/*   ]); */
/* }); */

$app->run();
