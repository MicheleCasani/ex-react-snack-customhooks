import React from 'react'
import { useState, useEffect } from 'react'

const useDate = () => {
    // Stato interno del hook - inizializzato alla data corrente
    const [date, setDate] = useState(new Date())

    // useEffect per aggiornare la data ogni secondo
    useEffect(() => {
        // Imposta un intervallo che aggiorna la data ogni 1000 millisecondi (1 secondo)
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        // Cleanup dell'intervallo quando il componente viene smontato
        return () => clearInterval(interval)
    }, [])

    // Ritorna la data corrente
    return date
}

export default useDate

// Snack 2: useDate() – Ottenere la Data Attuale
// Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

// Cosa deve fare?

// Restituisce un oggetto con data e ora formattata.
// Si aggiorna automaticamente ogni secondo.
// Usa useEffect() per gestire l’aggiornamento.
