$(document).ready(function () {
    

    // Referenze 
    var campoInput = $(".inputField");
    var template = $(".templateLi");
    var list = $("ul");
    var button = $(".add-new-task");

    // Today data 
    const todayDate  = new Date();
    var actualDay = $(".today-date");

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let showTodayData = (days[todayDate.getDay()]+ ", " + todayDate.getDate()+ " " + months[todayDate.getMonth()]);
    var todayDateString = showTodayData.toString();
    //data insertion in DOM
    actualDay.text(todayDateString)


    // Insert new toDo item in list with ENTER 
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

    // Insert new toDo item in list with ENTER
    button.click(function(){

        var text = campoInput.val().trim()

        if (text !== "")
        {
        // creazione nuovo clone e add proprietà 
        newElement = template.clone();
        newElement.css("display", "flex")
        // append alla lista
        newElement.prepend(text);
        list.prepend(newElement)
        //pulizia campo input dopo inserimento
        campoInput.val("");}})

    // Cancellazione elemento dalla lista
    $("body").on('click', '.del', function (){
        $(this).parent().remove();
    })

    // today data

}); // End doc ready function
