const sentence = "This is an example sentence that I made up!";

const typeWriter = string => {
  let count = 50;
  let typeWriterFinished = count * string.length;
  for (const char in string) {
    setTimeout(count => {
      process.stdout.write(string[char]);
    }, count);
    count += 50;
  }
  setTimeout(typeWriterFinished => {
    console.log('\n');
  }, typeWriterFinished);
};

typeWriter(sentence);