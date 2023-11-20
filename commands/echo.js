import { Log } from "./log.js";

export const Echo = (args) => {
  if (args) Log(args.join(" "));
  else Log("~echo <span style='font-size: 10pt'>~echo</span> <span style='font-size: 6pt'>~echo</span>");
};
