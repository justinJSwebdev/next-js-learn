import Image from 'next/image'
import { Inter } from 'next/font/google'


export default function Home(props) {
  console.log(props)
  return (
    <div></div>
  )
}
export async function getStaticProps() {
  return { props: 1 };
}