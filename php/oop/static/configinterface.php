<?php

namespace App;

interface ConfigIngerface
{
    public function __construct($fromType, $data);
    public function getFromType();
    public function getValue($key);
}
