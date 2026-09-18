
import Link from "next/link"
import type {ReactNode}from 'react'

export default function RootLayout({ children }: {children:ReactNode}) {
  return (
    <html
      lang="en"
     
    >
      <head>
        <title>Skill swap </title>
      </head>
      <body className="min-h-full flex flex-col">
     <header >
       <nav style={{display:"flex",gap:12}}>
          <Link href='/' ></Link>
         
        
  
        </nav>
     </header >
    { children }
        </body>
    </html>
  );
}
