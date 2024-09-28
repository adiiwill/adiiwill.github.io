import { Log } from "./log.js";

const Open = (link) => {
  setTimeout(() => {
    window.open(link, "_blank");
  }, 300);
};

export const Contact = (arg) => {
  if (!arg) {
    Log(`<pre>My socials:
  <span style="color: var(--cmdcolor)">github</span>
  <span style="color: var(--cmdcolor)">linkedin</span>
  <span style="color: var(--cmdcolor)">email</span>

Usage: contact (arg)
Example: contact linkedin</pre>`);
  } else {
    if (arg === "github") {
      Open("https://github.com/adiiwill");
      Log("Executing <span style='color: var(--cmdcolor)'>[open:github.com]</span>");
    } else if (arg === "linkedin") {
      Open("https://www.linkedin.com/in/gazdagadam/");
      Log("Executing <span style='color: var(--cmdcolor)'>[open:linkedin.com]</span>");
    } else if (arg === "email") {
      Open("mailto:gazdagadam02@gmail.com");
      Log("Executing <span style='color: var(--cmdcolor)'>[mailto:gmail]</span>")
    }
  }
};
