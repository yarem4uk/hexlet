<?php

namespace App;

$iterator = new \GlobIterator('./test/*');

/* foreach ($iterator as $key => $file) { */
/*     echo $key . PHP_EOL; */
/*     echo $file . PHP_EOL; */
/* } */

foreach ($iterator as $path => $info) {
    print_r($info);
}
