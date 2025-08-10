'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function SubLinks() {
  const links=[ 'New','Used','Vans','SUVs','Hybrids','Big boot','Below £30k']
  return (
    <div className='flex gap-8 justify-center h-[5em] items-center overflow-x-auto scrollbar-hide max-sm:w-[90vw]'>
      {links.map((e)=>{return<Button key={e} variant='outline' className='shadow-2xs'>
        <Link href={`/${e.toLocaleLowerCase()}`}>{e}</Link>
        </Button>})}
    </div>
  )
}

export default SubLinks