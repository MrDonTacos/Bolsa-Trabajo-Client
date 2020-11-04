const url = 'http://localhost:5000/api/Albums';
let viewModel = null;

$(document).ready(()=>{
    init();
});

    const init = () => {

        
        viewModel = {
            Id : ko.observable(0),
            Title : ko.observable(""),
            price: ko.observable(0).extend({numeric: 2}),
            Image : ko.observable(""),
            ReleaseDate : ko.observable(new Date()),
            Time : ko.observable(""),
            Genre : ko.observable(""),
            MusicianRefId : ko.observable(0)
        };

        viewModel.save = function (){
            let plainJs = ko.toJS(viewModel);
            plainJs.price = parseFloat(plainJs.price);
            plainJs.MusicianRefId = parseInt(plainJs.MusicianRefId);
            let jsonData = JSON.stringify(plainJs);
            console.log(jsonData);
            save(jsonData).then(() => {
                window.history.back();
            });
        }

        //viewModel.musician = function(data){
        //    viewModel.Musician(data);
        //}
        ko.applyBindings(viewModel);
    };

    const save = (data) => {
        return query(`${url}`,data,'post').then();
    };

   
    