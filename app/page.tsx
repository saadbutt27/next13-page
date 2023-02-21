import Link from "next/link"
import { products } from '../data/products'

type Product = {
  id: string,
  name: string,
  price: number,
}

export default function Home() {
  return (
      <>
        <h1>HOME</h1>
        <ul>
          {products.map(({ id, name, price }: Product) => (
            <li>
              <Link href={`/products/${id}`}><h3>{name}</h3></Link>
            </li>
          ))}
        </ul>
        <Link href={`/about`}><h2>Know About Us</h2></Link>
      </>
  )
}
