import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
   <footer className="border-t">
     <div className="flex-center wrapper flex-between flex flex-col
     gap-4 text-center sm:flex-row">
      <Link href='/'> <Image 
        src="/assets/images/eventease.png" 
        alt="logo"
        width={128}
        height={38}/></Link>
       <p>EventEase © 2023 All rights reserved</p>
     </div>
   
    </footer>
  )
}

export default Footer