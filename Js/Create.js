var url = 'http://localhost:5000/api/Tienda_Musica/'
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
            date: ko.observable(new Date()),
            image: ko.observable(""),
          
        };
        viewModel.save = function() {
            let plainJs = ko.toJS(viewModel);
            let jsonData = JSON.stringify(plainJs);
            console.log(jsonData);
            console.log(plainJs);
            save(jsonData).then(() =>{
                window.history.back();
            }).fail((err) =>{
               console.log('Mala captura de dattos ', err);
            });
        }
        ko.applyBindings(viewModel);
    };
    const save = (artist) =>{
        return query(`${url}`,artist,'post').then();
    };