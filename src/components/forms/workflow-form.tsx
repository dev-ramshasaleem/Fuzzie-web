import { formValues, WorkflowFormSchema } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/compat/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

type Props = {
    title?: string,
    subTitle?: string
}

const WorkflowForm = ({ subTitle, title }: Props) => {
    const form = useForm<formValues>({
        mode: "onChange",
        resolver: zodResolver(WorkflowFormSchema),
        defaultValues: {
            name: "",
            description: ""
        }


    })

    const isLoading = form.formState.isLoading
    const router = useRouter()

    const handleSubmit = () => { }
    return (
        <Card className='w-full max-w-[650px] borer-none'>
            {title && subTitle && (
                <CardHeader>
                    <CardTitle>{title} </CardTitle>
                    <CardDescription>{subTitle}</CardDescription>
                 </CardHeader>
            )}
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)}
                                className="flex flex-col gap-4 text-left" >
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input 
                                                {...field}
                                                placeholder="Name"  />
                                            </FormControl>
                                            
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Input 
                                                {...field}
                                                placeholder="description"  />
                                            </FormControl>
                                            <FormDescription></FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button 
                                className='mt-4'
                                disabled={isLoading}
                                type="submit">
                                    {isLoading ? (
                                        <><Loader2 className="mr-2 h-4 w-4 animated-spin"/>
                                        Saving</>
                                        
                                        
                                    ):("Save Settings")}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
               
          

        </Card>
    )
}

export default WorkflowForm