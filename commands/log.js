export const Log = (msg, isSys = false) => {
  const content = document.getElementById("content");

  const div = document.createElement("div");
  div.innerHTML = msg;
  div.classList.add("result");

  if (isSys) div.classList.add("system_message");

  content.appendChild(div);

  setTimeout(() => {
    div.classList.add("appear");
    document.getElementById("inputfield").scrollIntoView();
  }, 50);
};
