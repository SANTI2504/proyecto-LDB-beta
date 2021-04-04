function crear_usuario(){
	swal("se a creado el usuario correctamente!", {
				icon: "success",
			});
	
}

function actualizar_usuario(){
	swal("Se a actualizado los datos correctamente", {
				icon: "success",
			});
}

function eliminar_usuario(){
	// plugin 
	swal({
		title: "Estas seguro?",
		text: "si precionas ok se eliminara el usuario del sistema!",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => {
		if (willDelete) {
			swal("se a eliminado el usuario correctamente!", {
				icon: "success",
			});
		} else {
			swal("has cancelado la accion");
		}
	});
}

function imprimir(){
	window.print();
}