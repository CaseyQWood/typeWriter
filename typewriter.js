const sentence = 'And can you offer me proof of your existence?'
// let time = 0;

const eachChar = (sentence, time) => {
 for (const letter of sentence) {
   time += 50;
   setTimeout(() => {process.stdout.write(letter)}, time);
 }
 setTimeout(() => {console.log('\n')}, time)
}

eachChar(sentence, 2000);

