$(document).ready(function () {
    $.when($.getJSON('../Menu.json', function(data) {
        for(var i in data.menu)
        { 
            if(i==0)
            $("#v-pills-tab").prepend(`<button class="nav-link" 
            id="${data.menu[i].id}" 
            data-toggle="pill"
            role="tab" aria-controls="v-pills-${data.menu[i].menuName}" 
            aria-selected="true"><i class="${data.menu[i].menuIcon}" aria-hidden="true"></i>
              ${data.menu[i].menuName}</button>`)
            else
            $("#v-pills-tab").prepend(`<button class="nav-link" 
            id="${data.menu[i].id}" 
            data-toggle="pill"
            role="tab" aria-controls="v-pills-${data.menu[i].menuName}" 
            aria-selected="true"><i class="${data.menu[i].menuIcon}" aria-hidden="true"></i>
              ${data.menu[i].menuName}</button>`)
        }
        cargarBoton();
    }),
    )

    function cargarBoton() {
    $("#BT_Curso").click(function() {
        $("#menu").load("../menubar/Curso.html")
    })
    $("#BT_Departamento").click(function() {
        $("#menu").load("../menubar/Departamento.html")
    })
    $("#BT_Documento").click(function() {
        $("#menu").load("../menubar/Documento.html")
    })
    $("#BT_Escolaridad").click(function() {
        console.log("SOmething else")
        $("#menu").load("../menubar/Escolaridad.html")
    })
    $("#BT_Materia").click(function() {
        $("#menu").load("../menubar/Materia.html")
    })
    $("#BT_Nacionalidad").click(function() {
        $("#menu").load("../menubar/Nacionalidad.html")
    })
    $("#BT_Perfil").click(function() {
        $("#menu").load("../menubar/Perfil.html")
    })
    $("#BT_Puesto").click(function() {
        $("#menu").load("../menubar/Puesto.html")
    })
    // $("#BT_Experiencia").unbind();
    // $("#BT_Experiencia").click(e => {
    //     $("#menu").load("")
    // })
    // $("#BT_Otros").unbind();
    // $("#BT_Otros").click(e => {
    //     $("#menu").load("")
    // })
    // $("#BT_Carreras").unbind();
    // $("#BT_Carreras").click(e => {
    //     $("#menu").load("")
    // })
    $("#BT_BolsaTrabajo").unbind();
    $("#BT_BolsaTrabajo").click(e => {
        $("#menu").load("../menubar/Mantenimiento_Fuerte.html")
    })
    $("#BT_BolsaTActiva").unbind();
    $("#BT_BolsaTActiva").click(e => {
        $("#menu").load("../menubar/mantenimiento_empleado.html")
    })
    $("#BT_Experiencia").click(function() {
        $("#menu").load("../menubar/Experiencia.html")
    })
    // $("#BT_BolsaTMuerta").unbind();
    // $("#BT_BolsaTMuerta").click(e => {
    //     $("#menu").load("")
    // })
}
});