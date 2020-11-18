const Url = 'http://localhost:5000/api/documento/';

var formulario = document.getElementById('loginCurso');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('http://localhost:5000/api/documento/',{
        method: 'POST',
        //contentType:'application/json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_documento: datos.get('claveCurso'),
            documento: datos.get('nombreCurso')
        })
    })
    .then( res => res.json())
    .then( data => {
        alert(data);
        console.log(data);
    });
});