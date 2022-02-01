# Modificadores de tipo

## <u>Tipos de Modificadores</u>

- Sirven para modificar el comportamiento cuando usamos un tipo.
- 2 tipos:
  - !: Indica valor obligatorio.
    - Permite que el valor sea obligatorio
    - El campo no puede ser nulo (null)
    - Si el campo no tiene ! NO OBLIGATORIO = NO ERROR
    ```
    type Profesor {
        nombre:String!
    }
    ```
  - []: Lista de valores con un elemento ó más.
    - 1 ó + valores.
    - Funciona como las listas / arrays de cualquier lenguaje de programación.
    ```
    type Profesor {
        nombre:String!
        cursos:[String]
    }
    ```
## <u>[]! - Lista con valor requerido / obligatorio</u>
    - Lista NO NULA pero valores PUEDEN SERLO.
    - El valor de la lista no puede ser nulo (null)
    ```
    type Profesor {
        nombre:String!
        cursos:[String]!
    }
    ```

## <u>[!] - Valores lista requerido / obligatorio</u>
    - Lista PUEDE SER NULA pero valores NO PUEDEN SERLO.
    ```
    type Profesor {
        nombre:String!
        cursos:[String!]
    }
    ```

## <u>[!]! - Lista y valores requeridos / obligatorios</u>
    - La lista y el contenido NO PUEDE SER nulos.
    ```
    type Profesor {
        nombre:String!
        cursos:[String!]!
    }
    ```