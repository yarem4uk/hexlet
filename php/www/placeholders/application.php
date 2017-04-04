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
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $method = $_SERVER['REQUEST_METHOD'];
        foreach ($this->handlers as $item) {
            list($handlerMethod, $route, $handler) = $item;
            $preparedRoute = str_replace('/', '\/', $route);
            $matches = [];
            if ($method == $handlerMethod && preg_match("/^$preparedRoute$/i", $uri, $matches)) {
                $arguments = array_filter($matches, function ($key) {
                    return !is_numeric($key);
                }, ARRAY_FILTER_USE_KEY);
                /* print_r($arguments); */
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
                return $string;
            }
            return $item;
        }, $uriParts);

        $updatedRoute = implode(DIRECTORY_SEPARATOR, $patern);

        $this->handlers[] = [$method, $updatedRoute, $handler];
    }

}
