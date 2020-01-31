var url = 'http://localhost:5000/api/Tienda_Musica'
let viewModel = null;
let id = null;
let album=null;
$(document).ready(() => {
    saveArtist();
});




    const saveArtist = () => {
        
        viewModel ={
            id : ko.observable(0),
            name: ko.observable(""),
            genre: ko.observable(""),
            image: ko.observable(""),
            date: ko.observable(new Date()),
          
        };
        viewModel.save = function() {
            let plainJs = ko.toJS(viewModel);
            let jsonData = JSON.stringify(plainJs);
            console.log(jsonData);
            save(jsonData).then(() =>{
                window.history.back();
            }).fail((err) =>{
               console.log('Mala captura de datos ', err);
            });
        }
        ko.applyBindings(viewModel);
    };
    const save = (artist) =>{
        return query(`${url}`,artist,'post').then();
    };