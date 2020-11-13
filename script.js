function agregarRenglon(idT) {
	let $URL_REST = "http://www.proyectos.arcelia.net/mamc/src/public/alumnos"
	var celdas = ["matricula", "nombre", "curp", "email", "sexo", "ciudad", "detalle"];

	var nRow = 1;
	var tabla = document.getElementById(idT);
	var numeroRenglones = tabla.rows.length;

	var renglones = tabla.getElementsByTagName('tr');
	for (var i = numeroRenglones - 1; i > 0; i--) {
		tabla.deleteRow(renglones[i]);
	}

	nRow = 1;
	var endPoint = $URL_REST;
	if (document.getElementById("matricula").value != "") {
		endPoint = $URL_REST + "/" + document.getElementById("matricula").value;
		document.getElementById("matricula").value = "";
	}
	var numeroRenglones = tabla.rows.length;

	fetch(endPoint)
		.then(response => response.json())
		.then(data => {

			data.data.forEach(alumno => {
				var renglon = tabla.insertRow(nRow);

				for (i = 0; i < celdas.length; i++) {
					var celda = renglon.insertCell(i);

					switch (celdas[i]) {
						case "matricula":
							var txtCelda = document.createTextNode(alumno.clave_alu);
							break;
						case "nombre":
							var txtCelda = document.createTextNode(alumno.nombre + " " + alumno.ap_paterno + " " + alumno.ap_materno);
							break;
						case "email":
							var txtCelda = document.createTextNode(alumno.email);
							break;
						case "curp":
							var txtCelda = document.createTextNode(alumno.curp);
							break;
						case "sexo":
							var txtCelda = document.createTextNode(alumno.sexo);
							break;
						case "ciudad":
							var txtCelda = document.createTextNode(alumno.ciudad);
							break;
						case "detalle":
							var txtCelda = document.createElement("button");
							txtCelda.textContent = "Detalles";
							txtCelda.classList.add("btn", "btn-info");
							txtCelda.setAttribute("id", "btnId" + i);

							txtCelda.addEventListener("click", (function (tId) {
								return function () {
									window.open("alumno.html?matricula=" + alumno.clave_alu);
								}
							}
							)("btnId" + i), false);
							break;
					}
					celda.appendChild(txtCelda);
				}
				nRow++;
			})
		})
		.catch(error => console.log("Error: ", error));
}
function detalles() {
	let url = new URL(window.location.href)
	let searchParams = new URLSearchParams(url.search);
	let matricula = searchParams.get('matricula');

	let $URL_REST = "http://www.proyectos.arcelia.net/mamc/src/public/alumnos/" + matricula;
	var celdas = ["matricula", "nombre", "curp", "sexo", "peso", "estatura", "direccion", "colonia", "cp", "ciudad", "telefono", "celular", "email"];

	var tabla = document.getElementById("tablaDatos");
	nRow = 1;

	var endPoint = $URL_REST;

	console.log(endPoint);

	fetch(endPoint)
		.then(response => response.json())
		.then(data => {

			data.data.forEach(alumno => {
				var renglon = tabla.insertRow(nRow);

				for (i = 0; i < celdas.length; i++) {
					var celda = renglon.insertCell(i);

					switch (celdas[i]) {
						case "matricula":
							var txtCelda = document.createTextNode(alumno.clave_alu);
							break;
						case "nombre":
							var txtCelda = document.createTextNode(alumno.nombre + " " + alumno.ap_paterno + " " + alumno.ap_materno);
							break;
						case "curp":
							var txtCelda = document.createTextNode(alumno.curp);
							break;
						case "sexo":
							var txtCelda = document.createTextNode(alumno.sexo);
							break;
						case "peso":
							var txtCelda = document.createTextNode(alumno.peso);
							break;
						case "estatura":
							var txtCelda = document.createTextNode(alumno.estatura);
							break;
						case "direccion":
							var txtCelda = document.createTextNode(alumno.direccion);
							break;
						case "colonia":
							var txtCelda = document.createTextNode(alumno.colonia);
							break;
						case "cp":
							var txtCelda = document.createTextNode(alumno.cp);
							break;
						case "ciudad":
							var txtCelda = document.createTextNode(alumno.delegacion);
							break;
						case "telefono":
							var txtCelda = document.createTextNode(alumno.telefono);
							break;
						case "celular":
							var txtCelda = document.createTextNode(alumno.celular);
							break;
						case "email":
							var txtCelda = document.createTextNode(alumno.email);
							break;
					}
					celda.appendChild(txtCelda);
				}
				nRow++;
			})
		})
		.catch(error => console.log("Error: ", error));
}