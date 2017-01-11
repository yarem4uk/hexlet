<?php

namespace App;

require_once '../QueryBuilder.php';

class TestQueryBuilder extends \PHPUnit_Framework_TestCase
{
    public function testDefault()
    {
        /* $query = QueryBuilder::from('members')->toSql(); */
        $this->assertContains('select * from members', QueryBuilder::from('members')->toSql());
        $this->assertContains("select * from members where id = '12'", QueryBuilder::from('members')->where('id', 12)->toSql());
    }
}

