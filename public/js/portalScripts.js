const timeEvent = document.getElementById("punch-time");

const punchTimeFunction = async () => {
  try {
    const currentDate = moment().format();
    const currenttime = moment(currentDate).format("HH:mm")
    const timeCardId = parseInt(document.getElementById("timeCardId").value);
    let jsonBody = JSON.stringify({
        date: currentDate,
        recorded_time: currenttime,
        time_card_id: timeCardId,
      });
    const response = await fetch("/api/timeevents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonBody,
    });
    console.log("response", response);

    if (response.ok) {
      console.log('Successful');
      // refresh page, please
    } else {
      console.error("Failed to record time event");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

timeEvent.addEventListener('click', punchTimeFunction);

const logged_in = () => {
  return true;
};

