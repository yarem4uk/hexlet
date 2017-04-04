<?nphp

namespace App;

class Application 
{
    private $handlers = [];

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

                $meta = [
                    'method' => $method,
                    'uri' => $uri,
                    'headers' => getallheaders()
                ];

                $response = $handler($meta, array_merge($_GET, $_POST), $arguments);

                return;
            }
        }
    }

    private function append($method, $route, $handler)
    {
        $newRoute = $route;
        if (preg_match_all('/:([^\/]+)/', $route, $matches)) {
            $newRoute = array_reduce($matches[1], function ($acc, $item) {
                $groupe = "(?P<$item>[\w-]+)";
                return str_replace(":{$item}", $groupe, $acc);
            }, $route);
        }        

        return $this->handlers[] = [$method, $newRoute, $handler];
    }

}
