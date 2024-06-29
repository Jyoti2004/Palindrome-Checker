
function isPalindrome(str){
    // Step 1: Clean the input string
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    // Uses regular expression to replace any character that is not a lowercase letter (a-z) or digit (0-9). The ^ inside the square brackets ([^...]) means "not", so [^a-z0-9] matches any character that is not a lowercase letter or digit. The g flag at the end (/g) ensures that all occurrences are replaced, not just the first one found.
    console.log(cleanStr);

    // Step 2: Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    // .join(''): Joins the elements of the reversed array back into a single string. 
    // .split - splits it into an array of individual characters.
    console.log(reversedStr);
    // Step 3: Check if the cleaned string is equal to its reversed version
    return cleanStr === reversedStr;
}




function palindromeChecker(){
  //Step 1: Get references to DOM elements
  const inputText = document.getElementById("inputText");
  const result = document.getElementById("result");

  // Step 2: Check if the input text is a palindrome
  if(isPalindrome(inputText.value)){
  //Step 3a:Update result text if input is palindrome
    result.textContent = `"${inputText.value}" is a Palindrome.`;
  }else{
//Step 3b:Update result text if input is not palindrome
    result.textContent = `"${inputText.value}" is not a Palindrome.`;
  }
 // Step 4: Add a CSS class for fade-in animation
  result.classList.add("fadeIn");
  // Step 5: Clear the input text field
  inputText.value = "";

}




document.getElementById("checkButton").addEventListener("click", palindromeChecker);