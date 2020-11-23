$('#btnPromt').click(function(){
    swal({
        title: "Seguro que quieres hacer esto?",
          text: "Esta acción ya no se podrá deshacer, Así que piénsalo bien.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, estoy seguro',
          cancelButtonText: "Cancelar"
        });
});

  /* Read more about isConfirmed, isDenied below
///alerta de si o no
Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Save`,
  denyButtonText: `Don't save`,
}).then((result) => {

  if (result.isConfirmed) {
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
}) */
