// Enter your total duration in seconds here (Example: 1:30 = 90 seconds)
    const songDurationInSeconds = 199; 

    // --- 2. ELEMENTS ---
    const range = document.getElementById("myProgressBar");
    const currTimeText = document.getElementById("timeDisplay");
    const totalTimeText = document.getElementById("TotalTime");

    // --- 3. HELPER FUNCTION: Convert Seconds to "MM:SS" ---
    function formatTime(seconds) {
        // Calculate minutes
        const min = Math.floor(seconds / 60);
        // Calculate remaining seconds
        const sec = Math.floor(seconds % 60);
        
        // Return string, adding a '0' if seconds are less than 10
        // Example: returns "1:05" instead of "1:5"
        return min + ":" + (sec < 10 ? "0" + sec : sec);
    }

    // --- 4. INITIAL SETUP ---
    // Set the slider max value to match the song duration
    range.max = songDurationInSeconds;
    // Set the total time text on the right side
    totalTimeText.innerText = formatTime(songDurationInSeconds);

    // --- 5. THE LOGIC (Runs every time you move the slider) ---
    range.oninput = function() {
        // Get current slider value (which represents seconds)
        const currentVal = this.value;
        
        // Convert that value to "MM:SS" and update the text
        currTimeText.innerText = formatTime(currentVal);
    }