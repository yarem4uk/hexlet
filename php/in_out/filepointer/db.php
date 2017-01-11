<?php

namespace App;

class Db
{

    const KEY_LENGTH = 8;
    const VALUE_LENGTH = 100;

    const ZERO = ' ';
    private $db;   

    public function __construct($filepath)
    {
        if (!file_exists($filepath)) {
            touch($filepath);
        }

       $this->db = new \SplFileObject($filepath, 'r+');

    }


    public function get($key) 
    {
        $this->db->rewind();

        while (!$this->db->eof()) {
            $varkey = trim($this->db->fread(self::KEY_LENGTH), self::ZERO);            
            if ($varkey == $key) {
                return trim($this->db->fread(self::VALUE_LENGTH), self::ZERO);
            }
        }
    }

    public function set($key, $value) 
    {
        $this->db->rewind();

        while (!$this->db->eof()) {
            $varkey = trim($this->db->fread(self::KEY_LENGTH), self::ZERO);             
            if ($varkey == $key) {
                $this->write($value, self::VALUE_LENGTH);
                return;
            }
        }
        $this->write($key, self::KEY_LENGTH);
        $this->write($value, self::VALUE_LENGTH);
    }

    public function write($data, $len) 
    {
        $zero = $len - strlen($data);
        $this->db->fwrite($data);        
        $this->db->fwrite(str_repeat(self::ZERO, $zero));
    }

}
