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
        description: "A simple platformer where you navigate rising tides to reach the top of the tower.",
        genre: "Platformer",
        coverImage: "/images/games/tidal-tower-cover.jpg",
        link: "https://example.com/tidal-tower",
    }
];

export default games;
