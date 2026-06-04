import { NextResponse } from 'next/server'
import { getFileMetaData } from '@/app/(main)/(pages)/connections/_actions/google-connection'

export async function GET() {
  try {
    const data = await getFileMetaData()
    if (data?.error) {
      return NextResponse.json({ message: null, error: data.error }, { status: 401 })
    }
    return NextResponse.json({ message: data, files: data?.files ?? [] })
  } catch (err: any) {
    console.error('GET /api/drive error:', err)
    return NextResponse.json({ message: null, error: err?.message ?? 'Failed to fetch drive files' }, { status: 500 })
  }
}
