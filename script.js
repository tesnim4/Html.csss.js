function changecolor(color){
    document.body.style.background=color;
};
document
  .getElementById("submitBtn")
  .addEventListener("click", 
function (event) {
    event.preventDefault(); // Prevent form submission
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
      //trim
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
    }
});
// Image hover effect
var image = document.getElementById("image");
image.addEventListener("mouseover", function () {
  image.src = "new_image.jpg";
});
image.addEventListener("mouseout", function () {
  image.src = "https://logos-marques.com/wp-content/uploads/2021/02/Orange-Couleur.jpg";
});