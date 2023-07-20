$(function () {
  $(window).on("scroll", function (e) {
    console.log(window);
    console.log(window.scrollY);
    if (window.scrollY > 300) {
      console.log("line 6");
      $(".containerParent.forHeader").addClass("toFixed");
    } else {
      $(".containerParent.forHeader").removeClass("toFixed");
    }

    if (window.scrollY > 600) {
      $(".toTop").show();
    } else {
      $(".toTop").hide();
    }
  });

  //form validation start
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          var name = $("#name").val();
          var email = $("#email").val();
          var phoneNum = $("#phoneNumber");
          console.log(name);
          if (
            name.length > 0 &&
            email.includes(`@gmail.com)`) &&
            phoneNum.length > 0 &&
            !phoneNum.include(/[^0-9]/)
          ) {
            $("#name").addClass("is-invalid");
            $("#name")[0].setCustomValidity(`invalid name`);
            $("#email").addClass("is-invalid");

            $("#email").setCustomValidity("invalid email");
            $("#phoneNumber").addClass("is-invalid");
            $("#phoneNumber").setCustomValidity("invalid email");
          }

          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
});
