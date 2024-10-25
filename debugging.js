/*
  # Debugging: Process of finding bugs in your application
  # Debugger: Tool that helps run through the code to find errors

  # Debugging Node.js using VS code Editor:
    - 'Run and Debug' option
      - First time: Click on 'create a launch.json file' -> Select Node.js
        - This will create .vscode folder and a launch.json file in it
      - Second time and onwards: Click on 'Run' icon (Launch program)

    - Breakpoint:
      - Can be added to check the state of the variables/etc at that given point
      - click on the left of the line number to add a breakpoint

    - Watch:
      - Tracking the state of the variables

    - VSCode debugger options:
      - Continue: Continues and stops at the next breakpoint
      - Step over: Next expression/line
      - Step into: Step into a function
      - Step out: Step outside a function
      - Restart: Restart the debugger
      - Stop: Stop the debugger
*/

console.log('START')

function sum(num1, num2){
    return num1 + num2;
}

const a = 20, b = 25
const result = sum(a, b)
console.log(result)

console.log('END')