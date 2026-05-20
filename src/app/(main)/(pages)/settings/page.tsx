import ProfileForm from '@/components/forms/profile-form'
import React from 'react'
import ProfilePicture from './components/profile-picture'
import { db } from '@/lib/db'

type Props = {}

const Settings = () => {
    const removeProfileImage = async () => {
        "use server"
        const response = await db.user.update({
            where: {
                clerkId: authUser.id,
            },
            data: {
                profileImage: "",
            },

        })
        return response
    }
    return (
        <div className='flex flex-col gap-4 relative'>
            <h1 className='text-4xl sticky top-0 z-[10] p-6 justify-between bg-background/50 backdrop-blur-lg flex items-center border-b'>
                <span>Settings</span>
            </h1>
            <div className='flex flex-col gap-10 p-6'>
                <div>
                    <h2 className='text-2xl font-bold'>User Profile</h2>
                    <p className='text-base text-white/50'>
                        Add or update your information
                    </p>

                </div>
                <ProfilePicture
                    onDelete={removeProfileImage}
                    userImage={user?.profileImage}
                    onUpload={uploadProfileImage}
                ></ProfilePicture>
                <ProfileForm />
            </div>
        </div>
    )
}

export default Settings