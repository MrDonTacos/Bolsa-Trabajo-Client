function botonActualizar() {
    //const urlCurso2 = 'http://localhost:5000/api/curso/';
    let url = `${baseurl}/curso/`;
    var formulario = document.getElementById('loginCurso');
    //const UrlCurso = 'http://localhost:5000/api/curso/';

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
    
        var datos = new FormData(formulario);
    console.log("porobando con url es "+url+datos.get('claveCurso'));
        fetch(url+datos.get('claveCurso'), {
            method: 'PUT',
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
            //window.location.reload();
        });
    });
}

/*$('#subidacambios').click(function(){
    /*var formularios = document.getElementById('loginCurso');
    var dato = new FormData(formularios);

let data = {id_curso: "0001",
nom_curso: "I0U1OIJOJ"};*/

/*

    let data = {id_curso: "0001",
    nom_curso: "I0U1OIJOJ"};
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:5000/api/curso/'+"0001",
        contentType: 'application/json',
        data: JSON.stringify(data), // access in body
    }).done(function () {
        console.log('SUCCESS');
    }).fail(function (msg) {
        console.log('FAIL');
    }).always(function (msg) {
        console.log('ALWAYS');
    });
    });*/


/*
function botonActualizar() {
    var formularios = document.getElementById('loginCurso');
    var dato = new FormData(formularios);

let data = {id_curso: "0001",
nom_curso: "I0U1OIJOJ"};

$.ajax({
    type: 'PUT',
    url: 'http://localhost:5000/api/curso/'+"0001",
    contentType: 'application/json',
    data: JSON.stringify(data), // access in body
}).done(function () {
    console.log('SUCCESS');
}).fail(function (msg) {
    console.log('FAIL');
}).always(function (msg) {
    console.log('ALWAYS');
});
}

/*

function botonActualizar() {
    const UrlCurso2 = 'http://localhost:5000/api/curso/';

var formularios = document.getElementById('loginCurso');

    formularios.addEventListener('submit', function(e){
        e.preventDefault();
    
        var dato = new FormData(formularios);
    
        fetch(UrlCurso2+dato.get('claveCurso'),{
            method: 'PUT',
            //contentType:'application/json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_curso: dato.get('claveCurso'),
                nom_curso: dato.get('nombreCurso')
            })
        })
        .then( res => res.json())
        .then( data => {
            Swal.fire(data);
            console.log(data);
        });
    });
}*/