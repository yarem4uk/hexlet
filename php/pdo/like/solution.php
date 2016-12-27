<?php

namespace App;


function like($pdo, $params)
{
    $sqlPart = "select id from users";

    if (empty($params)) {
        $sql = $sqlParts;
    } else {
        $where = array_map(function ($key) {
            return $key . " like ?";
        }, array_keys($params));
        $sql = $sqlPart . ' ' . "where" . ' ' .  implode(' or ', $where);
    }
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array_values($params)); 
    return $stmt->fetchAll(\PDO::FETCH_COLUMN);

}

