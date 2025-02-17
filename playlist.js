function addSongs() {
    var song1 = document.getElementById("song1");
    var song2 = document.getElementById("song2");
    var song3 = document.getElementById("song3");
    var song4 = document.getElementById("song4");

    song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
    song2.innerHTML = "Great Balls of Fire, by Jerry JSON Lewis";
    song3.innerHTML = "I Code the Line, by Johnny JavaScript";
    song4.innerHTML = "Blank spot, by No Body😜";
}

window.onload = addSongs;

song3.setAttribute("class", "redtext");
song2.setAttribute("alt", "alt123");
// can change the element name to perform different tests. song1,2,3,4 etc
var altText3 = document.getElementById("song4");
var altText33 = altText3.getAttribute("alt");
if (altText33 == null) {
    console.log("No alt text");
} else {
    console.log("test 123, song's alt text is: " + altText33);
}

// just as an aside, for the ::marker (the actual bullet point dots), can be changed in css, but can also do in js as an example:
// let listItem = document.querySelector("li");
// listItem.style.listStyleType = "square";
// (can also insert emojis in css,, better to use css imho, unless the markers need to be dynamically changed)
