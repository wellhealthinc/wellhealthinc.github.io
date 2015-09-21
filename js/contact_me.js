$(function() {
    //Old btnGetDemo
    /*
    $("#btnGetDemo").click(function(){
        $("input,textarea").jqBootstrapValidation({
            //$("btnGetDemo").click(function(event){
            preventSubmit: true,
            submitError: function($form, event, errors) {
                // additional error messages or events
            },
            submitSuccess: function($form, event) {
                event.preventDefault(); // prevent default submit behaviour
                // get values from FORM
                var name = $("input#name").val();
                var email = $("input#email").val();
                var cell = $("input#cell").val();

                
               // var message = $("textarea#message").val();
               // var firstName = name; // For Success/Failure Message
                // Check for white space in name for Success/Fail message

               // if (firstName.indexOf(' ') >= 0) {
               //     firstName = name.split(' ').slice(0, -1).join(' ');
               // }
                
                $.ajax({
                    url: 'https://api.parse.com/1/functions/sendProviderDemoEmail',
                    type: 'POST',
                    headers: {
                        'X-Parse-Application-Id': 'J6ysfOx4FV45BbTarg25oXSlJJZG9fs9Kzjul6wM',
                        'X-Parse-REST-API-Key': 'YrUKfK64SBchpZ0WytA3bl3fMYRrc0Xizt4qDcaL'
                    },
                    data: {
                        providerFirstName: $(
                            'input#firstname').val(),
                        providerLastName: $(
                            'input#lastname').val(),
                        providerPhoneNumber: $(
                            'input#cell').val(),
                        providerEmailAddress: $(
                            'input#email').val()
                    },
                    dataType: 'json',
                    success: function(json) {
                        location.href =
                            "https://calendly.com/well/20min/"
                    },
                    error: function(xhr, status,
                        errorThrown) {
                        alert("error!", status,
                            errorThrown);
                    }
                });
            },
            filter: function() {
                return $(this).is(":visible");
            },
        });
        $("a[data-toggle=\"tab\"]").click(function(e) {
            e.preventDefault();
            $(this).tab("show");
        });
    });
    */
    $("#btnGetDemo").click(function(){
        $("input,textarea").jqBootstrapValidation({
            //$("btnGetDemo").click(function(event){
            preventSubmit: true,
            submitError: function($form, event, errors) {
                // additional error messages or events
            },
            submitSuccess: function($form, event) {
                event.preventDefault(); // prevent default submit behaviour
                // get values from FORM
                var name = $("input#name").val();
                var email = $("input#email").val();
                var cell = $("input#cell").val();


                $.ajax({
                    url: 'https://api.parse.com/1/functions/inviteClient',
                    type: 'POST',
                    headers: {
                        'X-Parse-Application-Id': 'MFv9KnsKigQT3xCzojePIduQmeA9xqfMscmPw3sj',
                        'X-Parse-REST-API-Key': 'j8ruKWTtZlheswMTmG7RpIcyp2J3becNifjDTLZ4'
                    },
                    data: {
                        //providerInput: {id: 'skmbKn8I1n'},
                        providerPhoneNumber: '3145783978',
                        firstName: $(
                            'input#firstname').val(),
                        lastName: $(
                            'input#lastname').val(),
                        phoneNumber: $(
                            'input#cell').val(),
                        emailAddress: $(
                            'input#email').val()
                    },
                    dataType: 'json',
                    success: function(json) {
                        location.href = "http://wellapp.com/demo";
                        //alert("Success!");
                    },
                    error: function(xhr, status,
                        errorThrown) {
                        alert("error!", status,
                            errorThrown);
                    }
                });
            },
            filter: function() {
                return $(this).is(":visible");
            },
        });
        $("a[data-toggle=\"tab\"]").click(function(e) {
            e.preventDefault();
            $(this).tab("show");
        });
    });
    $("#btnGetStarted").click(function(){
        $("input,textarea").jqBootstrapValidation({
            //$("btnGetDemo").click(function(event){
            preventSubmit: true,
            submitError: function($form, event, errors) {
                // additional error messages or events
            },
            submitSuccess: function($form, event) {
                event.preventDefault(); // prevent default submit behaviour
                // get values from FORM
                var firstname = $("input#firstname").val();
                var email = $("input#email").val();
                var cell = $("input#cell").val();
                var lastname = $("input#lastname").val();
                console.log(firstname);
                console.log(lastname);
                console.log(email);
                console.log(cell);

                /*
                var message = $("textarea#message").val();
                var firstName = name; // For Success/Failure Message
                // Check for white space in name for Success/Fail message

                if (firstName.indexOf(' ') >= 0) {
                    firstName = name.split(' ').slice(0, -1).join(' ');
                }
                */
                $.ajax({
                    url: 'https://api.parse.com/1/functions/registerProvider',
                    type: 'POST',
                    headers: {

                        'X-Parse-Application-Id': 'J6ysfOx4FV45BbTarg25oXSlJJZG9fs9Kzjul6wM',
                        'X-Parse-REST-API-Key': 'YrUKfK64SBchpZ0WytA3bl3fMYRrc0Xizt4qDcaL'

/*                        'X-Parse-Application-Id': 'nnFg5eYk5sVrncskpzpyfCMla8m9V8XdFA0wYb76',
                        'X-Parse-REST-API-Key': '2FhkdeQzHrAlHHXGTfHAgCcpILzhv2wXIz7Q85K5'*/
                    },
                    data: {
                        firstName: $(
                            'input#firstname').val(),
                        lastName: $(
                            'input#lastname').val(),
                        emailAddress: $(
                            'input#email').val(),
                        phoneNumber: $(
                            'input#cell').val(),
                        practiceName:"",
                        specialty:""
                    },
                    dataType: 'json',
                    success: function(json) {
                        //location.href = "https://calendly.com/well/20min/";
                        alert("FIXME:Congratulations!  Welcome to WELL!  You will recieve an email and a text message with further instructions.");
                    },
                    error: function(xhr, status,
                        errorThrown) {
                        alert("error!", status,
                            errorThrown);
                    }
                });
            },
            filter: function() {
                return $(this).is(":visible");
            },
        /*})*/});
        $("a[data-toggle=\"tab\"]").click(function(e) {
            e.preventDefault();
            $(this).tab("show");
        });
    });
});
/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
