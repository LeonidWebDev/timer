class MyTimer {
    constructor() {
        this.startBtn = document.querySelector(".start")
        this.secondsDisplay = document.querySelector(".seconds")
        this.init()
    }
    init() {
        this.startBtn.addEventListener("click", () => {
            this.startTimer()
        })
    }

    startTimer() {
        let seconds = 0

        window.setInterval(() => {
            this.secondsDisplay.innerHTML = seconds
            seconds++
        }, 1000)
    }

    stopTimer() {

    }

    testartTimer() {

    }



}

let myTimer = new MyTimer()