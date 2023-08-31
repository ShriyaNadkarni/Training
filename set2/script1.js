let str1 = 'The teacher instructed, “Don\'t forget to use the backslash (\\) in the file path!”'
document.getElementById('third').innerHTML = str1;






//question 4
//1.string Concatenation:
// let tech1 = 'HTML';
// let tech2 = 'CSS' ; 
// let tech3 = 'JavaScript';
// let output = 'Core frontend technologies are ' + tech1 + ', ' + tech2 + ', ' + tech3 + '.';
// document.getElementById('fourth').innerHTML=output;

//2. Template Literals 
let tech1 = 'HTML'; 
let tech2 = 'CSS'; 
let tech3 = 'JavaScript';
let output = `Core frontend technologies are ${tech1}, ${tech2}, ${tech3}.`;
document.getElementById('fourth2').innerHTML=output;





//Question5
//Extract the First Character
//1. Using CharAt()
let string = "Hello, World!";
let firstChar1 = string.charAt(0);  // this method just gives u 1 character at a time 
document.getElementById('char').innerHTML=firstChar1;

//2. Using Barcket notation
let str2 = "Hello, World!";
let firstChar2 = str2[0]; 
document.getElementById('char2').innerHTML=firstChar2;

//3.Using substring()
let string2 = "Hello, World!";
let partOfString = string2.substring(0, 5); // Extract characters from index 0 to 4
document.getElementById('char3').innerHTML=partOfString;

//4. Using Slice()
let string3 = "Hello, World!";
let partOfStr= string3.slice(0, 5); // Extract characters from index 0 to 4 
document.getElementById('char4').innerHTML=partOfStr;


//5.Using substr()
let string4 = "Hello, World!";
let str5= string4.length;
console.log(str5);
let partOfSt= string4.substr(0, 5); // Extract characters from index 0 to 4 
document.getElementById('char5').innerHTML=partOfSt;

//Extract last
//1. using charat()
let string5 = "Hello, World!";
let lastChar1 = string5.charAt(string5.length-1);   
document.getElementById('char6').innerHTML=lastChar1;

//2.normal way
let string6 = "Hello, World!";
let lastChar2 = string6[string6.length-1]; 
document.getElementById('char7').innerHTML=lastChar2;

//3.Substring()
let inputString = "This is a sample sentence";
let lastIndex = inputString.lastIndexOf(" ");  //i think first we need to get the lastindex to use substring

if (lastIndex !== -1) {
let lastWord = inputString.substring(lastIndex + 1);
document.getElementById('char8').innerHTML=lastWord;
}


//4.slice()
let string7 = "This is a sample sentence";
let partOfStr7= string7.slice(17, 25); 
document.getElementById('char9').innerHTML=partOfStr7;

//5.substr()
let string8 = "Shriya Nadkarni";
let partOfSt8= string8.substr(7, 15); 
document.getElementById('char10').innerHTML=partOfSt8;










//Question 6
let string9 = "In the morning, we say 'Good Morning'.";
let string91 = string9.replace("In the morning", "At night").replace("Good Morning","Good night");
document.getElementById('replace1').innerHTML=string91;








//Question 7
//1. trim()
let String10 = " Have a great day! ";
let trimmedString = String10.trim();
document.getElementById('space1').innerHTML=trimmedString;

//2. Trimstart() & 3. TrimEnd()
let text = " Have a great day! ";
let trimmedStart = text.trimStart();
let trimmedEnd = text.trimEnd();
document.getElementById('space2').innerHTML=trimmedStart;
document.getElementById('space3').innerHTML=trimmedEnd;


//4. split()
let Str4 = " Have   a   great   day! ";
let words = Str4.split(' ');
let splitStr = words.filter(word => word !== '').join(' ');
document.getElementById('space4').innerHTML=splitStr;







//Question 8
let number = 1;
let result = String(number).padStart(4, '0');
let result2= String(number).padEnd(4,'0');
document.getElementById('pad1').innerHTML=result;
document.getElementById('pad2').innerHTML=result2;






//Question 9
let string12="This is a sentence";
document.write(string12);

let str6=string12.indexOf("h");
document.getElementById('reg1').innerHTML=str6;

let str7=string12.lastIndexOf("n");
document.getElementById('reg2').innerHTML=str7;

let str8=string12.match(/is/);
document.getElementById('reg3').innerHTML=str8;

let str9=string12.search("en");
document.getElementById('reg4').innerHTML=str9;








//Question 10
let originalString = "Hello World";
let lowercaseString = originalString.toLowerCase();
let uppercaseString = originalString.toUpperCase();
document.getElementById('case1').innerHTML=lowercaseString;
document.getElementById('case2').innerHTML=uppercaseString;


//Question 11
let string11 = "Uniform Resource Locator";
let capital = [];
document.getElementById('uni1').innerHTML=string11;

for (let i = 0; i < string11.length; i++) {
    let unicode = string11.charCodeAt(i);
    if (unicode >= 65 && unicode <= 90) 
    {
        capital.push(unicode);
    }
}

document.getElementById('uni2').innerHTML="Character Codes of Capital Letters: "+ capital;

let op  = "";
for (let unicode of capital) {
    op += String.fromCharCode(unicode);
}

document.getElementById('uni3').innerHTML="Result : "+ op;







//Question 12
let charCodeA = "A".charCodeAt(0);
let charCodea = "a".charCodeAt(0);

if (charCodeA < charCodea) {
document.getElementById('charcode1').innerHTML="The character code of 'A' comes before 'a'.";
} else {
document.getElementById('charcode1').innerHTML="The character code of 'A' does not come before 'a'.";
}


//Question 13
//1. console.log
let myString = "Shriya Nadkarni";
console.log(myString); 

//2.innerhtml
  let myStr = "Shriya Nadkarni";
    document.getElementById("output1").innerHTML = myStr;

//3. write()
let myStr1 = "Shriya Nadkarni";
document.write(myStr1); 

//4. alert()
let myStr2= "Answer of Question 13 ";
alert(myStr2); 



//Question 14
//1. using concat()
let String14 = "Okay ";
let dupString = String14.concat(String14);
document.getElementById('duplicate1').innerHTML=dupString;

//2.  using + operator
let String141 = "Okay ";
let dupString1 = String141 + String141;
document.getElementById('duplicate2').innerHTML=dupString1;


