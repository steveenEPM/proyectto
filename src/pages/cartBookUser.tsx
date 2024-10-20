import { useMemo, useState } from "react"
import { useNavigate } from "react-router"

import { getCartItemsId } from "../Controller/controller"
import { cookie1, getCookie } from "../utils/cookies"
import { MyBook } from "../components/bookItem"
import { books } from "../utils/conts"

import "../styles/myBooks.css"

export default function MyPageBook() {

    const [myBooks, setMyBooks] = useState<any[]>()
    const [loading,setLoading] = useState<boolean>(true)
    const navigate = useNavigate()



    useMemo(async () => {

        try {

            let cookie = await getCookie(cookie1)

            if (typeof cookie === "undefined")
                return navigate('/jauth')

            let books = await getCartItemsId()

            setMyBooks(books.concat(books))

        } catch (error) {

            console.log(error);
        }
        setLoading(false)
    }, [])


    const onBook =(id:string)=> navigate(`/book/${id}`)

    if(loading){
        return (
            <>Cargando</>
        )
    }


    

    return (
        <div >
            <div className="myBooks containers container1">
                {
                    myBooks && myBooks.map((key, index) => (
                        <div key={index} className={`item_book book${index}`}>
                            <MyBook book={key} onClick1={() => { }} />
                        </div>
                    ))
                }
            </div>
            <div>
                <div className="myBooks containers container2">
                    <h2>Libros que te pueda interesar</h2>
                    <div>
                    {
                        books.map((key,index)=>(
                            <a onClick={()=> onBook(key.id)} key={index}>
                                {key.title}
                            </a>
                        ))
                    }
                    </div>
                </div>

            </div>
        </div>

    )
}

