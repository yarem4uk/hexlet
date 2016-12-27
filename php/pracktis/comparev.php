<?php 

function compareVersion($a, $b){
    $va = explode(".", $a);    
    $vb = explode(".", $b);    

    if ($va[0] > $vb[0])
        return 1;
    elseif ($va[0] == $vb[0])
        if ($va[1] > $vb[1])
            return 1;
        else return -1;
    elseif ($va[0] < $vb[0])
        return -1;       
    else return 0;        
}

echo compareVersion(2.4, 1.5);
