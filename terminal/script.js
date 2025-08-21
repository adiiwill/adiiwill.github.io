import * as commands from "./commands/index.js";

class TerminalPortfolio {
    constructor() {
        this.cmdHistory = [];
        this.historyIndex = 0;
        this.inputField = document.getElementById("inputfield");
    }

    init() {
        document.title = "adiiwill@github:terminal";
        this.addEventListeners();
        this.displayWelcomeMessage();
        commands.Log(`<pre style='color: rgb(200, 0, 0)'>(!) This portfolio is a time capsule of my earlier work.
    It may not reflect my current skills or design approach, but I’m keeping it online as part of my journey.</pre>`)
    }

    addEventListeners() {
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    handleKeyPress(e) {
        this.inputField.focus();
        switch (e.key) {
            case "Enter":
                this.dispatchCommand(this.inputField.value);
                this.inputField.value = "";
                break;
            case "ArrowUp":
                this.navigateHistory(1);
                break;
            case "ArrowDown":
                this.navigateHistory(-1);
                break;
        }
    }

    navigateHistory(direction) {
        const newIndex = this.historyIndex + direction;
        if (newIndex >= 0 && newIndex < this.cmdHistory.length) {
            this.historyIndex = newIndex;
            this.inputField.value = this.cmdHistory[this.historyIndex];
        }
    }

    dispatchCommand(command) {
        const [cmd, ...args] = command.toLowerCase().split(" ");

        if (command) {
            this.cmdHistory.push(command);
            this.historyIndex = this.cmdHistory.length - 1;
        }

        const commandMap = {
            help: () => commands.Help(),
            "?": () => commands.Help(),
            clear: () => commands.Clear(),
            cls: () => commands.Clear(),
            about: () => commands.About(),
            contact: () => commands.Contact(args[0]),
            echo: () => commands.Echo(args),
            history: () => commands.History(this.cmdHistory),
            h: () => commands.History(this.cmdHistory),
            skills: () => commands.Skills(),
            exit: () => commands.Exit(),
            quote: () => commands.Quote().catch((e) => commands.Log(e.message, true)),
            q: () => commands.Quote().catch((e) => commands.Log(e.message, true)),
            sudo: () => commands.Log("No", true),
        };

        if (commandMap[cmd]) {
            commandMap[cmd]();
        } else if (cmd) {
            commands.Log(
                `<pre>'${cmd}' is not recognized as a command.<br>Type <span style="color: var(--cmdcolor)">[help]</span> for the list of commands.</pre>`
            );
        }
    }

    displayWelcomeMessage() {
        if (screen.width > 1030) {
            commands.Log(`<pre>

  :::       ::: :::::::::: :::        ::::::::   ::::::::  ::::    ::::  :::::::::: 
  :+:       :+: :+:        :+:       :+:    :+: :+:    :+: +:+:+: :+:+:+ :+:        
  +:+       +:+ +:+        +:+       +:+        +:+    +:+ +:+ +:+:+ +:+ +:+        
  +#+  +:+  +#+ +#++:++#   +#+       +#+        +#+    +:+ +#+  +:+  +#+ +#++:++#   
  +#+ +#+#+ +#+ +#+        +#+       +#+        +#+    +#+ +#+       +#+ +#+        
   #+#+# #+#+#  #+#        #+#       #+#    #+# #+#    #+# #+#       #+# #+#        
    ###   ###   ########## ########## ########   ########  ###       ### ##########
  
  Terminal-like portfolio made by <span style="color: var(--cmdcolor)">adiiwill</span>.
  </pre>`);
            this.dispatchCommand("help");
        } else {
            commands.Log(`<pre>

  :::    ::: :::::::::::
  :+:    :+:     :+:    
  +:+    +:+     +:+    
  +#++:++#++     +#+    
  +#+    +#+     +#+    
  #+#    #+#     #+#    
  ###    ### ###########
  
  Terminal-like portfolio made by <span style="color: var(--cmdcolor)">adiiwill</span>.
  </pre>`);
            commands.Log(`<pre><span style="color: red; background-color: white">Mobile version is not supported but still functional. Expect text being squished!</span></pre>`);
            this.dispatchCommand("help");
        }
    }
}

window.addEventListener("load", () => {
    const terminal = new TerminalPortfolio();
    terminal.init();
});