import type { Book } from "../data/book.ts";

const books: Book[] = [
    {
        title: "The Light Must Hold",
        genre: "Dark Fantasy / Horror",
        blurb: "In a world devoid of star light, divine crystals shield the folk of Esiaga from darkness.\n\nWhen Lior, a priest who communes with the crystals, prays to the deities for  guidance, he is met with silence. \n\nThat is, until travelers arrive at the secluded abbey with grim news of the world beyond the mountains. Sworn to provide their kingdom with aid in times of need, Lior and his convent brothers must make the hazardous pilgrimage to the capital. Where that journey leads Lior, however, may finally provide guidance, if not at a grave cost.\n\nThe Light Must Hold - a classic dark fantasy adventure that combines fanciful prose and sisyphean struggles.",
        coverImage: "images/books/thelightmusthold.jpg",
        links: {
            amazon: "https://www.amazon.com/dp/example",
            goodreads: "https://www.goodreads.com/book/show/example",
        },
    },
];

export default books;