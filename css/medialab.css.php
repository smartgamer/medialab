<?php
header("Content-type: text/css; charset: UTF-8");
require("../inc/lessphp/less-plugin.php");
$parser = new Less_Parser();
$parser->parseFile("../less/medialab.less");
echo $parser->getCss();
?>