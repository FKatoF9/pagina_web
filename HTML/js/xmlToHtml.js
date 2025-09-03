<script>
function xml2html() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        // Para versiones antiguas de IE
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", "./xml/Factura.xml", false);
    xmlhttp.send();

    var xmlDoc = xmlhttp.responseXML;

    // Manejo de errores si no carga el XML
    if (!xmlDoc) {
        document.write("<p><strong>Error:</strong> No se pudo cargar o parsear el archivo XML.</p>");
        return;
    }

    // Título
    document.write("<h1>Mis Clientes (Receptores de Facturas)</h1>");

    // Tabla
    document.write("<table border='1' style='color:black; width:100%; border-collapse: collapse;'>");
    document.write("<tr style='background-color: #3498db; color: white; text-align: center;'>");
    document.write("<th>Nombre</th><th>NIT</th><th>Dirección</th><th>Teléfono</th><th>Correo</th></tr>");

    // Obtener todas las facturas
    var facturas = xmlDoc.getElementsByTagName("factura");

    for (var i = 0; i < facturas.length; i++) {
        var factura = facturas[i];
        var receptor = factura.getElementsByTagName("receptor")[0];

        if (receptor) {
            var nombre = getValor(receptor, "nombre");
            var nit = getValor(receptor, "nit");
            var direccion = getValor(receptor, "direccion");
            var telefono = getValor(receptor, "telefono");
            var correo = getValor(receptor, "correo");

            document.write("<tr style='text-align: center;'>");
            document.write("<td>" + nombre + "</td>");
            document.write("<td>" + nit + "</td>");
            document.write("<td>" + direccion + "</td>");
            document.write("<td>" + telefono + "</td>");
            document.write("<td>" + correo + "</td>");
            document.write("</tr>");
        }
    }

    document.write("</table>");


// Función auxiliar para obtener el valor de un elemento
function getValor(parent, tagName) {
    var element = parent.getElementsByTagName(tagName)[0];
    return element && element.firstChild ? element.firstChild.nodeValue : "No disponible";
}

// Llamar a la función cuando la página cargue
window.onload = xml2html;
</script>