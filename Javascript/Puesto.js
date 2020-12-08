$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_puesto: null,
            nom_puesto: null,
            isUpdate: false,
        }
    })

    $("#PuestoClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_puesto",
        dataValueField: "nom_puesto",
        valuePrimitive: true,
        dataSource: dataSourceEmpleadoPuesto,
        suggest: true,
        minLength: 2,
        change: function(e) {
            let value = this.dataItem();
            console.log(value);
            if(value)
            {
                viewModel.set("Entity.nom_puesto", value.nom_puesto)
                viewModel.set("Entity.isUpdate", true)
            }
        }
    });

    $("#BT_Save").click( e => {
        e.preventDefault();
        createPuesto(viewModel.get("Entity"), viewModel.get("Entity.isUpdate")).then(data => {
            alert("Registrado con Exito")
        }).fail(err => {
            alert("No se ha podido completar el guardado " + err.message)
        })
    })

    kendo.bind($("#viewModelPuesto"), viewModel)
})