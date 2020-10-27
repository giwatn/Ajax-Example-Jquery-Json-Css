/* LOADING HTML INTO A PAGE WITH JQUERY */
// LOADING CONTENT
$('nav a').on('click', function(e) { // User clicks nav link
    e.preventDefault(); // Stop loading new link
    var url = this.href; // Get value of href
    var $content = $('#main-content'); // Cache selection

    $('nav a.current').removeClass('current'); // Clear current indicator
    $(this).addClass('current'); // New current indicator
    $('#container').remove(); // Remove old content

    $.ajax({ // HET or POST
        type: "GET", // Path to file
        url: url, // Path file
        timeout: 1000000, // Waiting time
        beforeSend: function() { // Once finished
            $content.append('<div id="load">Loading</div>'); // Load message
        },
        complete: function() { // Once finished
            $('#load').remove(); // Clear message
        },
        success: function(data) { // Show content
            $content.html($(data).find('#container')).hide().fadeIn(400); // New content
        },
        error: function() {
            $content.html('<div class="loading">Please try again soon.</div>');
        }
    });
});