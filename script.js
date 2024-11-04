document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.start-stream').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        document.getElementById('overlay').style.display = 'block'; // Show overlay
    });

    document.getElementById('continue').addEventListener('click', function() {
        window.location.href = "//stream.crichd.sc/update/willowcricket.php"; // Redirect to stream
    });

    document.getElementById('cancel').addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'none'; // Hide overlay
    });
});