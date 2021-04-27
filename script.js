  
    /* Panel */
    function openPanel() {
          document.getElementById("myPanel").style.display = "block";
    }

    function closeButton() {
        document.getElementById("myPanel").style.display = "none";
    }

    /* Form */

    function clean(){
	window.location.reload();
    } 

   function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

    
   
    /* Inputs to a google spreadsheet */
    function SubForm(){
        $.ajax({
            url:'https://api.apispreadsheets.com/data/11518/',
            type:'post',
            data:$("#theForm").serializeArray(),
            success: function(){
              alert("Message was sent :)")

            },
            error: function(){
              alert("There was an error :(")
            }
        });
    }

    /* Validation*/
    function FormVal(){
        var name = 
            document.forms["theForm"]["name"];
        var email = 
            document.forms["theForm"]["email"];
        if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }
        if (email.value == "") {
            window.alert(
            "Please enter a valid e-mail address.");
            email.focus();
            return false;
        }
        return true;
        }
        
    /* Validation email*/

        function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        }

        function validate() {
        const $result = $("#result");
        const email = $("#email").val();
        $result.text("");

        if (validateEmail(email)) {
       
        } else {
            $result.text(email + " is not valid");
            $result.css("color", "red");
        }
        return false;
        }

        $("#validate").on("click", validate);
    
     /* About */
   
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
