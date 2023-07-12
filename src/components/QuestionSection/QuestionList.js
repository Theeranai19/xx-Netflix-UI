import React, {useState} from 'react'

function QuestionList({h3, p}) {
    const [show, setShow] = useState('none')
    const handleClick = () => {
        if(show === 'none'){
            setShow('block')
        } else {
            setShow('none')
        }
    }
  return (
    <li className='question-list'>
        <button onClick={handleClick}><h3>{h3}</h3> <p>+</p> </button>
        <div style={{
            display : `${show}`
        }} className='awesome'>
            <p>{p}</p>
        </div>
    </li>
  )
}

export default QuestionList