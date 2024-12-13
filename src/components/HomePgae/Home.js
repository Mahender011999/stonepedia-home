import React, { useState, useEffect } from "react";
import { IoHomeOutline, IoDocumentTextOutline } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { GiStonePile } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import TestimonialForm from "../TestimonialForm/TestimonialForm";

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "Experience The World Of Natural",
    "Stones Like Never Before",
    "The World's Finest Natural Stones",
    "Welcome One-Stop Platform ",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div className="bg-black">
      <div className="section-1 flex justify-between mt-5">
        <div>
          <img
            className="lg:w-[400px] w-[100px] h-full animate-upToDown"
            src="https://stonepedia.in/wp-content/uploads/2024/04/banner-3.png"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <span className="text-white lg:text-[40px] text-[10px] font-bold animate-fadeIn">
            {texts[currentTextIndex]}
          </span>
        </div>

        <div>
          <img
            className="lg:w-[400px] w-[100px] h-full animate-downToUp"
            src="https://stonepedia.in/wp-content/uploads/2024/04/banner-3.png"
            alt=""
          />
        </div>
      </div>
      <hr></hr>
      <div className="section-2   mx-auto px-6 lg:px-44 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="uppercase text-yellow-500 p-2 rounded-lg flex items-center">
            <hr className="w-10 border-t-1 border-red-500 mr-2" />
            redefining stone sourcing
            <hr className="w-10 border-t-1 border-red-500 ml-2" />
          </h1>
          <p className="text-white font-bold text-[40px]">why stonePedia ?</p>
        </div>
        <div className="flex flex-wrap justify-between gap-4 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <div className="card flex flex-col text-white border border-white p-4 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:border-yellow-500">
              <AiOutlineSafetyCertificate
                size={50}
                className="mb-4 text-yellow-500"
              />
              <h1 className="text-2xl font-bold mb-3">
                Rigorous Quality Control
              </h1>
              <p>
                Multi-level inspections ensure every stone meets the highest
                durability and aesthetic standards.
              </p>
            </div>

            <div className="card flex flex-col text-white border border-white p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:border-yellow-500">
              <TbCertificate size={50} className="text-yellow-500 mb-4" />
              <h1 className="text-xl font-semibold mb-3">
                Certified Suppliers & Compliance
              </h1>
              <p>
                Sourced from certified suppliers, every stone complies with
                global and local regulations.
              </p>
            </div>

            <div className="card flex flex-col text-white border border-white p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:border-yellow-500">
              <GrUserExpert size={45} className="text-yellow-500 mb-4" />
              <h1 className="text-xl font-semibold mb-3">
                Expert Guidance and Support
              </h1>
              <p>
                StonePedia’s specialists provide expert advice on material
                selection, application, and maintenance.
              </p>
            </div>

            <div className="card flex flex-col text-white border border-white p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:border-yellow-500">
              <GiStonePile size={50} className="mb-4 text-yellow-500" />
              <h1 className="text-xl font-semibold mb-3">
                Comprehensive High-Quality Stones
              </h1>
              <p>
                Reliable, on-time delivery of stones directly to your project
                site, ensuring seamless logistics.
              </p>
            </div>

            <div className="card flex flex-col text-white border border-white p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:border-yellow-500">
              <IoDocumentTextOutline
                size={50}
                className="mb-4 text-yellow-500"
              />
              <h1 className="text-xl font-semibold mb-3">
                Guaranteed Order Fulfillment
              </h1>
              <p>
                Accurate and timely order processing to meet all project
                timelines without delays.
              </p>
            </div>

            <div className="card flex flex-col text-white border border-white p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:border-yellow-500">
              <IoHomeOutline size={50} className="mb-3 text-yellow-500" />
              <h1 className="text-xl font-semibold mb-3">Doorstep Delivery</h1>
              <p>
                Reliable, on-time delivery of stones directly to your project
                site, ensuring seamless logistics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="bg-[url('https://www.granitesteamboatsprings.com/images/1099986/0_0.jpg')] bg-cover bg-center h-[100vh]"></div>
      </div>
      <div className="section-4 mx-auto px-6 lg:px-44 py-12 ">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div>
            <p className="uppercase text-yellow-500 p-2 rounded-lg flex items-center mt-5 ml-2 ">
              <hr className="w-10 border-t-1 border-red-500 me-2  " />
              what we offer ?
            </p>
            <h1 className="font-bold mb-3 lg:text-[40px] text-white">
              Choose by Category
            </h1>
          </div>
          <div>
            <button className="bg-red-500 uppercase hover:bg-orange-400 text-lg text-white w-[200px] h-[40px] flex items-center justify-center p-2">
              view more
              <IoIosArrowRoundForward className="mt-1 mx-2" size={30} />{" "}
            </button>
          </div>
        </div>
        <hr className="m-4 "></hr>
        <div className="flex flex-wrap">
          <div className="m-5 ">
            <img
              className="rounded-full w-48 m-5 animate-rotateCircle"
              src="https://stonepedia.in/wp-content/uploads/2024/10/im-01.png"
              alt="box"
            ></img>
            <h1 className="text-white text-center text-lg font-bold hover:text-red-500">
              Lime Stone
            </h1>
          </div>
          <div className="m-5 ">
            <img
              className="rounded-full w-48 m-5 animate-rotateCircle"
              src="https://stonepedia.in/wp-content/uploads/2024/10/LI-01.png"
              alt="box"
            ></img>
            <h1 className="text-white text-center text-lg font-bold hover:text-red-500">
              Lime Stone
            </h1>
          </div>
          <div className="m-5 ">
            <img
              className="rounded-full w-48 m-5 animate-rotateCircle"
              src="https://stonepedia.in/wp-content/uploads/2024/10/on-01.png"
              alt="box"
            ></img>
            <h1 className="text-white text-center text-lg font-bold hover:text-red-500">
              Oynx
            </h1>
          </div>
          <div className="m-5 ">
            <img
              className="rounded-full w-48 m-5 animate-rotateCircle"
              src="https://stonepedia.in/wp-content/uploads/2024/10/g-01.png"
              alt="box"
            ></img>
            <h1 className="text-white text-center text-lg font-bold hover:text-red-500">
              Indian Marble
            </h1>
          </div>
          <div className="m-5 ">
            <img
              className="rounded-full w-48 m-5 animate-rotateCircle"
              src="https://stonepedia.in/wp-content/uploads/2024/10/q-01.png"
              alt="box"
            ></img>
            <h1 className="text-white text-center text-lg font-bold hover:text-red-500">
              Quartz
            </h1>
          </div>
          <div className="m-5 ">
            <img
              className="rounded-full w-48 m-5 animate-rotateCircle"
              src="https://stonepedia.in/wp-content/uploads/2024/10/Untitled-1-01.png"
              alt="box"
            ></img>
            <h1 className="text-white text-center text-lg font-bold hover:text-red-500">
              Travertine
            </h1>
          </div>
          <div className="m-5 ">
            <img
              className="rounded-full w-48 m-5 animate-rotateCircle"
              src="https://stonepedia.in/wp-content/uploads/2024/10/im-01.png"
              alt="box"
            ></img>
            <h1 className="text-white text-center text-lg font-bold hover:text-red-500">
              Imported Marble
            </h1>
          </div>
          <div className="m-5 ">
            <img
              className="rounded-full w-48 m-5 animate-rotateCircle"
              src="https://stonepedia.in/wp-content/uploads/2024/10/ig-01.png"
              alt="box"
            ></img>
            <h1 className="text-white text-center text-lg font-bold hover:text-red-500">
              Imported Granite
            </h1>
          </div>

          <div className="m-5 ">
            <img
              className="rounded-full w-48 m-5 animate-rotateCircle"
              src="https://stonepedia.in/wp-content/uploads/2024/10/1-07-1.png"
              alt="box"
            ></img>
            <h1 className="text-white text-center text-lg font-bold hover:text-red-500">
              Sand Stone
            </h1>
          </div>
        </div>
      </div>

      <div className="section-5 px-6 lg:px-44 py-12 bg-yellow-50   ">
        <div className="mx-auto lg:flex lg:justify-between lg:items-center mt-5">
          <div>
            <p className="uppercase text-yellow-500 p-2 rounded-lg flex items-center mt-5 ml-2 ">
              <hr className="w-10 border-t-1 border-red-500 me-2  " />
              Best In Demand
            </p>
            <h1 className="font-bold mb-3 lg:text-[40px] text-black">
              Best Selling Products
            </h1>
          </div>
          <div>
            <button className="bg-red-500 uppercase hover:bg-orange-400 text-lg text-white w-[200px] h-[40px] flex items-center justify-center p-2">
              View More
              <IoIosArrowRoundForward className="mt-1 mx-2" size={30} />
            </button>
          </div>
        </div>
        <hr className="mb-4"></hr>

        <div className="flex flex-wrap">
          <div>
            <div>
              <div className="group relative">
                <img
                  className="h-[200px] w-[250px] m-5"
                  src="https://stonepedia.in/wp-content/uploads/2024/10/kaddapah-black-limestone-01-.png"
                  alt=""
                />
                <button className="bg-slate-700 w-[250px] uppercase p-3 text-lg text-white hover:bg-red-500 absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300">
                  Select More
                </button>
              </div>
              <div>
                <h1 className="cursor-pointer text-2xl text-center text-black hover:text-red-500">
                  Udaipur Green
                </h1>
                <p className="text-center">₹1.00 per sq/ft</p>
              </div>
            </div>
          </div>

          <div>
            {" "}
            <div className="group relative">
              <img
                className="h-[200px] w-[250px] m-5"
                src="https://stonepedia.in/wp-content/uploads/2024/10/Udaipur-Green-Marble-01-.png"
                alt=""
              />
              <button className="bg-slate-700 w-[250px] uppercase p-3 text-lg text-white hover:bg-red-500 absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300">
                Select More
              </button>
            </div>
            <div>
              <h1 className="cursor-pointer text-2xl text-center text-black hover:text-red-500">
                Udaipur Green
              </h1>
              <p className="text-center">₹1.00 per sq/ft</p>
            </div>
          </div>

          <div>
            <div className="group relative">
              <img
                className="h-[200px] w-[250px] m-5"
                src="https://stonepedia.in/wp-content/uploads/2024/10/Dholpur-Beige-Limestone-01-.png"
                alt=""
              />
              <button className="bg-slate-700 w-[250px] uppercase p-3 text-lg text-white hover:bg-red-500 absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300">
                Select More
              </button>
            </div>
            <div>
              <h1 className="cursor-pointer text-2xl text-center text-black hover:text-red-500">
                Dholpur Beige
              </h1>
              <p className="text-center">₹1.00 per sq/ft</p>
            </div>
          </div>

          <div>
            <div className="group relative">
              <img
                className="h-[200px] w-[250px] m-5"
                src="https://stonepedia.in/wp-content/uploads/2024/10/Kuppam-Green-Granite-01-.png"
                alt=""
              />
              <button className="bg-slate-700 w-[250px] uppercase p-3 text-lg text-white hover:bg-red-500 absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300">
                Select More
              </button>
            </div>
            <div>
              <h1 className="cursor-pointer text-2xl text-center text-black hover:text-red-500">
                Kuppam Green Granite
              </h1>
              <p className="text-center">₹1.00 per sq/ft</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-6 px-6 lg:px-44 py-12  ">
        <div className="mx-auto lg:flex lg:justify-between lg:items-center mt-5">
          <div>
            <p className="uppercase text-yellow-500 p-2 rounded-lg flex items-center mt-5 ml-2 ">
              <hr className="w-10 border-t-1 border-red-500 me-2  " />
              Discover Your Ideal Stone
            </p>
            <h1 className="font-bold mb-3 lg:text-[40px] text-white">
              StonePedia Exclusive
            </h1>
          </div>
          <div>
            <button className="bg-red-500 uppercase hover:bg-orange-400 text-lg text-white w-[200px] h-[40px] flex items-center justify-center p-2">
              View More
              <IoIosArrowRoundForward className="mt-1 mx-2" size={30} />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="m-3">
            <img
              className="w-[350px] hover:animate-upToDown"
              src="https://stonepedia.in/wp-content/uploads/2023/04/Marble-1.jpg"
              alt=""
            />
            <h1 className="text-white mt-3 text-center text-2xl hover:text-red-500 font-bold">
              Marble
            </h1>
          </div>

          <div className="m-3">
            <img
              className="w-[350px] hover:animate-upToDown"
              src="https://stonepedia.in/wp-content/uploads/2023/04/Marble-2.jpg"
              alt=""
            />
            <h1 className="text-white mt-3 text-center text-2xl hover:text-red-500 font-bold">
              Granite
            </h1>
          </div>

          <div className="m-3">
            <img
              className="w-[350px] hover:animate-upToDown"
              src="https://stonepedia.in/wp-content/uploads/2023/04/Marble-3.jpg"
              alt=""
            />
            <h1 className="text-white mt-3 text-center text-2xl hover:text-red-500 font-bold">
              Marble
            </h1>
          </div>

          <div className="m-3">
            <img
              className="w-[350px] hover:animate-upToDown"
              src="https://stonepedia.in/wp-content/uploads/2023/04/Marble-4.jpg"
              alt=""
            />
            <h1 className="text-white mt-3 text-center text-2xl hover:text-red-500 font-bold">
              Limestone
            </h1>
          </div>

          <div className="m-3">
            <img
              className="w-[350px] hover:animate-upToDown"
              src="https://stonepedia.in/wp-content/uploads/2023/04/Marble-5.jpg"
              alt=""
            />
            <h1 className="text-white mt-3 text-center text-2xl hover:text-red-500 font-bold">
              Travertine
            </h1>
          </div>

          <div className="m-3">
            <img
              className="w-[350px] hover:animate-upToDown"
              src="https://stonepedia.in/wp-content/uploads/2023/04/Marble-6.jpg"
              alt=""
            />
            <h1 className="text-white mt-3 text-center text-2xl hover:text-red-500 font-bold">
              Oynx
            </h1>
          </div>
        </div>
      </div>
      <div className="section-7  bg-[url('https://png.pngtree.com/background/20210717/original/pngtree-white-marble-with-light-golden-yellow-texture-picture-image_1427391.jpg')] px-6 lg:px-44 py-12 bg-yellow-50 ">
        <div className="mx-auto lg:flex lg:justify-between lg:items-center mt-5">
          <div>
            <p className="uppercase text-yellow-500 p-2 rounded-lg flex items-center mt-5 ml-2 ">
              <hr className="w-10 border-t-1 border-red-500 me-2  " />
              Best In Demand
            </p>
            <h1 className="font-bold mb-3 lg:text-[40px] text-black">
              Best Selling Products
            </h1>
          </div>
          <div>
            <button className="bg-red-500 uppercase hover:bg-orange-400 text-lg text-white w-[200px] h-[40px] flex items-center justify-center p-2">
              View More
              <IoIosArrowRoundForward className="mt-1 mx-2" size={30} />
            </button>
          </div>
        </div>
        <hr className="mb-5"></hr>

        <div className="flex flex-wrap">
          <div>
            <div>
              <div className="group relative">
                <img
                  className="h-[200px] w-[250px] m-5"
                  src="https://stonepedia.in/wp-content/uploads/2024/10/peacock-green-QuartzUpdated.jpg"
                  alt=""
                />
                <button className="bg-slate-700 w-[250px] uppercase p-3 text-lg text-white hover:bg-red-500 absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300">
                  Select More
                </button>
              </div>
              <div>
                <h1 className="cursor-pointer text-2xl text-center text-black hover:text-red-500">
                  Peacock Green Quartzite
                </h1>
                <p className="text-center">₹1.00 per sq/ft</p>
              </div>
            </div>
          </div>

          <div>
            <div className="group relative">
              <img
                className="h-[200px] w-[250px] m-5"
                src="https://stonepedia.in/wp-content/uploads/2024/10/amazon-green-quartzite-01-.png"
                alt=""
              />
              <button className="bg-slate-700 w-[250px] uppercase p-3 text-lg text-white hover:bg-red-500 absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300">
                Select More
              </button>
            </div>
            <div>
              <h1 className="cursor-pointer text-2xl text-center text-black hover:text-red-500">
                Amazon Green Quartzite
              </h1>
              <p className="text-center">₹1.00 per sq/ft</p>
            </div>
          </div>

          <div>
            <div className="group relative">
              <img
                className="h-[200px] w-[250px] m-5"
                src="https://stonepedia.in/wp-content/uploads/2024/10/Kota-Brown-Sandstone-01-.png"
                alt=""
              />
              <button className="bg-slate-700 w-[250px] uppercase p-3 text-lg text-white hover:bg-red-500 absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300">
                Select More
              </button>
            </div>
            <div>
              <h1 className="cursor-pointer text-2xl text-center text-black hover:text-red-500">
                kota Brown Sandstone
              </h1>
              <p className="text-center">₹1.00 per sq/ft</p>
            </div>
          </div>

          <div>
            <div className="group relative">
              <img
                className="h-[200px] w-[250px] m-5"
                src="https://stonepedia.in/wp-content/uploads/2024/10/chima-pink-granite-Custom.jpg"
                alt=""
              />
              <button className="bg-slate-700 w-[250px] uppercase p-3 text-lg text-white hover:bg-red-500 absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300">
                Select More
              </button>
            </div>
            <div>
              <h1 className="cursor-pointer text-2xl text-center text-black hover:text-red-500">
                Chima Pink
              </h1>
              <p className="text-center">₹1.00 per sq/ft</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-8 bg-slate-100  px-6 lg:px-40 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div className="card shadow-lg p-6 flex flex-col items-center justify-center bg-[url('https://stonepedia.in/wp-content/uploads/2023/04/Marble-1.jpg')] bg-center bg-cover h-full">
            <h1 className="text-4xl font-bold text-center text-black">1M</h1>
            <p className="text-lg text-black text-center mt-2">
              Sq ft stone delivered
            </p>
          </div>
          <div className="card shadow-lg p-6 flex flex-col items-center justify-center bg-[url('https://stonepedia.in/wp-content/uploads/2023/04/Marble-1.jpg')] bg-center bg-cover h-full">
            <h1 className="text-4xl font-bold text-center text-black">2</h1>
            <p className="text-lg text-black text-center mt-2">
              National/Globally Award
            </p>
          </div>
          <div className="card shadow-lg p-6 flex flex-col items-center justify-center bg-[url('https://stonepedia.in/wp-content/uploads/2023/04/Marble-1.jpg')] bg-center bg-cover h-full">
            <h1 className="text-4xl font-bold text-center text-black">35</h1>
            <p className="text-lg text-black text-center mt-2">
              PROJECT COMPLETED
            </p>
          </div>
          <div className="card shadow-lg p-6 flex flex-col items-center justify-center bg-[url('https://stonepedia.in/wp-content/uploads/2023/04/Marble-1.jpg')] bg-center bg-cover h-full">
            <h1 className="text-4xl font-bold text-center text-black">99%</h1>
            <p className="text-lg text-black text-center mt-2">
              Customer Satisfied
            </p>
          </div>
        </div>
      </div>
      <div className="section-9 mx-auto px-6 lg:px-44 py-12 bg-slate-100">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 mb-8 lg:mb-0">
            <p className="uppercase text-yellow-500 p-2 rounded-lg flex items-center mt-5 ml-2">
              <hr className="w-10 border-t-1 border-red-500 mr-2" />
              Our Clients
            </p>

            <h1 className="font-bold mb-3 text-xl lg:text-[40px] text-black">
              Our Valuable Clients
            </h1>

            <button className="bg-red-500 uppercase hover:bg-orange-400 text-lg text-white w-full sm:w-[200px] h-[40px] flex items-center justify-center p-2 mt-4">
              View More
              <IoIosArrowRoundForward className="mt-1 mx-2" size={30} />
            </button>
          </div>

          <div className="w-full lg:w-8/12">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-6/12 mb-8 lg:mb-8">
                <h1 className="font-semibold text-lg sm:text-xl">
                  <span className="text-red-500">01 </span>Bharat Business Award
                  2023
                </h1>
                <hr className="m-5 border-t border-gray-400" />
                <p className="text-slate-800">
                  This award recognizes an employee who has come up with a new
                  idea or process that has positively impacted the company.
                </p>
                <button className="bg-red-500 uppercase mb-5 hover:bg-orange-400 text-lg text-white w-full sm:w-[150px] h-[40px] flex items-center justify-center p-2 mt-4">
                  See Blog
                  <IoIosArrowRoundForward className="mt-1 mx-2" size={30} />
                </button>
              </div>

              <div className="w-full sm:w-6/12 mb-8 lg:mb-8">
                <h1 className="font-semibold text-lg sm:text-xl">
                  <span className="text-red-500">02 </span> The Print
                </h1>
                <hr className="m-5 border-t border-gray-400" />
                <p className="text-slate-800">
                  This award recognizes an employee who has shown exceptional
                  leadership skills and has inspired and motivated others.
                </p>
                <button className="bg-red-500 uppercase mb-5 hover:bg-orange-400 text-lg text-white w-full sm:w-[150px] h-[40px] flex items-center justify-center p-2 mt-4">
                  See Blog
                  <IoIosArrowRoundForward className="mt-1 mx-2" size={30} />
                </button>
              </div>

              <div className="w-full sm:w-6/12 mb-8 lg:mb-8">
                <h1 className="font-semibold text-lg sm:text-xl">
                  <span className="text-red-500">03 </span> Times of India
                </h1>
                <hr className="m-5 border-t border-gray-400" />
                <p className="text-slate-800">
                  These are often awarded to businesses or individuals who have
                  achieved success or made significant contributions in their
                  industry
                </p>
                <button className="bg-red-500 uppercase mb-5 hover:bg-orange-400 text-lg text-white w-full sm:w-[150px] h-[40px] flex items-center justify-center p-2 mt-4">
                  See Blog
                  <IoIosArrowRoundForward className="mt-1 mx-2" size={30} />
                </button>
              </div>

              <div className="w-full sm:w-6/12 mb-8 lg:mb-8">
                <h1 className="font-semibold text-lg sm:text-xl">
                  <span className="text-red-500">04 </span>Hindustan Times
                </h1>
                <hr className="m-5 border-t border-gray-400" />
                <p className="text-slate-800">
                  Design well Acetech showcases the latest trends, products, and
                  technologies in the industry and provides a platform
                </p>
                <button className="bg-red-500 uppercase mb-5 hover:bg-orange-400 text-lg text-white w-full sm:w-[150px] h-[40px] flex items-center justify-center p-2 mt-4">
                  See Blog
                  <IoIosArrowRoundForward className="mt-1 mx-2" size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-10 mx-auto px-6 lg:px-44 py-12 bg-black">
        <TestimonialForm />
      </div>

      <div className="section-11  mx-auto px-6 lg:px-44 py-12 bg-gray-100">
        <p className="uppercase text-yellow-500 p-2 rounded-lg flex items-center mt-5 ml-2 ">
          <hr className="w-10 border-t-1 border-red-500 me-2  " />
          our clients
        </p>

        <h1 className="font-bold mb-3 lg:text-[40px]  text-black">
          Our Valuable Clients
        </h1>
        <div className="overflow-hidden">
          <div className="flex animate-scrollLeft space-x-8">
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-04.png"
              alt="Client Logo 1"
              className="w-60 h-30"
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-01.png"
              alt="Client Logo 2"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-02.png"
              alt="Client Logo 3"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-05.png"
              alt="Client Logo 4"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-03.png"
              alt="Client Logo 5"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-06.png"
              alt="Client Logo 5"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-14.png"
              alt="Client Logo 5"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-19.png"
              alt="Client Logo 5"
              className="w-60 h-30 "
            />
          </div>
        </div>

        <div className="overflow-hidden mt-6">
          <div className="flex animate-scrollRight space-x-8">
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-04.png"
              alt="Client Logo 1"
              className="w-60 h-30"
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-01.png"
              alt="Client Logo 2"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-02.png"
              alt="Client Logo 3"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-05.png"
              alt="Client Logo 4"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-03.png"
              alt="Client Logo 5"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-06.png"
              alt="Client Logo 5"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-14.png"
              alt="Client Logo 5"
              className="w-60 h-30 "
            />
            <img
              src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-19.png"
              alt="Client Logo 5"
              className="w-60 h-30 "
            />
          </div>
        </div>
      </div>
      <div className="secion-12">
        <video
          class="elementor-video"
          src="https://stonepedia.in/wp-content/uploads/2024/10/Stonepedia-T-5.mp4"
          autoplay=""
          loop=""
          muted="muted"
          controlslist="nodownload"
        ></video>
      </div>
      
    </div>
  );
};

