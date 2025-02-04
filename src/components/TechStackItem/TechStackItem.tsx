// import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// export function TechStackItem(feTech: { iconClass: string, name: string, index: number }) {
//   const { isVisible, ref } = useIntersectionObserver<HTMLLIElement>({ threshold: 1 })

//   const movementClass = isVisible 
//     ? (feTech.index % 2 === 0 ? "show-right" : "show-left") 
//     : (feTech.index % 2 === 0 ? "hidden-right-stack" : "hidden-left-stack");

//   return (
//     <li 
//     ref={ref} 
//     className={`border border-grayish w-full flex gap-4 items-center p-2 ${isVisible ? "show-content scale-up" : "hidden-content"} ${movementClass}`}>
//       <i className={`${feTech.iconClass} text-3xl text-grayish`}></i>
//       <p className="font-tipography text-yel-200 text-xs">{feTech.name}</p>
//     </li>
//   )
// }
