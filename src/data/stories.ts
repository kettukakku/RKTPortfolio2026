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
        title: "Lorem Ipsum",
        description: "Excepteur ad sit ex veniam in aute sunt.",
        slug: "cats-tooth",
        coverImage: "/images/stories/cats-tooth-cover.jpg",
        genre: Genre.Fantasy,
    },
    {
        title: "Lorem Ipsum",
        description: "Excepteur ad sit ex veniam in aute sunt.",
        slug: "cats-tooth",
        coverImage: "/images/stories/cats-tooth-cover.jpg",
        genre: Genre.Fantasy,
    },
     {
        title: "Lorem Ipsum",
        description: "Excepteur ad sit ex veniam in aute sunt.",
        slug: "cats-tooth",
        coverImage: "/images/stories/cats-tooth-cover.jpg",
        genre: Genre.Fantasy,
    },
     {
        title: "Lorem Ipsum",
        description: "Excepteur ad sit ex veniam in aute sunt.",
        slug: "cats-tooth",
        coverImage: "/images/stories/cats-tooth-cover.jpg",
        genre: Genre.SciFi,
    },
     {
        title: "Lorem Ipsum",
        description: "Excepteur ad sit ex veniam in aute sunt.",
        slug: "cats-tooth",
        coverImage: "/images/stories/cats-tooth-cover.jpg",
        genre: Genre.Horror,
    },
]

export default stories;