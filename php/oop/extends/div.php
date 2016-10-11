<?php 

namespace tags;

require_once 'pairedtag.php';

class Div extends Pairedtag
{
    public function getName()
    {
        return 'div';
    }
}
