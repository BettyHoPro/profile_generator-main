const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  console.log(`Thank you for your answer: ${name} `);
  rl.question(`What's an activity you like doing? `, (activity) => {
    console.log(`Thank you for your answer: ${activity}`);
    rl.question(`What do you listen to while doing that? `, (music) => {
      console.log(`Thank you for your answer: ${music}`);
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `,(meal) => {
        console.log(`Thank you for your answer: ${meal}`);
        rl.question(`What's your favourite thing to eat for that meal? `,
          (favourFood) => {
          console.log(`Thank you for your answer: ${favourFood}`);
          rl.question(`Which sport is your absolute favourite? `,(sport) => {
            console.log(`Thank you for your answer: ${sport}`);
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `,(superpower) => {
              console.log(`Thank you for your answer: ${superpower}`);
              console.log(`Here are what I know about you: `);
              console.log(`Hi, ${name}, you like to listen ${music} while you are ${activity}. The ${meal} is your favourite meal in a day. During ${meal}, you like to eat ${favourFood}. You also like to ${sport}. You are really good at ${superpower}! Thanks for telling me about yourself.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
