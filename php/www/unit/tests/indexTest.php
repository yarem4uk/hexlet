<?php

namespace App;

require_once 'index.php';

class IndexTest extends \PHPUnit_Framework_TestCase
{

    public function testServer()
    {
        $result = file_get_contents("http://localhost:3000/companies");
        $this->assertEquals('companies list', strtolower($result));
    }

}
