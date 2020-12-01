var specialElementHandler = {
    "#editor":function(element, renderer){
        return true;
    }
};

function crearPDF (){
   // var doc = new jsPDF;
    /*doc.fromHTML($("#employees").html(),15,15,{
        "width":170,
        "elementHandlers":specialElementHandler
        
    });*/
    
    doc.fromHTML($('#employees').get(0), 15, 15, { 'width': 170,'elementHandlers': specialElementHandler });
    doc.save("reporte.pdf");
    /*
    var doc = new jsPDF();
    var specialElementHandlers = {
    '#editor': function (element, renderer) {
    return true;
    }
    };
    
    $(document).ready(function() {
    $('#btn').click(function () {
    doc.fromHTML($('#employees').html(), 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
    });
    doc.save('sample-content.pdf');
    });
    });*/

}
