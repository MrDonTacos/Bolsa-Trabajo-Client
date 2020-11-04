const query = (url, data, type) => {
    return $.ajax({
        type: type != null ? type : "get",
        url: url,
        data: data,
        contentType: "application/json",
        crossDomain: true,
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
}