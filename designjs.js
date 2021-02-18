function makeGrid(){
	const gridHeight=document.getElementById('inputHeight').value;
	const gridWidth=document.getElementById('inputWidth').value;
	const table=document.getElementById('pixelCanvas');
	
	tables='';
	
	for(let i=0;i<gridHeight; i++){
		tables=tables+"<tr>";

		for(let j=0;j<gridWidth; j++){
		tables=tables+"<td onclick='this.style.backgroundColor=setColor()' ></td>";
	}
		tables=tables+"</tr>";
	}
	table.innerHTML=tables;
	return false;
}

function setColor() {
	
	const getColor=document.getElementById('colorPicker').value;
	return getColor;
}


// reset the Pixel Art Maker
function reset(){
    location.reload(true);
}

resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);