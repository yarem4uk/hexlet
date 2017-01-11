<?php

namespace App;

require_once '../unit.php';

class TestIsOdd extends \PHPUnit_Framework_TestCase
{
    public function testIsOdd()
    {
        $this->assertTrue(isOdd(1));
        $this->assertFalse(isOdd(4));
        $this->assertFalse(isOdd(4));
    }

}
