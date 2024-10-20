import { ChangeEvent } from "react"
import { TypeSingIn } from "../../utils/types2"
import { IconMail, IconKey } from "../../components/icons"


interface Prosp {
    auth: TypeSingIn
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    disabled:boolean

}

export default function LogInForm({ auth, onChangeInput, disabled}: Prosp) {

    let { username, password } = auth

    return (
        <>
            <h2>Iniciar Sección</h2>
            <div>
                <div style={{ display: "flex", flexDirection: "row-reverse", alignSelf: "flex-start" }}>
                    <label htmlFor="username">Correo</label>
                    <IconMail color="#009a76" />
                </div>
                <input placeholder="example@email.com" name="username" value={username} onChange={onChangeInput} disabled={disabled}/>
            </div>
            <div>
                <div style={{ display: "flex", flexDirection: "row-reverse", alignSelf: "flex-start" }}>
                    <label htmlFor="password">Contraseña</label>
                    <IconKey color="#009a76" />
                </div>
                <input placeholder="xxxxxxxx" name="password" value={password} onChange={onChangeInput} type="password" disabled={disabled}/>
            </div>
        </>
    )
}