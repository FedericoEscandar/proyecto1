function validacion_formulario(event) {
  event.preventDefault();
  var name = document.myform.name.value;
  var lastname = document.myform.lastname.value;
  var email = document.myform.email.value;
  var phone = document.myform.phone.value;
  var message = document.myform.message.value;

  console.log(document.myform);
  if (name == "") {
    alert("Nombre no puede estar vacio");

    return false;
  }
  if (lastname == null || lastname == "") {
    alert("Apellido no puede estar vacio");
    return false;
  }
  if (email == null || email == "") {
    alert("email no puede estar vacio");
    return false;
  }
  if (phone == null || phone == "") {
    alert("Celular no puede estar vacio");
    return false;
  }
  if (message == null || message == "") {
    alert("Mensaje no puede estar vacio");
    return false;
  }
}
