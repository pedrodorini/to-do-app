import React from 'react'

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map((todo, index) => (
      <tr key={index}>
        <td>{todo.description}</td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}