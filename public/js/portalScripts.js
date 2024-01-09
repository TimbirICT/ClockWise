const timeEvent = document.getElementById("punch-time")

let clockedIn = true

const punchTimeFunction = async () => {
    const response = await fetch("/api/timeevents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
}

timeEvent.addEventListener('click', punchTimeFunction)


const renderTimeCard = async () => {
    const response = await fetch("/api/timecards")
}