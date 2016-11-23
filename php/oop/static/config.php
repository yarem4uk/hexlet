<?php 

namespace App;


class Config implements ConfigInterface
{
    private $data;
    private $fromType;

    public static function factory($path)
    {
        $info = pathinfo('path/info/file.xml');
        $ext = $info['extension'];
        if ($ext == 'xml'){

        }

    }
    public function __construct($fromType, $data)
    {
        $this->fromType = $fromType;
        $this->data = $data;
    }
    
    public function getFromType()
    {
        return $this->fromType;
    }

    public function getValue($key)
    {
        return $this->data[$key];
    }
}
