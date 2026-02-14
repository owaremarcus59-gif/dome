"use client"
import {Button} from '@/components/ui/button';
import { myproducts } from "@/lib/constant";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useParams } from 'next/navigation';


interface  pageprops {
    params : {
        id:any
    } 
}

export interface productprops {
  image:string
  price:string
  sold_by?:string 
  description?: string
  key_features?:string[]
  thumbnails?:string[]
  id:number
  label:string
  status:string
}

export  default   function page(props: pageprops) {
    
    const params =  useParams();
    const  product = myproducts.find(item => item.id.toString() == params.id)
   
  return (
    <section className='md:flex flex-col gap-4 md:px-4 max-w-[80%] mx-auto'>
            <div className="flex w-full  py-10 justify-between">
              <h2 className="text-2xl font-extrabold capitalize  tracking-wide">{product?.label}</h2>
              <p className="text-lg font-bold tracking-wider">{formatCurrency(product?.price)}</p>
            </div>

            <Separator className="my-5"/>
            <div className="md:flex  gap-6">
            <div className="w-full md:w-[50%]border-accentColor/70 rounded-lg h-[60vh] object-fit overflow-hidden">
              <Image
                src={product?.image ?? 'logo.png'}
                alt ={product?.label ?? 'logo'}
                width={500}
                height={500}
                className="w-full object-fit h-[60vh]"
                />
            </div>
            <Separator className='md:hidden'/>
            
            <div className="flex flex-col space-y-5 max-w-4xl">
              <div >
                  <h2 className="text-xl capitalize font-extrabold">{(formatCurrency(product?.price))}</h2>  
                  <div>
                    <span className="text-lg ">Sold by : </span>
                    <span className="capitalize text-lg">{product?.sold_by}</span>

                  </div>

              </div>
              <Separator/>
                <div className="flex flex-col ">
                  <h3 className="text-xl capitalize font-bold">description</h3>
                  <p className="max-w-xl py-5 text-left capitalize leading-7.5 tracking-wide">
                    {product?.description}
                  </p>
                </div>
              <Separator/>
              <div>
                  <h4 className="text-xl tracking-wide font-bold capitalize">key features</h4>
                  <div className=" flex flex-col p-2 gap-2">
                    {product?.key_features?.map((item, index) => {
                      return <p key={index}> {item}</p>
                    })}
                  </div>
              </div>
              <Separator/>
              <div className='w-full gap-4 space-y-5'>
                <Button className='w-full bg-accentColor text-white'>
                    add to chart
                </Button>
                <Button className='w-full bg-accentColor text-white'>
                    buy 
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-5"/>
    </section>
  )
}
