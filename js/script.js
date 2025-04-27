const bt_login = document.querySelector(".bt-login");
const bt_register = document.querySelector(".bt-register");
const ctn_rgt = document.querySelector(".container-register");
const ctn_lg = document.querySelector(".container-login");

bt_login.addEventListener("click", function (event) {
  event.preventDefault();

  ctn_lg.classList.add("form2");
  ctn_rgt.classList.remove("model-form1-2");
  ctn_rgt.classList.remove("model-form1");
  setTimeout(() => {
    ctn_rgt.classList.add("form1");
    ctn_lg.classList.add("model-form2");
  }, 350);
  console.log("click");
  console.log("click");
});
bt_register.addEventListener("click", function (event) {
  event.preventDefault();
  ctn_rgt.classList.remove("form1");
  ctn_lg.classList.remove("form2");
  ctn_rgt.classList.add("model-form1");
  setTimeout(() => {
    ctn_lg.classList.remove("model-form2");
    ctn_rgt.classList.add("model-form1-2");
  }, 350);
  console.log("click");
  console.log("click");
});

////////////////
const user_name = document.getElementById("user-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const phone = document.getElementById("phone-number");

const form_rgt = document.querySelector(".register-form");

function error(input, message) {
  const parent = input.parentElement;
  const small = parent.querySelector(".error");
  parent.classList.add("line");
  small.innerText = message;
}

function success(input) {
  const parent = input.parentElement;
  const small = parent.querySelector(".error");
  parent.classList.remove("line");
  small.innerText = "";
}

function checkLength(input, max, min) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    error(input, `Cần ít nhất ${min} ký tự`);
    return false;
  }
  if (input.value.length > max) {
    error(input, `Đã vượt quá ${max} ký tự`);
    return false;
  }
  success(input);
  return true;
}

function checkEmail(input) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  input.value = input.value.trim();
  if (!regexEmail.test(input.value)) {
    error(input, "Email không hợp lệ!");
    return false;
  }
  success(input);
  return true;
}

function checkPhone(input) {
  const regexPhone = /^[0-9]{9,11}$/;
  input.value = input.value.trim();
  if (!regexPhone.test(input.value)) {
    error(input, "Số điện thoại không hợp lệ!");
    return false;
  }
  success(input);
  return true;
}

function passwordMatch(passwordInput, confirmPasswordInput) {
  if (confirmPasswordInput.value.trim() === "") {
    error(confirmPasswordInput, "Vui lòng nhập xác nhận mật khẩu!");
    return false;
  }
  if (passwordInput.value !== confirmPasswordInput.value) {
    error(confirmPasswordInput, "Mật khẩu không khớp!");
    return false;
  }
  success(confirmPasswordInput);
  return true;
}

form_rgt.addEventListener("submit", function (event) {
  event.preventDefault();

  let UserValid = checkLength(user_name, 20, 4);
  let PasswordValid = checkLength(password, 20, 4);
  let PhoneValid = checkPhone(phone);
  let EmailValid = checkEmail(email);
  let PasswordMatch = passwordMatch(password, confirm_password);

  if (UserValid && PasswordValid && PhoneValid && EmailValid && PasswordMatch) {
    const userData = {
      username: user_name.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      phone: phone.value.trim(),
    };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Đăng ký thành công! Nhấp vào đăng nhập để tiếp tục 😊");
  } else {
    alert("Vui lòng kiểm tra lại thông tin đăng ký.");
  }
});

const form_lg = document.querySelector(".login-form");
const password_lg = document.querySelector("#password-login");
const user = document.querySelector("#user");

form_lg.addEventListener("submit", function (event) {
  event.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const enteredUsername = user.value.trim();
  const enteredPassword = password_lg.value.trim();

  if (
    storedUser.username === enteredUsername &&
    storedUser.password === enteredPassword
  ) {
    alert("Đăng nhập thành công! Nhấp vào OK để chuyển trang 😊");
    window.location.href = "/html/home.html";
  } else {
    alert("Sai thông tin đăng nhập! Vui lòng nhập lại 😒");
  }
});

const help_lg = document.querySelector(".help-login");
help_lg.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/home.html";
});
const help_rg = document.querySelector(".help-register");
help_rg.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/home.html";
});
