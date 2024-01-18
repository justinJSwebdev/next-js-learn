

export default function Home(props) {
  console.log(props)
  return (
    <div>{props.value}</div>
  )
}
export async function getStaticProps() {
  return {
    props: {
      value: 1
    }
  };
}