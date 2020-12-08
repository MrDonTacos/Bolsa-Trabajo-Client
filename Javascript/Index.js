let viewModel = null;
$(document).ready(() => {
$("#DD_Sexo").kendoDropDownList({
    dataTextField: "text",
    dataValueFiedl: "v",
    dataSource: [
        {text: "HOMBRE", value: 1},
        {text: "MUJER", value: 2}
    ]
})

$("#DT_FNacimiento").kendoDatePicker({
   format: "dd-MM-yyyy"
})

$("#DT_FechaIngreso").kendoDatePicker({
    format: "dd-MM-yyyy"
})

$("#DD_Nacionalidad").kendoComboBox({
    dataSource: dataSourceNacionalidad,
    dataTextField: "nacionalidad",
    dataValueField: "id_nacionalidad"
})
$("#DD_Perfil").kendoComboBox({
    dataSource: dataSourcePerfiles,
    dataTextField: "perfil",
    dataValueField: "id_perfil"
})
$("#DD_Experiencia").kendoComboBox({
    dataSource: dataSourceEmpleadoCurso,
    dataTextField: "nom_curso",
    dataValueField: "id_curso"
})  
$("#DD_Escolaridad").kendoComboBox({
    dataSource: dataSourceEscolaridad,
    dataTextField: "nom_curso",
    dataValueField: "id_curso"
})
$("#DD_Documento1").kendoComboBox({
    dataSource: dataSourceEmpleadoDocumento,
    dataTextField: "documento",
    dataValueField: "id_documento"
})
$("#DD_Estatus").kendoComboBox({
    dataSource: [
        {text: "V", value: 0001},
        {text: "B", value: 0002},
        {text: "M", value: 0003}
    ],
    dataTextField: "text",
    dataValueField: "value"
})
$("#DD_Documento2").kendoComboBox({
    dataSource: dataSourceEmpleadoDocumento,
    dataTextField: "documento",
    dataValueField: "id_documento"
})
$("#DD_Documento3").kendoComboBox({
     dataSource: dataSourceEmpleadoDocumento,
    dataTextField: "documento",
    dataValueField: "id_documento"
})
$("#CC_Curso1").kendoComboBox({
    dataSource: dataSourceCurso,
   dataTextField: "nom_curso",
   dataValueField: "id_curso"
})
$("#CC_Curso2").kendoComboBox({
    dataSource: dataSourceCurso,
   dataTextField: "nom_curso",
   dataValueField: "id_curso"
})
$("#CC_Curso3").kendoComboBox({
    dataSource: dataSourceCurso,
   dataTextField: "nom_curso",
   dataValueField: "id_curso"
})
$("#EExperiencia").kendoComboBox({
    dataSource: dataSourceExperiencia,
   dataTextField: "id_experiencia",
   dataValueField: "experiencia"
})
});


