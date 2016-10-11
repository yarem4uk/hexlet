<?php

namespace Shop;

require 'item.php';

class Cart implements \Countable, \IteratorAggregate
{
    private $items = [];

    public function add(Item $arr)
    {
        $this->items[] = $arr;
    }
    
    public function count()
    {
       return count($this->items);
    }

    public function getIterator()
    {
        return new \ArrayIterator($this->items);
    }

    public function clear()
    {
        $this->items = [];
    }

    public function total()
    {
        $result = array_reduce($this->items, function($acc, $item) {
            return $acc = $acc + $item->price;
        }, 0);

        return $result;
    }

    public function remove($id)
    {
        $this->items = array_filter($this->items, function(Item $key) use ($id) {
            return $key->id != $id;
        });
    }
}
