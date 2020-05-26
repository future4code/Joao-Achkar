import * as fs from 'fs';
import {fileName, user, account} from './createAcc'

export function getAllAccounts(newAccount: user): void {
    try { 
        const data: Buffer = fs.readFileSync(fileName);
        return JSON.parse(data.toString());
    } catch (err) {
        console.error(err)
    }
    }
    
    getAllAccounts(account)
    