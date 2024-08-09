import Image from "next/image";
import React from "react";

const SectionComp = () => {
  let userIsValid = true;

  const completions = [
    {
      message: "hey man",
      user: "user1",
      randImage: "",
      system: false,
    },
    {
      message: "what... green",
      user: "user2",
      randImage: "",
      system: false,
    },
    {
      message: "User Two: Succussfully guessed green",
      user: "bob",
      randImage: "",
      system: true,
    },
    {
      message: "oo so you trying to just guess random? what else do you think",
      user: "user1",
      randImage: "",
      system: false,
    },
    {
      message: "Time Remains: 30 sec",
      user: "bob",
      randImage: "",
      system: true,
    },
  ];

  return (
    <section className="mt-10 bg-[#444] w-full h-[800px] overflow-auto">
      <header className="bg-[#666] p-4 drop-shadow-lg">
        <h2 className="text-5xl font-bold mb-3">Simple Gamish</h2>
        <p className="text-sm text-gray-300 text-gray-500 bg-[#222] p-3 rounded drop-shadow-lg">
          Guess your oppenents card by communicating and getting certain traits
          correct...............
        </p>
      </header>

      {userIsValid ? (
        <div className="w-full p-4 flex items-center justify-center flex-col md:flex-row gap-5">
          <div className="w-[350px] h-[450px] p-3 bg-[#000] rounded-lg drop-shadow-lg">
            <header className="text-2xl text-center mb-2">
              <h2>
                Player ONE: <span>0xafeagewg</span>
              </h2>
            </header>

            <div className="w-[302px] h-[302px] relative mx-auto">
              <Image
                src="/mq.png"
                fill
                alt="random selected image"
                className="rounded drop-shadow-lg"
              />
            </div>

            <footer className="p-2">
              <h2 className="text-sm my-2">Traits:</h2>
              <div className="w-[90%] mx-auto flex items-center justify-between">
                <span className="p-2 bg-[#444] rounded-md hover:drop-shadow-lg transition 500ms delay-300 ">🦆</span>
                <span className="p-2 bg-[#444] rounded-md hover:drop-shadow-lg transition 500ms delay-200 ">🦆</span>
                <span className="p-2 bg-[#444] rounded-md hover:drop-shadow-lg transition 500ms delay-400 ">🦆</span>
                <span className="p-2 bg-[#444] rounded-md hover:drop-shadow-lg transition 500ms delay-100 ">🦆</span>
              </div>
            </footer>
          </div>

          {/* Score board */}
          <div className="text-center">
            <span>0</span>
            <h4>VS.</h4>
            <span>0</span>
          </div>

          <div className="w-[350px] h-[450px] p-3 bg-[#000] rounded-lg drop-shadow-lg">
            <header className="text-2xl text-center mb-2">
              <h2>
                Player TWO: <span>0xafeagewg</span>
              </h2>
            </header>

            <div className="w-[302px] h-[302px] relative mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1722648404131-a69c35a706fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                fill
                alt="random selected image"
                className="rounded drop-shadow-lg"
              />
            </div>

            <footer className="p-2">
              <h2 className="text-sm my-2">Traits:</h2>
              <div className="w-[90%] mx-auto flex items-center justify-between">
                <span className="p-2 bg-[#444] rounded-md hover:drop-shadow-lg transition 500ms delay-300 ">Green</span>
                <span className="p-2 bg-[#444] rounded-md hover:drop-shadow-lg transition 500ms delay-300 ">Lush</span>
                <span className="p-2 bg-[#444] rounded-md hover:drop-shadow-lg transition 500ms delay-300 ">sea</span>
                <span className="p-2 bg-[#444] rounded-md hover:drop-shadow-lg transition 500ms delay-300 ">house</span>
              </div>
            </footer>
          </div>
        </div>
      ) : (
        <div className="w-full p-5 flex items-center flex-col justify-center gap-9 h-[300px] bg-[#222]">
          <h2 className="text-3xl font-bold">Hey... wanna play DE GAME</h2>
          <p className="capitalize text-sm ">
            <strong className="drop-shadow-lg underline">Login</strong> or{" "}
            <strong className="drop-shadow-lg underline">register</strong>{" "}
            brooo...
          </p>
        </div>
      )}

      <article className="bg-[#111]">
        <header className="bg-[#222] p-3">
          <h2 className="text-2xl font-bold">User Comms: </h2>
          <p className="text-sm text-gray-200">
            Communicate with your opponenent and try to guess the traits of
            their card, if you get it all right you will win.If you loose pay
            can pay to reclaim your spot
          </p>
        </header>

        <div></div>

        <form className="p-4 h-[fit] flex flex-col gap-5">
          <label
            htmlFor="userResponse"
            className="flex items-start flex-col gap-2"
          >
            <span className="text-2xl font-bold mb-2 capitalize">
              Ask oppenent:{" "}
            </span>
            <textarea
              id="userResponse"
              name="userResponse"
              className="w-[90%] mx-auto bg-[#222] p-2 text-white h-[200px] overflow-auto resize-none drop-shadow-lg rounded"
            />
          </label>
          <button className="bg-[#222] w-[40%] font-bold uppercase p-2 transition 500ms delay-200 hover:bg-[#366]">
            submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default SectionComp;
