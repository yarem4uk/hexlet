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
        $result = array_reduce($this->children, function($acc, $item){
            /* var_dump($item->children); */
            if (!empty($item->children))
                $item->children->toString();
            $item->toString();
            return $acc;
        },'');
        return $result;
    }
}
