/* eslint-disable react/require-default-props */
import React from 'react'

const NigeriaFlag = ({
  width,
  height,
}: {
  width?: string
  height?: string
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '60.703'}
      height={height ?? '60.703'}
      version="1.1"
      viewBox="0 0 400 400"
    >
      <defs>
        <clipPath id="circleClip">
          <circle cx="200" cy="200" r="200" />
        </clipPath>
      </defs>
      <circle cx="200" cy="200" r="200" fill="#fff" />
      <g clipPath="url(#circleClip)">
        <rect width="133.33" height="400" x="0" y="0" fill="#008751" />
        <rect width="133.34" height="400" x="133.33" y="0" fill="#fff" />
        <rect width="133.33" height="400" x="266.67" y="0" fill="#008751" />
      </g>
    </svg>
  )
}

export default NigeriaFlag
