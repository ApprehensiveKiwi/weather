import { FaGithub } from "react-icons/fa6";


function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-br from-accent-2 to-accent-3">
        <section id="HeaderDiv" className="h-50 w-full">
          <div className="flex flex-row justify-evenly py-3 h-16 bg-accent-1 shadow-lg">
            <text className=" font-sans font-bold text-accent-2 text-2xl">Weather</text>
            <input placeholder="Search for a city or postcode " className=" w-[60%] rounded-md bg-accent-2 border-0 hover:border-4 border-altwhite outline-none p-3"></input>
            <FaGithub size={40} className=" fill-accent-2 hover:bg-background rounded-full hover:cursor-pointer" onClick={() => window.location.href = 'https://github.com/ApprehensiveKiwi'}></FaGithub>
          </div>
          
        </section>
        <section id="ContentDiv" className="overflow-y-scroll">

        </section>
        <section id="FooterDiv" classNam=" justify-center flex bg-altwhite w-screen p-10">
          
        </section>

    </div>
  );
}

export default App;
