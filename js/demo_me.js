$(function() {
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

                /*
                var message = $("textarea#message").val();
                var firstName = name; // For Success/Failure Message
                // Check for white space in name for Success/Fail message

                if (firstName.indexOf(' ') >= 0) {
                    firstName = name.split(' ').slice(0, -1).join(' ');
                }
                */
                $.ajax({
                    url: 'https://api.parse.com/1/functions/inviteClient',
                    type: 'POST',
                    headers: {
                        'X-Parse-Application-Id': 'MFv9KnsKigQT3xCzojePIduQmeA9xqfMscmPw3sj',
                        'X-Parse-REST-API-Key': 'j8ruKWTtZlheswMTmG7RpIcyp2J3becNifjDTLZ4'
                    },
                    data: {
                        //providerInput: {id: 'skmbKn8I1n'},
                        providerInput: 'skmbKn8I1n',
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
                        //location.href = "https://calendly.com/well/20min/";
                        alert("Success!");
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
