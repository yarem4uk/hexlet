<?php 

namespace App;

require_once 'MailerInterface.php';

abstract class Mailer implements MailerInterface
{
    private $data;
    
    public function setVar($key, $value)
    {
        return $data[$key] = $value;
    }

    public function getAllVars()
    {
        $str = array_reduce(array_keys($this->data), function($acc, $item) {
            return $acc .= $item . ',' . $this->data[$item];
        }, '');
    }
}
