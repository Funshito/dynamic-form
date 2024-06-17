


document.getElementById('myForm').addEventListener('submit', function (event) {
    var inputs = document.querySelectorAll('#myForm input[type="text"]');

    var emailInput = document.getElementById('email');
    var messageAlert = document.getElementById('alert');
    var radios = document.getElementsByName('Query');
    var checkboxes = document.getElementsByName('check');
    var isValid = true;
    var formValid = false;
    var textarea = document.getElementById('message');


    // var isSelected = false;

    var errorMessageEmail = document.getElementById('error-email');
    var errorMessageQuery = document.getElementById('error-query');
    var errorMessageMessage = document.getElementById('error-message');
    var errorMessageCheck = document.getElementById('error-check');

    inputs.forEach(function (input) {
        var errorMessage = document.getElementById('error-' + input.id);
        if (input.value.trim() === '') {
            errorMessage.style.display = 'inline';
            input.style.border = '1px solid red';
            isValid = false;


            // error message for email

            if (emailInput.value.trim() === '') {
                errorMessageEmail.style.display = 'inline';
                input.style.border = '1px solid red';
                // error message for radio 

                for (var i = 0; i < radios.length; i++) {
                    if (radios[i].checked) {
                        formValid = true;
                        break;
                    }
                }

                if (!formValid) {
                    errorMessageQuery.style.display = 'block';
                    event.preventDefault();

                    // error message for message box 
                    if (textarea.value.trim() === '') {
                        errorMessageMessage.style.display = 'block';
                        event.preventDefault();



                        // error message for checkbox 
                        for (var i = 0; i < checkboxes.length; i++) {
                            if (checkboxes[i].checked) {
                                formValid = true;
                                break;
                            }
                        }

                        if (!formValid) {
                            errorMessageCheck.style.display = 'block';
                            event.preventDefault();
                        } else {
                            errorMessageCheck.style.display = 'none';
                        }



                    } else {
                        errorMessageMessage.style.display = 'none';
                    }


                } else {
                    errorMessageQuery.style.display = 'none';
                }


            }
            else {
                errorMessageEmail.style.display = 'none';
            }



        } else {
            errorMessage.style.display = 'none';
            messageAlert.style.display = 'flex';
        }
    });




});






