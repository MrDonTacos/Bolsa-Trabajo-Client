$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_curso: null,
            nom_curso: null,
            isUpdate: false,
        }
    })

    $("#cursoAutoCompleteClave").kendoAutoComplete({
        autoBind: false,
        valuePrimitive: true,
        dataTextField: "id_curso",
        dataValueField: "nom_curso",
        dataSource: dataSourceCurso,
        suggest: true,
        minLength: 2,
        change: function(e) {
            let value = this.dataItem();
            console.log(value);
            if(value)
            {
                viewModel.set("Entity.nom_curso", value.nom_curso)
                viewModel.set("Entity.isUpdate", true)
            }
        }
    })

    $("#BT_Save").click( e => {
        e.preventDefault();
        createCurso(viewModel.get("Entity"), viewModel.get("Entity.isUpdate")).then(data => {
            alert("Registrado con Exito")
        }).fail(err => {
            alert("No se ha podido completar el guardado " + err.message)
        })
    })

    kendo.bind($("#viewModelCurso"), viewModel)
})