import { performPurchase } from "../src/performPurchase";
import { TestScheduler } from "jest";
import { User } from "../src/model/User"

describe("Testing performPurchase", ()=> {
    test("Should return User balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 200
        }
    const result = performPurchase(user, 200)

    expect (result).toEqual({
        ...user,
        balance: 0
        });
    });
});