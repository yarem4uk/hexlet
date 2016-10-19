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

        $iter = function ($item, $acc) use (&$iter) {

            var_dump($item->children);
            array_reduce($item->children, function ($acc, $el) use (&$acc, &$iter) {
                if (!empty($el->children)) {
                    $acc = $iter($el->children, $acc);
                } else {
                    $acc .= $el->getName();
                } 
                return $acc;
            }, '');
          return $acc; 
        };
        return $iter($this, '');
    }
}
