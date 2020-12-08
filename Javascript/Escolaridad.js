$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_escolaridad: null,
            escolaridad: null,
            isUpdate: false,
        }
    })

    $("#EscolaridadClave").kendoAutoComplete({
        autoBind: false,
        valuePrimitive: true,
        dataTextField: "id_escolaridad",
        dataValueField: "escolaridad",
        dataSource: dataSourceEscolaridad,
        suggest: true,
        minLength: 2,
        change: function(e) {
            let value = this.dataItem();
            console.log(value);
            if(value)
            {
                viewModel.set("Entity.escolaridad", value.escolaridad)
                viewModel.set("Entity.isUpdate", true)
            }
        }
    })

    $("#BT_Save").click( e => {
        e.preventDefault();
        createEscolaridad(viewModel.get("Entity"), viewModel.get("Entity.isUpdate")).then(data => {
            alert("Registrado con Exito")
        }).fail(err => {
            alert("No se ha podido completar el guardado " + err.message)
        })
    })

    kendo.bind($("#viewModelEscolaridad"), viewModel)
})