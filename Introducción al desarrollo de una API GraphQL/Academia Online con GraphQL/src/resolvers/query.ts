import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const query: IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        },
        estudiante(__: void, { id }): any {
            // si no hay estudiante con ese id, debería devolver null.
            return database.estudiantes.filter(estudiante => estudiante.id === id)[0];
        },
        cursos(): any {
            return database.cursos;
        },
        curso(__: void, { id }): any {
            // si no hay curso con ese id, debería devolver null.
            return database.cursos.filter(curso => curso.id === id)[0];
        },
    }
}

export default query;