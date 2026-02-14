import { productprops } from '@/app/(products)/products/[id]/page';
import {Info, Phone,ShoppingBag,Home, ShoppingCart, ListOrdered, ShoppingBasket, MonitorCheck, Cog, DollarSign, Diamond, Superscript, Hourglass }  from 'lucide-react';

export const navlinks =[
    {name : 'Home', ref: '/', icon:Home},
    {name : 'Products', ref: '/products', icon:ShoppingBag},
    {name : 'About', ref: '/about', icon:Info},
    {name : 'Contact', ref: '/contact', icon:Phone},
]
export const heroimagegrid = [
    "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/system1.png",
    "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/iphone17.png",
    "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/systemopen.png",
]

export const trendings = [
    {
        id: 1, 
        label:'Fully custom gaming pc',
        src: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg",
        price: "9000",
    },
    {
        id: 2, 
        src:'https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260201-WA0010.jpg',
        label: "Iphone XR & X",
        price: "2500",
    },
{
        id: 3, 
        src: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0004.jpg",
        label:'NVIDIA GeForce RTX graphics card',
        price: "7800"
},
    {
        id: 4, 
        label: "Gigabyte AORUS motherboard",
        src:'https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0000.jpg',
        price: "2250",
    },
   
]


export const sidebarlinks =[
    {
        label: 'Dashboard',
        ref : '/dashboard',
        icon : ShoppingBag,
    },
    {
        label: 'My Products',
        ref : '/dashboard/products',
        icon : ShoppingBasket,
    },
    {
        label: 'orders',
        ref : '/orders',
        icon : ListOrdered,
    },
    {
        label: 'earnings',
        ref : '/earnings',
        icon : MonitorCheck,
    },
    {
        label: 'settings',
        ref: '/settings',
        icon: Cog,
    }

]

export const totalcardlist = [
    {
        label:"earning this month",
        icon : DollarSign,
        value: 1200
    },
    {
        label: 'product listed',
        value: 2,
        icon: ShoppingBag
    },
    {
        label: 'order pending',
        value: 12,
        icon: Hourglass
    }
]

export const myproducts : productprops[]= [
    {
        id: 1,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0004.jpg",
        label: "NVIDIA geForce RTX graphics card",
        price:"5000",
        status:"active"
    },
    {
        id: 2,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0000.jpg",
        label: "Gigabyte aorus motherboard",
        price:"5000",
        status:"active"
    },
    {
        id: 3,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg",
        label: "Gaming Pc Case",
        price:"5000",
        status:"pending",
        sold_by:'mm computers',
        description: 'tLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed recusandae maxime provident reiciendis aperiam dignissimos, eligendi ad ipsam odit.',
        key_features: [
            '3 fans slots',
            'type c peripherials port included',
            '2 graphics slot'
        ],
        thumbnails: [
            'https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg',
            'https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg',
            'https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg',
        ]
    },
    {
        id: 4,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg",
        label:"Del Gamming Pc Case",
        price:"5000",
        status:"sold"
    },
    {
        id: 5,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0000.jpg",
        label: "Gigabyte aorus motherboard",
        price:"5000",
        status:"active"
    },
    {
        id: 6,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg",
        label: "Gaming Pc Case",
        price:"5000",
        status:"pending"
    },
    {
        id: 7,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg",
        label:"Del Gamming Pc Case",
        price:"5000",
        status:"sold"
    },
    {
        id:8,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0000.jpg",
        label: "Gigabyte aorus motherboard",
        price:"5000",
        status:"active"
    },
    {
        id:9,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg",
        label: "Gaming Pc Case",
        price:"5000",
        status:"pending"
    },
    {
        id: 10,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg",
        label:"Del Gamming Pc Case",
        price:"5000",
        status:"sold"
    },
    {
        id: 11,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0000.jpg",
        label: "Gigabyte aorus motherboard",
        price:"5000",
        status:"active"
    },
    {
        id: 12,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg",
        label: "Gaming Pc Case",
        price:"5000",
        status:"pending"
    },
    {
        id: 13,
        image: "https://dw3w9kaznebzgaz3.public.blob.vercel-storage.com/images/IMG-20260203-WA0006.jpg",
        label:"Del Gamming Pc Case",
        price:"5000",
        status:"sold"
    },
]