function getUniqueStats() {
    let numbers = [...Array(11).keys()]; // Array of numbers 0-10, which are actuallly empty at this point. (same as loop and numbers.push)
    console.log(numbers);
    numbers.sort(() => Math.random() - 0.5); // Shuffles in the numbers into the array.
    console.log(numbers);
    return numbers.slice(0, 3); // Gets the first three unique numbers from the array, and returns, so it's random.
}

let [hungerStart, happinessStart, energyStart] = getUniqueStats();

let pet = {
    name: "Fluffy",
    hunger: hungerStart, // 10 is best (full), 0 is worst (starving)
    happiness: happinessStart, // 10 is best (happy), 0 is worst (sad)
    energy: energyStart, // 10 is best (rested), 0 is worst (exhausted)

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
