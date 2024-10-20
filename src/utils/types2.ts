export type TypeSingIn = {
    username: string,
    password: string
}

export type TypeRegisterIn = {
    username: string,
    password: string,
    auxPasswod: string,
    mail: string,
}



interface RegisterInput {
    username: string;
    mail: string;
    password: string;
}

export const validateRegisterInput = (registerIn: RegisterInput): Promise<any> => {
    return new Promise((resolve, reject) => {
        const { username, mail, password } = registerIn;
        const errors: any = {};

        // Validación de username (mínimo 3 caracteres)
        if (!username || username.trim().length < 3) {
            errors.username = "El nombre de usuario debe tener al menos 3 caracteres.";
        }

        // Validación de correo electrónico usando una expresión regular simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!mail || !emailRegex.test(mail)) {
            errors.mail = "Correo electrónico inválido.";
        }

        // Validación de contraseña (mínimo 6 caracteres)
        if (!password || password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres.";
        }

        // Si hay errores, se rechaza la promesa
        if (Object.keys(errors).length > 0) {
            reject(JSON.stringify(errors))
        } else {
            resolve("ok")
        }
    });
};

export const validateLoingInput = (registerIn: TypeSingIn): Promise<any> => {
    return new Promise((resolve, reject) => {
        const { username, password } = registerIn;
        const errors: any = {};


        // Validación de correo electrónico usando una expresión regular simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!username || !emailRegex.test(username)) {
            errors.username = "Correo electrónico inválido.";
        }

        // Validación de contraseña (mínimo 6 caracteres)
        if (!password || password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres.";
        }

        // Si hay errores, se rechaza la promesa
        if (Object.keys(errors).length > 0) {
            reject(JSON.stringify(errors))
        } else {
            resolve("ok")
        }
    });
};
