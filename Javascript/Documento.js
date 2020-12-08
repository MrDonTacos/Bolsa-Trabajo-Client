$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_curso: null,
            nom_curso: null
        }
    })

    $("#DocumentoNombre").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_documento",
        dataValueField: "documento",
        dataSource: dataSourceEmpleadoDocumento,
        suggest: true,
        minLength: 3,
    })

    $("#DocumentoClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_documento",
        dataValueField: "id_documento",
        dataSource: dataSourceEmpleadoDocumento,
        suggest: true,
        minLength: 3,
    })

    kendo.bind($("#viewModelCurso"), viewModel)
})