$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_curso: null,
            nom_curso: null
        }
    })

    $("#EscolaridadNombre").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_escolaridad",
        dataValueField: "nom_escolaridad",
        dataSource: dataSourceEscolaridad,
        suggest: true,
        minLength: 3,
    })

    $("#EscolaridadClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_escolaridad",
        dataValueField: "id_escolaridad",
        dataSource: dataSourceEscolaridad,
        suggest: true,
        minLength: 3,
    })

    kendo.bind($("#viewModelCurso"), viewModel)
})