import { Character } from "./models.ts/model";

export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name || input.life === undefined || input.strong === undefined ||
        input.defense === undefined
    ) {
        return false;
    }
    if (input.life < 0 || input.strong < 0 || input.defense < 0){
        return false;
    }
    return true;
};