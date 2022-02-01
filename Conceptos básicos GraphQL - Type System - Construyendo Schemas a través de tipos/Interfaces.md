# Interfaces

## <u>Definición y Características</u>

- Definiciones abstractas de atributos comunes.
- Muy útil para retornar objetos de diferentes tipos.
- Necesarias cuando buscamos acceder a cierto grupo de objetos que deben cumplir con las propiedades definidas por la interfaz.
- Abstraemos grupos de tipos sobre ellos como una entidad.

## <u>Ejemplo</u>

```
interface Perfil {
    nombre:String!
    email:String!
    edad:Int!
}

type Alumno implements Perfil {
    nombre:String!
    email:String!
    edad:Int!
    curso:String
}
```