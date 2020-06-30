import { validateCharacter } from "../src/validateCharacter";
 
describe("Testing validateCharacter", ()=> {
  test("Should return false for empty name", () => {
      const result = validateCharacter({
        name: "",
        life: 1500,
        defense: 500,
        strong: 300,
      });
  
      expect(result).toBe(false);
    });
/*
  test("Should return false for empty life", () => {
      const result = validateCharacter({
        name: "Zan",
        life: 0,
        defense: 500,
        strong: 300,
      });

      expect(result).toBe(true);
    });

  test("Should return true for empty strong", () => {
      const result = validateCharacter({
        name: "Zan",
        life: 200,
        defense: 500,
        strong: 0,
      });

      expect(result).toBe(true);
    });

  test("Should return true for empty defense", () => {
      const result = validateCharacter({
        name: "Zan",
        life: 200,
        defense: 0,
        strong: 500,
      });

      expect(result).toBe(true);
    });

  test("Should return false for negative defense, life or strong", () => {
      const result = validateCharacter({
        name: "Zan",
        life: 200,
        defense: -5,
        strong: 500,
      });

      expect(result).toBe(false);
    });

  test("Should return true for defense, life or strong equal 0", () => {
      const result = validateCharacter({
        name: "Zan",
        life: 200,
        defense: 0,
        strong: 500,
      });

      expect(result).toBe(true);
    });

  test("Should return true for name, defense, life or strong valids", () => {
      const result = validateCharacter({
        name: "Zan",
        life: 200,
        defense: 600,
        strong: 500,
      });

      expect(result).toBe(true);
    });

  test("Creating Mocks", () => {
      const validatorMock = jest.fn(() => {
        return true
      });
  });

  test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});
*/
});
