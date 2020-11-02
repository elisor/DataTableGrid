$(document).ready(function () {

    var dataConsulta = $("#txtData").val();

    //$.ajax({
    //    type: "POST",
    //    url: "/Home/GetCliente",
    //    data: '{"dataConsulta": ' + dataConsulta + '}',
    //    success: function (data) {
    //        var s = '<option value="">Todos</option>';
    //        for (var i = 0; i < data.length; i++) {
    //            s += '<option value="' + data[i] + '">' + data[i] + '</option>';
    //        }
    //        $("#comboCliente").html(s);
    //    }
    //});

    $("#txtData").blur(function () {
        $.ajax({
            type: "POST",
            url: "/Home/GetCliente",
            data: '{"dataConsulta": ' + dataConsulta + '}',
            success: function (data) {
                var s = '<option value="">Todos</option>';
                for (var i = 0; i < data.length; i++) {
                    s += '<option value="' + data[i] + '">' + data[i] + '</option>';
                }
                $("#comboCliente").html(s);
            }
        });
    });
});