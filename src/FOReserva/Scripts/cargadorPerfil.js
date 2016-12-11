﻿jQuery(document).ready(function () {
    
    /* NO QUITAR ESTA CARGA INICIAL QUE ES LA QUE HARÁ QUE POR DEFAULT */
    $("#contenedorPerfil").empty();
    /* CAMBIAR URL POR VISTA DE PERFIL */
    var url = '/gestion_reserva_auto/M19_Reserva_Autos_PerfilPrueba';
    var method = 'GET';
    var data = '';

    $.ajax(
        {
            url: url,
            type: method,
            data: data,
            success: function (data, textStatus, jqXHR) {
                $("#contenedorPerfil").empty();
                $("#contenedorPerfil").append(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });


    /* CARGADOR DE BOTON PERFIL */
    $("#PePerfil").click(function (e) {
        e.preventDefault();
        $("#PePerfil").addClass("active");

        $("#peitinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON ITINERARIO */
    $("#peitinerario").click(function (e) {
        e.preventDefault();
        $("#peitinerario").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON DIARIO DE VIAJE */
    $("#PeDiario").click(function (e) {
        e.preventDefault();
        $("#PeDiario").addClass("active");

        $("#peitinerario").removeClass("active");
        $("#PePerfil").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON VUELOS */
    $("#PeVuelos").click(function (e) {
        e.preventDefault();
        $("#PeVuelos").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#peitinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON CRUCEROS */
    $("#PeCruceros").click(function (e) {
        e.preventDefault();
        $("#PeCruceros").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#peitinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON AUTOS */
    $("#PeAutos").click(function (e) {
        e.preventDefault();
        $("#PeAutos").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#peitinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");

        var url = '/gestion_reserva_auto/M19_Reserva_Autos_Perfil';
        var method = 'GET';
        var data = '';

        $.ajax(
            {
                url: url,
                type: method,
                data: data,
                success: function (data, textStatus, jqXHR) {
                    $("#contenedorPerfil").empty();
                    $("#contenedorPerfil").append(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });
    });

    /* CARGADOR DE BOTON HABITACIONES */
    $("#PeHabitaciones").click(function (e) {
        e.preventDefault();
        $("#PeHabitaciones").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#peitinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON HABITACIONES */
    $("#PeRestaurantes").click(function (e) {
        e.preventDefault();
        $("#PeRestaurantes").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#peitinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
    });

});

    