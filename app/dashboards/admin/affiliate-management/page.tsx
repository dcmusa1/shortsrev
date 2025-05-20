"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

export default function AffiliateManagement() {
  const [email, setEmail] = useState("")
  const [isPremium, setIsPremium] = useState(false)
  const [affiliates, setAffiliates] = useState([
    { id: 1, email: "creator1@example.com", isPremium: true, dateAdded: "2023-04-15", referrals: 12 },
    { id: 2, email: "creator2@example.com", isPremium: false, dateAdded: "2023-05-22", referrals: 5 },
    { id: 3, email: "creator3@example.com", isPremium: true, dateAdded: "2023-06-10", referrals: 18 },
  ])
  const [successMessage, setSuccessMessage] = useState("")

  const handleAddAffiliate = () => {
    if (!email) return

    const newAffiliate = {
      id: affiliates.length + 1,
      email,
      isPremium,
      dateAdded: new Date().toISOString().split("T")[0],
      referrals: 0,
    }

    setAffiliates([...affiliates, newAffiliate])
    setEmail("")
    setIsPremium(false)
    setSuccessMessage(`Affiliate ${email} added successfully${isPremium ? " with premium status" : ""}!`)

    setTimeout(() => {
      setSuccessMessage("")
    }, 3000)
  }

  const togglePremiumStatus = (id: number) => {
    setAffiliates(
      affiliates.map((affiliate) =>
        affiliate.id === id ? { ...affiliate, isPremium: !affiliate.isPremium } : affiliate,
      ),
    )
  }

  return (
    <AdminLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Affiliate Management</h1>

        <Tabs defaultValue="add" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="add">Add Affiliate</TabsTrigger>
            <TabsTrigger value="manage">Manage Affiliates</TabsTrigger>
          </TabsList>

          <TabsContent value="add">
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Add New Affiliate</CardTitle>
                <CardDescription>Add a new affiliate by email and set their premium status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {successMessage && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    {successMessage}
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="creator@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="premium" checked={isPremium} onCheckedChange={() => setIsPremium(!isPremium)} />
                  <Label htmlFor="premium">Premium Affiliate Status</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleAddAffiliate}>Add Affiliate</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="manage">
            <Card>
              <CardHeader>
                <CardTitle>Manage Affiliates</CardTitle>
                <CardDescription>View and manage all affiliates in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2 text-left">Email</th>
                        <th className="border p-2 text-left">Date Added</th>
                        <th className="border p-2 text-left">Referrals</th>
                        <th className="border p-2 text-left">Premium Status</th>
                        <th className="border p-2 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {affiliates.map((affiliate) => (
                        <tr key={affiliate.id}>
                          <td className="border p-2">{affiliate.email}</td>
                          <td className="border p-2">{affiliate.dateAdded}</td>
                          <td className="border p-2">{affiliate.referrals}</td>
                          <td className="border p-2">
                            <span
                              className={`px-2 py-1 rounded text-xs ${affiliate.isPremium ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                            >
                              {affiliate.isPremium ? "Premium" : "Standard"}
                            </span>
                          </td>
                          <td className="border p-2">
                            <Button variant="outline" size="sm" onClick={() => togglePremiumStatus(affiliate.id)}>
                              {affiliate.isPremium ? "Remove Premium" : "Make Premium"}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
