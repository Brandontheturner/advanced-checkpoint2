export function listHeros(hero) {
  return {
    type: "LIST_HEROS",
    value: hero
  };
}

export function createHero(hero) {
  return {
    type: "CREATE_HERO",
    value: hero
  };
}

export function deleteHero(heroName) {
  return {
    type: "DELETE_HERO",
    value: heroName
  };
}
