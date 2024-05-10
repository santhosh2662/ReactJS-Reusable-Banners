// Write your code here.
import './index.css'

const CardList = prop => {
  const {bannerList} = prop
  const {headerText, description, className} = bannerList

  return (
    <li className={className}>
      <div>
        <h1 className="header">{headerText}</h1>
        <p className = "description">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default CardList
