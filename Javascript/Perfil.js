$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_curso: null,
            nom_curso: null
        }
    })

    $("#PerfilNombre").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_perfil",
        dataValueField: "perfil",
        dataSource: dataSourcePerfiles,
        suggest: true,
        minLength: 3,
    })

    $("#PerfilClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_perfil",
        dataValueField: "id_perfil",
        dataSource: dataSourcePerfiles,
        suggest: true,
        minLength: 3,
    })

    kendo.bind($("#viewModelCurso"), viewModel)
})