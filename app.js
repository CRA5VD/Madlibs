function createParagraph() {
    var wordOne = document.getElementById('wordOne').value; 
    var wordTwo = document.getElementById('wordTwo').value;
    var wordThree = document.getElementById('wordThree').value;
    var wordFour = document.getElementById('wordFour').value;
    var wordFive = document.getElementById('wordFive').value;
    var wordSix = document.getElementById('wordSix').value;
    var wordSeven = document.getElementById('wordSeven').value;
    var wordEight = document.getElementById('wordEight').value;


    var paragraph = "<p> It was a dark and stormy night in " + wordOne +". It had been 3 years since Pigman escaped the mental institute. Police have been on high alert since the massacre in " + wordTwo + ". I decided to take my family on trip to take my mind off of things and a nice trip to" + wordThree + "Would do just that. We made it to our final destination and settled in. We ordered pizza and played a few games while we waited. We were located in the middle of no where. Almost an hour from" + wordFour + ". Suddenly there were scratching sounds coming from" + wordFive + ". It got louder, louder, and louder until it stopped at the back door. The power went out and we began to hear growling noises coming from" + wordSix + ". I looked toward the left and there stood pigman! We ran towards the door and to the car but" + wordSeven + " and we were" + wordEight + " </p>"

    document.getElementById('answer').innerHTML = paragraph;
}