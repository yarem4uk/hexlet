<?php

namespace App;

require_once 'ddlManagerInterface.php';

class DDLManager implements DDLManagerInterface 
{
    private $pdo;

    public function __construct($dsn, $user = null, $pass = null)
    {
        $options = [
            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION
        ];

        $this->pdo = new \PDO($dsn, $user, $pass, $options);
    }


    public function createTable($table, array $params)
    {
        $sqlParts = [];
        $sqlParts[] = "create table {$table} (";

        $fildsParts = array_map(function ($key, $value) {
            return "{$key} {$value}";
        }, array_keys($params), $params);

        $sqlParts[] = implode(",\n", $fildsParts); 

        $sqlParts[] = ")";

        $sql = implode("\n", $sqlParts);

        return $this->pdo->exec($sql);
    }

    public function getConnection()
    {
        return $this->pdo;
    }
}
