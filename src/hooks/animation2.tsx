import { useEffect, useRef } from "react"

export const AnimationCircles1 = (state: string) => {

    const elemenstRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {

        const handleEvent = () => {
            elemenstRef.current.forEach(element => {
                if (element) {

                    if (state === "registerIn") {
                        element.classList.add('group')
                    }
                    else {
                        element.classList.remove('group')
                    }

                }
            })


        }

        handleEvent()

    }, [state])

    return elemenstRef
}

export const AnimationCircles2 = (state: string) => {

    const elemenstRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const handleEvent = () => {
            const element = elemenstRef.current

            if (element) {
                if (state === "registerIn") {
                    element.classList.add('group')
                }
                else {
                    element.classList.remove('group')
                }
            }
        }

        handleEvent()

    }, [state])

    return elemenstRef
}