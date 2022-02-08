import input from "input";

function square(size) {
  for (let i = 1; i <= size; i += 1) {
    for (let hght = 1; hght <= 1; hght += 1) {
      let output = "";
      for (let len = 0; len < size; len += 1) {
        output += 'X';
      }
      console.log(output);
    }
  }
}

async function main() {
  const size = await input.text("enter a size");
  square(size);
}
main();