export default Home;

// <div className="section-13 mx-auto px-6 lg:px-20 py-12 bg-gray-100">
//         {/* Section Heading and Button */}
//         <div className="lg:flex lg:justify-between lg:items-center">
//           <div>
//             <p className="uppercase text-yellow-500 p-2 rounded-lg flex items-center mt-5 ml-2">
//               <hr className="w-10 border-t-1 border-red-500 mr-2" />
//               Latest News
//             </p>
//             <h1 className="font-bold mb-3 text-xl lg:text-[40px] text-black">
//               Watch Our Latest Blog
//             </h1>
//           </div>

//           {/* View More Button */}
//           <div>
//             <button className="bg-slate-900 uppercase hover:bg-red-400 text-lg text-white w-[200px] h-[40px] flex items-center justify-center p-2">
//               View More
//               <IoIosArrowRoundForward className="mt-1 mx-2" size={30} />
//             </button>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="my-6 border-gray-300" />

//         {/* Blog Post Cards */}
//         <div className="flex flex-wrap gap-12 justify-center lg:justify-between">
//           {/* Blog Post 1 */}
//           <div className="w-full sm:w-6/12 md:w-4/12 lg:w-4/12">
//             <div>
//               <img
//                 src="https://stonepedia.in/wp-content/uploads/2024/10/381301677487946-467x352.jpg"
//                 className="w-full rounded-lg mb-4"
//               />
//             </div>
//             <div className="flex flex-col mb-4">
//               <p className="text-gray-600">Hello |</p>
//               <p className="text-gray-600">World</p>
//             </div>
//             <div className="font-semibold text-lg text-gray-800 mb-4">
//               Global Market Capitalization of the Natural Stone Industry
//             </div>
//             <button className="bg-slate-900 text-white hover:bg-red-400 px-4 py-2 rounded-lg">
//               Read More
//             </button>
//           </div>

