// ---------- JavaScript DOM ----------
function changeText() {
  document.getElementById("note").innerHTML = "Updated: Solve 3 questions.";
}

// ---------- jQuery ----------
$(document).ready(function () {
  // Call DOM function on click
  $("#textBtn").click(changeText);

  $("#showBtn").click(function () {
    $("#note").show(500);
  });

  $("#hideBtn").click(function () {
    $("#note").hide(500);
  });

  $("#toggleBtn").click(function () {
    $("#note").toggle(500);
  });

  $("#animateBtn").click(function () {
    $("#note")
      .stop(true, true)
      .animate({ left: "+=40px", opacity: 0.75 }, 350)
      .animate({ left: "0px", opacity: 1 }, 350);
  });
});
