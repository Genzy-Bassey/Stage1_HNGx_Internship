
        // JavaScript to populate current day of the week and UTC time
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const currentDay = daysOfWeek[currentDate.getUTCDay()];
        const currentUTCTime = currentDate.getTime();

        // Update the HTML elements with the data-testid attributes

        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
    