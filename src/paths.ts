type PathName = "home" | "drink-detail" | "drink-search";

const paths: Record<PathName, string> = {
  home: "/",
  "drink-search": "/drinks/search",
  "drink-detail": "/drinks/:idDrink",
};

export default paths;
