<?php

namespace App;

interface ResponseInterface 
{
    public function __construct($body);
    public function redirect($url);

    public function withCookie($key, $value);
    public function withStatus($status);
    public function format($format);
    public function getStatusCode();
    public function getBody();
    public function getHeaderLines();
}
