<?php

namespace Theory;

trait Enumerable
{
    function count()
    {
        $count = 0;
        $this->each(function ($element) use (&$count) {
            $count++;
        });
        return $count;
    }
}
