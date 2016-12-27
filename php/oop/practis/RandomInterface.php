<?php

namespace App;

interface RandomInterface
{
    public function __construct($seed);
    public function getNext();
    public function reset();
}
