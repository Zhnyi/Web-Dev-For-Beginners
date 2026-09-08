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
