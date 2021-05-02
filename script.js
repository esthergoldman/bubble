  
    /* Panel */
    function openPanel() {
          document.getElementById("myPanel").style.display = "block";
          document.getElementById("modal").style.backgroundColor = "white";

    }

    function closeButton() {
        document.getElementById("myPanel").style.display = "none";
        document.getElementById("modal").style.backgroundColor = "blue";
    }

    function clean(){
	window.location.reload();
    } 

    /* Form */
   function openForm() {
        document.getElementById("myForm").style.display = "block";
        document.getElementById("myPanel").style.display = "none";

    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
        document.getElementById("myPanel").style.display = "block";

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
        var txt;
        var name = 
            document.forms["theForm"]["name"];
       
        if (name == null ||name.value == "") {
            txt = "please enter your name";
            document.getElementById("demo").innerHTML = txt;
            document.getElementById("demo").style.color = "red";

        } else {
            document.getElementById("demo").style.display = "none";
        }
        return false;
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
