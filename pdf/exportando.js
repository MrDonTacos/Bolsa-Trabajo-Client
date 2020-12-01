/////ESTE ESTA FUNCIONANDO
$("#btnExport").click(function () {
  let tab = 
  ` Instituto Tecnológico de Mexicali
    Bolsa de trabajo
    Mantenimiento Empleado`; 
  var doc = new jsPDF('l','mm','a1',);//MODIFICAR LA MEDIDA A1 PARA HACER MAS GRANDE O CHICA
    doc.text(tab, 20, 20);
    doc.setFontSize(80);

    var elem = document.getElementById("basic-table");
    var res = doc.autoTableHtmlToJson(elem);

  doc.autoTable(res.columns, res.data, {
    startY: false, 
    theme: 'grid',  
    //tableWidth: 'auto', 
    columnWidth: 'wrap', 
    showHeader: 'everyPage',
    columnStyles: {
      0: {columnWidth: '100'}
    },
    headerStyles: {theme: 'grid'},
    styles: {overflow: 'linebreak', columnWidth: '100', font: 'arial', fontSize: 18, cellPadding: 4, overflowColumns: 'linebreak'},
      //startY: 50
    });
  doc.save('table.pdf');
});