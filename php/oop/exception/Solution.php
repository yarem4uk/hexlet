<?php

namespace File;

require_once 'FileException.php';
require_once 'FileNoteFoundException.php';

function read($path)
{
    try {
        if (!file_exists($path)){
            /* throw new FileException('file doesn,t exist'); */
            throw new Exceptions\FileNoteFoundException('file doesn,t exist');
        }
        $bodies = file_get_contents($path);
        return $bodies;
    /* } catch (\Exception $e){ */
    } catch (Exceptions\FileNoteFoundException $e){
    /* } catch (FileException $e){ */
        echo $e->getMessage();
        /* return 'hellow'; */
    }
};

echo read('path/to/file');
