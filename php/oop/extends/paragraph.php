<?php 

namespace tags;

require_once 'pairedtag.php';

class Paragraph extends Pairedtag
{
    public function getName()
    {
        return 'p';
    }
}
