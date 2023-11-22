import * as m from "./commands/index.js";

window.addEventListener("load", () => {
  document.title = `adiiwill@github:terminal`;

  let cmdHistory = [];
  let hisIndex = 0;

  // Autofocues on the prompt whenever a button is pressed
  document.addEventListener("keydown", function (e) {
    const inputfield = document.getElementById("inputfield");
    inputfield.focus();
    if (e.key === "Enter") {
      // Checks enter press and dispatches commands
      Dispatch(inputfield.value);
      inputfield.value = "";
    } else if (e.key === "ArrowUp") {
      // Increments history index
      const inputfield = document.getElementById("inputfield");
      if (hisIndex < cmdHistory.length - 1) hisIndex += 1;
      if (cmdHistory[hisIndex]) inputfield.value = cmdHistory[hisIndex];
    } else if (e.key === "ArrowDown") {
      // Decrements history index
      const inputfield = document.getElementById("inputfield");
      if (hisIndex > 0) hisIndex -= 1;
      if (cmdHistory[hisIndex]) inputfield.value = cmdHistory[hisIndex];
    }
  });

  // Handles commands
  function Dispatch(command) {
    const cmd = command.split(" ")[0].toLowerCase();
    const args =
      command.split(" ").length == 1
        ? ""
        : command.substr(command.indexOf(" ") + 1).split(" ");

    if (command) cmdHistory.push(command);
    hisIndex = cmdHistory.length - 1;

    if (cmd == "help" || cmd == "?") m.Help();
    else if (cmd == "clear" || cmd == "cls") m.Clear();
    else if (cmd == "about") m.About();
    else if (cmd == "contact") m.Contact(args);
    else if (cmd == "echo") m.Echo(args);
    else if (cmd == "history" || cmd == "h") m.History(cmdHistory);
    else if (cmd == "skills") m.Skills();
    else if (cmd == "weather" || cmd == "w") m.Weather(args);
    else if (cmd == "quote" || cmd == "q") m.Quote();
    else if (cmd)
      m.Log(
        `<pre>'${cmd}' is not recognized as a command.<br>Type <span style="color: var(--cmdcolor)">[help]</span> for the list of commands.</pre>`
      );
    document.getElementById("inputfield").scrollIntoView();
  }

  if (screen.width > 1030) {
    m.Log(`<pre>

  :::       ::: :::::::::: :::        ::::::::   ::::::::  ::::    ::::  :::::::::: 
  :+:       :+: :+:        :+:       :+:    :+: :+:    :+: +:+:+: :+:+:+ :+:        
  +:+       +:+ +:+        +:+       +:+        +:+    +:+ +:+ +:+:+ +:+ +:+        
  +#+  +:+  +#+ +#++:++#   +#+       +#+        +#+    +:+ +#+  +:+  +#+ +#++:++#   
  +#+ +#+#+ +#+ +#+        +#+       +#+        +#+    +#+ +#+       +#+ +#+        
   #+#+# #+#+#  #+#        #+#       #+#    #+# #+#    #+# #+#       #+# #+#        
    ###   ###   ########## ########## ########   ########  ###       ### ##########
  
  Terminal-like portfolio made by <span style="color: var(--cmdcolor)">adiiwill</span>.
  </pre>`);
    Dispatch("help");
  } else {
    m.Log(`<pre>
  <span style="color: red; background-color: white">Mobile version is not supported but still functional. Expect text being squished!</span>
    </pre>`);
  }
  cmdHistory = [];
});
