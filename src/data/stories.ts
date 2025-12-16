export enum Genre {
    Fantasy = 'Fantasy',
    SciFi = 'Science Fiction',
    Horror = 'Horror',
}

export interface Story {
    title: string;
    description: string;
    slug: string;
    coverImage: string;
    genre: Genre;
}

const stories : Story[] = [
    {
        title: "The Cat's Tooth",
        description: "A whimsical tale of a cat who discovers a magical tooth that grants wishes.",
        slug: "cats-tooth",
        coverImage: "/images/stories/cats-tooth-cover.jpg",
        genre: Genre.Fantasy,
    }
]

export default stories;