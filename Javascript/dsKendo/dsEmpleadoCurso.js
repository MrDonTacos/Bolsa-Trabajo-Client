var dataSourceEmpleadoCurso = new kendo.data.DataSource({
    transport: {
        read: {
            cache: false,
            type: "GET",
            url: function (e) {
                let url = `${baseurl}/curso`;
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
            id: "id_empleado_curso",
            fields: {
                id_empleado_curso: { type: "number", title: 'Clave', format: "{0:n0}", validation: { required: true }, defaultValue: 0, editable: true },
                nom_empleado_curso: {
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
        //ger
        console.log("error:" + e);
        alert(e.xhr.responseText + " error");
    }
});

createEmpleadoCurso = (Entity, status) => {
    if (status == true) {
        return $.ajax({
            type: 'PUT',
            url: `${baseurl}/curso/${Entity.id_empleado_curso}`,
            data: JSON.stringify(Entity),
            contentType: 'application/json',
        });
    }
    else{
        return $.ajax({
            type: 'POST',
            url: `${baseurl}/curso`,
            data: JSON.stringify(Entity),
            contentType: 'application/json',
        });
    }
}