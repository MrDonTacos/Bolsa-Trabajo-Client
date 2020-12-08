$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id: null,
            materianombre: null,
            isUpdate: false,
        }
    })

    $("#MateriaClave").kendoAutoComplete({
        autoBind: false,
        valuePrimitive: true,
        dataTextField: "id",
        dataValueField: "materianombre",
        dataSource: dataSourceMateria,
        suggest: true,
        minLength: 2,
        change: function() {
            let value = this.dataItem();
            if(value)
            {
                viewModel.set("Entity.materianombre", value.materianombre)
                viewModel.set("Entity.isUpdate", true)
            }
        }
    })

    $("#BT_Save").click( e => {
        e.preventDefault();
        console.log(viewModel)
        viewModel.set("Entity.id", parseInt(viewModel.get("Entity.id")))
        createMateria(viewModel.get("Entity"), viewModel.get("Entity.isUpdate")).then(data => {
            alert("Registrado con Exito")
        }).fail(err => {
            alert("No se ha podido completar el guardado " + err.message)
        })
    })

    kendo.bind($("#viewModelMateria"), viewModel)
})