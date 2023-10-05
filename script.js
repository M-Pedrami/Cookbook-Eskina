const userName = document.querySelector("#name");
const comment = document.querySelector("#comment");
const submitBtn = document.querySelector("#submit");
const commentSection = document.querySelector(".commentField");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if (userName.value === "") {
    alert("Please Enter Your Name Before Commenting")
  } else {
    commentSection.innerHTML += (`<p class="userName"> ${userName.value} Says: <p/>`);
    commentSection.innerHTML += (`<p class="commentP"> ${comment.value} <p/>`);
    userName.value = "";
    comment.value = "";
  }
  
});
