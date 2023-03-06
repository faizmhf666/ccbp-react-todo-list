import './index.css'

const TodoItem = props => {
  const {listItem, onDeleteItem} = props
  const {title, id} = listItem

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <div>
      <li className="list-item">
        <p>{title}</p>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    </div>
  )
}

export default TodoItem
