## 🚀 Fuzzie

Fuzzie is an AI-powered workflow automation platform that allows users to connect multiple services, create automated workflows, and streamline repetitive tasks without writing extensive code.

---

## ✨ Features
- 🔐 Secure authentication and user management
- 🤖 AI-powered automation workflows
- 🔄 Drag-and-drop workflow builder
- 📂 Google Drive integration
- 📝 Notion integration
- 💬 Discord integration
- 📢 Slack integration
- ⚡ Real-time workflow execution
- 📊 Activity tracking and monitoring
- 🎨 Modern and responsive UI

---

## 🛠️ Tech Stack

## Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Shadcn/UI
- React Flow

## Backend
- Next.js API Routes
- Prisma ORM
- PostgreSQL

## Authentication
- Clerk

## Integrations
- Google Drive API
- Notion API
- Discord API
- Slack API

## Deployment
- Vercel
- Ngrok (for local webhook testing)

---

## ⚙️ Environment Variables

Create a .env file in the root directory and add the following variables:

- DATABASE_URL=
  
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
- CLERK_SECRET_KEY=

- GOOGLE_CLIENT_ID=
- GOOGLE_CLIENT_SECRET=

- NOTION_CLIENT_ID=
- NOTION_CLIENT_SECRET=

- DISCORD_CLIENT_ID=
- DISCORD_CLIENT_SECRET=
- DISCORD_PUBLIC_KEY=

- SLACK_CLIENT_ID=
- SLACK_CLIENT_SECRET=

- NGROK_URL=

---

## 🗄️ Database Setup

Generate Prisma Client:

npx prisma generate

Run migrations:

npx prisma migrate dev

---

## 🔒 Security
- OAuth 2.0 authentication
- Secure API routes
- Protected user data
- Environment-based configuration

---

## 💻 Installation & Setup
## Clone the repository:
```
git clone https://github.com/dev-ramshasaleem/Fuzzie-web/.git
```
## Navigate to the project folder:
```
 cd fuzzie
```
## Install dependencies:
```
npm install
```
## Run the development server:
```
npm run dev
```
