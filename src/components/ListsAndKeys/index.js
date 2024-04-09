import {Component} from 'react'
import ButtonItem from '../ButtonItem'
import OutputImage from '../OutputImage'
import './index.css'

// initial data
const initiallanguageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class ListsAndKeys extends Component {
  state = {
    // mistake1 i did not initialed the list like this
    languageGreetingsList: initiallanguageGreetingsList,
    activeLanguageId: initiallanguageGreetingsList[0].id,
  }

  // doubt1 based on activeBtn how to get the output
  // mistake2 while clicking on telugu button all buttons are colors i am getting active red color
  clickedBtn = id => {
    this.setState({
      activeLanguageId: id,
    })
  }

  getFilteredLanguage = () => {
    const {languageGreetingsList, activeLanguageId} = this.state
    const resultLanguage = languageGreetingsList.filter(
      eachLanguage => eachLanguage.id === activeLanguageId,
    )

    return resultLanguage
  }

  render() {
    const {languageGreetingsList, activeLanguageId} = this.state
    const filteredData = this.getFilteredLanguage()

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading1">Multilingual Greetings</h1>

          {/*
          // mistake2 i wrote like this
          // isActiveBtn= {activeLanguageId === languageGreetingsList.id}
          // mistake 3 i wrote like this
          // isActiveBtn= {activeLanguageId === initiallanguageGreetingsList.id}
           */}

          <ul className="language-btn-container">
            {languageGreetingsList.map(eachLanguage => (
              <ButtonItem
                key={eachLanguage.id}
                languageDetails={eachLanguage}
                clickedBtn={this.clickedBtn}
                isActiveBtn={activeLanguageId === eachLanguage.id}
              />
            ))}
          </ul>

          <ul className="greeting-container">
            {filteredData.map(eachLanguage => (
              <OutputImage
                key={eachLanguage.id}
                languageDetails={eachLanguage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ListsAndKeys
