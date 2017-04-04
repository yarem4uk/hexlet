<?php

namespace App;

interface DDLManangerInterface
{
    public function __construct($dsn, $user = null, $pass = null);
    public function createTable($table, array $params);
}
