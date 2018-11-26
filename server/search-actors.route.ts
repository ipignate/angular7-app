import {Request, Response} from 'express';
import {ActorS} from "./db-data";
import {setTimeout} from "timers";

export function searchActors(req: Request, res: Response) {

    const queryParams = req.query;

    const MovieId = queryParams.MovieId,
          filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder,
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize);

    let Actors = Object.values(ACTORS).filter(Actor => Actor.MovieId == MovieId).sort((l1, l2) => l1.id - l2.id);

    if (filter) {
       Actors = Actors.filter(Actor => Actor.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        Actors = Actors.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const ActorsPage = Actors.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({payload: ActorsPage});
    },1000);
}
