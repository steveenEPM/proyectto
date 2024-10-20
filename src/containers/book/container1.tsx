import { TypeAttributes } from "../../utils/types";

export default function Atributes_Conter({ atributes }: { atributes: TypeAttributes[] }) {

    return (
        <>
            {
                atributes.map((key, index) => (
                    <div key={index}>
                        <h3>{key.name}</h3>
                        <span>{key.value_name}</span>
                    </div>
                ))
            }
        </>
    )
}