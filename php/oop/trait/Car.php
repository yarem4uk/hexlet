<?php

namespace App; 

require_once 'ComparableByAge.php';

class Car 
{
    use ComparableByAge;

    private $year;
    private $brand;

    public function __construct($brand, $year) 
    {
        $this->year = $year;
        $this->brand = $brand;
    }

    public function getYear()
    {
        return $this->year;
    } 
}
