<?php

namespace App;

interface ResponseInterface 
{
    public function __construct($body);
    public function redirect($url);

    public function withStatus($status);
    public function format($format);
    public function getStatuCode();
    public function getBody();
    public function getHeagerLines();
}
