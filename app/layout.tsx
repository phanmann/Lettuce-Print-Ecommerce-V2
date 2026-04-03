import './globals.css'                                                       
                                                                                
   export const metadata = {                                                    
     title: 'Lettuce Print | Print Shop & Graphic Design — Brooklyn, NYC',      
     description: 'Lettuce Print is a full-service print shop and graphic       
 design studio in Brooklyn, NY. Business cards, banners, flyers, stickers, roll 
 labels, packaging, and logo design. Fast turnaround, price match guarantee,    
 and Uber delivery across all five NYC boroughs.',                              
   }                                                                            
                                                                                
   export default function RootLayout({                                         
     children,                                                                  
   }: {                                                                         
     children: React.ReactNode                                                  
   }) {                                                                         
     return (                                                                   
       <html lang="en">                                                         
         <body>{children}</body>                                                
       </html>                                                                  
     )                                                                          
   }
