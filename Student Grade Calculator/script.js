function calculateResult() {

    let name = document.getElementById("name").value.trim();
    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);

    let result = document.getElementById("result");

    // Validation
    if (name == "" ||
        document.getElementById("english").value == "" ||
        document.getElementById("maths").value == "" ||
        document.getElementById("science").value == "") {

        result.innerHTML = "<span style='color:red;'>All fields are mandatory.</span>";
        return;
    }

    if (english < 0 || english > 100 ||
        maths < 0 || maths > 100 ||
        science < 0 || science > 100) {

        result.innerHTML = "<span style='color:red;'>Marks should be between 0 and 100.</span>";
        return;
    }

    let total = english + maths + science;
    let average = total / 3;

    let grade;

    if (average >= 90)
        grade = "A+";
    else if (average >= 80)
        grade = "A";
    else if (average >= 70)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else
        grade = "Fail";

    result.innerHTML =
        "<p><strong>Student Name :</strong> " + name + "</p>" +
        "<p><strong>Total Marks :</strong> " + total + "</p>" +
        "<p><strong>Average :</strong> " + average.toFixed(2) + "</p>" +
        "<p><strong>Grade :</strong> " + grade + "</p>";
}
function resetForm() {
    document.getElementById("result").innerHTML = "";
}