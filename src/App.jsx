import { useState } from "react"
import { CardInicial } from "./components/CardInicial"
import { CardFinal } from "./components/CardFinal"


export function App() {
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  function handleSubmite() {
    if (rateNote !== 0) {
      setSubmited(true)
    return
    }
    alert("Please,choose a rate button!")
  }
  function handleChangeRateNote(value) {
    setRateNote(value)
  }

  return (
      submited === false ? (
       <CardInicial handleChangeRateNote={handleChangeRateNote} handleSubmite={handleSubmite} />
      ) : (
        <CardFinal rateNote={rateNote}/>
      )
   
  )
}