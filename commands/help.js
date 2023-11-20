import { Log } from "./log.js";

export const Help = () => {
  Log(`<pre>Available commands:

  > About me
    <span style="color: var(--cmdcolor)">[about]</span> - Information about me
    <span style="color: var(--cmdcolor)">[skills]</span> - My experience so far
    <span style="color: var(--cmdcolor)">[contact](args)</span> - My socials
  
  > System
    <span style="color: var(--cmdcolor)">[help]</span>  - Shows this list
    <span style="color: var(--cmdcolor)">[clear]</span> - Clears the console
    <span style="color: var(--cmdcolor)">[echo](args)</span> - Displays a message
    <span style="color: var(--cmdcolor)">[history]</span> - History of commands
    <span style="color: var(--cmdcolor)">[exit]</span> - Closes the terminal</pre>`);
};
