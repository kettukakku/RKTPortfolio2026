export interface Article {
    title: string;
    publication: string;
    link: string;
    coverImage: string;
    excerpt: string;
}

const articles: Article[] = [
    {
        title: "Throwback: 10 Great Games for the PLATO System",
        publication: "Game Rant",
        link: "https://gamerant.com/plato-system-best-games/",
        coverImage: "/images/article-cover/plato-system.jpeg",
        excerpt: "Today, it's easy to take for granted that WiFi or a single Ethernet cable can easily connect us to the internet at large. Back in the '70s, however, the concept of a consumer computer allowing interaction between people hundreds of miles away was far more novel. And among the tech that stood as a stepping stone, the PLATO System — an instruction system utilized on a phone-line connected series of computer terminals — not only took part in fostering the information age, but it has an important place in gaming history."
    },
    {
        title: "Great Newgrounds Games That Died with Flash Player",
        publication: "Game Rant",
        link: "https://gamerant.com/best-newgrounds-games-unplayable-flash-player/",
        coverImage: "/images/article-cover/newgrounds.jpeg",
        excerpt: "While it may be a burial ground of indie animation and gaming today, Newgrounds was once where popular YouTubers like Egoraptor and Jazza and games such as The Binding of Isaac got their start. All platforms have their inevitable decline, but Newgrounds' end came swifter than most when Adobe officially ended support for its Flash Player, making most games on the site unplayable."
    },
    {
        title: "Jujutsu Kaisen 0: A review and interview with the English voice cast",
        publication: "AnimeGeek",
        link: "https://www.animegeek.com/jujutsu-kaisen-0-a-review-and-interview-with-the-english-voice-cast/",
        coverImage: "/images/article-cover/jujutsu-kaisen-theatrical-cover.jpg",
        excerpt: "A high school student is inflicted with a terrible curse. Those around him — friend and foe alike — fall victim to a terrifying power that latched onto him in his youth. And the student, sixteen-year-old Okkotsu Yuta, wishes to give up. Scouted by Jujutsu sorcerers — individuals who wield curses to protect the world — Yuta has a chance to make the very thing he fears his source of strength."
    },
    {
        title: "Clip Studio Paint price change update announced for new subscription model",
        publication: "AnimeGeek",
        link: "https://www.animegeek.com/clip-studio-paint-price-change-update-announced-for-new-subscription-model/",
        coverImage: "/images/article-cover/clip-studio.png",
        excerpt: "Back in August 2022, Celsys announced that their manga software Clip Studio Paint would switch from a buy-to-own to a subscription-based model starting in March 2023. Buyers lamented the fact that their purchases would no longer grant them the most up-to-date version of the product well into the future. Today, Celsys has updated fans with not only changes to the upcoming model but prices as well."
    }
];

export default articles;