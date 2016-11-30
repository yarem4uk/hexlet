<?php 

namespace App;

spl_autoload_register(function ($class) {
    $path = dirname(__FILE__) . "/" . strtolower(str_replace("\\", "/", $class));
    echo $path;
    echo "\n";
    spl_autoload($path);
});

/* require_once 'ns/application.php'; */

$app = new \Ns\Application();

var_dump($app);

echo dirname(__FILE__);
echo "\n";
echo get_class($app);
