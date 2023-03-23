$(document).ready(function () {
    
    // Referenze 
    var campoInput = $(".inputField");
    var template = $(".templateLi");
    var list = $("ul");

    // Inserimento nuovo toDo in lista
    campoInput.keyup(function(e){
        if(e.which == 13){
            // creazione nuova variabile todo text
            // pulizia da spazi vuoti ai lati con trim
            var text = campoInput.val().trim()

            //verifica che non sia input vuoto
            if (text !== ""){
                // creazione nuovo clone e add proprietà 
                newElement = template.clone();
                newElement.css("display", "flex")
                // append alla lista
                newElement.prepend(text);
                list.prepend(newElement)
                //pulizia campo input dopo inserimento
                campoInput.val("");   
            }
        } 
    })
    
    // Cancellazione elemento dalla lista
    $("body").on('click', '.del', function (){
        $(this).parent().remove();
    })
}); // End doc ready function
