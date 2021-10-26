// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, selectActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTabButton = () => {
    selectActiveTab(tabId)
  }

  const tabButtonClass = isActive ? `tab-button active` : `tab-button`

  return (
    <li className="tab-list-item">
      <button
        className={tabButtonClass}
        type="button"
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
