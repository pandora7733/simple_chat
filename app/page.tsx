import Image from "next/image";
import chat_happy from "../public/chat_happy.png";
import chat_sad from "../public/chat_sad.png";

export default function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between py-4 text-2xl px-12 fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div><h1 className="font-oswald">simple chat</h1></div>
        <div className="flex gap-10 font-jua">
          <button>문의</button>
          <button>채팅</button>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-between mx-42 pt-16">
        <h1>this is landing page</h1>
        <div>
          <Image src={chat_happy} alt="happy" width={300} height={300} />
          <Image src={chat_sad} alt="sad" width={300} height={300} />
        </div>
      </main>
    </div>
  );
}
