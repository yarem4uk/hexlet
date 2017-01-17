<?php

namespace Unit;

require_once 'template.php';

$html = render('index.phtml', [
    'site' => 'hexlet.io',
    'subprojects' => ['map.hexlet.io', 'battle.hexlet.io']
]);

print_r($html);
