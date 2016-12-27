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

    public function compare($user)
    {
        if ($this->getAge() == $user->getAge())
            return 0;
        return ($this->getAge() > $user->getAge()) ? 1 : -1;        
    }
}
