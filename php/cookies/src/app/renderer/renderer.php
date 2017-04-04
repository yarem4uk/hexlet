<?php

namespace App\Renderer;

require_once '../src/app/template/template.php';

function render($filepath, $params = [])
{
    $templatepath = '/home/alex/hexlet/php/cookies/' . 'resources' . DIRECTORY_SEPARATOR . 'views' . DIRECTORY_SEPARATOR . $filepath . '.phtml'; 
    return \App\Template\render($templatepath, $params);
}
