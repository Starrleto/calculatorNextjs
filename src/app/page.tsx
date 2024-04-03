'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { calculateTip, perPerson } from "@/scripts/script";
import "../style/style.css";


export default function Home() {

  const [amount, setAmount] = useState<number>(0);
  const [perect, setPercet] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  const [tipAmount, setTipAmount] = useState<number>(0);
  const [perPersonTip, setPerPersonTip] = useState<number>(0);

  const setPercentage = (p:number) => {

    if(!Number.isNaN(p)){
      setPercet(p);
    }
  }

  const setPriceAmount = (p:number) => {
    if(!Number.isNaN(p)){
      setAmount(p);
    }
  }

  const setNumPeople = (p:number) => {
    if(!Number.isNaN(p)){
      setPeople(p);
    }
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
    setPeople(0);
  }

  useEffect(() => {
    doMath();
  }, [perect, people, amount])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-36 p-0 bg dark-text space-font">

    <p className="font-bold tracking-wider">SPLITTER</p>

    <div className="grid sm:grid-cols-1 bg-white rounded-xl">
      <div className="grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 p-10 rounded-xl gap-2">

        <div className="flex flex-col justify-between">
          <div>
              <p>Bill</p>
              <input onChange={(e) => setPriceAmount(parseInt(e.target.value))} type="text" className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 gray" required />
          </div>

          <div className="mt-8">
              <p>Select Tip $</p>
              <div className="grid grid-cols-3 grid-rows-2 gap-3">
                <button onClick={() => setPercentage(0.05)} className="text-2xl dark-button text-white font-bold py-2 px-4 rounded">
                  5%
                </button>
                <button onClick={() => setPercentage(0.10)} className="text-2xl dark-button text-white font-bold py-2 px-4 rounded">
                  10%
                </button>
                <button onClick={() => setPercentage(0.15)} className="text-2xl dark-button text-white font-bold py-2 px-4 rounded">
                  15%
                </button>

                <button onClick={() => setPercentage(0.25)} className="text-2xl dark-button text-white font-bold py-2 px-4 rounded">
                  25%
                </button>
                <button onClick={() => setPercentage(0.50)} className="text-2xl dark-button text-white font-bold py-2 px-4 rounded">
                  50%
                </button>
                <div>
                  <input onChange={(e) => setPercentage(parseInt(e.target.value)/100)} type="text" className="text-2xl dark-text rounded-lg text-center gray block w-full p-2.5 " placeholder="Custom" required />
                </div>
              </div>
          </div>

          <div className="w-full mt-10">
            <p>Number of People</p>
            <input onChange={(e) => setNumPeople(parseInt(e.target.value))} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
        </div>

        <div className="dark-bg rounded-lg text-white p-10">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold">Tip Amount</h1>
              <p>/person</p>
            </div>
            <div>
              <h1 className="text-4xl light-text font-bold">${perPersonTip}</h1>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <h1>Total</h1>
              <p>/person</p>
            </div>
            <div>
              <h1 className="text-4xl light-text font-bold">${tipAmount}</h1>
            </div>
          </div>

          <div className="w-full">
            <button onClick={reset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              RESET
            </button>
          </div>
        </div>

      </div>
    </div>

    </main>
  );
}
