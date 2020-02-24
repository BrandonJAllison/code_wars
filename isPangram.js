// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.




function isPangram(string) {
    //replace all non-alphabet character and transform to lowercase
    let str = string.replace(/[^a-z]/gi, "").toLowerCase();
    //convert to set in order to have no repeating letters
    let newSet = new Set(str);
    //once in set triple-equal to 26 to ensure legitimacy of pangram and return as boolean
    return newSet.size === 26;
  }