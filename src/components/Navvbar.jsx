import React, { useState } from 'react'
import navhead from '../images/Text1.svg'
import logo from '../images/logo.svg'
import search from '../images/search.png'
import down from '../images/down.png'
import menu from '../images/menu.png'
const Navvbar = () => {

const [show,setShow]=useState(false);
const [ready, setReady]= useState(false);

  return (
    <div>
      <div className="flex justify-between pt-5  h-28 md:shadow-md ">
        <div className="flex pl-16 cursor-pointer">
          <img src={logo} className="w-16" />
          <img src={navhead} className="w-32" />
        </div>
        <div>
          <ul className="flex list">
            <div className=" flex pt-8 pr-28">
              <li className="mx-3 text-xl flex cursor-pointer">
                Services{" "}
                <span>
                  <img src={down} className="w-3 mt-3 ml-2" />
                </span>
              </li>
              <li className="mx-3 text-xl cursor-pointer">Careers</li>
              <li className="mx-3 text-xl cursor-pointer">About</li>
              <li className="mx-3 text-xl cursor-pointer">Contacts</li>
              <li className="">
                <img src={search} className="w-5 pt-1" />
              </li>
            </div>

            <button className="rounded-sm border-2 font-semibold font-mono text-blue-600 p-3 border-blue-600 mr-16 hover:text-white hover:bg-blue-600">
              Let's Talk
            </button>
          </ul>
        </div>
        <div
          className="hidden menu"
          onClick={() => {
            setShow(!show);
          }}
        >
          <img src={menu} className="w-7 " />
        </div>
      </div>

      {show && (
        <div className="hidden shadow-md">
          <div>
            <h1 className="pl-5 text-2xl py-2 flex">
              Services{" "}
              <span>
                <img src={down} className="w-6 pt-2 pl-2" onClick={()=>{
                    setReady(!ready);
                }}/>
              </span>
            </h1>
            {ready && (
              <div className="pl-5">
                <div>
                  <h1 className="text-xl font-bold py-5">
                    Complete AI + RPA Automation
                  </h1>
                  <h2 className="text-lg">Build, Deploy and Scale Bots</h2>
                </div>
                <div>
                  <h1 className="text-xl font-bold py-5">
                    Build Better Apps - The Cloud Native Way
                  </h1>
                  <h2 className="pb-5 text-lg">
                    Build Apps - Deliver New Apps Users Love
                  </h2>
                  <h2 className="text-lg">
                    Modernize Apps - Rearchitect Valuable Legacy Apps
                  </h2>
                </div>
                <div>
                  <h1 className="text-xl font-bold py-5">
                    Simply Cloud Ops - Apply The New Rules Of Ops
                  </h1>
                  <h2 className="text-lg">
                    Kubernetes - Enterprise Ready Runtime
                  </h2>
                </div>
                <div>
                  <h1 className="text-xl font-bold py-5">Cloud Services</h1>
                  <h2 className="text-lg">Azure</h2>
                  <h2 className="text-lg">Aws</h2>
                </div>
              </div>
            )}
            <h1 className="pl-5 text-2xl py-2">Careers</h1>
            <h1 className="pl-5 text-2xl py-2">Contact</h1>
            <h1 className="pl-5 text-2xl py-2">About</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navvbar