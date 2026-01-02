export interface Game {
    title: string;
    description: string;
    genre: string;
    coverImage: string;
    link: string;
}

const games: Game[] = [
    {
        title: "Tidal Tower",
        description: "Rummage through the ocean's spoils to unlock new areas and rise up to the top of the tower!",
        genre: "Platformer",
        coverImage: "/images/games/tidal-tower.png",
        link: "https://rienkt.itch.io/tidal-tower",
    },
    {
        title: "I Woke Up Like This",
        description: "Samsa doesn't exactly know why they're trapped battling bugs for eternity. Perhaps they made a dark pact after watching Starship Troopers. Or maybe Hunter X Hunter's bug arc sent them down an inescapable spiral. Whatever the case, they're here to destroy bugkind and wear the carapaces of their enemies!",
        genre: "Autobattler",
        coverImage: "/images/games/woke-up.png",
        link: "https://rienkt.itch.io/i-woke-up-like-this",
    },
    {
        title: "PurrPoint Health",
        description: "Telehealth by cats for cats — with an award-winning money-back guarantee.",
        genre: "Simulation",
        coverImage: "/images/games/purrpoint.png",
        link: "https://rienkt.itch.io/purrpoint-health",
    }
];

export default games;
