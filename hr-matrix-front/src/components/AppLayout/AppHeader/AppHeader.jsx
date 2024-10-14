import { UserNav } from "@/components/UserNav/UserNav"

const AppHeader = () => {
  return (
    <div className="w-full h-full flex items-center justify-end p-4 font-bold gap-4">
      <UserNav />
    </div>
  )
}

export default AppHeader
