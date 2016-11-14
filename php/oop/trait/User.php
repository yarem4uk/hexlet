<?php

namespace App;

require_once 'ComparableByAge.php';

class User
{
    use ComparableByAge;

    private $age;

    public function __construct($age)
    {
        $this->age = $age;
    }
    
    public function getAge()
    {
        return $this->age;
    }
}
