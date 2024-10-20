import { addDoc, doc, getDoc, query, where, collection, getDocs, arrayUnion, updateDoc, Timestamp } from "@firebase/firestore";
import { collectionRef } from "./collections"
import { cookie1, getCookie } from "../utils/cookies";
import { TypeBook } from "../utils/types";
import { alertSwal2 } from "../components/sweetAlert";


export const addUser = async (usuario: string, correo: string, password: string): Promise<any> => {
    try {
        // Consultar si el usuario o correo ya existen
        const userQuery = query(collectionRef, where("usuario", "==", usuario));
        const emailQuery = query(collectionRef, where("correo", "==", correo));

        const userSnapshot = await getDocs(userQuery);
        const emailSnapshot = await getDocs(emailQuery);

        // Verificar si el usuario o correo ya existen
        if (!userSnapshot.empty) {
            throw new Error("El nombre de usuario ya está en uso.");
        }

        if (!emailSnapshot.empty) {
            throw new Error("El correo electrónico ya está en uso.");
        }

        // Si no existen, agregar el nuevo usuario
        let docsRef = await addDoc(collectionRef, { usuario, correo, password });
        return docsRef.id;
    } catch (error) {
        throw error;
    }
};


export const getUserByEmail = async (correo: string): Promise<any | null> => {
    try {


        // Crear una consulta con el filtro por correo
        const q = query(collectionRef, where("correo", "==", correo.trim()));

        // Ejecutar la consulta
        const querySnapshot = await getDocs(q);



        if (querySnapshot.empty) {
            await getAllDocuments()
            throw new Error(`No se encontró ningún usuario con el correo: ${correo}`)
        }

        // Asumimos que el correo es único, por lo que devolvemos el primer documento encontrado
        const userDoc = querySnapshot.docs[0];
        const userData = { id: userDoc.id, ...userDoc.data() };

        return userData;
    } catch (error) {
        console.error("Error al buscar el usuario por correo:", error);
        throw error;
    }
};

export const verifyPas = (pass: string, auxPass: string) => pass === auxPass

export const addCart = async (book: TypeBook, navigate: () => void) => {

    try {
        let documentId = await getCookie(cookie1)
        //  console.log(documentId);

        if (typeof documentId === "undefined")
            return navigate()

        let { thumbnail, thumbnail_id, title, price, id } = book

        const documentRef = doc(collectionRef, documentId);

        let newCartItems = {
            thumbnail, thumbnail_id, title, price, id, createdAt: Timestamp.now()
        } // Añade la marca de tiempo actual 

        await updateDoc(documentRef, {
            carrito: arrayUnion(newCartItems), // Agrega los nuevos elementos al array "carrito"
        });

        /*
            alert(`Documento con ID ${documentId} actualizado exitosamente.`)
            getAllDocuments()
        */

        alertSwal2(`¡Libro adquirido con éxito!`, 'success')
    } catch (error) {
        //  console.error('Error al actualizar el documento:', error);
        alertSwal2(`Error al adquirir el libro. Por favor, intenta nuevamente.`, 'error')
    }
}



export const getCartItemsId = async (): Promise<any> => {

    try {

        let documentId = await getCookie(cookie1)


        // Obtén la referencia al documento usando el ID proporcionado
        const documentRef = doc(collectionRef, documentId);

        // Obtén el documento
        const docSnap = await getDoc(documentRef);

        // Verifica si el documento existe
        if (docSnap.exists()) {
            // Obtén los datos del documento
            const documentData = docSnap.data();

            // Accede al campo "carrito" dentro del documento (puede ser un array o undefined)
            const cartItems = documentData.carrito || [];

            console.log('Datos del carrito:', cartItems);
            return cartItems; // Devuelve los datos del carrito para usarlos en el componente
        } else {
            console.log('No existe ningún documento con ese ID.');
            return null;
        }

    } catch (error) {
        throw new Error("error")
    }

}

// Función para obtener y mostrar todos los documentos de una colección
export const getAllDocuments = async (): Promise<any[]> => {
    try {

        // Obtener todos los documentos de la colección
        const querySnapshot = await getDocs(collectionRef);

        // Mapear y retornar los datos de cada documento
        const allDocuments = await querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Mostrar los datos en la consola
        console.log('Todos los documentos de la colección:', allDocuments);

        return allDocuments;
    } catch (error) {
        console.error("Error al obtener los documentos de la colección:", error);
        throw error;
    }
};
