let viewModel = null;
$(document).ready(() => {
    viewModel = kendo.observable({
        Entity: {

        }
    })

$("#DD_Sexo").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        {text: "HOMBRE", value: 1},
        {text: "MUJER", value: 2}
    ],
    change: function() {
        let value = this.value();
        console.log(value)
        if(value)
            viewModel.set("Entity.Sexo", value);
    }
})

$("#DT_FNacimiento").kendoDatePicker({
   format: "dd-MM-yyyy"
})

$("#DT_FechaIngreso").kendoDatePicker({
    format: "dd-MM-yyyy"
})

$("#DD_Nacionalidad").kendoComboBox({
    valuePrimitive: true,
    dataSource: dataSourceNacionalidad,
    dataTextField: "nacionalidad",
    dataValueField: "id_nacionalidad"
})
$("#DD_Perfil").kendoComboBox({
    valuePrimitive: true,
    dataSource: dataSourcePerfiles,
    dataTextField: "perfil",
    dataValueField: "id_perfil",
    index: 0,
})
$("#DD_Experiencia").kendoComboBox({
    valuePrimitive: true,
    dataSource: dataSourceEmpleadoCurso,
    dataTextField: "nom_curso",
    dataValueField: "id_curso"
})  
$("#DD_Escolaridad").kendoComboBox({
    valuePrimitive: true,
    dataSource: dataSourceEscolaridad,
    dataTextField: "escolaridad",
    dataValueField: "id_escolaridad"
})
$("#DD_Documento1").kendoComboBox({
    valuePrimitive: true,
    dataSource: dataSourceEmpleadoDocumento,
    dataTextField: "documento",
    dataValueField: "id_documento"
})
$("#DD_Estatus").kendoComboBox({
    valuePrimitive: true,
    dataSource: [
        {text: "V", value: "0001"},
        {text: "B", value: "0002"},
        {text: "M", value: "0003"}
    ],
    change: function(){
        let value = this.value();
        console.log(value)
        if(value)
            viewModel.set("Entity.Estatus", value);
    },
    dataTextField: "text",
    dataValueField: "value"
})

$("#DD_Documento2").kendoComboBox({
    valuePrimitive: true,
    dataSource: dataSourceEmpleadoDocumento,
    dataTextField: "documento",
    dataValueField: "id_documento"
})
$("#DD_Documento3").kendoComboBox({
    valuePrimitive: true,
     dataSource: dataSourceEmpleadoDocumento,
    dataTextField: "documento",
    dataValueField: "id_documento"
})
$("#CC_Curso1").kendoComboBox({
    valuePrimitive: true,
    dataSource: dataSourceCurso,
   dataTextField: "nom_curso",
   dataValueField: "id_curso"
})
$("#CC_Curso2").kendoComboBox({
    valuePrimitive: true,
    dataSource: dataSourceCurso,
   dataTextField: "nom_curso",
   dataValueField: "id_curso"
})
$("#CC_Curso3").kendoComboBox({
    valuePrimitive: true,
    dataSource: dataSourceCurso,
   dataTextField: "nom_curso",
   dataValueField: "id_curso"
})

kendo.bind($("#viewModelMantenimientoFuerte"), viewModel);

$("#BT_Save").click(e=>{
    e.preventDefault();
    console.log(viewModel)
    createMantenimientoBolsa(viewModel.get("Entity"), false).then(data=>{
        alert("Se ha registrado con exito")
    }).fail(error=>{
        alert("No se ha podido registrar correctamente")
    })
})
});


