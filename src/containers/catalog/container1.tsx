import { TypeProduct } from "../../utils/types";
import { Book } from "../../components/bookItem";

export default function TopBooksBuy({ books, goTo }: { books: any[], goTo: (id: string, title: string) => void }) {


    return (
        <>
            {
                books.map((key, index) => (
                    <div key={index}>
                        <div key={index} className={`items item${index} books`}>
                            <Book book={key} onClick={() => goTo(key.id, key.title)} />
                        </div>
                    </div>
                ))
            }
        </>
    )
}


