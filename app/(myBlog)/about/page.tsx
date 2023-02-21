import Link from "next/link"
import Image from "next/image"

const name = "Saad Nisar Butt"

export default function About() {
  return (
      <>
        <h1>ABOUT US</h1>
        <Image src="/images/p2.jpg" alt="profile picture" width={150} height={150} />
        <br />
        <h2>{name}</h2>
        <Link href={`/`}>Back to Home</Link>
      </>    
  )
}