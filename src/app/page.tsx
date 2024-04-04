'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { calculateTip, perPerson } from "@/scripts/script";
import "../style/style.css";
import logo from "../assets/logo.svg";
import dollar from "../assets/icon-dollar.svg";
import person from "../assets/icon-person.svg";


export default function Home() {

  const [amount, setAmount] = useState<number>(0);
  const [perect, setPercet] = useState<number>(0);
  const [people, setPeople] = useState<number>(NaN);

  const [tipAmount, setTipAmount] = useState<number>(0);
  const [perPersonTip, setPerPersonTip] = useState<number>(0);

  const setPercentage = (p:number) => {

    if(!Number.isNaN(p)){
      setPercet(p);
    }
    else setPercet(0);
  }

  const setPriceAmount = (p:number) => {
    if(!Number.isNaN(p)){
      setAmount(p);
    }
    else setAmount(0);
  }

  const setNumPeople = (p:number) => {
    if(!Number.isNaN(p)){
      setPeople(p);
    }
    else setPeople(0);
  }

  const doMath = () => {

    if(amount > 0 && perect > 0 && people > 0){
      const m = calculateTip(amount, perect);
      const p = perPerson(people, m);

      setTipAmount(m);
      setPerPersonTip(p);
    }
    else{
      setTipAmount(0);
      setPerPersonTip(0);
    }
  }

  const reset = () => {
    setAmount(0);
    setPercet(0);
    setPeople(NaN);
  }

  useEffect(() => {
    doMath();
  }, [perect, people, amount])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg dark-text space-font">

    <Image src={logo} alt="Logo" className="m-24"></Image>

    <div className="grid sm:grid-cols-1 bg-white rounded-xl sm:m-36 m-0">
      <div className="grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 p-10 rounded-xl gap-6">

        <div className="flex flex-col justify-between">
          <div>
              <p>Bill</p>
              <div className="relative">
                <Image src={dollar} alt="Dollar Sign" className="absolute left-3 top-4"></Image>
                <input onChange={(e) => setPriceAmount(parseInt(e.target.value))} type="text" className=" text-gray-900 rounded-lg block w-full p-2.5 gray text-right dark-text font-bold text-xl" required />
              </div>
          </div>

          <div className="mt-8">
              <p>Select Tip $</p>
              <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-4">
                <button onClick={() => setPercentage(0.05)} className={perect == 0.05 ? "text-2xl selected-button text-white font-bold py-2 px-4 rounded" : "text-2xl dark-button text-white font-bold py-2 px-4 rounded"}>
                  5%
                </button>
                <button onClick={() => setPercentage(0.10)} className={perect == 0.10 ? "text-2xl selected-button text-white font-bold py-2 px-4 rounded" : "text-2xl dark-button text-white font-bold py-2 px-4 rounded"}>
                  10%
                </button>
                <button onClick={() => setPercentage(0.15)} className={perect == 0.15 ? "text-2xl selected-button text-white font-bold py-2 px-4 rounded" : "text-2xl dark-button text-white font-bold py-2 px-4 rounded"}>
                  15%
                </button>

                <button onClick={() => setPercentage(0.25)} className={perect == 0.25 ? "text-2xl selected-button text-white font-bold py-2 px-4 rounded" : "text-2xl dark-button text-white font-bold py-2 px-4 rounded"}>
                  25%
                </button>
                <button onClick={() => setPercentage(0.50)} className={perect == 0.5 ? "text-2xl selected-button text-white font-bold py-2 px-4 rounded" : "text-2xl dark-button text-white font-bold py-2 px-4 rounded"}>
                  50%
                </button>
                <div>
                  <input onChange={(e) => setPercentage(parseInt(e.target.value)/100)} type="text" className="text-2xl dark-text rounded-lg text-center gray block w-full p-2.5 " placeholder="Custom" required />
                </div>
              </div>
          </div>

          <div className="w-full mt-10">
            <div className="flex justify-between">
              <p>Number of People</p>
              <p className="red-text">{people == 0 ? "Can't be Zero" : ""}</p>
            </div>
              <div className="relative">
                <Image src={person} alt="Dollar Sign" className="absolute left-3 top-4"></Image>
                <input onChange={(e) => setNumPeople(parseInt(e.target.value))} type="text" className={people == 0 ? "text-gray-900 rounded-lg block w-full p-2.5 gray-error text-right dark-text font-bold text-xl" : "text-gray-900 rounded-lg block w-full p-2.5 gray text-right dark-text font-bold text-xl"}required />
            </div>
          </div>
        </div>

        <div className="dark-bg rounded-lg text-white p-10 flex flex-col justify-between">
          <div>
          <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Tip Amount</h1>
                <p className="another-gray font-bold">/person</p>
              </div>
              <div>
                <h1 className="text-4xl light-text font-bold">${perPersonTip}</h1>
              </div>
            </div>

            <div className="flex justify-between mt-9">
              <div>
                <h1 className="font-bold">Total</h1>
                <p className="another-gray font-bold">/person</p>
              </div>
              <div>
                <h1 className="text-4xl light-text font-bold">${tipAmount}</h1>
              </div>
            </div>
          </div>

          <div className="w-full">
            <button onClick={reset} className={perect > 0 || amount > 0 || people > 0 ? "w-full green-button text-white font-bold py-2 px-4 rounded" : "w-full disabled-button text-white font-bold py-2 px-4 rounded"}>
              RESET
            </button>
          </div>
        </div>

      </div>
    </div>

    </main>
  );
}
