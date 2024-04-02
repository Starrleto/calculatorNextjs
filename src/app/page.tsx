import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400 text-green-600">

    <div className="grid grid-cols-1 bg-white w-3/4 rounded-xl">
      <div className="grid grid-cols-2 p-10 rounded-xl">

        <div>
          <p>Bill</p>
          <div className="bg-slate-200 w-96 p-2 rounded-lg flex justify-between">
            <p>$</p>
            <p className="">amount</p>
          </div>
        </div>

        <div className="">
          
        </div>

      </div>
    </div>

    </main>
  );
}
