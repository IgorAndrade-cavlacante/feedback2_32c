import iconStar from "../assets/icon-star.svg"
import { InputButton } from "./InputButton"


    export function  CardInicial( {setRateNote, setSubmited, rateNote}) {

      
    function handleSubmite() {
      if (rateNote !== 0) {
     setSubmited(true)
    return
  }
  alert("Please,choose a rate button!")
}
    return (
        <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8 rounded-2xl font-overpass">
        
        <div className="bg-dark-blue p-4 w-fit rounded-full mb-4 ">
        <img src={iconStar} alt="icone da estrela" />
        </div>

        <h1 className="font-bold text-2xl mb-2.5">
          How did we do?</h1>

        <p className="text-light-grey text-sm leading-1 mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className="flex justify-between mb-6 ">
          
         <InputButton  value={1} setRateNote={setRateNote}/>
         <InputButton  value={2} setRateNote={setRateNote}/>
         <InputButton  value={3} setRateNote={setRateNote}/>
         <InputButton  value={4} setRateNote={setRateNote}/>
         <InputButton  value={5} setRateNote={setRateNote}/>
        </div>
        <button className="bg-orange w-full py-3 rounded-3xl uppercase font-bold tracking-1 hover:bg-white hover:text-orange cursor-pointer  transition duration-400" onClick={handleSubmite}>Submit</button>
      </div>
    )
}