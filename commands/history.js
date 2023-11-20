import { Log } from "./log.js";

export const History = (his) => {
  Log(`
  <pre>Command history:
  1. ${his[his.length - 1] ? his[his.length - 1] : ""}
  2. ${his[his.length - 2] ? his[his.length - 2] : ""}
  3. ${his[his.length - 3] ? his[his.length - 3] : ""}
  4. ${his[his.length - 4] ? his[his.length - 4] : ""}
  5. ${his[his.length - 5] ? his[his.length - 5] : ""}
  6. ${his[his.length - 6] ? his[his.length - 6] : ""}
  7. ${his[his.length - 7] ? his[his.length - 7] : ""}
  8. ${his[his.length - 8] ? his[his.length - 8] : ""}
  9. ${his[his.length - 9] ? his[his.length - 9] : ""}
  10. ${his[his.length - 10] ? his[his.length - 10] : ""}</pre>`);
};
