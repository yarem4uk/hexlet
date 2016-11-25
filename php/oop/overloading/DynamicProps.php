<?php

namespace App;

require_once 'DynamicPropsUndefindedProp.php';

class DynamicProps
{
    private $arr = [];

    public function __construct($arr)
    {
        $this->arr = $arr;
    }

    public function __set($name, $value)
    {
        return $this->arr[$name] = $value;
    }

    public function __get($name)
    {
        
    }

    public function getArr()
    {
        return $this->arr;
    }
}
