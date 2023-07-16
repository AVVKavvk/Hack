import React from "react";

function Home() {
  return (
    <div class="  text-white flex flex-wrap  mt-[75px]">
      <div className="h-[700px] overflow-hidden flex-auto w-[17%] bg-[#090d21]  border border-[#1c254d]">
        <div class="border border-[#1c254d] py-2 flex flex-col justify-center items-center ">
          <h1>History</h1>
        </div>
      </div>

      <div class="flex-auto flex-wrap flow-row w-[82%] ">
      <div class=" flex w-[55%] mx-auto  flex-wrap gap-6 justify-between  relative  mt-10 text-gray-300">
          <div class=" shadow-md  bg-[#434343] px-10 py-5 rounded-lg">
            <p>What can do</p>
          </div>
          <div class=" shadow-md  bg-[#434343] px-10 py-5 rounded-lg">
            <p>What can do</p>
          </div>
          <div class=" shadow-md  bg-[#434343] px-10 py-5 rounded-lg">
            <p>What can do</p>
          </div>
        
        
          
        </div>
        <div class="flex w-full justify-center relative mt-24">
          <input
            class="rounded-lg   w-[60%] px-8 py-4 border-none outline-none flex  justify-start"
            type="text"
            placeholder="Search"
          />
          <button class=" ml-5 right-[270px] top-[15px] bg-[#1c254d] px-4 py-1 rounded-lg ">
            Send
          </button>
        </div>
        

      
      </div>
    </div>
  );
}

export default Home;
