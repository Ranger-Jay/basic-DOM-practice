function getRandomStat() {
    return Math.floor(Math.random() * 11); // Random number between 0 and 10
}

let pet = {
    name: "Fluffy",
    hunger: getRandomStat(), // 10 is best (full), 0 is worst (starving)
    happiness: getRandomStat(), // 10 is best (happy), 0 is worst (sad)
    energy: getRandomStat(), // 10 is best (rested), 0 is worst (exhausted)

    eat: function() {
        if (this.hunger < 10) {
            this.hunger++;
            this.energy--;
            console.log(this.name + " eats and feels less hungry, but loses some energy.");
        } else {
            console.log(this.name + " is already full!");
        }
        this.updateStatus();
    },

    play: function() {
        if (this.energy > 0 && this.hunger > 0) {
            this.happiness++;
            this.hunger--;
            this.energy--;
            console.log(this.name + " plays and is happier, but gets hungrier and loses energy!");
        } else {
            console.log(this.name + " is too hungry or too tired to play.");
        }
        this.updateStatus();
    },

    sleep: function() {
        if (this.energy < 10) {
            this.energy = 10;
            this.hunger--;
            console.log(this.name + " sleeps and feels fully rested, but wakes up a bit hungrier!");
        } else {
            console.log(this.name + " is already well-rested!");
        }
        this.updateStatus();
    },

    updateStatus: function() {
        document.getElementById("status").textContent = 
            "Hunger: " + this.hunger + " (10=Full), Happiness: " + this.happiness + " (10=Happy), Energy: " + this.energy + " (10=Rested)";
    }
};

// Initialize the status on page load
pet.updateStatus();
