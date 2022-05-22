/// Hello World! Thanks for exploring the opportunity to join us at DataBased. We wish you the best with the assessment.
/// Please complete and come prepared to present your solutions to the team.

/// Instructions: Solve the problems listed below.
/// There are more details about the problems in the attached README, we highly
/// recommend reading through the README before solving the problems
/// In order to run the program please install a recent version of node
/// Then change your current directory to the same as the file
/// Run the command `node DataBased_Javascript_Assessment.js`

/**
 * Given an integer n, find the minimal k such that
 * k = m! (where m! = 1 * 2 * ... * m) for some integer m; k ≥n. In other
 * words, find the smallest factorial which is not less than n.
 */
function leastFactorial(n) {
    
        if(n < 1 || n > 120) return "please enter a valid number between 1 and 120" //based on constraints
    
        m = 1; //keeps track of which factorial value it is on 1,2,3,4,5, etc
        k = 1; //keeps track of minimal value to exceed n
	while(k < n){
	    k *= m;
	    m++;
	}
	return k;
}

function testLeastFactorial() {
  	console.log("\n" + "-".repeat(20));
  	console.log("Part 1: Least Factorial");
  	
  	//Regular Test Cases
  	console.log(`Input 17, should be 24, output: ${leastFactorial(17)}`); //1*2*3*4
  	console.log(`Input 5, should be 6, output: ${leastFactorial(5)}`); //1*2*3
  	console.log(`Input 106, should be 120, output: ${leastFactorial(106)}`); //1*2*3*4*5
  	
  	//min Test Cases
  	console.log(`Input 1, should be 1, output: ${leastFactorial(1)}`);
  	console.log(`Input 0, should be Error, output: ${leastFactorial(0)}`); 
  	
  	//max Test Cases
  	console.log(`Input 120, should be 120, output: ${leastFactorial(120)}`);//1*2*3*4*5
  	console.log(`Input 121, should be Error, output: ${leastFactorial(121)}`);
}

/**
 * When a lipstick container is empty, there is actually
 * some leftover lipstick at the bottom that cannot be used because it is not
 * accessible. Being an environmentally friendly business owner, you would like to
 * recycle the leftover lipstick to make more. As a business, you know you need
 * ‘numberOfLeftoversNeeded‘ to make a new lipstick. You have ‘numberOfLipsticks‘
 * in your possession. What’s the total number of lipsticks you can sell
 * assuming that each of your customers return their leftovers?
 */
function getTotalNumberOfLipsticks(numberOfLipsticks, numberOfLeftoversNeeded) {
  total = 0; //completed lipstick counter
  recycledLipsticks = 0; //counter for recycled lipsticks
  remainderLipsticks = 0; //excess lipsticks not able to be put in a whole lipstick
  
  if(numberOfLipsticks < 0 || numberOfLeftoversNeeded < 0) return 0;
  
  total += numberOfLipsticks; //add initial lipsticks to total
  //create lipsticks and recycled lipsticks
  do{
      
      //the number of sold lipsticks, which increases after each level of recycling
      total += recycledLipsticks;
      
      //The amount of recycled lipsticks that can make a new lipstick and any excess
      recycledLipsticks = parseInt((numberOfLipsticks + remainderLipsticks)/numberOfLeftoversNeeded);
      remainderLipsticks = (numberOfLipsticks + remainderLipsticks)%numberOfLeftoversNeeded;
      
      numberOfLipsticks = recycledLipsticks;
  } while (recycledLipsticks >= 1); //while there can still be a new lipstick created
  return total;
}

function testLipstick() {
  console.log("\n" + "-".repeat(20));
  console.log("Part 2: Lipstick");
  console.log(
    "Input 5 lipsticks and 2 left overs needed, should be: 9, output: " +
      getTotalNumberOfLipsticks(5, 2));
  console.log(
    "Input 15 lipsticks and 3 left overs needed, should be: 18, output: " +
      getTotalNumberOfLipsticks(15, 5));
  console.log(
    "Input 100 lipsticks and 10 left overs needed, should be: 111, output: " +
      getTotalNumberOfLipsticks(100, 10));
  console.log(
    "Input 0 lipsticks and 10 left overs needed, should be: 0, output: " +
      getTotalNumberOfLipsticks(0, 10));
  
  console.log(
    "Input -100 lipsticks and 10 left overs needed, should be: 0, output: " +
      getTotalNumberOfLipsticks(-100, 10));
  console.log(
    "Input 1 lipsticks and 0 left overs needed, should be: 1, output: " +
      getTotalNumberOfLipsticks(1, 0));
}

/**
 * A school teacher wants to hand out treats to his students. The teacher decides
 * the best way to divide the treats is to have the students sit in a circle of
 * sequentially numbered chairs. A chair number will be drawn from a hat. Beginning
 * with the student in drawn chair, one treat will be handed to each student
 * sequentially going around the circle until all treats have been distributed.
 * The teacher wants to have the students involved in sharing treats. He decides
 * that whoever gets the very last treat, will be the student who makes the treats
 * for the next game. Determine the chair number occupied by the student who
 * will receive the last treat.
 * For example, there are 4 students and 6 treats. The students arrange them-
 * selves in seats numbered 1 to 4. Let’s suppose 2 is drawn from the hat. Students
 * receive treats at positions 2,3,4,1,2,3. The student who gets the last treat is in
 * chair number 3.
 */
