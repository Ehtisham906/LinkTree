import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">
        <div className="flex flex-col justify-center ml-[10vw] gap-3">
          <p className="text-yellow-300 font-bold text-4xl">Everything you
            are. In one,
            simple link in
            bio.</p>
          <p className="text-yellow-300 text-xl my-4">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2">
            <input className="px-2 py-2 focus:outline-green-800 rounded-md" type="text" placeholder="linktr.ee/your-url" name="" id="" />
            <button className="bg-pink-300 rounded-full px-4 py-4 font-semibold" >Calim Your Linktree</button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mr-[10vw]">
          <img src="/home.png" alt="Home page image." height={350} width={350} className=" " />
        </div>
      </section>

      <section className="bg-[red] min-h-screen">

      </section>
    </main>
  );
}
