import { CONNECTIONS } from '@/lib/constant'
import React from 'react'
import ConnectionCard from './_components/connections-card'

type Props = {
    searchParams?: {[key:string]:string| undefined}
}

const ConnectionPage = (props: Props) => {
    return (
        <div className='flex flex-col gap-4 relative'>
            <h1 className='text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b'>
                Connections
            </h1>
            <div className="relative flex flex-col gap-4"></div>
            <section className='flex flex-col gap-4 p-6 text-muted-foreground'>
                Connect all your apps directly from here. 
                {CONNECTIONS.map((connection)=>(
                    <ConnectionCard key={connection.title} connection={connection} />
                ))}
            </section>
        </div>
    )
}

export default ConnectionPage