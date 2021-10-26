// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-list-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
