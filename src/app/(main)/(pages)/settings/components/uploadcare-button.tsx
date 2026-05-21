'use client'

import { FileUploaderRegular } from '@uploadcare/react-uploader/next'
import '@uploadcare/react-uploader/core.css'
import { useRouter } from 'next/navigation'

type Props = {
    onUpload: (cdnUrl: string) => Promise<unknown>
}

function UploadCareButton({ onUpload }: Props) {
    const router = useRouter()

    return (
        <div>
            <FileUploaderRegular
                onFileUploadSuccess={async (file) => {
                    if (!file?.cdnUrl) return
                    await onUpload(file.cdnUrl)
                    router.refresh()
                }}
                sourceList="local, camera, facebook, gdrive"
                classNameUploader="uc-light"
                pubkey="0817aa6d002105f9ed7b"
            />
        </div>
    )
}

export default UploadCareButton
