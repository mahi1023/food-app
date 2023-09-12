const Contact = ()=>{
    return(
        <div className=" text-center">
            <h1 className=" font-bold text-lg p-4 m-4">Contact US</h1>
            <form className="flex flex-col mx-auto w-4/12">
                <input type="text" className="border border-black p-2 m-2" placeholder="name"></input>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"></input>
                <button className="border border-black p-2 m-2 bg-gray-400 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact