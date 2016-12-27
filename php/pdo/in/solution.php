<?php

namespace App;


function where($pdo, $params)
{
    $sqlPart[] = "select id from users";

    if (!empty($params)) {

        $where = array_reduce(array_keys($params), function ($acc, $item) use ($params) {
        
            if (!empty($params[$item])) {
                $in = implode(', ', array_fill(0, sizeof($params[$item]), '?'));
                $acc[] =  $item . " " . "in" . " " . "({$in})"; 
                return $acc;
            }
            return $acc;
        }, []);

        if (!empty($where)) {
            $sqlPart[] = 'where';
            $sqlPart[] = implode(' or ', $where);
        }
    }

    $sqlPart[] = "order by id";
    $sql =  implode(' ', $sqlPart);

    $in = array_reduce($params, function ($acc, $item) {
    
        if (!is_array($item)) {
            $acc[] = $item;
        } else { 
            foreach ($item as $value) {
                $acc[] = $value;
            }
        }
        return $acc;
    }, []);

    $stmt = $pdo->prepare($sql); 
    $stmt->execute($in);
    return $stmt->fetchAll(\PDO::FETCH_COLUMN); 
    
}

