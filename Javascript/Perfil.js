$(function() {
    let viewModel = kendo.observable({
        Entity: {
            id_perfil: null,
            perfil: null,
            isUpdate: false,
        }
    })

    $("#PerfilClave").kendoAutoComplete({
        autoBind: false,
        dataTextField: "id_perfil",
        dataValueField: "perfil",
        valuePrimitive: true,
        dataSource: dataSourcePerfiles,
        suggest: true,
        minLength: 3,
        change: function(e) {
            let value = this.dataItem();
            console.log(value);
            if(value)
            {
                viewModel.set("Entity.perfil", value.perfil)
                viewModel.set("Entity.isUpdate", true)
            }
        }
    })

    $("#BT_Save").click( e => {
        e.preventDefault();
        createPerfil(viewModel.get("Entity"), viewModel.get("Entity.isUpdate")).then(data => {
            alert("Registrado con Exito")
        }).fail(err => {
            alert("No se ha podido completar el guardado " + err.message)
        })
    })

    kendo.bind($("#viewModelPerfil"), viewModel)
})