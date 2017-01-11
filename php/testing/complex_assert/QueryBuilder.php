<?php

namespace App;

class QueryBuilder
{
    private $selectPart = '*';
    private $tablePart;
    private $whereParts = [];
    
    public static function from($table)
    {
        $builder = new QueryBuilder($table);
        return $builder;
    }

    public function __construct($table)
    {
        $this->tablePart = $table;
    }

    public function select()
    {
        $this->selectPart = implode(", ", func_get_args());
        return $this;
    }

    public function where($key, $value)
    {
        $this->whereParts[$key] = $value;
        return $this;
    }

    public function toSql()
    {
        $sqlParts = [];
        $sqlParts[] = "SELECT {$this->selectPart} FROM {$this->tablePart}";

        if ($this->whereParts) {
            $whereParts = array_map(function ($key, $value) {
                if (is_null($value)) {
                    return "$key IS NULL";
                } else {
                    return "$key = '$value'";
                }
            }, array_keys($this->whereParts), $this->whereParts);

            $wheres = implode(' AND ', $whereParts);
            $selectPart[] = "WHERE $wheres";
        }

        return implode(' ', $sqlParts);
    }
}

