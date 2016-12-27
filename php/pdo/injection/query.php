<?php

namespace App;

class Query
{
    private $pdo;
    private $where = [];

    public function __construct($pdo, $table, $where = [])
    {
        $this->pdo = $pdo;
        $this->table = $table;
        $this->where = $where;
    }

    public function where($key, $value)
    {
        $where = [$key => $value];
        return $this->getClone($where);
    }

    public function all()
    {
        return $this->pdo->query($this->toSql())->fetchAll();
    }

    public function toSql()
    {
        $partSql = [];
        $partSql[] = "select from {$this->table}";

        if ($this->where){
            $where = implode(' and ', array_map(function ($key, $value) {
                $quoted = $this->pdo->quote($value);
                return "$key = $quoted";
            }, array_keys($this->where), $this->where));
            $partSql[] = "where $where";
        }
        return implode(' ', $partSql);
    }

    public function getClone($where)
    {
        $mergedData = array_merge($this->where, $where);
        return new self($this->pdo, $this->table, $mergedData);
    } 
}
