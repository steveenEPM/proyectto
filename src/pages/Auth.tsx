import { useState, useEffect, ChangeEvent, useCallback, FormEvent, lazy } from "react"
import { useNavigate } from "react-router"


import { TypeSingIn, TypeRegisterIn, validateLoingInput } from "../utils/types2"

import LogInForm from "../containers/Auht/logInForm"
import RegisterInForm from "../containers/Auht/registerForm"

import { AnimationCircles1, AnimationCircles2 } from "../hooks/animation2"
import BookImg from "../assets/bookImg1.png"
import '../styles/auth.css'
import { addUser, getUserByEmail, verifyPas } from "../Controller/controller"
import { validateRegisterInput } from "../utils/types2"
import { getCookie, setCookie } from "../utils/cookies"
import { setStorage } from "../styles/localstorage"
import { alertSwal2 } from "../components/sweetAlert"



export default function Auths() {

    const [logIn, setLogIn] = useState<TypeSingIn>({ username: '', password: '' })
    const [registerIn, setRegisterIn] = useState<TypeRegisterIn>({ username: '', password: '', auxPasswod: '', mail: '' })
    const [auht, setAuth] = useState<'logIn' | 'registerIn'>('logIn')

    const refDivCircles = AnimationCircles1(auht)
    const refDivCircle1 = AnimationCircles2(auht)
    const refDivCircle2 = AnimationCircles2(auht)
    const refDivCircle3 = AnimationCircles2(auht)

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleInputChangeLoing = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLogIn(prevState => ({
            ...prevState, [name]: value
        }))
    }

    const handleInputChangeRegister = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisterIn(prevState => ({
            ...prevState, [name]: value
        }))
    }

    const eventSubmitLoing = useCallback(async (e: FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true)

            let e = await validateLoingInput(logIn)

            let { username, password } = logIn

            let dataUser = await getUserByEmail(username.trim())

            if (!verifyPas(password, dataUser.password))
                throw "Error de contraseña"


            setCookie('odisyBook', dataUser.id, 20)
            setStorage(dataUser.usuario)

            setTimeout(() => navigate('/'), 800)

        } catch (error) {
            alertSwal2(`${error}`, 'error')
            console.error("Error => ", error)
        }
        setLoading(false)

      
    }, [logIn])


    const eventSubmitRegister = async (e: FormEvent) => {
        e.preventDefault()

        setLoading(true)
        try {

            let { username, mail, password } = registerIn

            let e = await validateRegisterInput(registerIn)


            let idRef = await addUser(username.trim(), mail.trim(), password.trim())


            setStorage(username.trim())
            setCookie('odisyBook', idRef, 20)

            setTimeout(() => navigate('/'), 800)

        } catch (error) {
            console.log(error);

            alert(error)
        }

        setLoading(false)

    }



    return (
        <div className="PageAuth template">
            <div className="PageAuth templates">
                <div className="PageAuth containers container1">
                    {
                        auht === "logIn" ?
                            <>
                                <form action="" method="post" onSubmit={eventSubmitLoing} className="formLoing">
                                    <LogInForm auth={logIn} onChangeInput={handleInputChangeLoing} disabled={loading} />
                                    <button type="submit" disabled={loading}>
                                        Iniciar sección
                                    </button>
                                </form>
                                <a onClick={() => setAuth('registerIn')}>
                                    Aun no tienes cuenta
                                </a>
                            </>
                            :
                            <>
                                <form action="" method="post" onSubmit={eventSubmitRegister} className="formRegister">
                                    <RegisterInForm auth={registerIn} onChangeInput={handleInputChangeRegister} disabled={loading} />
                                    <button type="submit" disabled={loading}>
                                        Registrarse
                                    </button>
                                </form>
                                <a onClick={() => setAuth('logIn')} style={{ transform: "translateY(110px)" }}>
                                    Ya tienes una cuenta
                                </a>
                            </>
                    }

                    {
                        [1, 2, 3, 4, 5].map((key, index) => (
                            <div className={`circles circle${index}`} key={index}
                                ref={(el) => {
                                    if (el) refDivCircles.current[index] = el
                                }}
                            />
                        ))
                    }
                </div>
                <div className="PageAuth containers container2">
                    <div className="circles circle1 AnimateImg" ref={refDivCircle1}>
                        <div className="circles circle2 AnimateImg" ref={refDivCircle2}>
                            <div className="circles circle3 AnimateImg" ref={refDivCircle3}>
                                <img src={BookImg} alt="Imagen de loing" className={loading ? "imagenBook AnimateImg" : "imagenBook"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






