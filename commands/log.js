export const Log = (msg) => {
  const content = document.getElementById("content");

  const div = document.createElement("div");
  div.innerHTML = msg;
  div.classList.add("result");

  content.appendChild(div);

  setTimeout(() => {
    div.classList.add("appear");
  }, 50);
};
