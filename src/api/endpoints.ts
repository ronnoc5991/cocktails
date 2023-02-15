type Endpoint = "randomDrink" | "lookupById";

const endpoints: Record<Endpoint, string> = {
  randomDrink: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  lookupById: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",
};

export default endpoints;
