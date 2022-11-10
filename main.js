class MyTimer {
    constructor() {
        this.startBtn = document.querySelector(".start")
        this.secondsDisplay = document.querySelector(".seconds")
        this.minutesDisplay = document.querySelector(".minutes")
        this.restartBtn = document.querySelector(".restart")
        this.init()
    }
    init() {
        this.startBtn.addEventListener("click", () => {
            this.startTimer()
        })
        this.restartBtn.addEventListener("click", () => {
            this.stopTimer()
        })
    }

    startTimer() {
        let seconds = 0
        let minutes = 0

        this.intervalID = window.setInterval(() => {
            seconds++
            if (seconds == "60") {
                seconds = "00"
                minutes++
                this.minutesDisplay.innerHTML = minutes + " : "
            }
            this.secondsDisplay.innerHTML = seconds

        }, 1000)

    }

    stopTimer() {
        window.clearInterval(this.intervalID)
        this.secondsDisplay.innerHTML = "0"
        this.minutesDisplay.innerHTML = "0 : "
    }

    testartTimer() {

    }



}

let myTimer = new MyTimer()