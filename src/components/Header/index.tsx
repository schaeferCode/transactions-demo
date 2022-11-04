const Header = ({ avatarURL, user }: { avatarURL: string, user: string }) => {
  return (
    <header className="flex items-center justify-end border-b-2 p-5">
      <h1 className="mr-2 font-bold">{user}</h1>
      <img className="w-12 rounded-full" src={avatarURL} alt="User's Avatar" />
    </header>
  )
}

export default Header
