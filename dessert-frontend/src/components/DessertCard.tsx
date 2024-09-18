
type DessertCardProp ={
    name:string
}
export const DessertCard = (props: DessertCardProp) => {
  return (
    <div>{props.name}</div>
  )
}
