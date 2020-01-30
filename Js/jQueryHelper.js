const query = (url, data, type) => {
    return $.ajax({
        type: type != null ? type : "get",
        url: url,
        data: data,
        dataType: 'json',
        crossDomain: true,
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
}