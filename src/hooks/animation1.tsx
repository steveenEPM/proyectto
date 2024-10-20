import { useRef, useEffect } from "react"
/**Animacion fade  */

export const AnimationFadeInd = () => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    elementRef.current?.classList.add("fade_in")

  }, [])

  return elementRef

}

export const AnimationFadeInDelay = (delay: number) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const handleScroll = () => {
      let element = elementRef.current

      if (element) {

        const windowHeight: number = window.innerHeight    //La altura visible de la ventana del navegador
        const scrollY: number = window.scrollY      //la posición actual del scroll en el eje vertical
        const elementTop: number = element.getBoundingClientRect().top + scrollY //la posición superior del elemento en relación con la ventana
        const elementBottom = elementTop + element.offsetHeight; //la posición inferior del elemento

        element.style.animationDelay = `${delay}ms`

        if (elementTop < windowHeight || (elementBottom > scrollY && elementTop < scrollY + windowHeight)) {
          element.classList.add('fade_in')

        } else {
          element.classList.remove('fade_in')

        }

      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  return elementRef

}

export const AnimationFadeIndS = (clasNames:string ) => {

  const elementsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {

    const handleScroll = () => {

      const windowHeight: number = window.innerHeight    //La altura visible de la ventana del navegador

      const scrollY: number = window.scrollY      //la posición actual del scroll en el eje vertical

      let delay: number = 100

      elementsRef.current.forEach(element => {

        if (element) {


          const elementTop: number = element.getBoundingClientRect().top + scrollY //la posición superior del elemento en relación con la ventana
          const elementBottom = elementTop + element.offsetHeight; //la posición inferior del elemento

          delay += 100
          element.style.animationDelay = `${delay}ms`
          // Verificamos si el elemento está dentro del área visible de la ventana
          if (elementTop < windowHeight || (elementBottom > scrollY && elementTop < scrollY + windowHeight)) {
            // Añadimos la clase de animación si el elemento está en el área visible

            element.classList.add(clasNames)
          } else {
            // Eliminamos la clase de animación si el elemento no está en el área visible

            element.classList.remove(clasNames)
          }
        }
      })


    }

    // Añadimos un listener para el evento de scroll en la ventana
    window.addEventListener('scroll', handleScroll)
    // Ejecutamos la función handleScroll una vez al montar el componente para aplicar las animaciones a los elementos visibles
    handleScroll()

    // Limpiamos el listener de scroll cuando el componente se desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return elementsRef
}



