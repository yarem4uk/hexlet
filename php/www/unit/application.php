<?php

namespace App;

class Application 
{
    private $handlers = [];

    public function get($route, $handler)
    {
        $this->append('GET', $route, $handler);
    }

    public function post($route, $handler)
    {
        $this->append('POST', $route, $handler);
    }
    
    public function run()
    {
        $uri = $_SERVER['REQUEST_URI'];
        $method = $_SERVER['REQUEST_METHOD'];

        foreach ($this->handlers as $item) {
            list($handlerMethod, $route, $handler) = $item;
            $preparedRoute = preg_quote($route, '/');
            if ($method == $handlerMethod && preg_match("/^$preparedRoute$/i", $uri)) {
                echo $handler();
                return;
            }
        }
    }

    private function append($method, $route, $handler)
    {
        $this->handlers[] = [$method, $route, $handler];
    }

}
