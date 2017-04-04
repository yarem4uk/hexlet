<?php

namespace App;

function response ()
{
    return new Response();
}

class Response 
{
    public function withStatus($status)
    {
        http_response_code($status);
        return $this;
    }

    public function getHeaderLines()
    {
        
    }
}
