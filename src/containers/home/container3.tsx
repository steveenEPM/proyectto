import { FC } from "react"

import { bookCategories, bookAuthors, bookGenres } from "../../utils/homes"


export const Component1: FC = () => (
    <>
        <h3>Novedades</h3>
        <span>
            Descubre las últimas publicaciones y disfruta de historias frescas.
        </span>
        <ol>
            {
                bookCategories.map((key, index) => (
                    <li key={index}>
                        <a>{key}</a>
                    </li>
                ))
            }
        </ol>
    </>
)



export const Component2: FC = () => (
    <>
        <h3>Por Género</h3>
        <span>
            Explora nuestra colección organizada por género y encuentra lo que te apasiona.
        </span>
        <ol>
            {
                bookGenres.map((key, index) => (
                    <li key={index}>
                        <a>{key}</a>
                    </li>
                ))
            }
        </ol>
    </>
)



export const Component3 = () => {

    return (
        <>
            <h3>Por Autor</h3>
            <span>
                Busca tus autores favoritos y descubre nuevas voces que te cautivarán.
            </span>
            <ol>
                {
                    bookAuthors.map((key, index) => (
                        <li key={index}>
                            <a>{key}</a>
                        </li>
                    ))
                }
            </ol>
        </>
    )


}