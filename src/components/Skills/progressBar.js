import React from 'react'

const ProgressBar = (props) => {
        const { bgColor, completed } = props;
      
        const containerStyles = {
          height: 20,
          width: '80%',
          backgroundColor: "#e0e0de",
          borderRadius: 50,
          margin: 50,
        }

        
      
        const fillerStyles = {
          height: '100%',
          width: `${completed}%`,
          backgroundColor: bgColor,
          transition: 'width 1s ease-in-out',
          borderRadius: 'inherit',
          textAlign: 'right',
        }
      
        const labelStyles = {
          paddingRight: 5,
          color: 'white',
          fontWeight: 'bold',
        }
      

    return (
        <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
    )
}

export default ProgressBar;
