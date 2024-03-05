let jokes=[`A waiter gives a gentleman a cup of coffee. The gentleman takes a sip and spits it out.
He turns to the waiter and says, “Waiter! This coffee tastes like mud!” 
The waiter, looking surprised, turns to the gentleman and says, “But, sir, it’s fresh ground!”`,

`A kid finds a magical lamp. He rubs the lamp, and a genie appears and says, “What is your first wish?” The kid says, “I wish I were rich!” The genie replies, “It is done! What is your second wish, Rich?”`,

`A guy asks a girl to go to a dance. She agrees, and he decides to rent a suit. The rental has a long line, so he waits and waits, and finally he gets his suit.
He decides to buy flowers, so he goes to the flower shop. The flower shop has a long line, so he waits and waits, until he finally buys flowers.
He picks up the girl and they go to the dance. There is a long line into the dance, so they wait and wait.
Finally, they get into the dance, and the guy offers to get the girl a drink. She asks for punch, so he goes to the drink table, and there is no punch line.`,

`Three friends stranded on a deserted island find a magic lamp. Inside it is a genie who agrees to grant each friend one wish.
“I want to go home,” says the first friend. The genie grants her wish.
“I want to go home, too,” says the second friend. And the genie sends her back home.
“I’m lonely,” says the third friend. “I sure wish my friends were back here."`,

`While leaving a grocery store, a customer dropped a bag of flour. A Scout ran to pick it up.
“Don’t bother, young man,” said the customer. “It’s self-rising.”
`,

`A photon walks into a hotel.
The desk clerk says, “Can we help you with your luggage?”
The photon says, “No, thanks. I’m traveling light.”`,

`A man walks into a library, approaches the librarian and says, “I’ll have a cheeseburger and fries, please.”
The librarian says, “Sir, you know you’re in a library, right?”
“Sorry,” he whispers. “I’ll have a cheeseburger and fries, please.”`,

`The teacher asked little Johnny if he knew his numbers.
“Yes,” he said. “My father taught me.”
“Good. What comes after three?”
“Four,” answered the boy.
“What comes after six?”
“Seven.”
“Very good,” said the teacher. “Your dad did a good job. And what comes after 10?”
“Jack.”`,

`“Oh, no!” the kangaroo groaned to her friend, the rabbit. “The forecast calls for rain.”
“What’s the problem with that?” asked the rabbit. “We could use some rain.”
“Sure,” the kangaroo said. “But that means my kids will have to play inside all day!”`,

`A man went to visit a friend and was amazed to find him playing chess with his dog. The man watched the game in astonishment for a while.
“I can hardly believe my eyes!” he said. “That’s the smartest dog I’ve ever seen.”
“He’s not so smart,” the friend replied. “I’ve beaten him three games out of five.”`];

function give_joke() {
    return (jokes[(Math.floor(Math.random() * jokes.length))]);
}
document.getElementById('btn').onclick = function() {
    document.getElementById('joke_section').innerHTML = '<q>'+give_joke()+'</q>';
};
