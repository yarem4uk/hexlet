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
    
    public function toString()
    {

        $iter = function($item, $acc) use (&$iter) {

            var_dump($this);
            return $iter($this, '');
        };
    }
}
