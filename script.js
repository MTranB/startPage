var click = new Audio("sounds/click.m4a");
//checks the src of the image and changes it to the next image using parameterized function
function chatBoxes(chatImage) {
  click.play();
  //split the returned text at the / after "images" and store what comes after it
  const imageFileName = chatImage.src.split("/").pop();

  if (imageFileName === "chat1.png") {
    console.log("working");
    chatImage.src = "images/chat2.png";
  } else if (imageFileName === "chat2.png") {
    chatImage.src = "images/chat3.png";
  } else if (imageFileName === "chat3.png") {
    window.location.href = "https://chdavinci.github.io/pokemonchampion/";
  }
}

function showModal() {
  console.log("show modal");
  document.getElementById("myModal").style.display = "block";
}
