<?php
	$setArray = $_POST['json'];
	$name = 'ajax/box.json';
	$name2 = 'ajax/read.json';
	$fSize = filesize($name);
    $newJson = preg_replace( '/\s+/', ' ', $setArray );
	if ($fSize >= 10){	
		$boxArray = file_get_contents($name);
		$getData = json_decode($boxArray);
		$setData = json_decode($setArray);
		$combinedData = array_merge($setData, $getData);
		$jsonRaw = json_encode($combinedData);
	} else if($fSize == 0) {
		$jsonRaw = $setArray;
	}else{
		error_log("couldn't get file size", 1, "nick@unsalted.nu");
	}
	$json = preg_replace( '/\s+/', ' ', $jsonRaw );
	if ($fSize <= 10000){
	if (json_encode($json) != null) { /* sanity check */
        date_default_timezone_set('UTC');
        $msg = "saving json to box.json";
        $phperrorPath = "ajax/error.log";
        error_log('['.date("F j, Y, g:i a e O").']'.$msg."\r\n", 3,  $phperrorPath);
		$file = fopen('ajax/box.json' ,'w+');
	 	fwrite($file, $json);
	 	fclose($file);
	} else {	
	   error_log("Couldn't save to box.json", 1, "nick@unsalted.nu");
	}
	}else if($fSize >= 10000){
        if (json_encode($json) != null) { /* sanity check */
		$pathParts = pathinfo($name);
		$filePath = 'ajax/storage/';
		$rePath = $filePath.$pathParts['filename'].'_'.time().'.'.$pathParts['extension'];
		rename($name2, $rePath);
		rename($name, $name2);
		$FileHandle = fopen($name, 'w+') or die("can't create file");
	 	fwrite($FileHandle, $newJson);
		fclose($FileHandle);
        date_default_timezone_set('UTC');
        $rmsg = "reseting box.json";
        $rphperrorPath = "ajax/error.log";
        error_log('['.date("F j, Y, g:i a e O").']'.$rmsg."\r\n", 3,  $rphperrorPath);
        } else{ error_log("Couldn't save to box.json during reset", 1, "nick@unsalted.nu");}
	} else {
		error_log("couldn't reset file at all", 1, "nick@unsalted.nu");
	}
?>