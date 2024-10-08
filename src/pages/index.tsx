import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Courier Management</h1>
        <div className="space-y-4">
          <Button>Request Pickup</Button>
          <Link href="/add-parcel">
            <Button>Add Parcel</Button>
          </Link>
          <Button>List Parcels</Button>
          <Button>Payment Request</Button>
          <Button>Open Support Ticket</Button>
        </div>
      </main>
    </div>
  )
}