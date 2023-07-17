// function to generate and return Word 1 - random number.
function Word1() {
    var randomNumber = Math.floor(Math.random() * 9) + 1;
    return randomNumber;
  }
  const emotions = ["happy", "sad", "excited", "angry", "anxious", "content", "surprised"]; 
  // function to generate and return Word 2 - random emotion
  function Word2() {
    const randomIndex = Math.floor(Math.random() * emotions.length);
    const randomWord = emotions[randomIndex];
    return randomWord;
  }  
  const nouns = ["Laptop", "iPad", "Computer", "Car", "Dog", "Cat", "House"];  
  // function to generate and return Word 3 - random plural noun
  function Word3() {
    const randomIndex = Math.floor(Math.random() * nouns.length);
    const randomWord = nouns[randomIndex];
    return randomWord + 's';
  } 
  const verbs = ["Running", "Sleeping", "Jumping"," Walking", "Driving", "Swimming"];  
  // function to generate and return Word 4 - random verb
  function Word4() {
    const randomIndex = Math.floor(Math.random() * verbs.length);
    const randomWord = verbs[randomIndex];
    return randomWord;
  } 
  function passWord() {
    const number = Word1();
    const emotion = Word2();
    const noun = Word3();
    const verb = Word4();
    const password = number + " " + emotion + " " + noun + " " + verb;
    //console.log(password);
    return password;
  }  
  function wordPassword() {
     let password = [Word1() + ' ' + Word2() + ' ' + Word3() + ' ' + Word4()]; 
  return password [Math.floor(Math.random() * password.length)]; }
   for (i = 0; i < 3; i++) 
  console.log(wordPassword([i]));
  

