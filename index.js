let jocks = [`What do sea monsters eat?Fish and ships!`,

    `What do a tick and the Eiffel tower have in common?They’re both Paris sites.[1]`,

    `What did the ocean say to the shore? Nothing, it just waved.`,

    `When does a joke become a dad joke? When it’s apparent.Image titled 13460465 5`,

    `What did summer say to spring? I’m going to fall!`,

    `What did one snowman say to another?Wait, do you smell carrots?`,

    `What did the hungry clock do? It went back 4 seconds.`,

    `What’s the tallest building in the world? A library, of course. It has so many stories!`,

    `Don’t take life too seriously. Remember, you will never get out of it alive!`,

    `I always take life with a grain of salt. And a slice of lemon. And a shot of tequila!`,

    `I know they say that money talks… ...But all mine says is “Goodbye!`,

    `I used to have a handle on life… ...But then it broke.`,

    `I tried to catch fog the other day.But I mist.`,

    `Let’s start telling people their brain is an app.Maybe then they’ll want to use it!`,

    `I’m reading a book about anti-gravity.It’s literally impossible to put down!`,

    `What do you call a one-eyed dinosaur?Thesaurus.`,

    `Why can’t you trust a burrito?They tend to spill the beans.`,

    `What’s a plant’s favorite drink?Root beer!`,

    `I threw a boomerang a few years ago… ...And now I live in constant fear.Image titled 13460465 20`,

    `What did one hat say to another?You wait here; I’ll go on ahead.`,

    `I get enough exercise just pushing my luck Blunt pencils are really pointless.`,

    `6:30 is the best time on a clock, hands down. Just burned 2,000 calories!`,
    `That's the last time I leave brownies in the oven while I nap.`,
    `You and I will be friends forever!Because at this point, you know too much.`,

    `Thanks for being my best friend. And for always going along with my worst ideas, of course!`,

    `This may be cheesy… ...But you’re legen-dairy!28 What concert only costs 45 cents?`,


    `What kind of button doesn’t button or unbutton?`,

    `I know someone who does a great impression of an owl…`,

    `I’m a nobody and nobody is perfect… ...Therefore, I must be perfect!`,

    `Knock knock. Who’s there? Muffin. Muffin who? Muffin in this world can stop us`,];
let randamNum = Math.floor(Math.random() * (jocks.length - 1));
let randamJjocks = jocks[randamNum];
document.getElementById("jocks").innerHTML = randamJjocks;

let backwarkButton = () => {
    let randamNum = Math.floor(Math.random() * (jocks.length - 1));
    console.log(randamNum);
    randamNum = randamNum - 1;
    let randamJjocks = jocks[randamNum];
    document.getElementById("jocks").innerHTML = randamJjocks;
}
 
let forwardButton = ()=>{
    let randamNum = Math.floor(Math.random() * (jocks.length - 1));
    console.log(randamNum);
    randamNum = randamNum + 1;
    let randamJjocks = jocks[randamNum];
    document.getElementById("jocks").innerHTML = randamJjocks;
}