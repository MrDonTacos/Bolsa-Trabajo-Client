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

    kendo.bind($("#viewModelDocumento"), viewModel)
})