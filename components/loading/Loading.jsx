'use client'

import { FallingLines } from 'react-loader-spinner'

export function Loading() {
  return <FallingLines
    color="#4fa94d"
    width="100"
    visible={true}
    ariaLabel="falling-circles-loading"
  />
}