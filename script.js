const byteSize = (str) => {
  // write your code here
  // Create a Blob object with the given string
  const blob = new Blob([str]);

  // Get the size property of the Blob object
  return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
