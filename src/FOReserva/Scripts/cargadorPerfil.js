function mostrarContenedor(posicion) {

    $(".contenedor").hide();
    if (posicion > 0 && posicion <= $(".contenedor").length) {
        $($(".contenedor")[posicion - 1]).show();
    } else {
        $($(".contenedor")[0]).show();
    }
}

/* Cargador Generico */
function cargarContenido(seccion, tipo, url, data, boton) {

    // tipo CP : 1 columna, Todo el ancho de la pagina
    // tipo MD : 2 columnas, contenido derecha
    // tipo MI : 2 columnas, contenido izquierda
    // tipo CL : 2 columnas, contenido izquierda 
    $.ajax(
        {
            url: url,
            type: tipo,
            data: data,
            success: function (data, textStatus, jqXHR) {
                if (seccion == '#MD' || seccion == '#MI') {
                    mostrarContenedor(1)
                } else if (seccion == '#CI') {
                    mostrarContenedor(3)
                } else {
                    mostrarContenedor(2)
                }

                if (seccion == "#MD")
                    seccion = "#contenedor"
                else if (seccion == "#MI")
                    seccion = "#contenedorImagenes"

                $(seccion).empty();
                $(seccion).append(data);

                if (boton != null) {
                    $(boton).parent().parent().children().removeClass("active")
                    $(boton).parent().addClass("active")
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
};

jQuery(document).ready(function () {

    mostrarContenedor(1)

    /* NO QUITAR ESTA CARGA INICIAL QUE ES LA QUE HARÁ QUE POR DEFAULT SALGA EL PERFIL AL INICIAR LA PAGINA*/
    $("#contenedor").empty();
    var url = '/home/Perfil';
    var method = 'GET';
    var data = '';

    $.ajax(
        {
            url: url,
            type: method,
            data: data,
            success: function (data, textStatus, jqXHR) {
                console.log('hola carlos')
                $("#contenedor").empty();
                $("#contenedor").append(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });

    console.log("test");



    /* CARGADOR DE BOTON PERFIL*/
    $("#PePerfil").click(function (e) {
        e.preventDefault();
        $("#PePerfil").addClass("active");

        $("#PeItinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON ITINERARIO*/
    $("#PeItinerario").click(function (e) {
        e.preventDefault();
        $("#PeItinerario").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON DIARIO*/
    $("#PeDiario").click(function (e) {
        e.preventDefault();
        $("#PeDiario").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#PeItineraio").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON VUELOS*/
    $("#PeVuelos").click(function (e) {
        e.preventDefault();
        $("#PeVuelos").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#PeItinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON CRUCEROS*/
    $("#PeCruceros").click(function (e) {
        e.preventDefault();
        $("#PeCruceros").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#PeItinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });

    /* CARGADOR DE BOTON AUTOS*/
    $("#PeAutos").click(function (e) {
        e.preventDefault();
        $("#PeAutos").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#PeItinerario").removeClass("active");
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

                    $("#contenedor").empty();
                    $("#contenedor").append(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });
    });



    /* CARGADOR DE BOTON HABITACIONES*/
    $("#PeHabitaciones").click(function (e) {
        e.preventDefault();
        $("#PeHabitaciones").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#PeItinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeRestaurantes").removeClass("active");
    });



    /* CARGADOR DE BOTON RESTAURANTES*/
    $("#PeRestaurantes").click(function (e) {
        e.preventDefault();
        $("#PeRestaurantes").addClass("active");

        $("#PePerfil").removeClass("active");
        $("#PeItinerario").removeClass("active");
        $("#PeDiario").removeClass("active");
        $("#PeVuelos").removeClass("active");
        $("#PeCruceros").removeClass("active");
        $("#PeAutos").removeClass("active");
        $("#PeHabitaciones").removeClass("active");
    });
});
