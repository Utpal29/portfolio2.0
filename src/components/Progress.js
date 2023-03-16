import React from 'react'
import '../style.css'

const Progress = ({ done, pname }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setStyle(newStyle);
  }, 200);

  return (
    <div className='prgc'>
      <div className='pname'>
        {pname}
      </div>
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    </div>
  )
}

export default Progress