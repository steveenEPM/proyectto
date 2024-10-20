import { FC } from "react"
import { IconoStar } from "./icons";

export const StarComponent: FC<{ star: number }> = ({ star }) => (
    <>
        {
            crearArreglo(star).map((key, index) => (
                <div>
                    <IconoStar />
                </div>
            ))
        }
    </>
)

function crearArreglo(n: number): number[] {
    let arreglo: number[] = [];
    for (let i = 1; i <= n; i++) {
        arreglo.push(i);
    }
    return arreglo;
}