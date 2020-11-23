function botonEliminar() {
    //const UrlCurso = 'http://localhost:5000/api/curso/';
    let url = `${baseurl}/curso/`;

    var formulario = document.getElementById('loginCurso');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
    
        var datos = new FormData(formulario);
    
        fetch(url+datos.get('claveCurso'),{
            method: 'DELETE',
            contentType:'application/json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_curso: datos.get('claveCurso')
            })
        })
        .then( res => res.json())
        .then( data => {
            Swal.fire(data);
            console.log(data);
        });
    });
}