//           {/* Blog Post 2 */}
//           <div className="w-full sm:w-6/12 md:w-4/12 lg:w-4/12">
//             <div>
//               <img
//                 src="https://stonepedia.in/wp-content/uploads/2024/10/381301677487946-467x352.jpg"
//                 className="w-full rounded-lg mb-4"
//               />
//             </div>
//             <div className="flex flex-col mb-4">
//               <p className="text-gray-600">Hello |</p>
//               <p className="text-gray-600">World</p>
//             </div>
//             <div className="font-semibold text-lg text-gray-800 mb-4">
//               Global Market Capitalization of the Natural Stone Industry
//             </div>
//             <button className="bg-slate-900 text-white hover:bg-red-400 px-4 py-2 rounded-lg">
//               Read More
//             </button>
//           </div>

//           {/* Blog Post 3 */}
//           <div className="w-full sm:w-6/12 md:w-4/12 lg:w-4/12">
//             <div>
//               <img
//                 src="https://stonepedia.in/wp-content/uploads/2024/10/381301677487946-467x352.jpg"
//                 className="w-full rounded-lg mb-4"
//               />
//             </div>
//             <div className="flex flex-col mb-4">
//               <p className="text-gray-600">Hello |</p>
//               <p className="text-gray-600">World</p>
//             </div>
//             <div className="font-semibold text-lg text-gray-800 mb-4">
//               Global Market Capitalization of the Natural Stone Industry
//             </div>
//             <button className="bg-slate-900 text-white hover:bg-red-400 px-4 py-2 rounded-lg">
//               Read More
//             </button>
//           </div>
//         </div>
//       </div>
