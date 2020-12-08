$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_curso: null,
            nom_curso: null
        }
    })

    $("#DepartamentoNombre").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_depto",
        dataValueField: "nom_depto",
        dataSource: dataSourceEmpleadoDepartamento,
        suggest: true,
        minLength: 3,
    })

    $("#DepartamentoClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_depto",
        dataValueField: "id_depto",
        dataSource: dataSourceEmpleadoDepartamento,
        suggest: true,
        minLength: 3,
    })

    kendo.bind($("#viewModelCurso"), viewModel)
})