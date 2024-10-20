import { TypeAttributes, TypeProduct } from "./types";

export const cortarCadena = (cadena: string): string => {
    const maxWords = 5;
    let palabras = cadena.split(" ");

    if (palabras.length > maxWords) {
        return palabras.slice(0, maxWords).join(" ") + " ...";
    } else {
        return cadena;
    }
}


export const sortProductsByTitle = (book: any[]): any[] => {
    return book.sort((a, b) => {
        if (a.title && b.title) {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });
}


export const getUrl = (searchParams: URLSearchParams): string => {

    const limit: string = "35"

    if (searchParams.size) {
        const category: string | null = searchParams.get('Categorías')
        const generos: string | null = searchParams.get('Géneros')
        const author: string | null = searchParams.get('Autores')
        const searchBook: string | null = searchParams.get('searchBook')

        if (category !== null) {
            return `/search?q=${transformString(category)}&category=MEC1196&limit=${limit}`
        }

        if (generos !== null) {
            return `/search?q=${transformString(generos)}&category=MEC1196&limit=${limit}`
        }

        if (author !== null) {
            return `/search?q=${transformString(author)}&category=MEC1196&limit=${limit}`
        }

        if (searchBook !== null) {
            return `/search?q=${transformString(searchBook)}&category=MEC1196&limit=${limit}`
        }


    }

    return `/search?category=MEC1196&limit=${limit}`


}


export const getTypesBook = (searchParams: URLSearchParams): string => {

    const category: string | null = searchParams.get('Categorías')
    const generos: string | null = searchParams.get('Géneros')
    const author: string | null = searchParams.get('Autores')
    const searchBook: string | null = searchParams.get('searchBook')

    if (category !== null) {
        return `Explora nuestro libros de ${category}`
    }

    if (generos !== null) {
        return `Explora nuestro libros de ${generos}`
    }

    if (author !== null) {
        return `Explora nuestro libros de ${author}`
    }

    if (searchBook !== null) {
        return `Mostrando resultados para el libro ${searchBook}`
    }
    return ""

}

export const transformString = (input: string): string => input.trim().replace(/\s+/g, '+');

export const transformString_ = (input: string): string => input.trim().replace(/\s+/g, '_');


export const getFirstThreeWords = (text: string): string => {
    // Dividimos el texto en un array de palabras
    const words = text.split(' ');

    // Tomamos las primeras tres palabras
    const firstThreeWords = words.slice(0, 3);

    // Unimos las tres palabras en un string y lo retornamos
    return firstThreeWords.join(' ');
};



export const atributeBook = (atribute: TypeAttributes[]): { books: any, autor: any } => {
    const elementBook = atribute.find(item => item.name === "Título del libro");
    const elementAutor = atribute.find(item => item.name === "Autor");

    return {
        books: elementBook ? elementBook.value_name : null,
        autor: elementAutor ? elementAutor.value_name : ''
    }
}

export const capitalize = (cadena: string): string => {
    return cadena
        .split(' ') // Divide la cadena en palabras usando el espacio como delimitador
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()) // Capitaliza la primera letra de cada palabra
        .join(' '); // Une las palabras nuevamente en una sola cadena
}

export const obtenerAleatorio = (): string => {
    const autoresYGeneros: string[] = [
        "Gabriel García Márquez",
        "Jane Austen",
        "George Orwell",
        "Ciencia Ficción",
        "Misterio",
        "Fantasía"
    ];

    const aleatorio: string = autoresYGeneros[Math.floor(Math.random() * autoresYGeneros.length)];
    return `${aleatorio}`;
}

