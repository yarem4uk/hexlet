<?php

namespace tags;

require_once 'tag.php';

class Pairedtag extends Tag
{
    protected $children = [];

    public function __construct($attributes = [], $children = [])
    {
        $this->attributes = $attributes;
        $this->children = $children;
    }
    
    public function toString(){
        var_dump($this->children);
        /* $iter = function ($item, $acc) use (&$iter) { */
        /*     array_reduce($item, function ($acc, $el) use (&$acc, &$iter) { */
        /*         if(is_object($el)) { */
        /*             $acc = $iter($el, $acc); */
        /*         } else { */
        /*             $acc[] = $el; */
        /*             return $acc; */
        /*         } */ 
        /*     }, []); */            
        /* }; */
        /* return $iter($this->children, []); */
    }
}
