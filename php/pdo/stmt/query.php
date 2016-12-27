<?php

namespace App;

class Query 
{
    private $pdo;
    private $table;
    private $data = [
        'select' => '*',
        'where' => []
    ];
    
    public function __construct($pdo, $table, $data = null)
    {
        $this->pdo = $pdo;
        $this->table = $table;
        if ($data) {
            $this->data = $data;
        }
    }

    public function count()
    {
        $stmt = $this->pdo->query($this->toSql());
        return $stmt;
    }

    public function each($func)
    {

    }
    
    public function select(...$arguments)
    {
        $select = implode(', ', $arguments);
        return $this->getClone(['select' => $select]);
    }

    public function where($key, $value)
    {
        $data = ['where' => array_merge($this->data['where'], [$key => $value])];
        return $this->getClone($data);
    }
    
    public function all()
    {
        return $this->pdo->query($this->toSql())->fetchAll();
    }

    public function toSql()
    {
        $sqlParts = [];
        $sqlParts[] = "select {$this->data['select']} from {$this->table}";
        if($this->data['where']) {
            $where = $this->buildWhere();
            $sqlParts[] = "where $where";
        }
        
        return implode(' ', $sqlParts);
    }

    private function buildWhere()
    {
        return implode(' and ', array_map(function ($key, $value) {
            $quotedValue = $this->pdo->quote($value);
            return "$key = $quotedValue";
        }, array_keys($this->data['where']), $this->data['where']));
    }

    private function getClone($data)
    {
        $mergedData = array_merge($this->data, $data);
        return new self($this->pdo, $this->table, $mergedData);
    }
}
