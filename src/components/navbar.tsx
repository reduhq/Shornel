
function Navbar() {

    return (
        <div className="bg-pink-400 flex justify-around align items-center p-2 border-b-black border-b-2">
            <div className="w-[4rem] flex justify-center items-center">
                <img src="/black_logo.svg" alt="shornel" />
                <p className="ml-1 font-mono font-bold text-2xl">Shornel</p>
            </div>
            <div className="">
                <a href="" className="mr-5">Home</a>
                <a href="" className="mr-5">Our story</a>
                <a href="" className="mr-5">Team</a>
                <a href="">Projects</a>
            </div>
        </div>
    )
}

export default Navbar
