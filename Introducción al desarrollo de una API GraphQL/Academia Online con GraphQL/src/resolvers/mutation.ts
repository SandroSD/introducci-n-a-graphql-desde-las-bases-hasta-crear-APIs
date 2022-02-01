import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import _ from 'lodash';
import { cursorTo } from "readline";

const mutation: IResolvers = {
    Mutation: {
        cursoNuevo(__: void, { curso }): any {
            const ItemCurso = {
                id: String(database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                level: curso.level,
                logo: curso.logo,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            }
            if(database.cursos.filter(curso => curso.title === ItemCurso.title).length === 0) {
                database.cursos.push(ItemCurso);
                return ItemCurso;
            }
            return new Error('El curso ya existe con este título.');
        },
        modificarCurso(__: void, { curso }): any {
            const elementoExiste = _.findIndex(database.cursos, function(o) {
                return o.id === curso.id
            });
            if(elementoExiste > -1) {
                const valoraciones = database.cursos[elementoExiste].reviews;
                curso.reviews = valoraciones;
                database.cursos[elementoExiste] = curso;
                return curso;
            }
            return new Error('El curso no existe en la base de datos.');
        },
        eliminarCurso(__: void, { id }): any {
            const borraCurso = _.remove(database.cursos, function(curso) {
                return curso.id === id;
            });
            if(borraCurso[0] === undefined) {
                return new Error('El curso a borrar no existe.');
            }
            return borraCurso[0];
        }
    }
}

export default mutation;