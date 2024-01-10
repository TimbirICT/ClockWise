// let clockedIn = true

// const punchTimeFunction = async () => {
//     const response = await fetch("/api/timeevents", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//       });
// }

// timeEvent.addEventListener('click', punchTimeFunction)


// const renderTimeCard = async () => {
//     const response = await fetch("/api/timecards")
// }

// js for handling clock in/clock out button on portal.handlebars
const timeEvent = document.getElementById("punch-time");
let clockedIn = true;

const punchTimeFunction = async () => {
    try {
        const response = await fetch("/api/timeevents", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                time_card_id: 1,
            }),
        });
        console.log("response", response);

        if (response.ok) {
            console.log('Successful');
            // clock_in = !clock_in;
        } else {
            console.error("Failed to record time event");
        }
    } 
    catch (error) {
        console.error("Error:", error);
    }
};

timeEvent.addEventListener('click', punchTimeFunction);

const logged_in = () => {
    return true; 
};

