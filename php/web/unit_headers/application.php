<?php

namespace App;

class Application 
{
    private $handlers;

    public function get($route, $handler) 
    {
        return $this->append('GET', $route, $handler);
    }

    public function post($route, $handler)
    {
        return $this->append('POST', $route, $handler);
    }

    public function run()
    {
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $method = $_SERVER['REQUEST_METHOD'];

        foreach ($this->handlers as $item) {
            list($handlerMethod, $route, $handler) = $item;
            $preparedRoute = str_replace('/', '\/', $route);

            $matches = [];
            if ($handlerMethod == $method && preg_match("/^$preparedRoute$/", $uri, $matches)) { 

                $arguments = array_filter($matches, function ($key) {
                    return !is_numeric($key);
                },ARRAY_FILTER_USE_KEY);

                echo $handler($_GET, $arguments);
                return;                
            }
        }
    }

    private function append($method, $route, $handler)
    {
        
        $uriParts = explode(DIRECTORY_SEPARATOR, $route);

        $patern = array_map(function ($item) {
            if (preg_match("/:\w+/i", $item)) {
                $string = preg_replace('/:(\w+)/i', '(?P<$1>([\w-]+|\d+))', $item);
                /* $string = preg_replace('/:(\w+)/i', '(?P<$1>\d+)', $item); */
                return $string;
            }
            return $item;
        }, $uriParts);

        $newRoute =  implode(DIRECTORY_SEPARATOR, $patern);

        return $this->handlers[] = [$method, $newRoute, $handler];
    }

}
