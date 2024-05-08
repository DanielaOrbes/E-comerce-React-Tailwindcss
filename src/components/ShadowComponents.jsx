export const ShadowComponents = ({props}) => {
  return (
    <li className="itemNav shadow hover:shadow-lg ">
    <a href="/#">{props}</a>
  </li>
  )
}
