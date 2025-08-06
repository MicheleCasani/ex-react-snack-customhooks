import React from 'react'
import { useState } from 'react'

/* Custom hook per gestire un valore booleano che può essere alternato*/
const useSwitch = () => {
    // Stato interno del hook - inizializzato a false
    const [value, setValue] = useState(false)

    // Funzione toggle per invertire il valore booleano
    // Se value è true diventa false, se è false diventa true
    const toggle = () => {
        setValue(!value) // Usa l'operatore NOT (!) per invertire
    }

    // Ritorna il valore attuale e la funzione toggle
    // In questo modo il componente che usa questo hook può accedere al valore e alla funzione per cambiarlo
    return [value, toggle]
}

export default useSwitch

// Snack 1: useSwitch() – Toggle Booleano
// Creare un custom hook per alternare un valore booleano tra true e false.

// Cosa deve fare?

// Inizialmente false.
// Ritorna il valore attuale e una funzione toggle() per cambiarlo.
// Quando toggle() viene chiamato, il valore passa da true → false e viceversa.
