import * as fs from 'fs';

const listFileName: string = process.argv [2]
const newTask: string = process.argv [3]

try {
    fs.appendFileSync(listFileName, `\n${newTask}`);
    console.log("Conta criada com sucesso")
 } catch(err){
     console.error(err)
 };