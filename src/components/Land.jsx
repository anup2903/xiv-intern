import React ,{useEffect} from 'react'
import robot from '../images/rp2.jpg'
import p1 from '../images/p1.png'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import right from '../images/right.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Land = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex justify-center main ">
      <div>
        <div className="mt-10">
          <div className="">
            <h1 className="text-2xl font-semibold col">Let's Collaborate</h1>
          </div>
          <div className="flex justify-center mt-24 box">
            <div className='box1'>
              <h1 className="text-6xl w-96 font-serif " >
                AI + RPA is what we do
              </h1>
              <h2 className="text-3xl w-[23.5rem] mt-14 font-serif font-extralight tex text-left">
                Future-Proof your business. Drive efficiency, profitability and
                deliver on customer experience
              </h2>
            </div>
            <div className="ml-28 img">
              <img src={robot} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-20 small" data-aos="fade-up">
          <div className="">
            <h1 className="text-2xl font-semibold flex  text1">AI + RPA Automation <span><img src={right} className='w-5 m-2' /></span></h1>
          </div>
          <div className="flex justify-center mt-24 box">
            <div className='box1'>
              <h1 className="text-6xl w-96 font-serif">Make Bolder Choices</h1>
              <h2 className="text-3xl w-[23.5rem] mt-14 font-serif font-extralight tex">
                Digital focused strategies to realize market-changing ideas
              </h2>
            </div>
            <div className="ml-28 imdiv">
              <img src={p1} className='w-[32rem] img1' />
            </div>
          </div>
        </div>
        <div className="mt-20 small " data-aos="fade-up">
          <div className="">
            <h1 className="text-2xl font-semibold flex text1">Build Better Apps <span><img src={right} className='w-5 m-2' /></span></h1>
          </div>
          <div className="flex justify-center mt-24 box">
            <div className='box1'>
              <h1 className="text-6xl w-96 font-serif">Innovate with Speed</h1>
              <h2 className="text-3xl w-[23.5rem] mt-14 font-serif font-extralight tex">
                Create higher quality software, deliver on customer expectations
                and business goals
              </h2>
            </div>
            <div className="ml-28 imdiv">
              <img src={p2} className='w-[32rem] img1' />
            </div>
          </div>
        </div>
        <div className="mt-20 small" data-aos="fade-up">
          <div >
            <h1 className="text-2xl font-semibold flex text1">DevOps <span><img src={right} className='w-5 m-2' /></span></h1>
          </div>
          <div className="flex justify-center mt-24 box">
            <div className="box1">
              <h1 className="text-6xl w-96 font-serif">Embrace Cloud</h1>
              <h2 className="text-3xl w-[23.5rem] mt-14 font-serif font-extralight tex" >
              With Cloud-First accelerate innovation and optimize performance
              </h2>
            </div>
            <div className="ml-28 imdiv">
              <img src={p3} className='w-[32rem] img1' />
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-semibold flex text1 cloud">Cloud services <span><img src={right} className='w-5 m-2' /></span></h1>
        <button className='text-white bg-black py-3 px-10 my-20 border-black border-2 hover:text-black hover:bg-white but'>Get In Touch</button>
      </div>
    </div>
  );
}

export default Land