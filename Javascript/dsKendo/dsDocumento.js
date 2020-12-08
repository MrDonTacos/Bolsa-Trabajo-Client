var dataSourceEmpleadoDocumento = new kendo.data.DataSource({
    transport: {
        read: {
            cache: false,
            type: "GET",
            url: function (e) {
                let url = `${baseurl}/documento`;
                return url;
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        },
        parameterMap: function (options, operation) {
            if (operation !== "read" && options) {
                return kendo.stringify(options);
            }
        }
    },
    schema: {
        errors: "error",
        data: function (data) {
            return data;
        },
        total: function (data) {
            return data.length;
        },
        model: {
            id: "id_documento",
            fields: {
                id_documento: { type: "string"},
                documento: {
                    type: "string", title: 'Nombre',
                    validation: {
                        required: true,
                        maxlength: 250
                    }
                },
            }
        }
    },
    error: function (e) {
        //debugger
        console.log("error:" + e);
        alert(e.xhr.responseText + " error");
    }
});

createDocumento = (Entity, status) => {
    if (status == true) {
        return $.ajax({
            type: 'PUT',
            url: `${baseurl}/documento/${Entity.id_documento}`,
            data: JSON.stringify(Entity),
            contentType: 'application/json',
        });
    }
    else{
        return $.ajax({
            type: 'POST',
            url: `${baseurl}/documento`,
            data: JSON.stringify(Entity),
            contentType: 'application/json',
        });
    }
}