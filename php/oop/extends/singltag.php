<?php


namespace tags;

require_once 'tag.php';

class SinglTag extends Tag
{
    public function __construct($attributes = [])
    {
        $this->attributes = $attributes;
    }
    
    public function toString()
    {
        $result = '<' . $this->getName();

        $str = array_reduce(array_keys($this->attributes), function($acc, $item){
            $acc .= ' ' . $item . '=' . '"' . $this->attributes[$item] . '"';
            return $acc;
            /* return array_keys($item); */
        }, '');
        return $result . $str . '>';
    }
}
