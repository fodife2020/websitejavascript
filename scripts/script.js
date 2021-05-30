//párrafo interactivo del index
$('.parrafoI').fadeOut("slow")
$('#btn_parrafoI').click(mostrar_parrafoI)
function mostrar_parrafoI() {
    $('.parrafoI').slideToggle("slow")
}

//formulario de contacto
$("#form").submit(function (e) {
    e.preventDefault();
    let c = 0;
     //VERIFICAMOS EL INPUT NOMBRE
    if ($("#nombre").val() == "") {
        $("#span_nombre").text("el nombre no puede enviar vacío").show().fadeOut(3000)
    }else if($("#nombre").val().trim().length < 4 ){
        $("#span_nombre").text("el nombre no puede ser tan corto").show().fadeOut(3000)
    }else if($("#nombre").val().trim().length > 10 ){
        $("#span_nombre").text("el nombre no puede ser tan largo").show().fadeOut(3000)
    } else {
        c++;
    } 
    //VERIFICAMOS APELLIDO
    if ($("#apellido").val() == "") {
        $("#span_apellido").text("el apellido no puede enviar vacío").show().fadeOut(3000)
    }else if($("#apellido").val().trim().length < 4 ){
        $("#span_apellido").text("el apellido no puede ser tan corto").show().fadeOut(3000)
    }else if($("#apellido").val().trim().length > 10 ){
        $("#span_apellido").text("el apellido no puede ser tan largo").show().fadeOut(3000)
    } else {
        c++;
    } 
    //VERIFICAMOS EMPRESA
    if ($("#empresa").val() == "") {
        $("#span_empresa").text("el empresa no puede enviar vacío").show().fadeOut(3000)
    }else if($("#empresa").val().trim().length < 4 ){
        $("#span_empresa").text("el empresa no puede ser tan corto").show().fadeOut(3000)
    }else if($("#empresa").val().trim().length > 10 ){
        $("#span_empresa").text("el empresa no puede ser tan largo").show().fadeOut(3000)
    } else {
        c++;
    } 
    //VERIFICAMOS ESPECIALIDAD
    if ($("#especialidad").val() == "") {
        $("#span_especialidad").text("el especialidad no puede enviar vacío").show().fadeOut(3000)
    }else if($("#especialidad").val().trim().length < 4 ){
        $("#span_especialidad").text("el especialidad no puede ser tan corto").show().fadeOut(3000)
    }else if($("#especialidad").val().trim().length > 10 ){
        $("#span_especialidad").text("el especialidad no puede ser tan largo").show().fadeOut(3000)
    } else {
        c++;
    } 
    //TELEFONO
    
    if ($("#telefono").val() == "") {
        $("#span_telefono").text("el telefono no puede enviar vacío").show().fadeOut(3000)
    }else if($("#telefono").val().trim().length < 4 ){
        $("#span_telefono").text("el telefono no puede ser tan corto").show().fadeOut(3000)
    }else if($("#telefono").val().trim().length > 10 ){
        $("#span_telefono").text("el telefono no puede ser tan largo").show().fadeOut(3000)
    } else {
        c++;
    } 
    //EMAIL
    if ($("#email").val() == "") {
        $("#span_email").text("el email no puede enviar vacío").show().fadeOut(3000)
    }else if($("#email").val().trim().length < 4 ){
        $("#span_email").text("el email no puede ser tan corto").show().fadeOut(3000)
    }else if($("#email").val().trim().length > 20 ){
        $("#span_email").text("el email no puede ser tan largo").show().fadeOut(3000)
    } else {
        c++;
    } 
    //ASUNTO
    if ($("#asunto").val() == "") {
        $("#span_asunto").text("el asunto no puede enviar vacío").show().fadeOut(3000)
    }else if($("#asunto").val().trim().length < 5 ){
        $("#span_asunto").text("el asunto no puede ser tan corto").show().fadeOut(3000)
    }else if($("#asunto").val().trim().length > 30 ){
        $("#span_asunto").text("el asunto no puede ser tan largo").show().fadeOut(3000)
    } else {
        c++;
    } 
    //MENSAJE
    if ($("#mensaje").val() == "") {
        $("#span_mensaje").text("el mensaje no puede enviar vacío").show().fadeOut(3000)
    }else if($("#mensaje").val().trim().length < 4 ){
        $("#span_mensaje").text("el mensaje no puede ser tan corto").show().fadeOut(3000)
    }else if($("#mensaje").val().trim().length > 10 ){
        $("#span_mensaje").text("el mensaje no puede ser tan largo").show().fadeOut(3000)
    } else {
        c++;
    } 
    
    if (c>=8) {
        $("#span_submit").text("Enviado!").show()
        //e.target.submit()
    }


})
