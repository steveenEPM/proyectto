import { useNavigate } from "react-router"

import LibrosDestacados from "../containers/home/container1"
import { Component1, Component2, Component3 } from "../containers/home/container3"
import ComoComprar from "../containers/home/container4"
import { AnimationFadeInd,AnimationFadeInDelay } from "../hooks/animation1"

import "../styles/homes.css"

export default function Homes() {


    const refH1 = AnimationFadeInd()
    const refObjectDiv1 = AnimationFadeInDelay(300)
    const refObjectDiv2 = AnimationFadeInDelay(400)
    const refObjectDiv3 = AnimationFadeInDelay(600)

    const navigate = useNavigate()

    return (
        <>
            <div className="homes containers container1">
                <div>
                    <h1 ref={refH1}>Tu Oasis Literario</h1>
                    <span>
                        Explora nuestro universo de libros y encuentra tu próxima aventura.
                    </span>
                    <button style={{ marginTop: 18 }} onClick={()=> navigate('/catalog')}>Explorar Ahora</button>
                </div>
                <img src="https://i.pinimg.com/564x/24/b9/c8/24b9c88f358481c17a613208df96dd59.jpg" alt="24b9c88f358481c17a613208df96dd59.jpg" />
            </div>

            <div className="homes containers container2 imgBack">
                <img src="https://i.pinimg.com/736x/8d/2d/b9/8d2db901a211a3f51316a011869d3625.jpg" alt="8d2db901a211a3f51316a011869d3625.jpg" />
                <div>
                    <h2>Libros Destacados</h2>
                    <div className="contents">
                        <LibrosDestacados />
                    </div>
                </div>
            </div>

            <div className="homes containers container3">
                <h2>Nuestra Selección de Libros</h2>
                <div>
                    <div className="contents" ref={refObjectDiv1}>
                        <Component1 />
                    </div>
                    <div className="contents" ref={refObjectDiv2}>
                        <Component2 />
                    </div>
                    <div className="contents" ref={refObjectDiv3}>
                        <Component3 />
                    </div>
                </div>
            </div>

            <div className="homes containers container4">
                <h2>Cómo Comprar</h2>
                <div className="contents">
                    <ComoComprar />
                </div>
            </div>
        </>


    )
}