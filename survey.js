const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What is an activity you like doing? ", (answer2) => {
    console.log(`${answer2} sounds like fun!`);

    rl.question("What meal of the day is your favourite? ", (answer3) => {
      console.log(`YUM! ${answer3}`);

      rl.question("What music do you listen to? ", (answer4) => {
        console.log(` I love ${answer4} also!`);

        rl.question("What is your superpower? ", (answer5) => {
          console.log(`${answer5} sounds awesome!`);

          rl.question("What sport is your favourite? ", (answer6) => {
            console.log(`${answer6} is a great sport!`);
            

 const profile = `My name is ${answer}, I like playing ${answer2}, I love ${answer3}, I listen to ${answer4}, I can ${answer5}, and I also love to play ${answer6}!`
 console.log(profile)

            rl.close();
          });
        });
      });
    });
  });
});
