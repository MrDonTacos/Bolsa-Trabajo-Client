$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_curso: null,
            nom_curso: null,
            isUpdate: false,
        }
    })

    $("#experienciaAutoCompleteClave").kendoAutoComplete({
        autoBind: false,
        valuePrimitive: true,
        dataTextField: "id_experiencia",
        dataValueField: "experiencia",
        dataSource: dataSourceExperiencia,
        suggest: true,
        minLength: 2,
        change: function(e) {
            let value = this.dataItem();
            console.log(value);
            if(value)
            {
                viewModel.set("Entity.experiencia", value.nom_curso)
                viewModel.set("Entity.isUpdate", true)
            }
        }
    })

    $("#BT_Save").click( e => {
        e.preventDefault();
        createExperiencia(viewModel.get("Entity"), viewModel.get("Entity.isUpdate")).then(data => {
            alert("Registrado con Exito")
        }).fail(err => {
            alert("No se ha podido completar el guardado " + err.message)
        })
    })

    kendo.bind($("#viewModelExperiencia"), viewModel)
})