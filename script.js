const signUpBtnLink = document.querySelector(".signUpBtn-link");
const signInBtnLink = document.querySelector(".signInBtn-link");

const wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
  //   ima2.classList.toggle("active");
});
signInBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
  //   ima1.classList.toggle("active");
});
