<?php 

header('Content-Type: application/json');

$arrayName = array(
	array(
		'ID' => 1,
		'product' => 'Monitor',
		'value' => 'U$ 200'
	),
	array(
		'ID' => 2,
		'product' => 'iPhone',
		'value' => 'U$ 899' 
	),
	array(
		'ID' => 3,
		'product' => 'Mouse',
		'value' => 'U$ 23' 
	)
);


echo json_encode($arrayName);