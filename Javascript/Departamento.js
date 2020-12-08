$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_departamento: null,
            nom_departamento: null,
            isUpdate: false,
        }
    })

    $("#DepartamentoClave").kendoAutoComplete({
        autoBind: false,
        valuePrimitive: true,
        dataTextField: "id_departamento",
        dataValueField: "nom_departamento",
        dataSource: dataSourceEmpleadoDepartamento,
        suggest: true,
        minLength: 2,
        change: function(e) {
            let value = this.dataItem();
            console.log(value);
            if(value)
            {
                viewModel.set("Entity.nom_departamento", value.nom_departamento)
                viewModel.set("Entity.isUpdate", true)
            }
        }
    })

    kendo.bind($("#viewModelDepartamento"), viewModel)
})