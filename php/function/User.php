<?php

/* namespace App\User; */

function make($age)
{
    return serialize(['age' => $age]);
}

function getAge($user)
{
    $data = unserialize($user);
    return $data['age'];
}

