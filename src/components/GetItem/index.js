import './index.css'

const GetItem = props => {
  const {Item, DeletedBY} = props
  const {id, timeAccessed, logoUrl, domainUrl, title} = Item

  const Delete = () => {
    console.log('HI')
    DeletedBY(title)
  }

  return (
    <li className="list">
      <p className="Time">{timeAccessed}</p>
      <div className="Inside">
        <img className="Logo" src={logoUrl} alt="domain logo" />
        <p className="Title">{title}</p>
        <p className="URL">{domainUrl}</p>
      </div>
      <button className="Button" onClick={Delete} id="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          data-testid="delete"
          className="Logo"
        />
      </button>
    </li>
  )
}

export default GetItem
