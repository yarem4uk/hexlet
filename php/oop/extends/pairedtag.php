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
            
            if (!empty($item->attributes)) {
                $atrb = array_reduce(array_keys($item->attributes), function ($str, $atr) use ($item) {
                   return $str = ' ' . $atr . '=' . '"' . $item->attributes[$atr] . '"';
                }, '');
                $acc .= '<' . $item->getName() . $atrb .  '>';
            } else {
                $acc .= '<' . $item->getName() . '>';
            }
            
            array_reduce($item->children, function ($acc, $el) use (&$acc, &$iter) {
                if (is_string($el->children)) {
                    $acc .= $el->getName() . $el->children . $el->getName(); 
                }
                if (!empty($el->children)) {
                    $acc = $iter($el, $acc);
                } else {
                    $atrb = array_reduce(array_keys($el->attributes), function ($str, $atr) use ($el) {
                        return $str = ' ' . $atr . '=' . '"' . $el->attributes[$atr] . '"';
                    }, '');
                    $acc .= '<' . $el->getName() . $atrb .  '>' . '<' . $el->getName() . '\>';
                } 
                return $acc;
            }, '');
          return $acc . '<' . $item->getName() . '\>'; 
        };
        return $iter($this, '');
    }
}
