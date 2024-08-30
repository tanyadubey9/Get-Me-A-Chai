import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[70vh] text-white gap-8">
        <h1 className="md:text-5xl text-3xl font-bold flex items-center justify-center gap-2 text-center">Get Me A Chai <span><Image src="/tea.gif" alt="tea" width={100} height={100} className="md:w-20 w-14" /></span></h1>
        <p className="font-semibold md:text-lg text-center">A Crowdfunding platform for creaters. Get funded by your fans and followers. Start Now!</p>
        <div className="flex gap-1">  
          <Link href="/login">
          <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Start Here </button>
          </Link>
          <Link href="/about">
          <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Read More</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="bg-white h-1 opacity-10"></div>
      </div>
      <div className="my-10 text-white p-5">
        <h2 className="md:text-2xl text-xl font-bold flex justify-center items-center m-2 text-center">Your fans can buy you a chai</h2>
        <div className="flex justify-around md:m-10 gap-3">
          <div className="flex flex-col justify-center items-center gap-3">
            <div>
              <Image className="bg-gray-300 rounded-full p-3 md:w-28 w-16" src="/woman.gif" alt="woman"  width={100} height={100} />
            </div>
            <h4 className="font-bold text-center"> Fund Yourself</h4>
            <p className="text-center">your fans are available to help you</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div>
              <Image className="bg-gray-300 rounded-full p-3 md:w-28 w-16" src="/coin.gif" alt="coin" width={100} height={100} />
            </div>
            <h4 className="font-bold text-center"> Fund Yourself</h4>
            <p className="text-center">your fans are available to help you</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div>
              <Image className="bg-gray-300 rounded-full p-3 md:w-28 w-16" src="/fans.gif" alt="fans" width={100} height={100} />
            </div>
            <h4 className="font-bold text-center">Fans wants to help</h4>
            <p className="text-center">your fans are available to help you</p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white h-1 opacity-10"></div>
      </div>
      <div className="text-white m-5 flex flex-col items-center gap-8 p-5">
        <div className="font-bold text-2xl my-4"> 
          <h2>Learn More About Us</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 text-center"> 
          <p>At Get Me A Chai, we are dedicated to supporting developers, creators, and influencers by connecting them with their supporters. Our platform enables individuals to fund their projects and ideas, providing a space where creativity and innovation can thrive.</p>
          <p>Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you're a developer coding the next big app, a content creator making engaging videos, or an influencer sharing your passion, Get Me A Chai is here to help you achieve your goals.</p>
          <p>We believe in the power of community and the impact of collective support. By providing a platform for patrons to contribute, we aim to transform dreams into reality and foster a culture of creativity and innovation.</p>
        </div>
      </div>
    </>
  );
}
