import { buyBooks } from "../../utils/homes"
import { Items } from "./container1"
import { AnimationFadeIndS } from "../../hooks/animation1"


export default function ComoComprar() {
    const elementRef = AnimationFadeIndS('fadeInUp')

    return (
        <>
            {
                buyBooks.map((keys, index) => (
                    <div key={index} className={`items item${index + 1}`} ref={(el) => {
                        if(el) elementRef.current[index] = el
                    }}>
                        <Items title={keys.title} content={keys.content} index={index + 1} />
                    </div>
                ))
            }
        </>
    )
}
