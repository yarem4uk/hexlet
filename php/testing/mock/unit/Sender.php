<?php

namespace Theory;

class Sender
{
    public $http;

    public function __construct($http)
    {
        $this->http = $http;
    }

    public function send($msg)
    {
        return $this->http->post($msg, []);
    }

}

