import React from 'react'

const Card:React.FC<CardProps> = ({title,content}) => {
  return (
    <div>
        <p><strong>{title}</strong> - {content}</p>
    </div>
  )
}

export default Card