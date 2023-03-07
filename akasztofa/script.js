window.onload = () => {
  document.getElementById("restart").style.display = "none";

  let szavak = [];

  let guessAmount = 7;
  let isGameOver = false;

  let selected = "";
  let secret = [];

  let guesses = [];

  let lives = document.getElementById("lives");
  let secrettext = document.getElementById("secret");

  let guessed = document.getElementById("guessed");
  let guessedLetters = "";

  fetch(
    "https://gist.githubusercontent.com/Konstantinusz/f9517357e46fa827c3736031ac8d01c7/raw/fc98429a6357d1c4fcc644e1b70c2431bd046cf0/magyar-szavak.txt"
  )
    .then((res) => res.text())
    .then((d) => {
      szavak = d.split("\n");
      console.log(szavak);

      selected = szavak[Math.floor(Math.random() * szavak.length) + 1]
        .toLowerCase()
        .replace(/[^\w\sáéúőúüűöó]/gi, "");
      for (let i = 0; i < selected.length; i++) {
        secret.push("_");
      }

      console.log("Loaded.");
      document.getElementById("load").remove();

      display();
    });

  document.addEventListener("keydown", function (event) {
    document.getElementById("restart").style.display = "inline-block";

    let input = event.key.toLowerCase().replace(/[^\w\sáéúőúüűöó]/gi, "");

    if (!isGameOver) {
      if (input != "" && input.length == 1) {
        if (!selected.includes(input)) {
          if (guesses.some((x) => x === input)) {
            console.log(input);
          } else {
            guesses.push(input);
          }
        } else {
          for (let i = 0; i < selected.length; i++) {
            if (selected[i] === input) secret[i] = input;
          }
        }
        console.log(guesses);
      }

      if (selected === secret.join("")) {
        secrettext.style.color = "green";
        isGameOver = true;
      }

      display();
    }
  });

  function display() {
    let content = "";
    
    lives.innerHTML = 7 - guesses.length;
    
    for (const c in secret) {
      content += secret[c] + " ";
    }

    secrettext.innerHTML = content;

    guesses.forEach((g) => {
      guessedLetters += g + " ";
    });

    guessed.innerHTML = guessedLetters;
    guessedLetters = "";
  }

  setInterval(() => {
    if (guesses.length >= guessAmount) {
      isGameOver = true;
      secrettext.innerHTML = selected;
      secrettext.style.color = "red";
    }
  }, 30);
};
