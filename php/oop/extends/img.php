<?php 

namespace tags;

require_once 'singltag.php';

class Img extends SinglTag
{
    public function getName()
    {
        return 'img';
    }
}
