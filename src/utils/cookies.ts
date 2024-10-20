export const cookie1:string = "odisyBook"

export  const setCookie = (name: string, value: string, days: number): string => {
    try {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
        return ""
    } catch (error) {
        throw error
    }
};


export const getCookie = (name: string): string | undefined => {
    try {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        
        // Verificar si la cookie existe en el array `parts`
        if (parts.length === 2) {
            // Obtener el valor de la cookie y manejar posibles casos de undefined
            const cookieValue = parts[1].split(';')[0];
            return cookieValue !== undefined ? cookieValue : '';
        }

        return undefined;
    } catch (error) {
        console.error("Error al obtener la cookie:", error);
        return undefined; // En caso de error, retornar undefined
    }
};


const deleteCookie = (name:string) => {
    setCookie(name, "", -1);
};

