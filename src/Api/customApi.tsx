import { useState, useEffect, useCallback } from "react"

import { httpFetch, fetchItemData, fetchWikipedia } from "../utils/hosts"
import { sortProductsByTitle, transformString_ } from "../utils/setting"

import { TypeBook } from "../utils/types"

export const customHookTopBook = () => {

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        async function httpData() {

            try {
                const uri: string = '/search?category=MEC1196&sort=sold_quantity&limit=6'

                let respons = await httpFetch(uri)
                setData(respons)

            } catch (error) {
                setError("Status code 404")
            }

            setLoading(false)
        }
        httpData()
    }, [])

    return { data, loading, error }

}

export const customCatalogBook = (uri: string) => {

    const [dataBook, setData] = useState<any>()
    const [loadingBook, setLoading] = useState<boolean>(true);
    const [errorBook, setError] = useState<string | null>(null);

    useEffect(() => {

        async function httpData() {
            try {
                //    const uri: string = '/search?category=MEC1196&limit=50'

                let respons = await httpFetch(uri)

                const books = sortProductsByTitle(respons)

                setData(respons)

            } catch (error) {
                setError("Status code 404")
            }

            setLoading(false)
        }
        httpData().finally(() => setLoading(false))
    }, [uri])

    return { dataBook, loadingBook, errorBook, }
}


export const customBook = (idBook: string, urlBooks: string) => {

    const [dataBook, setDataBook] = useState<any>()
    const [dataBooks, setDataBooks] = useState<any>()
    const [loadingBook, setLoading] = useState<boolean>(true);
    const [errorBook, setError] = useState<string | null>(null);

    useEffect(() => {

        async function httpData() {
            try {


                let book = await fetchItemData(idBook)
                let books = await httpFetch(urlBooks)

                setDataBook(book)
                setDataBooks(books)

            } catch (error) {
                setError("Status code 404")
            }

        }
        httpData().finally(() => setLoading(false))
    }, [idBook])

    return { dataBook, dataBooks ,loadingBook, errorBook }

}


export const customWikiBook = (book: string) => {

    const [dataInfo, setData] = useState<any>()
    const [loadingInfo, setLoading] = useState<boolean>(true);
    const [errorInfo, setError] = useState<string | null>(null);

    useEffect(() => {

        async function httpData() {
            console.log(book)
            let respons = await fetchWikipedia(transformString_(book))
            console.log(respons);

        }

        httpData().finally(() => setLoading(false))
    }, [book])

    return { dataInfo, loadingInfo, errorInfo }

}


