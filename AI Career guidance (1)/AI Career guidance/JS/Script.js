function loginUser(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    if (email !== "" && password !== "") {

        localStorage.setItem("studentEmail", email);

        window.location.href = "Dashboard.html";

    } else {

        alert("Please enter email and password.");

    }
}



function analyzeSkills() {

    let selectedSkills =
        document.querySelectorAll(".skill:checked");

    if (selectedSkills.length === 0) {

        alert("Please select at least one skill.");

        return;

    }


    let skills = [];

    selectedSkills.forEach(function(skill) {

        skills.push(skill.value);

    });


    localStorage.setItem(
        "selectedSkills",
        JSON.stringify(skills)
    );


    window.location.href = "result.html";

}
function saveProfile(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all fields.");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentPhone", phone);

    alert("Profile saved successfully!");
}