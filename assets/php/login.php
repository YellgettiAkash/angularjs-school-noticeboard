<?php 

// $user=json_decode(file_get_contents('php://input'));

// var_dump($user);

$inputs =json_decode(file_get_contents('php://input'),true);

if($inputs['button'] == 'login'){
	// print_r($inputs);
	if($inputs['username'] == 'root' && $inputs['password'] == 'root'){
		echo json_encode(['token' => md5(time()),'status'=> '1','value'=>'200' ]);		
	}else{
		echo json_encode(['msg'=>'Un-Anthorized User','status'=> '0','value'=>'401' ]);		
	}
}

