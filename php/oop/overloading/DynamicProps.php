<?php

namespace App;

require_once 'DynamicPropsUndefindedProp.php';

class DynamicProps
{
    private $arr;

    public function __construct($arr = [])
    {
        $this->arr = $arr;
    }

    public function getarr()
    {
        return $this->arr;
    }

    public function __set($name, $value)
    {
        return $this->arr[$name] = $value;
    }
    
    public function __get($name)
    {
        try {
            if(!isset($this->arr[$name])){
                throw new \Exception\DynamicPropsUndfindedProp();
            }
                return $this->arr[$name];
        } catch (\Exception\DynamicPropsUndefinedProp $e)
        {
            echo $e->getMessage();
        }
    }
    
    public function __isset($name)
    {
        return isset($this->arr[$name]);
    }

    public function __unset($name)
    {
        unset($this->arr[$name]);
    }

}
