let pet = {
    name: "Fluffy",
    hunger: 5,
    happiness: 5,
    energy: 5,

    eat: function() {
        if (this.hunger > 0) {
            this.hunger--;
            this.energy++;
            console.log(this.name + " eats and feels less hungry.");
        } else {
            console.log(this.name + " is already full!");
        }
        this.updateStatus();
    },

    play: function() {
        if (this.energy > 2) {
            this.happiness++;
            this.energy--;
            console.log(this.name + " plays and is happier!");
        } else {
            console.log(this.name + " is too tired to play.");
        }
        this.updateStatus();
    },

    sleep: function() {
        this.energy = 10;
        console.log(this.name + " sleeps and feels fully rested!");
        this.updateStatus();
    },

    updateStatus: function() {
        document.getElementById("status").textContent = 
            "Hunger: " + this.hunger + ", Happiness: " + this.happiness + ", Energy: " + this.energy;
    }
};
