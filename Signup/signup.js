const form = document.getElementById("form");
const userData = JSON.parse(localStorage.getItem("userData")) || [];
const candidteDiv = document.getElementById("candidate");

const position = document.getElementById("position");
let positionValue;
position.addEventListener("change", (e) => {
  if (e.target.value) {
    positionValue = e.target.value;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let company = document.getElementById("company").value;
  const userObject = { name, email, password, company, positionValue };
  let flag = true;
  userData.forEach((element) => {
    if (element.email == email) {
      flag = false;
    }
  });
  if (flag) {
    userData.push(userObject);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup Successfull");
    window.location.assign("http://127.0.0.1:5500/login/login.html");
  } else {
    alert("You Are Already Registered");
  }
});

const isAuth = JSON.parse(localStorage.getItem("isAuth")) || {};
const btnGrp = document.getElementById("btnGrp");
if (!isAuth.isAuth) {
  let btns = `<li class="nav-but me-3">
  <a href="../login/login.html" class="btn btn-success"> Login </a>
</li>
<li class="nav-but">
  <a href="./signup.html" class="btn btn-outline-success">
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
