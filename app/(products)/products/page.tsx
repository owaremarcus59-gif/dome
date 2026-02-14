import { ProductCard } from "@/components/customs/productcard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { myproducts } from "@/lib/constant";
import { Search } from "lucide-react";


export default function page() {
  return (
    <section className='pt-16'>
        <div className="p-4 flex flex-col gap-4 w-full">
            <h2 className="text-center text-4xl tracking-wider capitalize font-extrabold text-accentColor">Search for any product</h2>
            <div className="mx-auto max-w-[80%] relative w-full pt-10">
                <Input
                className="shadow-lg p-8 bg-secondaryColor  rounded-lg"
                />
                <Button className="bg-accentColor absolute  rounded-r-lg h-16 w-16 right-1 ">
                    <Search className="text-white bg-accentColor rounded-r-lg " size={50}/>
                </Button>
             </div>

            <div className="max-w-[95%]  mx-auto lg:grid lg:grid-cols-4 lg:items-center lg:gap-6 pt-20">
                {
                    myproducts.map((item,index) => {
                        return (<ProductCard 
                            key={index} 
                            {...item}/>)
                    })
                }
            </div>
            <div>
               
            </div>

        </div>
    </section>
  )
}
