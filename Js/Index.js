const url = 'http://localhost:5000/api/Tienda_Musica/'
let viewModel = null;
$(document).ready(() => {
    cargarArtistas();
    cargarArtista();
});

const cargarArtista = () => {
    query(`${url}Name`).then((data) => {
      viewModel.artistas(data);
    })
}
        const cargarArtistas= () => {

            
            viewModel = {
                artists: ko.observableArray([])
            };


            viewModel.artistas = function (data) {
                let artists = data.map( (g) => { return g;});
                artists.unshift("Artistas");
                viewModel.artists(artists);
                
            }
            ko.applyBindings(viewModel);
        };

        


