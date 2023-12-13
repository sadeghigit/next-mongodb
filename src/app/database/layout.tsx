type Props = { children: React.ReactNode }
export default function Layout({ children }: Props) {
  return (
    <main className=" bg-green-50 min-h-screen">
      <div className="bg-green-700">
        <div className="flex items-center h-16 px-4">
          <h1 className="text-white text-xl">Next MongoDB</h1>
        </div>
      </div>
      {children}
    </main>
  )
}
