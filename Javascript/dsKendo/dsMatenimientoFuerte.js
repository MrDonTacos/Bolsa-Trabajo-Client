createMantenimientoBolsa = (Entity, status) => {
    if (status == true) {
        return $.ajax({
            type: 'PUT',
            url: `${baseurl}/mantenimientobolsa/${Entity.id}`,
            data: JSON.stringify(Entity),
            contentType: 'application/json',
        });
    }
    else{
        return $.ajax({
            type: 'POST',
            url: `${baseurl}/mantenimientobolsa`,
            data: JSON.stringify(Entity),
            contentType: 'application/json',
        });
    }
}