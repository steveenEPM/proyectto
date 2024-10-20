import { ChangeEvent } from "react"
import { TypeRegisterIn } from "../../utils/types2"
import { IconMail, IconKey } from "../../components/icons"


interface Prosp {
    auth: TypeRegisterIn
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    disabled:boolean

}

export default function RegisterInForm({ auth, onChangeInput,disabled }: Prosp) {

    let { username, password ,mail} = auth

    return (
        <>
            <h2>Regístrate</h2>
            <div>
                <div style={{ display: "flex", flexDirection: "row-reverse", alignSelf: "flex-start" }}>
                    <label htmlFor="username">Usuario</label>
                    <IconMail color="#f83d39" />
                </div>
                <input placeholder="example@email.com" name="username" value={username} onChange={onChangeInput} disabled={disabled}/>
            </div>

            <div>
                <div style={{ display: "flex", flexDirection: "row-reverse", alignSelf: "flex-start" }}>
                    <label htmlFor="username">Correo</label>
                    <IconMail color="#f83d39" />
                </div>
                <input placeholder="example@email.com" name="mail" value={mail} onChange={onChangeInput} disabled={disabled}/>
            </div>

            <div>
                <div style={{ display: "flex", flexDirection: "row-reverse", alignSelf: "flex-start" }}>
                    <label htmlFor="password">Contraseña</label>
                    <IconKey color="#f83d39" />
                </div>
                <input placeholder="example@email.com" name="password" value={password} onChange={onChangeInput} type="password" disabled={disabled}/>
            </div>

        </>
    )
}