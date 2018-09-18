var inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
	var fileList = this.files; 
	f=fileList[0];
	var reader = new FileReader();
	reader.onload = onReaderLoad;
	reader.readAsText(f);
}

function onReaderLoad(event){
    //alert(event.target.result);
    var obj = JSON.parse(event.target.result);
    var layout={ 
			 	title: 'GDP growth rate',
    	        xaxis: {  title: 'year' }, 
    	        yaxis: { title: 'growth rate' },
    	        height: 600,
    	        width: 800
    	    }

    Plotly.plot( 'tester', obj, layout);
    
    var source=document.createElement("H6");
    var text=document.createTextNode("Data from CIA World FactBook");
    source.appendChild(text);
    document.body.appendChild(source);
}
