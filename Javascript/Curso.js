$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_curso: null,
            nom_curso: null
        }
    })

    $("#cursoAutoCompleteNombre").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_curso",
        dataValueField: "nom_curso",
        dataSource: dataSourceCurso,
        suggest: true,
        minLength: 3,
    })

    $("#cursoAutoCompleteClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_curso",
        dataValueField: "id_curso",
        dataSource: dataSourceCurso,
        suggest: true,
        minLength: 3,
    })

    kendo.bind($("#viewModelCurso"), viewModel)
})