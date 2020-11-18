const UrlCurso = 'http://localhost:5000/api/curso/';

var formulario = document.getElementById('loginCurso');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch(UrlCurso,{
        method: 'POST',
        //contentType:'application/json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_curso: datos.get('claveCurso'),
            nom_curso: datos.get('nombreCurso')
        })
    })
    .then( res => res.json())
    .then( data => {
        Swal.fire(data);
        console.log(data);
    });
});