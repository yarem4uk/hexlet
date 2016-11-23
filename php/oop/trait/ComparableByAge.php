<?php

namespace App;

trait ComparableByAge
{
    abstract public function compare($user);

    public function isOlderThan($user)
    {
        if ($this->compare($user) == 1)
            return 'true';
        return 'false';
    }

    
    public function isYoungerThan($user)
    {
        if ($this->compare($user) == -1)
            return 'true';
        return 'false';
    }
    
    
    public function isAgeTheSame($user)
    {
        if ($this->compare($user) == 0)
            return 'true';
        return 'false';
    }
}
