import React from 'react'

const LogoConverter = ({ width, height, xmlns, d, fill }) => {
  return (
    <svg width={width} height={height} xmlns={xmlns}>
      <path d={d} fill={fill} />
    </svg>
  )
}

export default LogoConverter
