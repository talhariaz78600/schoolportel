import React from 'react'
import Teacheritem from './Allteacheritem'
const Teacher=(props)=> {
  return (
    <div >
      <div className="col-12 col-md-8 m-auto">
        <Teacheritem allt={props.allt} edit={props.edit}/>
      </div>
    </div>
  )
}

export default Teacher
