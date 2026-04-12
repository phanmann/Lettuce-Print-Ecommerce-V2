export type Category = 'business-cards' | 'flyers' | 'stickers' | 'roll-labels' | 'banners';
export type Product = { id:string; slug:string; name:string; category:Category; shortDescription:string; description:string; startingPrice:number; turnaround:string; image:string; options:{ quantities:number[]; sizes:string[]; finishes:string[]; }; featured?:boolean; };
export type BlogPost = { slug:string; title:string; excerpt:string; date:string; body:string[]; };
export type CartItem = { id:string; productSlug:string; name:string; quantity:number; size:string; finish:string; unitPrice:number; cartQuantity:number; image:string; };
