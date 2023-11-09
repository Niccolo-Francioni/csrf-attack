//const baseUrl = "http://localhost:3000";
const baseUrl = "https://localhost";

// Example GET method implementation:
async function getData(url = "") {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
}

// Example POST method implementation:
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

function signin() {
  console.log("signin");
  const body = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  postData(`${baseUrl}/signin`, body).then((data) => {
    if (data.response) {
      location.reload();
    } else {
      document.getElementById("username").classList.add("is-invalid");
      document.getElementById("password").classList.add("is-invalid");
    }
  });
}

function signup() {
  console.log("signup");
  const body = {
    username: document.getElementById("signupusername").value,
    password: document.getElementById("signuppassword").value,
  };
  postData(`${baseUrl}/signup`, body).then((data) => {
    if (data.response) {
      console.log(data.response);
      location.reload();
    } else {
      console.log(data.response);
      document.getElementById("signupusername").classList.add("is-invalid");
      document.getElementById("signuppassword").classList.add("is-invalid");
    }
  });
}

function signout() {
  postData(`${baseUrl}/signout`).then((data) => {
    if (data.response) {
      location.reload();
    }
  });
}
