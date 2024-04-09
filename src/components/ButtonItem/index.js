import './index.css'

const ButtonItem = props => {
  const {languageDetails, isActiveBtn, clickedBtn} = props
  const {id, buttonText} = languageDetails

  const onClickLanguageBtn = () => {
    clickedBtn(id)
  }

  const isActiveBtnStatus = isActiveBtn ? 'active-btn' : ''

  return (
    <li className="buttons-card">
      <button
        onClick={onClickLanguageBtn}
        type="button"
        className={`btn ${isActiveBtnStatus}`}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonItem
