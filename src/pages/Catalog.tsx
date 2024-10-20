import { useNavigate } from "react-router"
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, FormEvent } from "react";


import TopBooksBuy from "../containers/catalog/container1"
import { customHookTopBook, customCatalogBook } from "../Api/customApi"
import FilterItems from "../containers/catalog/container4"
import { LoadPage,ErrPage } from "../components/loadPage";
import { IconBook } from "../components/icons";

import { bookGenres, bookCategories, bookAuthors } from "../utils/homes"
import { getUrl, getTypesBook,transformString } from "../utils/setting";

import '../styles/catalog.css'


export default function CatalogPage() {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const location = useLocation()
    const [query, setQuery] = useState<string>('');


    const { data, loading, error } = customHookTopBook()
    const { dataBook, loadingBook, errorBook } = customCatalogBook(getUrl(searchParams))

    if (loading && loadingBook) {
        return (
            <LoadPage />)
    }


    if (error && errorBook) {
        return (
            <ErrPage />)
    }

    const goTo = (id: string, title: string) => {
        navigate(`/book/${id}`)
    }

    const goFilter = (title: string, filter: string) => {

        const searchParam = new URLSearchParams()
        searchParam.append(filter, title)

        navigate(`/catalog/search?${searchParam.toString()}`)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // Aquí puedes manejar lo que quieras hacer con el valor buscado
        const searchParam = new URLSearchParams()
        searchParam.append('searchBook',query)

        navigate(`/book/search?${searchParam.toString()}`)
    };



    return (
        <div className="templates">
            <div className="catalogs">
                {
                    location.pathname === "/catalog" &&
                    <div className="CatalogPage containers container1">
                        <h2>Favoritos de nuestra Comunidad</h2>
                        <div className="contents">
                            {data && <TopBooksBuy books={data} goTo={goTo} />}
                        </div>
                    </div>
                }
                <div className="CatalogPage containers container2">
                    <form className="search" onSubmit={handleSubmit}>
                        <input placeholder="Que libro deseas buscar necesitas" onChange={(e) => setQuery(e.target.value)} />
                        <button type="submit">
                            <IconBook color="#f4fcfc" />
                            Buscar Libros
                        </button>
                    </form>
                    <h2>{searchParams.size == 0 ? "Explora nuestros catálogos" : getTypesBook(searchParams)}</h2>
                    <div className="contents">
                        {dataBook && <TopBooksBuy books={dataBook} goTo={goTo} />}
                    </div>
                </div>
            </div>
            <div className="CatalogPage containers container3">
                <div className="components component1">
                    <div>
                        <FilterItems titles="Categorías" arrays={bookCategories} onClick={goFilter} />
                    </div>
                    <div className="lines" />
                    <div>
                        <FilterItems titles="Géneros" arrays={bookGenres} onClick={goFilter} />
                    </div>
                    <div className="lines" />
                    <div>
                        <FilterItems titles="Autores" arrays={bookAuthors} onClick={goFilter} />
                    </div>
                    <div className="lines" />
                </div>
            </div>
        </div>
    )

}