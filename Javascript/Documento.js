var viewModel;
$(function() {
    viewModel = kendo.observable({
        Entity: {
            id_documento: null,
            documento: null,
            isUpdate: false,
        }
    })

    $("#DocumentoClave").kendoAutoComplete({
        autoBind: false,
        valuePrimitive: true,
        dataTextField: "id_documento",
        dataValueField: "documento",
        dataSource: dataSourceEmpleadoDocumento,
        suggest: true,
        minLength: 3,
        change: function(e) {
            let value = this.dataItem();
            console.log(value);
            if(value)
            {
                viewModel.set("Entity.documento", value.documento)
                viewModel.set("Entity.isUpdate", true)
            }
        }
    })

    $("#BT_Save").click( e => {
        e.preventDefault();
        createDocumento(viewModel.get("Entity"), viewModel.get("Entity.isUpdate")).then(data => {
            alert("Registrado con Exito")
        }).fail(err => {
            alert("No se ha podido completar el guardado " + err.message)
        })
    })

    kendo.bind($("#viewModelDocumento"), viewModel)
})