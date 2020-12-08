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

    kendo.bind($("#viewModelNacionalidad"), viewModel)
})