/* DESCRIPTION
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

/* TESTS
Test.assertEquals(spinWords("Welcome"), "emocleW");
Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
Test.assertEquals(spinWords("This is a test"), "This is a test");
Test.assertEquals(spinWords("This is another test"), "This is rehtona test");
Test.assertEquals(spinWords("You are almost to the last test"), "You are tsomla to the last test");
Test.assertEquals(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
Test.assertEquals(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
*/

function spinWords(starting_string) {
  let final_string = "";
  let array_with_chunked_words = starting_string.split(" ");
  let array_with_word_length = array_with_chunked_words.map(function(word) {
    return word.length;
  });

  for (let i = 0; i < array_with_chunked_words.length; i++) {
    if (array_with_word_length[i] < 5) {
      final_string += array_with_chunked_words[i].toString() + " ";
    } else {
      final_string +=
        array_with_chunked_words[i]
          .split("")
          .reverse()
          .join("") + " ";
    }
  }
  final_string = final_string.slice(0, -1);
  return final_string;
}
