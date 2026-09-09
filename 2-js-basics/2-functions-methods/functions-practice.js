function sayhello() {
  console.log("Hello!");
}

function introduceYourself(name){
    console.log(`Hi, my name is ${name}`);
}

function greetPerson(name,greeting = "Hello")   {
    console.log(`${greeting}, ${name}`);
}

function createFullName(f,l){
    return `${f} ${l}`;
}

function calculateTip(Amount, TipPercentage){
    return Amount * (TipPercentage);
}

sayhello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);

//challenge self
function A(Time){
    setTimeout(() => {
        console.log(`It's been ${Time} seconds`);
    }, Time * 1000);
}

//challenge self countdown
function countdown(T) {
  let results = [T];
  
  for (let i = T; i > 0; i--) {
      setTimeout(() => {
          results.push(i);
      }, (T - i) * 1000);
  }
  return results;
}

countdown(5)

