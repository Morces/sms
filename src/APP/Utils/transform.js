function capitalizeWords(str) {
  // Split the string into an array of words
  var words = str.split(" ");

  // Iterate through each word
  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    // Capitalize the first letter of the word and make the rest lowercase
    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  // Join the words back into a single string and return it
  return words.join(" ");
}

function addCommas(number) {
  number = String(number); // Convert to string if it's not already
  if (number.length <= 3) {
    return number;
  } else {
    return addCommas(number.slice(0, -3)) + "," + number.slice(-3);
  }
}

function formatNumberWithCommas(number) {
  const parts = String(number).split(".");
  parts[0] = addCommas(parts[0]);
  return parts.join(".");
}

function truncate(str, length = 10) {
  const string = new String(str);
  if (string.length > length) return string.slice(0, length) + "...";
  else return string;
}

const transforms = {
  capWord: capitalizeWords,
  upCase: function (txt) {
    return txt.toUpperCase();
  },
  downCase: function (txt) {
    return txt.toLowerCase();
  },
  truncate,
};

export { capitalizeWords, formatNumberWithCommas, transforms };
