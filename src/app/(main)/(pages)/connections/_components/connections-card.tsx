import { Card, CardHeader } from '@/components/ui/card';
import { ConnectionTypes } from '@/lib/types'
import { Car } from 'lucide-react';
import React from 'react'

type Props = {
    types: ConnectionTypes;
    icon: string;
    title: ConnectionTypes;
    description: string;
    callback?:() => void;
    connected: boolean | null ;

}

const ConnectionCard = ({
        description,
        types,
        icon,
        title,
        connected,
}:Props) => {
  return <Card className=" flex w-full items-center justify-between">
    <CardHeader className="flex flex-col gap-4">
        div


    </CardHeader>
  </Card>
  
}

export default ConnectionCard