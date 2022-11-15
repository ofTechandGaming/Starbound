function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1968);
}

var newAge = calculate_age(new Date(1995, 30, 4));
document.getElementById("age").innerHTML = newAge + " Years";

function calculate_exp(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1968);
}

var newAge = calculate_exp(new Date(2015, 1, 6));
document.getElementById("exp").innerHTML = newAge + " Years";
