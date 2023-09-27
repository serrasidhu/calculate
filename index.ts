import inquirer from 'inquirer';
 const result :{
     numOne:number,
     numTwo:number,
     operators:string,
 }=await inquirer.prompt([
 {
     type: "number",
     name: "numOne",
     message: "enter num 1"
 },
   {
     type: "number",
     name: "numTwo",
     message: "enter num 2 "
    
},
  {
     type: 'list',
     name: "operators",
     choices:["+","-","/","*","**","%"],
     message: "select operators : "
 }
])
let answer:number=0
 const {numOne,numTwo,operators}=result
if (numOne&&numTwo&&operators) { 
      if (operators === "+") {
         answer=numOne + numTwo
     } else if(operators === "-"){
         answer=numOne -numTwo 
     } else if (operators === "/") {
         answer=numOne / numTwo
     }else if (operators === "*") {
         answer=numOne * numTwo
     }else if (operators === "**") {
         answer=numOne ** numTwo
     }else if (operators === "%") {
         answer=numOne % numTwo
     }
 } 
 else {
    console.log("error");  
 } 
  console.log('the answer is:',answer)