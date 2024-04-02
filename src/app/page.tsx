import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400 text-green-600">

    <p>SPLITTER</p>

    <div className="grid grid-cols-1 bg-white rounded-xl">
      <div className="grid grid-cols-2 p-10 rounded-xl gap-2">

        <div>
          <p>Bill</p>
          <div className="bg-slate-200 w-96 p-2 rounded-lg flex justify-between">
            <p>$</p>
            <p className="">amount</p>
          </div>

          <p>Select Tip $</p>
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>

            <p>Number Of People</p>
          </div>
        </div>

        <div className="bg-green-600 rounded-lg">
          
        </div>

      </div>
    </div>

    </main>
  );
}
