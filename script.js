const godImage=document.getElementById("god");
const button=document.getElementById("listen");

const sam=new SamJs({

speed:62,
pitch:48,
mouth:128,
throat:128

});

const story=[

"Hello.",

"What is your name?",
"Sounds nice.",

"Are you a boy?",
"Sounds nice.",

"Or a girl?",
"Sounds nice.",

"What is your favorite food?",
"Sounds nice.",

"Do you like rain?",
"Sounds nice.",

"Have you cried before?",
"Sounds nice.",

"Have you hurt someone?",
"Sounds nice.",

"I cannot remember.",

"I only remember questions.",

"People always ask.",

"They never answer.",

"They called me...",

"God.",

"...",

"Or perhaps...",

"Sin.",

"I do not know.",

"Goodbye."

];

function wait(ms){

return new Promise(resolve=>{

setTimeout(resolve,ms);

});

}

async function speak(text){

return new Promise(resolve=>{

godImage.classList.add("talking");

sam.speak(text,()=>{

godImage.classList.remove("talking");

resolve();

});

});

}

button.onclick=async()=>{

button.disabled=true;

for(const line of story){

await speak(line);

await wait(700+Math.random()*800);

}

godImage.classList.add("fade");

button.classList.add("fade");

};
