const messi = document.getElementById("messi");
const cactus = document.getElementById("cactus");

function jump() {
  if (messi.classList != "jump") {
    messi.classList.add("jump");

    setTimeout(function () {
      messi.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current messi Y position
  let messiTop = parseInt(window.getComputedStyle(messi).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && messiTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});