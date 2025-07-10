class Start {
    constructor() {
        this.playerName = "Kamu"
        this.botName = "Dausbot"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }

    get getBotOption() {
        return this.botOption
        
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain() {
        const option = ["✊", "✌", "✋"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if (this.botOption == "✋" && this.playerOption == "✌") {
            return this.winner = this.playerName;
        } else if (this.botOption == "✋" && this.playerOption == "✊") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "✋") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "✊") {
            return this.winner = this.playerName;
        } else if (this.botOption == "✊" && this.playerOption == "✋") {
            return this.winner = this.playerName;
        } else if (this.botOption == "✊" && this.playerOption == "✌") {
            return this.winner = this.botName;
        } else {
            return this.winner = "SERI"
        }
    }

    matchResult() {
        if(this.winner !== "SERI"){
            if(this.winner == this.botName) {
                return `${this.winner}.UDAHMAH KALAH SAMA BOT, KALAH SAMA MASALALUNYA LAGI WKWK`;
            } else {
                return `${this.winner} MENANG!!`;
            }
        } else {
            return `${this.winner} AHH GASERU..`;
        }
    }

}

function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");

        inGame.textContent = "..."
        result.textContent = "..."

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
        result.textContent = start.matchResult();
    }, 1500);
    
   
}

    let body = document.body;
    let mode = document.getElementById("mode");
    let home = document.getElementById("home");
    

    function darkMode() {
        body.classList.toggle("dark");
        
    }

    function rerender() {
        location.reload();
    }