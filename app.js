function convertToPercentage() {
    let gpa = parseFloat(document.getElementById("gpa").value);
    let percentage;
    if (gpa >= 4.00 && gpa < 5.00) {
        percentage = ((gpa - 4.00) * 10) + 50;
    } else if (gpa >= 5.00 && gpa < 7.50) {
        percentage = ((gpa - 5.00) * 8) + 60;
    } else if (gpa >= 7.50 && gpa <= 10.00) {
        percentage = ((gpa - 7.50) * 7) + 80;
    } else {
        percentage = "Invalid CGPA input. Please enter a CGPA between 4.00 and 10.00.";
    }
    document.getElementById("result").innerHTML = `Your Percentage: ${percentage.toFixed(2)}%`;
}
