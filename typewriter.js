const sentence = 'And can you offer me proof of your existence?\n'
let time = 0;

const eachChar = (sentence) => {
 for (const letter of sentence) {
   time += 50;
   setTimeout(() => {process.stdout.write(letter)}, time)
 }
}

setTimeout(() => {eachChar(sentence)},)

