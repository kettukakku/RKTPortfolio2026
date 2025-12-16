export interface Article {
    title: string;
    publication: string;
    link: string;
    coverImage: string;
}

const articles: Article[] = [
    {
        title: "Video Game History: The Best 10 Games on the PLATO System",
        publication: "Game Rant",
        link: "https://gamerant.com/video-game-history-best-10-games-plato-system/",
        coverImage: "/images/articles/plato-system-article-cover.jpg",
    }
];

export default articles;