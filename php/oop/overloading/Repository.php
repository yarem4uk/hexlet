<?php

namespace App;

class Repository
{
    public $tableName;

    public function __construct($tableName)
    {
        $this->tableName = $tableName;
    }

    public function __call($name, $arg)
    {
        preg_match_all("/(?<=By).*/", $name, $mat);
        $fild_name = strtolower(preg_replace("/([a-z])([A-Z])/", "$1_$2", $mat[0][0]));
        var_dump($arg);
        return $this->where($fild_name, $arg[0]);
    }

    public function where($fieldName, $value)
    {
        var_dump($value);
        $format = "select * from %s where %s = '%s'";
        return sprintf(
            $format,
            $this->tableName,
            $fieldName,
            $value
        );
    }
}
