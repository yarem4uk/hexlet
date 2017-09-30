<?php

namespace App\Template;

function render($template, $variatbles)
{
  extract($variatbles);
  ob_start();
  include $template;
  return ob_get_clean();
}
