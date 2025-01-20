import { useParams } from "react-router"

export function Project() {
 const params = useParams();
  return (
    <div className="text-white">{+params.id!}</div>
  )
}
