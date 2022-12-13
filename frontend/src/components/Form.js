import React, { useState } from "react"

const Form = () => {
  const [inputValue, setInputValue] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim() === "") {
      return
    }

    addTodo({ title: inputValue, completed: false })
    setInputValue("")
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <form className='ui form' onSubmit={handleFormSubmit}>
        <div className='ui grid center aligned'>
          <div className='row'>
            <div className='column five wide'>
              <input
                value={inputValue}
                onChange={handleInputChange}
                type='text'
                placeholder='Enter todo...'
              />
            </div>

            <div className='column one wide'>
              <button type='submit' className='ui button circular icon green'>
                <i className='white plus icon'></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
