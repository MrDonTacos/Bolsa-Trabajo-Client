/////ESTE ESTA FUNCIONANDO
$("#btnExport").click(function () {
  var doc = new jsPDF('l','mm','a1',);//MODIFICAR LA 
    doc.text("From HTML", 14, 20);
  doc.text(14, 25, "Octonyan loves jsPDF");
    var elem = document.getElementById("basic-table");
    var res = doc.autoTableHtmlToJson(elem);
    
  
  doc.setFontSize(40);


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
    styles: {overflow: 'linebreak', columnWidth: '100', font: 'arial', fontSize: 10, cellPadding: 4, overflowColumns: 'linebreak'},
      //startY: 50
    });
  doc.save('table.pdf');

  //
//doc.save('table.pdf');
  
});

/*function getPDF(selector) {
    kendo.drawing.drawDOM($(selector)).then(function(group){
      kendo.drawing.pdf.saveAs(group, "Invoice.pdf");
    });
  }
  
  function getPrint(selector) {
    w = window.open();
    w.document.write($(selector).html());
    w.print();
    w.close();
  }
  
  $(document).ready(function() {
    var data = [
      { productName: "QUESO CABRALES", unitPrice: 21, qty: 5 },
      { productName: "ALICE MUTTON", unitPrice: 39, qty: 7 },
      { productName: "GENEN SHOUYU", unitPrice: 15.50, qty: 3 },
      { productName: "CHARTREUSE VERTE", unitPrice: 18, qty: 1 },
      { productName: "MASCARPONE FABIOLI", unitPrice: 32, qty: 2 },
      { productName: "VALKOINEN SUKLAA", unitPrice: 16.25, qty: 3 }
    ];
    var schema = {
      model: {
        productName: { type: "string" },
        unitPrice: { type: "number", editable: false },
        qty: { type: "number" }
      },
      parse: function (data) {
        $.each(data, function(){
          this.total = this.qty * this.unitPrice;
        });
        return data;
      }
    };
    var aggregate = [
      { field: "qty", aggregate: "sum" },
      { field: "total", aggregate: "sum" }
    ];
    var columns = [
      { field: "productName", title: "Product", footerTemplate: "Total"},
      { field: "unitPrice", title: "Price", width: 120},
      { field: "qty", title: "Pcs.", width: 120, aggregates: ["sum"], footerTemplate: "#=sum#" },
      { field: "total", title: "Total", width: 120, aggregates: ["sum"], footerTemplate: "#=sum#" }
    ];
    var grid = $("#grid").kendoGrid({
      editable: false,
      sortable: true,
      dataSource: {
        data: data,
        aggregate: aggregate,
        schema: schema,
      },
      columns: columns
    });
  
    $("#paper").kendoDropDownList({
      change: function() {
        $(".pdf-page")
          .removeClass("size-a4")
          .removeClass("size-letter")
          .removeClass("size-executive")
          .addClass(this.value());
      }
    });
  });*/