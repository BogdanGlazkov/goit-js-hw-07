const formEl = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
      alert("Please fill in all the fields!");
      return;
  }

  const loginForm = {
    email: email.value,
    password: password.value,
  };

  console.log(loginForm);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", handleSubmit);
