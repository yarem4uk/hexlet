<?php 

namespace App;

class BaseModel 
{
    public static function getTableName()
    {
        $arr = explode("\\", static::class);
        return strtolower(end($arr));
    }
}
