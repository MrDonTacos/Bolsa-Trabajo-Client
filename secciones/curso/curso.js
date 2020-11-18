$(function() {
  $("#cursoAutoComplete").autocomplete({
    source: function(request, response) {
      $.ajax({
        url: "http://localhost:5000/api/curso",
        dataType: "json",
        type: "GET",
        data: {
          subject_name: request.term,
        },
        autoFocus: true,
        minLength: 1,
        success: function(data) {
          response($.map(data, function(item) {
            return {
                label: item.nom_curso,
                value: item.nom_curso
            }}))
          }
      });
    }
  })
});

$(function() {
  $("#cursoAutoCompleteClave").autocomplete({
    source: function(request, response) {
      $.ajax({
        url: "http://localhost:5000/api/curso",
        dataType: "json",
        type: "GET",
        data: {
          subject_name: request.term,
        },
        autoFocus: true,
        minLength: 1,
        success: function(data) {
          response($.map(data, function(item) {
            return {
                label: item.id_curso,
                value: item.id_curso
            }}))
          }
      });
    }
  })//
});

/*$(function(){
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
      _renderMenu: function( ul, items ) {
        var that = this,
          currentCategory = "";
        $.each( items, function( index, item ) {
          if ( item.nom_curso != currentCategory ) {
            ul.append( "<li class='ui-autocomplete-category'>" + item.nom_curso + "</li>" );
            currentCategory = item.nom_curso;
          }
          that._renderItemData( ul, item );
        });
      }
    });
  
    var xhr;
    $( "#cursoAutoComplete" ).catcomplete({
      delay: 0,
      source: function( request, response ) {
        var regex = new RegExp(request.term, 'i');
        if(xhr){
          xhr.abort();
        }
        xhr = $.ajax({
            url: "http://localhost:5000/api/curso",
            dataType: "json",
            cache: false,
            success: function(data) {
              response($.map(data, function(item) {
                if(regex.test(item.nom_curso)){
                  return {
                      id_curso: item.id_curso,
                      nom_curso: item.nom_curso,
                  };
                }
              }));
            }
        });
      },
      minlength:0
    });
  });*/
