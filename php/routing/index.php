<?php

namespace App;

require_once 'src/application.php';
require_once 'src/renderer.php';
require_once 'src/response.php';
require_once 'src/carRepository.php';

use function App\Renderer\render;
use function App\response;

$opt = array(
    \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
    \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC 
);

$pdo = new \PDO('sqlite:/home/alex/tmp/db.sqlite', null, null, $opt);
$repository = new CarRepository($pdo);


$app = new Application();

$newCars = [
    'picture' => [],
    'model' => ''
    /* 'year' => '' */
];

$app->get('/cars', function () use ($repository) {
    $cars = $repository->all();
    return response(render('indexNew', ['cars' => $cars]));
});

$app->get('/cars/new', function ($meta, $params, $arguments) use ($newCars) {
    return response(render('cars/newNew', ['errors' => [], 'car' => $newCars]));
});

$app->post('/cars', function ($meta, $params, $arguments) use ($repository) {
    $car = $params['car'];
    $errors = [];


    if (!$car['model']) {
        $errors['model'] = "Model can't be blank";
    }

    if (array_key_exists('car', $_FILES)) {

        $key = 'pictures';
        $errorCodes = $_FILES['car']['error'][$key];
        $tmpNames = $_FILES['car']['tmp_name'][$key];
        $name = $_FILES['car']['name'][$key];
        
        $pictures = array_map(function ($name, $path) {
            return [$name => $path];
        }, $name, $tmpNames);

        foreach ($pictures as $array) {
            array_map(function ($name, $tmpPath) {
                $newName = __dir__ . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . $name;
                move_uploaded_file($tmpPath, $newName);
            }, array_keys($array), $array);
        }
        /* return error_log(print_r($pictures, true)); */
        /* foreach ($errorCodes as $error) { */
        /*     if ($error !== UPLOAD_ERR_OK) { */
        /*         $errors[$key] = 'wrong'; */
        /*     } else { */
        /*         $pictures = array_map(function ($item) { */

        /*             return error_log(print_r($item, true)); */
        /*             /1* $newName = __dir__ . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . basename($item); *1/ */ 
        /*             /1* error_log(print_r($newName, true)); *1/ */
        /*             /1* return [$item => $newName]; *1/ */

        /*         }, $tmpNames); */

        /*         /1* foreach ($pictures as $name => $newName) { *1/ */
        /*         /1*     move_uploaded_file($name, $newName); *1/ */
        /*         /1* } *1/ */

        /*     } */
        /* } */
    }

    /* if (empty($errors)){ */
    /*     $repository->insert($car); */
    /*     return response()->redirect('/cars'); */
    /* } else { */
    /*     return response(render('cars/newNew', ['car' => $car, 'errors' => $errors]))->withStatus(422); */
    /* } */

});

$app->delete('/cars/:id', function ($meta, $params, $arguments) use ($repository) {
    $repository->delete($arguments['id']);
    return response()->redirect('/cars');
});

$app->run();
