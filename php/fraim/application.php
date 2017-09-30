<?php

namespace App;

require_once 'applicationInterface.php';

class Application implements ApplicationInterface
{

  private $handlers = [];

  public function get($path, $f) 
  {
    $this->append('GET', $path, $f);
  }

  public function post($path, $f) 
  {
    $this->append('POST', $path, $f);
  }

  public function run()
  {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    /* var_dump($uri); */
    $method = $_SERVER['REQUEST_METHOD'];
    foreach ($this->handlers as $item) {
      list($handlerMethod, $route, $handler) = $item;
      /* var_dump($route); */
      $preparedRoute = preg_quote($route, '/');
      if ($method == $handlerMethod && preg_match("/^$preparedRoute$/i", $uri)) {
        echo $handler($_GET);
        return;
      }

    }
  }

  private function append($method, $route, $handler) 
  {
    $this->handlers[] = [$method, $route, $handler];
  }

}
