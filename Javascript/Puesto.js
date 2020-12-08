$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_curso: null,
            nom_curso: null
        }
    })

    $("#PuestoNombre").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_puesto",
        dataValueField: "nom_puesto",
        dataSource: dataSourceEmpleadoPuesto,
        suggest: true,
        minLength: 3,
    })

    $("#PuestoClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_puesto",
        dataValueField: "id_puesto",
        dataSource: dataSourceEmpleadoPuesto,
        suggest: true,
        minLength: 3,
    });

    kendo.bind($("#viewModelCurso"), viewModel)
})