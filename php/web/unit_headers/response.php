<?php

namespace App;

require_once 'responseInterface.php';

function responce($body = null)
{
    return new Responce($body);
}

class Responce implements ResponseInterface 
{
    protected $headers = [];
    protected $status = 200;
    protected $body;

    public function __construct($body)
    {
        if (is_string($body)) {
            $this->headers['Content-Length'] = mb_strlen($body);
        }
        $this->body = $body;
    }

    public function redirect($url)
    {
        http_respoce_code(302);
        header($url);
    }

    public function withStatus($status)
    {
    }

    public function format($format)
    {
    }

    public function getStatuCode()
    {
    } 

    public function getBody()
    {
    }

    public function getHeagerLines()
    {
    }

}
