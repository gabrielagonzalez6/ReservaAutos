jQuery(document).ready(function () {

    $("#PeAutos").click(function (e) {
        e.preventDefault();

        var url = '@Html.Partial("~/Views/gestion_reserva_auto/M19_Reserva_Autos_Perfil.cshtml", new FOReserva.Models.Autos.Cvista_ReservaAutos())';
        var model = 'FOReserva.Models.Autos.Cvista_ReservaAutos()';
        var method = 'GET';
        var data = '';

                $("#contenedorPerfil").empty();
                $("#contenedorPerfil").load('~/Views/gestion_reserva_auto/M19_Reserva_Autos_Perfil.cshtml');
    });
});
