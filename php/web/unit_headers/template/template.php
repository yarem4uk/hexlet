<?php
 namespace App;

function render($template, $variables)
{
    extract($variables);
    ob_start();
    include $template;
    return ob_get_clean();
}
