export function listHeros(hero) {
  console.log("list hero action", hero);

  return {
    type: "LIST_HEROS",
    value: hero
  };
}

export function createHero(hero) {
  console.log("create hero action", hero);
  return {
    type: "CREATE_HERO",
    value: hero
  };
}

export function deleteHero(heroName) {
  console.log("delete hero action", heroName);
  return {
    type: "DELETE_HERO",
    value: heroName
  };
}
