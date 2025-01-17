import { useParams } from "react-router"

export default function Project() {
 const params = useParams();
//  console.log(!)
  return (
    <div className="text-white">{+params.id!}</div>
  )
}
