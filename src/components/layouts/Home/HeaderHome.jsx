import React from 'react'
import { Button } from '../../ui/Button/Button'
import { H1 } from '../../ui/H1/H1'

export const HeaderHome = ({Style}) => {
  return (
    <>
        <header className={Style}>
            <H1 Text='Helper-People' />
            <Button Style='btn-au' Text='AboutUs' />
        </header>
    </>
  )
}
