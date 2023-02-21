import Link from "next/link"
import { products } from '../../../../data/products'

// export async function getStaticParams() {
//   const ids: string[] = ["1", "2", "3", "4", "5"];
//   return ids.map(id => {id : id})
// }

async function getProduct(id: string) {
  const product = products.find(product => product.id === id);
  return product;
}

export default async function Product({ params }: {params: {id:string}}) {
  const { id } = params;
  const product = await getProduct(id);
  return (
      <>
        <h1>PRODUCT {id || "0"}</h1>
        <p>Product name: {product!.name}</p>
        <p>Product price: {product!.price}</p>
        <Link href={`/`}>Back to Home</Link>
      </>    
  )
}

