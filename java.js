function showFeedback(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    document.getElementById("result").innerHTML +=
    "<div style='border:1px solid #ccc; padding:10px; margin:10px 0;'>" +
    "<p><strong>Name:</strong> " + name + "</p>" +
    "<p><strong>Email:</strong> " + email + "</p>" +
    "<p><strong>Feedback:</strong> " + feedback + "</p>" +
    "</div>";

    document.getElementById("feedbackForm").reset();
}