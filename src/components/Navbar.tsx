import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Courier Management</h1>
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-700 text-white"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button>Sign in</Button>
      </div>
    </nav>
  )
}