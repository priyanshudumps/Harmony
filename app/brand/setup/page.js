
import BrandNav from "@/components/BrandNav"
export default function Setup() {
    return(
        <div>
            <BrandNav />
        <div className="flex flex-row content-center justify-center mt-48">
           
           <form className="p-5 mx-40 flex flex-col border-black rounded-md bg-slate-300 border-2 w-1/2 ">
            <label className="text-2xl font-bold">Shopify store Name</label>
            <input 
            className="text-center border border-black rounded-md py-1 font-semibold"
            type="text" placeholder="store name" />
           
            
          
            <label className="mt-8 text-2xl font-bold">Shopify store API</label>
            <input 
            className="text-center border border-black rounded-md py-1 font-semibold"
            type="text" placeholder="store API" />

            <button className="mt-5 text-xl bg-blue-500 hover:bg-blue-400 rounded-lg font-semibold border border-black w-1/2 ml-32">Setup Brand</button>
            </form>
            <h1 className=" font-extrabold tracking-tight text-5xl mx-10">Setup your brand Seamlessly with <br/>Harmony .</h1>
          
        </div>
        </div>
    )
}