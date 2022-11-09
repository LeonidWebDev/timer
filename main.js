class MyTimer {
    constructor() {
        this.startBtn = document.querySelector(".start")
        this.secondsDisplay = document.querySelector(".seconds")
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

        this.intervalID = window.setInterval(() => {
            this.secondsDisplay.innerHTML = seconds
            seconds++
        }, 1000)

    }

    stopTimer() {
        window.clearInterval(this.intervalID)
        this.secondsDisplay.innerHTML = 0
    }

    testartTimer() {

    }



}

let myTimer = new MyTimer()