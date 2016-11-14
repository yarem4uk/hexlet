<?php

namespace Theory;

require_once 'Enumerable.php';

class Router
{
    use Enumerable;
    
    private $options;
    private $routes = [];
    
    public function __constructor($optins = [])
    {
        $this->options = $options;
    } 

    public function addRoute($name, $url)
    {
        $this->routes[$name] = $url;
    }

    public function each($lambda)
    {
        foreach ($this->routes as $value) {
            $lambda($value);
        }
    }
}
