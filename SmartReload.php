<?php
$List = new RecursiveIteratorIterator(new RecursiveDirectoryIterator("."));
$count = 0;
foreach ($List as $Current) {
	$count = $count + filemtime($Current);
}
echo $count;
?>