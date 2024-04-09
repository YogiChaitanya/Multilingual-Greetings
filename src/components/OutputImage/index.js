import './index.css'

const OutputImage = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <li className="greeting-card">
      <img src={imageUrl} className="output-img" alt={imageAltText} />
    </li>
  )
}

export default OutputImage
