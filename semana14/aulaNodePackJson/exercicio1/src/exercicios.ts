export {}

let operation: string = process.argv[2];
const num1: number = Number(process.argv[3]);
const num2: number = Number(process.argv[4]);

function mathOperation (operation: string, num1: number, num2: number) {
    switch (operation) {
        case "add":
            return num1 + num2
    
        case "sub":
            return num1 - num2
    
        case "mult":
            return num1 * num2
    
        case "div":
            return num1 / num2
    
        default:
            return "nothing"
    
    }

}

console.log("O resultado desta operação de ", operation, " é ", mathOperation(operation, num1, num2))