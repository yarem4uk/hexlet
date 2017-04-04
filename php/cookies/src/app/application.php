<?php

namespace App;

require_once 'session.php';

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

    public function delete($route, $handler)
    {
        return $this->append('DELETE', $route, $handler);
    }

    public function run()
    {
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        if ($_SERVER['REQUEST_METHOD'] == 'POST' && array_key_exists('_method', $_POST)) {
            $method = strtoupper($_POST['_method']);
        } else {
            $method = $_SERVER['REQUEST_METHOD'];
        }

        foreach ($this->handlers as $item) {
            list($handlerMethod, $route, $handler) = $item;
            $preparedRoute = str_replace('/', '\/', $route);
            $matches = [];

            if ($method == $handlerMethod && preg_match("/^$preparedRoute$/i", $uri, $matches)) {
                $arguments = array_filter($matches, function ($key) {
                    return !is_numeric($key);
                }, ARRAY_FILTER_USE_KEY);

                $meta = [
                    'method' => $method,
                    'uri' => $uri,
                    'headers' => getallheaders()
                ];

                $session = new Session();
                $response = $handler($meta, array_merge($_GET, $_POST), $arguments, $_COOKIE, $session);

                http_response_code($response->getStatusCode());
                foreach ($response->getHeaderLines() as $header) {
                    header($header);
                }

                foreach ($response->getCookies() as $key => $value) {
                    setcookie($key, $value);
                }

                echo $response->getBody();
                return;

            }
        }
    }

    private function  append($method, $route, $handler)
    {
        $newRoute = $route;
        if (preg_match_all('/:([^\/]+)/', $route, $matches)) {
            $newRoute = array_reduce($matches[1], function ($acc, $item) {
                $groupe = "(?P<{$item}>[\w-]+)";
                return str_replace(":{$item}", $groupe, $acc);
            }, $route);
        }
        return $this->handlers[] = [$method, $newRoute, $handler];
    }
}
