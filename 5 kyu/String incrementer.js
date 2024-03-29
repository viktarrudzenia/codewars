/* DESCRIPTION
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

/* TESTS
Test.assertEquals(incrementString("foobar000"), "foobar001");
Test.assertEquals(incrementString("foo"), "foo1");
Test.assertEquals(incrementString("foobar001"), "foobar002");
Test.assertEquals(incrementString("foobar99"), "foobar100");
Test.assertEquals(incrementString("foobar099"), "foobar100");
Test.assertEquals(incrementString(""), "1");
*/

function incrementString(strng) {
  let regExpForSearchLastNumber = /\d+$/;
  let lastNumber = strng.match(regExpForSearchLastNumber);
  if (lastNumber === null) {
    return strng + "1";
  }
  let firstPartOfWord = strng.slice(0, lastNumber.index);
  let secondPartOfWord = lastNumber[0];

  let realLastNumber = +lastNumber + 1;
  if (secondPartOfWord.length > ("" + realLastNumber).length) {
    secondPartOfWord =
      secondPartOfWord.slice(0, -("" + realLastNumber).length) + realLastNumber;
  } else {
    secondPartOfWord = realLastNumber;
  }

  strng = firstPartOfWord + secondPartOfWord;
  return strng;
}
