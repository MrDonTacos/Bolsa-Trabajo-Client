var dataSourcePerfiles = new kendo.data.DataSource({
    transport: {
        read: {
            cache: false,
            type: "GET",
            url: function (e) {
                let url = `${baseurl}/perfil`;
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
            id: "id_perfil",
            fields: {
                id_perfil: { type: "string"},
                perfil: {
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