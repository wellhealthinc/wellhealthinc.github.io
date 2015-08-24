$(function() {

  



  if (/iPad|iPhone|iPod/.test(navigator.platform)) {
        location.href = "http://google.com"
  }else{
    location.href = "about:blank"  
  }

  

  




    $("input,textarea").jqBootstrapValidation({
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
        url: 'https://api.parse.com/1/functions/sendProviderDemoEmail',
        type: 'POST',
        headers: {
          'X-Parse-Application-Id': 'WcNXULqtiPB7RRu2edl4UGsCS5ZFeguwobEi3PDg',
          'X-Parse-REST-API-Key': 'eOPBrESbJ8MGSYGWskcFQPcdtuuwg9y76esoOaWK'
        },
        data: {
          providerFirstName: $('input#firstname').val(),
          providerLastName: $('input#lastname').val(),
          providerEmailAddress: $('input#email').val()
        },
        dataType: 'json',
        success: function (json) {
          location.href = "https://calendly.com/well/20min/"
          

        },
        error: function (xhr, status, errorThrown) {
          alert("error!", status, errorThrown);
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


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
