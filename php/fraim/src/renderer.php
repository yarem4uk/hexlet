<?php

namespace App\Renderer;

require_once 'template.php';

function render($filepath, $params = [])
{
  $parts = [getcwd(), 'resources', 'views', $filepath];
      $templatepath = implode($parts, DIRECTORY_SEPARATOR) . '.phtml';
      return \App\Template\render($templatepath, $params);
}
