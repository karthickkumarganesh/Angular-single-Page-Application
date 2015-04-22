<?php
error_reporting(0);
$conn=mysql_connect('localhost','root','') or die("cant connect");
mysql_select_db('angular',$conn);
$userid=$_GET['userid'];
$select=mysql_query("select * from users where id='$userid'");
$result=mysql_fetch_assoc($select);
print_r(json_encode($result));