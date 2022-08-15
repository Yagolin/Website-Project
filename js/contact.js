function formCheck(){

    var feedbackMessage = document.getElementById('feedback');
    feedbackMessage.style.display = "block";

    var name = document.getElementById('name').value;
    if(name == ""){
        document.querySelector('.feedback').innerHTML = "Name cannot be empty!";
        return false;
    }

    var email = document.getElementById('email').value;
    if(email == ""){
        document.querySelector('.feedback').innerHTML = "E-mail cannot be empty!";
        return false;
    }
    else{
        var temp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!temp.test(email)){
            document.querySelector('.feedback').innerHTML = "E-mail format is invalid!";
            return false;
        }
    }

    var subject = document.getElementById('subject').value;
    if(subject == ""){
        document.querySelector('.feedback').innerHTML = "Subject cannot be empty!";
        return false;
    }

    var message = document.getElementById('message').value;
    if(message == ""){
        document.querySelector('.feedback').innerHTML = "Message box cannot be empty!";
        return false;
    }

    document.querySelector('.feedback').innerHTML = "Your message is sent!";
    
    window.setTimeout(function(){location.reload()},2000);
}