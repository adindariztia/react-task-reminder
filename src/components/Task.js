// import React from 'react'
import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text}<FaTimes 
      style={{
        color: 'red',
        cursor: 'pointer'
        }}
        onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

// Task.defaultProps = {

// }

// Task.propTypes = {
//     onClick: PropTypes.func
// }

export default Task
