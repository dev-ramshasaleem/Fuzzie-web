import axios from 'axios'
import { NextResponse, NextRequest } from 'next/server'
import url from 'url'

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')
  if (!code) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'}/connections`)
  }

  try {
    const data = new url.URLSearchParams()
    data.append('client_id', process.env.DISCORD_CLIENT_ID!)
    data.append('client_secret', process.env.DISCORD_CLIENT_SECRET!)
    data.append('grant_type', 'authorization_code')
    data.append('redirect_uri', process.env.DISCORD_REDIRECT_URI!)
    data.append('code', code.toString())

    const output = await axios.post(
      'https://discord.com/api/oauth2/token',
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    if (output.data) {
      const access = output.data.access_token
      const UserGuilds: any = await axios.get(
        `https://discord.com/api/users/@me/guilds`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      )

      const UserGuild = UserGuilds.data.filter(
        (guild: any) => guild.id == output.data.webhook.guild_id
      )

      const baseUrl = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'

      return NextResponse.redirect(
        `${baseUrl}/connections?webhook_id=${output.data.webhook.id}&webhook_url=${output.data.webhook.url}&webhook_name=${output.data.webhook.name}&guild_id=${output.data.webhook.guild_id}&guild_name=${UserGuild[0]?.name ?? ''}&channel_id=${output.data.webhook.channel_id}`
      )
    }

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'}/connections`)
  } catch (err: any) {
    console.error('Discord OAuth callback error:', err?.response?.data ?? err.message)
    return new NextResponse('Discord OAuth error', { status: 500 })
  }
}