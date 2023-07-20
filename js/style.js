$(function () {
  $(window).on("scroll", function (e) {
    if (window.scrollY > 300) {
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

  // Form validation
  (function () {
    "use strict";

    var forms = document.querySelectorAll(".needs-validation");

    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          var name = $("#name").val();
          var email = $("#email").val();
          var phoneNum = $("#phoneNumber").val();

          if (!name.length && name.length > 50) {
            $("#name").addClass("is-invalid");
            $("#name").removeClass("is-valid");
            $("#name")[0].setCustomValidity("invalid name");
          } else {
            $("#name").removeClass("is-invalid");
            $("#name").addClass("is-valid");
            $("#name")[0].setCustomValidity("");
          }

          if (!email.includes("@gmail.com")) {
            $("#email").removeClass("is-valid");
            $("#email").addClass("is-invalid");
            $("#email")[0].setCustomValidity("invalid email");
          } else {
            $("#email").addClass("is-valid");
            $("#email").removeClass("is-invalid");
            $("#email")[0].setCustomValidity("");
          }

          if (!phoneNum) {
            $("#phoneNumber").removeClass("is-valid");
            $("#phoneNumber").addClass("is-invalid");
            $("#phoneNumber")[0].setCustomValidity("invalid phone number");
          } else {
            $("#phoneNumber").addClass("is-valid");
            $("#phoneNumber").removeClass("is-invalid");
            $("#phoneNumber")[0].setCustomValidity("");
          }

          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            console.log("disqualified");
          } else {
            console.log("qualified");
            $("form").hide();
            $("#form").append(`<p>
              Xin chào ${name}.<br>
              Email của bạn là: ${email}.<br>
              Số điện thoại của bạn là: ${phoneNum}.<br>
              Giới tính: ${$(
                "input[name='flexRadioDefault']:checked"
              ).val()}.<br>
              Sở Thích của bạn là: ${$("[type=checkbox]")
                .map((index, element) => {
                  return element.value;
                })
                .get()
                .join(", ")}.<br>
                Bạn đã miêu tả bản thân như sau: <br>
                ${$("textarea").val()}
                </p>
            `);
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
