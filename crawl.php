<?php
    $dir    = 'css';
    $files = scandir($dir);
    $all = implode("\n", $files);
    echo $all;
