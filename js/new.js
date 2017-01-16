function validateWD(){
		var pass = prompt('Enter password to view content',' ');
		if (!pass) {
			window.location.href = 'index.html';
		}
    if(pass == 'm3r1991'){
	    	window.location.href = 'webdev.html';
        return true;
    }else{
        window.location.href = 'index.html';
        return false;
    }
}

function validateDD(){
		var pass = prompt('Enter password to view content',' ');
		if (!pass) {
			window.location.href = 'index.html';
		}
    if(pass == 'm3r1991'){
	    	window.location.href = 'digitaldesign.html';
        return true;
    }else{
        window.location.href = 'index.html';
        return false;
    }
}