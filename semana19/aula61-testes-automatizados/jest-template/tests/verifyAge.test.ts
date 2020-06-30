
import { User, NACIONALITY, Casino, LOCATION } from "../src/model/User_2"
import { verifyAge } from "../src/verifyAge";

describe("Testing verifyAge", ()=> {
  /*  test("1 brazilian allowed", () => {
        const brazilian: User = {
          name: "Astrodev",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Astrodev"]);
      });
    test("1 american allowed", () => {
        const american: User = {
          name: "Josho",
          age: 20,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const nightClub: Casino = {
          name: "Balada Louca",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(nightClub, [american]);
        expect(result.americans.allowed).toEqual(["Josho"]);
      }); */

    test("2 american and 2 brazilian unallowed", () => {
        const americanOne: User = {
          name: "Josho",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
        const americanTwo: User = {
          name: "Kevin",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
        const brazilianOne: User = {
          name: "Jorge",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
        const brazilianTwo: User = {
          name: "Marcio",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const nightUp: Casino = {
          name: "Up Party",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(nightUp, [americanOne, americanTwo,
        brazilianOne, brazilianTwo]);
        expect(result.brazilians.unallowed).toEqual(["Jorge", "Marcio"]);
        expect(result.americans.unallowed).toEqual(["Josho", "Kevin"]);

      });
/*
    test("1 brazilian allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });

  test("1 american allowed", () => {
    const american: User = {
      name: "Astrodev",
      age: 17,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [american]);
    expect(result.americans.unallowed.length).toBe(1);
  });

  test("No one allowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);

    expect(result.brazilians.unallowed).toContain("Astrodev BR");
    expect(result.americans.unallowed).toContain("Astrodev EUA");
  });*/
});