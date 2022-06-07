let sentence = process.argv.slice(2);
let timer = 0;
let timerLabel = 0;
sentence = sentence.join(' ')
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`'${char}' => ${timerLabel} ms \n`);
    timerLabel = timerLabel + 50;
  }, timer);
  timer = timer + 50;
}