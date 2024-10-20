import { FC } from "react"
import { librosDest, Type_LibrosDest } from "../../utils/homes"

import { AnimationFadeIndS } from "../../hooks/animation1"

export default function LibrosDestacados() {

    const elementRef = AnimationFadeIndS('fadeInUp')

    return (
        <>
            {
                librosDest.map((keys, index) =>
                    <div key={index} className={`items item${index + 1}`} ref={(el) => {
                        // Verifica que el elemento no sea nulo antes de asignarlo a la referencia
                        if(el) elementRef.current[index] = el
                    }}>
                        <Items title={keys.title} content={keys.content} index={index + 1} />
                    </div>
                )
            }
        </>
    )
}

export const Items: FC<Type_LibrosDest> = ({ title, content, index }) => (
    <>
        <span>{index}</span>
        <div>
            <h3>{title}</h3>
            <span>{content}</span>
        </div>
    </>
)

/**
 * Contenedor de la seccion libros destacados
 */
