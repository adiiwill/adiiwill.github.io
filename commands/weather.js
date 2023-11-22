import { Log } from "./log.js";

export const Weather = async (args) => {
  if (args) {
    let response = await fetch(`https://wttr.in/${args[0]}?ATm&format=3`);
    let data = await response.text();
    Log(
      `<pre>${
        response.ok ? `${data}Powered by wttr.in` : `"${args[0]}" city couldn't be found.`
      }</pre>`
    );
  } else {
    Log(`<pre>Invalid syntax

    You have to write a city as args.

    Usage: weather (args)
    </pre>`);
  }
};
