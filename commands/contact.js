import { Log } from "./log.js";

const Open = (link) => {
  setTimeout(() => {
    window.open(link, "_blank");
  }, 300);
};

export const Contact = (args) => {
  if (!args) {
    Log(`<pre>My socials:
  <span style="color: var(--cmdcolor)">github</span>
  <span style="color: var(--cmdcolor)">linkedin</span>
  <span style="color: var(--cmdcolor)">email</span>

Usage: contact (args)</pre>`);
  } else {
    if (args[0] == "github") {
      Open("https://github.com/adiiwill");
      Log("Executing <span style='color: var(--cmdcolor)'>[open:github.com]</span>");
    } else if (args[0] == "linkedin") {
      Open("https://www.linkedin.com/in/%C3%A1d%C3%A1m-gazdag-747181296");
      Log("Executing <span style='color: var(--cmdcolor)'>[open:linkedin.com]</span>");
    } else if (args[0] == "email") {
      Open("mailto:gazdagadam02@gmail.com");
      Log("Executing <span style='color: var(--cmdcolor)'>[mailto:gmail]</span>")
    }
  }
};
