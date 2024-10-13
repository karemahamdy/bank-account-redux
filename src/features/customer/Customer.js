import { useSelector } from "react-redux"

function Customer() {
  const customerName = useSelector(useSelector((store) => store.customer.fullName))

  return (
    <>
    <h1>hello, {customerName} </h1>
    </>
  )
}
export default Customer