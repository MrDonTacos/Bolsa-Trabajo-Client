$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_curso: null,
            nom_curso: null
        }
    })

    $("#MateriaNombre").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id",
        dataValueField: "materianombre",
        dataSource: dataSourceMateria,
        suggest: true,
        minLength: 3,
    })

    $("#MateriaClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_curidso",
        dataValueField: "materianombre",
        dataSource: dataSourceMateria,
        suggest: true,
        minLength: 3,
    })

    kendo.bind($("#viewModelCurso"), viewModel)
})