$(document).ready(function(){
	$("#identidad").click(function(){
		$("#descripcion").removeClass("hidden");
		$("#inicio").addClass("hidden");
		$("#Contacto").addClass("hidden");
		$("#Trabajo").addClass("hidden");
		$("#Terminos").addClass("hidden");
		$("#Privacidad").addClass("hidden");
		$("#Asistencia").addClass("hidden");
	});

	$("#nombre_organizacion").click(function(){
		$("#inicio").removeClass("hidden");
		$("#descripcion").addClass("hidden");
		$("#Contacto").addClass("hidden");
		$("#Trabajo").addClass("hidden");
		$("#Terminos").addClass("hidden");
		$("#Privacidad").addClass("hidden");
		$("#Asistencia").addClass("hidden");
	});

	$("#contacto").click(function(){
		$("#Contacto").removeClass("hidden");
		$("#descripcion").addClass("hidden");
		$("#inicio").addClass("hidden");
		$("#Trabajo").addClass("hidden");
		$("#Terminos").addClass("hidden");
		$("#Privacidad").addClass("hidden");
		$("#Asistencia").addClass("hidden");
	});

	$("#trabajo").click(function(){
		$("#Trabajo").removeClass("hidden");
		$("#descripcion").addClass("hidden");
		$("#inicio").addClass("hidden");
		$("#Contacto").addClass("hidden");
		$("#Terminos").addClass("hidden");
		$("#Privacidad").addClass("hidden");
		$("#Asistencia").addClass("hidden");
	});

	$("#terminos").click(function(){
		$("#Terminos").removeClass("hidden");
		$("#Trabajo").addClass("hidden");
		$("#descripcion").addClass("hidden");
		$("#inicio").addClass("hidden");
		$("#Contacto").addClass("hidden");
		$("#Privacidad").addClass("hidden");
		$("#Asistencia").addClass("hidden");
	});

	$("#privacidad").click(function(){
		$("#Privacidad").removeClass("hidden");
		$("#Terminos").addClass("hidden");
		$("#Trabajo").addClass("hidden");
		$("#descripcion").addClass("hidden");
		$("#inicio").addClass("hidden");
		$("#Contacto").addClass("hidden");
		$("#Asistencia").addClass("hidden");
	});

	$("#asistencia").click(function(){
		$("#Asistencia").removeClass("hidden");
		$("#Terminos").addClass("hidden");
		$("#Trabajo").addClass("hidden");
		$("#descripcion").addClass("hidden");
		$("#inicio").addClass("hidden");
		$("#Contacto").addClass("hidden");
		$("#Privacidad").addClass("hidden");
	});

})

function fakeUpdate(){
	alert("Su reporte ha sido enviado, un especialista se pondra en contacto con usted lo antes posible");
}