function getLastStudent(numberOfStudents, treats, startingChair) {
    
    //Less Than 0 Check
    if(numberOfStudents <= 0 || treats <= 0 || startingChair <= 0) 
    return "Please Enter A Positive Valid Integer";
    
    //Greater than Max Check
    if(numberOfStudents > 1000000000 || treats > 1000000000 || startingChair > numberOfStudents)
    return "Please Enter A Smaller Valid Number"
    
    currentChair = startingChair + treats - 1; //-1 to include own chair
    
    if(currentChair%numberOfStudents == 0) return startingChair;
    
    return currentChair%numberOfStudents;
    
  /*Solve Problem 3 here */
  return 0;
}
function testLastStudent(numberOfStudents, treats, startingChair) {
	console.log("\n" + "-".repeat(20));
	console.log("Part 3: Last Student");

	//checking general cases
	console.log(
    		"Input 5 students, 2 treats, and 1 as starting chair, should be 2, output: " +
      		getLastStudent(5, 2, 1));
	console.log(
    		"Input 5 students, 2 treats, and 2 as starting chair, should be 3, output: " +
      		getLastStudent(5, 2, 2));
	console.log(
    		"Input 7 students, 19 treats, and 2 as starting chair, should be 6, output: " +
      		getLastStudent(7, 19, 2));
	console.log(
    		"Input 3 students, 7 treats, and 3 as starting chair, should be 3, output: " +
      		getLastStudent(3, 7, 3));

	//checking min cases
	console.log(
    		"Input 0 students, 2 treats, and 1 as starting chair, should be Min Error, output: " +
      		getLastStudent(0, 2, 1));
	console.log(
    		"Input 5 students, 0 treats, and 2 as starting chair, should be Min Error, output: " +
      		getLastStudent(5, 0, 2));
	console.log(
    		"Input 7 students, 19 treats, and 0 as starting chair, should be Min Error, output: " +
      		getLastStudent(7, 19, 0));

	//checking max cases
	console.log(
    		"Input 1 Billion students, 100 treats, and 1 as starting chair, should be 100, output: " +
      		getLastStudent(1000000000, 100, 1));
	console.log(
    		"Input 1 Billion and 1 students, 100 treats, and 1 as starting chair, should be Max Error, output: " +
      		getLastStudent(1000000001, 100, 1));
	console.log(
    		"Input 100 students, 1 Billion treats, and 1 as starting chair, should be 1, output: " +
      		getLastStudent(100, 1000000000, 1));
	console.log(
    		"Input 100 students, 1 Billion and 1 treats, and 1 as starting chair, should be Max Error, output: " +
      		getLastStudent(100, 1000000001, 1));
	console.log(
    		"Input 100 students, 100 treats, and 101 as starting chair, should be Max Error, output: " +
      		getLastStudent(100, 100, 101));
}

/*
 * Given an array of strings that represent a type of shoe, return how many matching
 * pairs of shoes can be made?
 */
function getPairsOfShoes(shoes) {
  
  count = 0;
  
  //simulating a key-value pair array
  colorArray = []
  numArray = []
  
  //Determine if the current shoe color exists in the colorArray, if not add it and increment corresponding array position in numArray by 1. If it already exists, search colorArray for index and increment numarray at that index
  
  for(i = 0; i < shoes.length; i ++)
    if(!colorArray.includes(shoes[i])){
        colorArray.push(shoes[i]);
        numArray.push(0);
        numArray[numArray.length - 1]++;
    }
    else{
        for(j = 0; j < colorArray.length; j++){
            if(shoes[i] == colorArray[j]){
                numArray[j]++;
            }
        }
    }
    
    //count the pairs(multiples of 2) of shoes in each numArray position and add to total count
    for(i = 0; i < numArray.length; i++){
        count += parseInt(numArray[i]/2);
    }
  
  return count;
}

function testPairsOfShoes() {
  
console.log("\n" + "-".repeat(20));
console.log("Part 4: Pairs of Shoes");

//Test for 2 Pairs of Shoes, Even Total
let shoes = ["red", "blue", "red", "green", "green", "red"];
console.log(
    "Input [",
    shoes.join(","),
    "], should be 2, output: " + getPairsOfShoes(shoes)
  );
  
  
//Test for 3 Pairs of Shoes, 1 duplicated, Odd Total
shoes = ["green", "blue", "blue", "blue", "blue", "blue", "green"];
console.log(
    "Input [",
    shoes.join(","),
    "], should be 3, output: " + getPairsOfShoes(shoes)
  );


//Test  for 0 pairs of Shoes, Odd Total
shoes = ["green", "blue", "red", "purple", "orange"];
console.log(
    "Input [",
    shoes.join(","),
    "], should be 0, output: " + getPairsOfShoes(shoes)
  );
  
//Test  for 0 pairs of Shoes, Even Total
shoes = ["green", "blue", "red", "purple", "orange", "black"];
console.log(
    "Input [",
    shoes.join(","),
    "], should be 0, output: " + getPairsOfShoes(shoes)
  );
  
//Test for 1 pair of shoes
shoes = ["green", "blue", "red", "purple", "green", "black"];
console.log(
    "Input [",
    shoes.join(","),
    "], should be 1, output: " + getPairsOfShoes(shoes)
  );
  
//Test Empty Array of Shoes
shoes = [];
console.log(
    "Input [",
    shoes.join(","),
    "], should be 0, output: " + getPairsOfShoes(shoes)
  );
  
//Test for all same color
shoes = ["green", "green", "green", "green", "green", "green"];
console.log(
    "Input [",
    shoes.join(","),
    "], should be 3, output: " + getPairsOfShoes(shoes)
  );
}

testLeastFactorial();
testLipstick();
testLastStudent();
testPairsOfShoes();
