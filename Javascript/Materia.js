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
        dataTextField: "id",
        valuePrimitive: true,
        dataValueField: "materianombre",
        dataSource: dataSourceMateria,
        suggest: true,
        minLength: 3,
        change: function(e) {
            let value = this.dataItem();
            console.log(value);
            if(value)
            {
                viewModel.set("Entity.materianombre", value.materianombre)
                viewModel.set("Entity.isUpdate", true)
            }
        }
    })

    kendo.bind($("#viewModelMateria"), viewModel)
})