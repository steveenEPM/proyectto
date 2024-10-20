import { useState, useEffect } from "react"
import { useNavigate } from "react-router"


import { customBook, customCatalogBook } from "../Api/customApi"
import { LoadPage } from "../components/loadPage"
import { StarComponent } from "../components/start"
import Atributes_Conter from "../containers/book/container1"
import TopBooksBuy from "../containers/catalog/container1"

import { atributeBook, capitalize, obtenerAleatorio, transformString } from "../utils/setting"

import '../styles/books.css'
import { IconCart, IconHeart } from "../components/icons"

export default function BookPage() {

    const { dataBook, loadingBook, dataBooks } = customBook('MEC569741920', `/search?q=${transformString(obtenerAleatorio())}&category=MEC1196&limit=7`)

    const [data, setData] = useState<[]>([])
    const navigate = useNavigate()


    const goTo = (id: string, title: string) => {
        //navigate(`/book/${id}`)
    }

    if (loadingBook) {
        return (<LoadPage />)
    }



    if (dataBook) {

        const { id, attributes, initial_quantity, pictures, price } = dataBook

        const { books, autor } = atributeBook(attributes)

        const { url } = pictures[0]



        return (
            <>
                <div className="BookPages containers root">
                    <a onClick={()=> navigate('/')}>Incio</a>
                    <a onClick={()=> navigate('/catalog')}>Catalogo de Libros</a>
                    <h3>{books}</h3>
                </div>
                <div className="BookPages temaplates">
                    <div className="temaplates content1">
                        <div className="BookPages containers container1">
                            <h2>{books}</h2>

                            <div style={{ display: "flex", flexDirection: "row", gap: 16, alignItems: "center" }}>
                                <img src="https://i.pinimg.com/736x/71/b2/45/71b245dcbc840e897d06fe020cec62d5.jpg" width={30} height={30} style={{ borderRadius: 180 }} />
                                <span>{capitalize(autor)}</span>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center " }}>
                                <span className="price">$ {price}</span>
                                <button>
                                    <IconCart />
                                    adquirir
                                </button>
                                <button>
                                    <IconHeart />
                                    guardar
                                </button>
                            </div>
                        </div>

                        <div className="BookPages containers container3 ">
                            <div className="atributes">
                                <Atributes_Conter atributes={attributes} />
                            </div>
                        </div>
                    </div>
                    <div className="BookPages containers container2">
                        <img src={url} alt={id} />
                    </div>
                </div>


                <div className="BookPages containers likes">
                    <h2>Libros que tambien te pueden interesar</h2>
                    <div className="BookPages contianers container4">
                        {
                            dataBooks && <TopBooksBuy books={dataBooks} goTo={goTo} />
                        }
                    </div>
                </div>
            </>
        )
    }

}