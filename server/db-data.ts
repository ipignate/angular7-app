

export const MOVIES: any = {

    1: {
        id: 1,
        description: "Advantageous",
        longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
        category: 'SCIFI',
        ActorsCount: 7
    },
    2: {
        id: 2,
        description: 'Kissed By God',
        longDescription: "Andy Irons",
        category: 'SPORTS',
        ActorsCount: 11
    },
    3: {
        id: 3,
        description: 'Avatar',
        longDescription: "Scifi Movie",
        category: 'SCIFI',
        ActorsCount: 8
    }
};
export const ACTORS = {

    1: {
        id: 1,
        "description": "Robert Chang",
        "duration": "4:17",
        "seqNo": 1,
        MovieId: 1
    },
    2: {
        id: 2,
        "description": "Jacqueline KIM",
        "duration": "2:07",
        "seqNo": 2,
        MovieId: 1
    },
    3: {
        id: 3,
        "description": "Andy Irons",
        "duration": "2:33",
        "seqNo": 3,
        MovieId: 2
    },
    4: {
        id: 4,
        "description": " Bruce Irons",
        "duration": "4:44",
        "seqNo": 4,
        MovieId: 2
    },
    5: {
        id: 5,
        "description": " Zoe Saldana",
        "duration": "2:55",
        "seqNo": 5,
        MovieId: 1
    },
    6: {
        id: 6,
        "description": "Sigourney Weaver",
        "duration": "3:27",
        "seqNo": 6,
        MovieId: 1
    }
};

export function findMovieById(MovieId:number) {
    return MOVIES[MovieId];
}

export function findActorsForMovie(MovieId:number) {
    return Object.values(ACTORS).filter(Actor => Actor.MovieId == MovieId);
}

