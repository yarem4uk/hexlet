<?php

namespace App;

require_once '../QueryBuilder.php';

class TestQueryBuilder extends \PHPUnit_Framework_TestCase
{
    public function testDefault()
    {
        $this->assertContains('SELECT * FROM members', QueryBuilder::from('members')->toSql());
    }

    public function testWhere()
    {
        $this->assertContains("SELECT * FROM members WHERE id = '12'", QueryBuilder::from('members')->where('id', 12)->toSql());
    }


}


