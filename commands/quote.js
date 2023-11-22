import { Log } from "./log.js";

export const Quote = async () => {
  Log(`Fetching...`, true);

  let response = await fetch("https://api.quotable.io/random");
  let { content, author } = await response.json();

  Log(`<pre><span style="color: var(--highlight)">"${content}"</span></pre>
  <span style="color: var(--cmdcolor)">{${author}}</span></pre>`);
};
