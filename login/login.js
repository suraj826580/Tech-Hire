const form = document.getElementById("form");
const candidteDiv = document.getElementById("candidate");
const userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let flag = false;
    let currentLogedUser;
    userData.forEach((element) => {
      if (element["email"] === email && element["password"] == password) {
        flag = true;
        currentLogedUser = element;
      }
    });
    if (flag) {
      alert("Login Successfull");
      localStorage.setItem(
        "isAuth",
        JSON.stringify({ ...currentLogedUser, isAuth: true })
      );
      window.location.assign("http://127.0.0.1:5500/index.html");
    } else {
      alert("Invalid Email or Password");
      localStorage.setItem("isAuth", false);
    }
  },
  { capture: false }
);

const isAuth = JSON.parse(localStorage.getItem("isAuth")) || {};
const btnGrp = document.getElementById("btnGrp");
if (!isAuth.isAuth) {
  let btns = `<li class="nav-but me-3">
  <a href="./login.html" class="btn btn-success"> Login </a>
</li>
<li class="nav-but">
  <a href="../Signup/signup.html" class="btn btn-outline-success">
    Signup
  </a>
</li>`;

  btnGrp.innerHTML = btns;
} else {
  let btns = `<div class="dropdown-center"><button class="btn me-3 btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria expanded="false">Profile</button>
  <ul class="dropdown-menu  text-white">
  <li><a class=" dropdown-item" href="#">${isAuth.name}</a></li>
  </ul>
</div>
<li class="nav-but">
  <button type="button" id="logoutBtn" class="btn btn-success me-3">Logout</button>
</li>`;
  let candidates = `<a
class="nav-link dropdown-toggle"
href="#"
role="button"
data-bs-toggle="dropdown"
aria-expanded="false">
Find Candidates
</a>
<ul class="dropdown-menu bg-dark p-2">
<li>
  <a class="dropdown-item fs-5 text-success" href="#"
    >Frontened Developer</a
  >
</li>
<li>
  <a class="dropdown-item fs-5 text-success" href="#"
    >Backend Developer</a
  >
</li>
<li><hr class="dropdown-divider" /></li>
</ul>`;
  btnGrp.innerHTML = btns;
  candidteDiv.innerHTML = candidates;
}

// Logout

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  localStorage.setItem("isAuth", JSON.stringify({ isAuth: false }));
  window.location.reload();
});
