$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_nacionalidad: null,
            nacionalidad: null,
            isUpdate: false,
        }
    })

    $("#NacionalidadClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_nacionalidad",
        dataValueField: "nacionalidad",
        valuePrimitive: true,
        dataSource: dataSourceNacionalidad,
        suggest: true,
        minLength: 2,
        change: function(e) {
            let value = this.dataItem();
            console.log(value);
            if(value)
            {
                viewModel.set("Entity.nacionalidad", value.nacionalidad)
                viewModel.set("Entity.isUpdate", true)
            }
        }
    })

    $("#BT_Save").click( e => {
        e.preventDefault();
        createNacionalidad(viewModel.get("Entity"), viewModel.get("Entity.isUpdate")).then(data => {
            alert("Registrado con Exito")
        }).fail(err => {
            alert("No se ha podido completar el guardado " + err.message)
        })
    })

    kendo.bind($("#viewModelNacionalidad"), viewModel)
})