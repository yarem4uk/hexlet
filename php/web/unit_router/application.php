<?php

namespace App;

class Application 
{
    private $routes;

    public function __construct($routes)
    {
        $this->routes = $routes;
    }

    public function run()
    {
        $uri = $_SERVER['REQUEST_URI'];
        foreach ($this->routes as $item) {
            list($rout, $handler) = $item;
            $preparedRoute = preg_quote($rout, '/');
            if (preg_match("/^$preparedRoute$/i", $uri)) {
                echo $handler();
                return;
            }
        }
    }
}
