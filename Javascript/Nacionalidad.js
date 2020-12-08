$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_curso: null,
            nom_curso: null
        }
    })

    $("#NacionalidadNombre").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_nacionalidad",
        dataValueField: "nacionalidad",
        dataSource: dataSourceNacionalidad,
        suggest: true,
        minLength: 3,
    })

    $("#NacionalidadClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_nacionalidad",
        dataValueField: "id_nacionalidad",
        dataSource: dataSourceNacionalidad,
        suggest: true,
        minLength: 3,
    })

    kendo.bind($("#viewModelCurso"), viewModel)
})