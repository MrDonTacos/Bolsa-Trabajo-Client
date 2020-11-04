let viewModel = null;
$(document).ready(() => {
//     cargarArtistas();
//     cargarArtista();
// });

// const cargarArtista = () => {
//     query(`${url}Name`).then((data) => {
//       viewModel.artistas(data);
//     })
// }
//         const cargarArtistas= () => {

            
//             viewModel = {
//                 artists: ko.observableArray([])
//             };


//             viewModel.artistas = function (data) {
//                 let artists = data.map( (g) => { return g;});
//                 artists.unshift("Artistas");
//                 viewModel.artists(artists);
                
//             }
//             ko.applyBindings(viewModel);
        
$("#teloficina").kendoComboBox({
    dataSource: dataSourceEmpleadoCurso,
    dataTextField: "nom_curso",
    dataValueField: "id_curso"
})

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
});

        


