$(function(){
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
      _renderMenu: function( ul, items ) {
        var that = this,
          currentCategory = "";
        $.each( items, function( index, item ) {
          if ( item.documento != currentCategory ) {
            ul.append( "<li class='ui-autocomplete-category'>" + item.documento + "</li>" );
            currentCategory = item.documento;
          }
          that._renderItemData( ul, item );
        });
      }
    });
  
    var xhr;
    $( "#valorGurdado" ).catcomplete({
      delay: 0,
      source: function( request, response ) {
        var regex = new RegExp(request.term, 'i');
        if(xhr){
          xhr.abort();
        }
        xhr = $.ajax({
            url: "http://localhost:5000/api/documento",
            dataType: "json",
            cache: false,
            success: function(data) {
              response($.map(data, function(item) {
                if(regex.test(item.documento)){
                  return {
                      id_documento: item.id_documento,
                      documento: item.documento,
                  };
                }
              }));
            }
        });
      },
      minlength:0
    });
  });
