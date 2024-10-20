import { FC } from "react";
import { TypeProduct } from "../utils/types";
import { cortarCadena } from "../utils/setting";
import { IconCart, IconDpwnload,TrashIcon} from "./icons";
import { addCart } from "../Controller/controller";
import { useNavigate } from "react-router";


export const Book: FC<{ book: TypeProduct, onClick: () => void }> = ({ book, onClick }) => {

    let { thumbnail, thumbnail_id, title, price, id } = book
    const navigate = useNavigate()
    return (
        <>
            <div style={{ overflow: "hidden", maxWidth: 130, maxHeight: 120, alignSelf: "center" }}>
                <img src={thumbnail} alt={thumbnail_id} style={{ transform: "scale(1.9)" }} />
            </div>
            <div>
                <h3 style={{ flex: 1 }} onClick={onClick}>{cortarCadena(title)}</h3>
                <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>
                    <span className="price">${price}</span>
                    <a onClick={() => addCart(book, () => navigate('/auth'))}>
                        <IconCart color="#F5F5F5" />
                        <span>Agregar</span>
                    </a>
                </div>

            </div>
        </>
    )
}

export const MyBook: FC<{ book: any, onClick1?: () => void }> = ({ book }) => {

    console.log(book.title);


    const { thumbnail, thumbnail_id, title, price, id, createdAt } = book


    return (
        <>
            <img src={thumbnail} alt={thumbnail_id} width={30} height={40} />
            <div >
                <h3>{title}</h3>
                <div style={{ display: "flex", flexDirection: "row", gap: 3, marginBottom: 16 }}>
                    <strong >Autor</strong>
                    <h4 style={{ fontWeight: "bold", textTransform: "capitalize" }}>{"elephan x"}</h4>
                </div>

                <div style={{display:"flex",flexDirection:"row",gap:12}}>
                    <a style={{ display: "flex", flexDirection: "row", gap: 4, fontSize: 12 }}>
                        <IconDpwnload color="#1B1B1B" />
                        descargar
                    </a>
                    <a style={{ display: "flex", flexDirection: "row", gap: 4, fontSize: 12 }}>
                        <TrashIcon color="#1B1B1B"/>
                        eliminar
                    </a>
                </div>
            </div>
        </>
    )
}


