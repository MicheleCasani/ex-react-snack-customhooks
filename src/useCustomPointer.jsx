import React from 'react'
import { useState, useEffect, useMemo } from 'react'

const useCustomPointer = (cursorContent) => {
    // Stato per la posizione del mouse
    const [position, setPosition] = useState({ x: 0, y: 0 })

    // Funzione per aggiornare la posizione del mouse
    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY })
    }

    // Aggiungi un event listener per il movimento del mouse
    useEffect(() => {
        // Nascondi il cursore predefinito
        document.body.style.cursor = 'none'

        window.addEventListener("mousemove", handleMouseMove)

        // Cleanup dell'event listener quando il componente viene smontato
        return () => {
            // Ripristina il cursore predefinito
            document.body.style.cursor = 'auto'
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    // Memoizza il componente cursore per evitare ricreazioni inutili
    const cursorComponent = useMemo(() => (
        <div
            style={{
                position: "fixed",
                left: position.x,
                top: position.y,
                zIndex: 9999,
            }}
        >
            {cursorContent}
        </div>
    ), [position.x, position.y, cursorContent])

    return cursorComponent
}

export default useCustomPointer

// Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

// Cosa deve fare?

// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.
