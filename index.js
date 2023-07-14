const isAuth = JSON.parse(localStorage.getItem("isAuth")) || {};
const btnGrp = document.getElementById("btnGrp");
const candidteDiv = document.getElementById("candidate");
if (!isAuth.isAuth) {
  let btns = `<li class="nav-but me-3">
  <a href="./login/login.html" class="btn btn-success"> Login </a>
</li>
<li class="nav-but">
  <a href="./Signup/signup.html" class="btn btn-outline-success">
    Signup
  </a>
</li>`;

  btnGrp.innerHTML = btns;
} else {
  let btns = `<div class="dropdown-center"><button class="btn me-3 btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria expanded="false">Profile</button>
  <ul class="dropdown-menu bg-success">
  <li><a class=" dropdown-item text-dark  fw-bold" href="#">${isAuth.name}</a></li>
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
<ul class="dropdown-menu bg-dark">
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
