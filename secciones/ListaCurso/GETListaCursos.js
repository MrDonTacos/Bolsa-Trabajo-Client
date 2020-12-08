

//const baseurl =   "http://localhost:5000/api/curso"
//let url = `${baseurl}/curso`;
// api url 
// api url 
const api_url = 
	"http://localhost:5000/api/curso"; 

// Defining async function 
async function getapi(url) { 
	
	// Storing response 
	const response = await fetch(url); 
	
	// Storing data in form of JSON 
	var data = await response.json(); 
	console.log(data); 
	if (response) { 
		hideloader(); 
	} 
	show(data); 
} 
// Calling that async function 
getapi(api_url); 

// Function to hide the loader 
function hideloader() { 
	document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
	let tab = 
		`<tr> 
		<th>Name</th> 
		<th>Office</th> 
		</tr>`; 
    console.log(data.id_curso);
    for(var j=0; j<data.length;j++){
        console.log(data[j].id_curso);
		tab += `<tr> 
	<td>${data[j].id_curso} </td> 
	<td>${data[j].nom_curso}</td> 	 
</tr>`;
    }
	// Setting innerHTML as tab variable 
	document.getElementById("employees").innerHTML = tab; 
} 
