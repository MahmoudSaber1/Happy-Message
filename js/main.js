$(document).ready(function () {
  /* ----------- Toggle Them - light and Dark ------------- */
  function toggleThem() {
    if (localStorage.getItem("Mahmoud-theme") !== null) {
      if (localStorage.getItem("Mahmoud-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updataIcon();
  }
  toggleThem();

  $(".toggle-them").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("Mahmoud-theme", "dark");
    } else {
      localStorage.setItem("Mahmoud-theme", "light");
    }
    updataIcon();
  });

  function updataIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-them i").removeClass("fa-moon");
      $(".toggle-them i").addClass("fa-sun");
    } else {
      $(".toggle-them i").removeClass("fa-sun");
      $(".toggle-them i").addClass("fa-moon");
    }
  }

  // Open Ask Form
  $("#OpenAsk").on("click", () => {
    if ($(".PopupAsk").hasClass("open")) {
      $(".PopupAsk").removeClass("open");
    } else {
      $(".PopupAsk").toggleClass("open");
    }
  });

  /* ----------- Login & Signup Forms Toggle ------------- */

  $("#opLogin").on("click", () => {
    if ($(".formBx").hasClass("active")) {
      $(".formBx").removeClass("active");
    }
    $(".PopupAsk").removeClass("open");
    $(".popup-form, .bluBg, .formBx").addClass("open");
    $(".close").click(() => {
      $(".popup-form, .bluBg, .formBx, .PopupAsk").removeClass("open");
    });
  });

  $("#opSign").on("click", () => {
    $(".PopupAsk").removeClass("open");
    $(".formBx").addClass("active");
    $(".popup-form, .bluBg, .formBx").addClass("open");
    $(".close").click(() => {
      $(".popup-form, .bluBg, .formBx, .PopupAsk").removeClass("open");
    });
  });

  $(".signupBtn").on("click", () => {
    $(".formBx").addClass("active");
  });

  $(".signinBtn").on("click", () => {
    $(".formBx").removeClass("active");
  });

  /* ----------- Show and Hide Password ------------- */
  $("#showPass").on("click", function () {
    if ($(this).hasClass("fa-eye")) {
      $(this).removeClass("fa-eye");
      $(this).addClass("fa-eye-slash");
      $("#pass").attr("type", "text");
    } else {
      $(this).removeClass("fa-eye-slash");
      $(this).addClass("fa-eye");
      $("#pass").attr("type", "password");
    }
  });

  // Datatables Init
  $("#datatable").DataTable();
});

// Mouse Hover Effect
// var elBody = document.querySelector("body");
// document.addEventListener("mousemove", (e) => {
//   var element = document.createElement("div");
//   element.setAttribute("class", "mouse-effect");
//   element.setAttribute("style", `left:${e.clientX - 10}px; top:${e.clientY - 10}px`);

//   element.onanimationend = () => {
//     element.remove();
//   }

//   elBody.insertAdjacentElement("beforeend", element);
// });
