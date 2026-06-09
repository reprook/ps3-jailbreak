(function () {
  "use strict";
  var select = document.getElementById("firmwareSelect");
  var button = document.getElementById("checkButton");
  var result = document.getElementById("compatibilityResult");
  var menuButton = document.getElementById("menuButton");
  var nav = document.querySelector(".nav");
  var year = document.getElementById("year");

  function setResult(icon, title, supported) {
    result.className = supported ? "result is-supported" : "result";
    result.innerHTML =
      '<span class="result-icon">' + icon + '</span>' +
      '<div><small>Compatibility result</small><strong>' + title + '</strong></div>';
  }

  button.addEventListener("click", function () {
    var version = select.value;
    if (!version) {
      setResult("!", "Choose your firmware version first", false);
      select.focus();
      return;
    }
    if (version === "4.92") {
      setResult("✓", "4.92 information page is available", true);
    } else if (version === "4.91" || version === "4.90") {
      setResult("✓", "Legacy information path is available", true);
    } else {
      setResult("i", "Use the legacy firmware information section", false);
    }
  });

  menuButton.addEventListener("click", function () {
    nav.classList.toggle("is-open");
  });

  nav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      nav.classList.remove("is-open");
    }
  });

  year.textContent = "© " + new Date().getFullYear();
}());