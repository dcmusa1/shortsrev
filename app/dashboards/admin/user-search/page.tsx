"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import { Search, User, Video, DollarSign, BarChart3, Edit, X, Save, Users, Percent, Tag } from "lucide-react"

export default function UserSearchPage() {
  const [email, setEmail] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [userData, setUserData] = useState<any>(null)
  const [error, setError] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState<any>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isEditingRevenue, setIsEditingRevenue] = useState(false)
  const [editedRevenue, setEditedRevenue] = useState<{ totalRevenue: number; monthlyRevenue: number } | null>(null)
  const [needsSync, setNeedsSync] = useState(false)

  const tableContainerRef = useRef<HTMLDivElement>(null)
  const topScrollbarRef = useRef<HTMLDivElement>(null)

  // Function to sync scrolling between the top scrollbar and the table
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft } = e.currentTarget
    if (e.currentTarget === tableContainerRef.current && topScrollbarRef.current) {
      topScrollbarRef.current.scrollLeft = scrollLeft
    } else if (e.currentTarget === topScrollbarRef.current && tableContainerRef.current) {
      tableContainerRef.current.scrollLeft = scrollLeft
    }
  }

  const mockUsers = [
    {
      id: "usr_a12345",
      email: "alex.johnson@example.com",
      name: "Alex Johnson",
      createdAt: "2023-08-10T14:30:00Z",
      status: "active",
      affiliateStatus: "tier_2",
      invitedBy: {
        id: "usr_m45678",
        name: "Michael Brown",
        email: "michael@example.com",
      },
      inviteCode: {
        code: "ALEXJ50",
        type: "creator_program",
      },
      revenueSplit: {
        creator: 70,
        platform: 20,
        affiliate: 10,
      },
      channels: [
        {
          id: "ch_a1",
          name: "AlexJohnsonVlogs",
          subscribers: 78500,
          status: "approved",
          url: "https://youtube.com/channel/UC123",
        },
        {
          id: "ch_a2",
          name: "AlexGaming",
          subscribers: 32100,
          status: "approved",
          url: "https://youtube.com/channel/UC456",
        },
      ],
      analytics: {
        totalViews: 2345600,
        monthlyViews: 245000,
        totalRevenue: 8567.89,
        monthlyRevenue: 978.45,
        contentCount: 127,
      },
      paymentMethods: [
        {
          id: "pm_a1",
          type: "bank_transfer",
          isDefault: true,
          details: {
            bankName: "Chase Bank",
            accountName: "Alex Johnson",
            accountNumber: "****6789",
            routingNumber: "****4321",
          },
        },
        {
          id: "pm_a2",
          type: "paypal",
          isDefault: false,
          details: {
            email: "alex.johnson@example.com",
          },
        },
      ],
      taxInfo: {
        status: "W-9",
        taxId: "****5678",
        country: "United States",
        state: "California",
        taxRate: 0,
      },
    },
    {
      id: "usr_b23456",
      email: "bella.smith@example.com",
      name: "Bella Smith",
      createdAt: "2023-09-05T10:15:00Z",
      status: "active",
      affiliateStatus: "tier_3",
      invitedBy: {
        id: "usr_j34567",
        name: "James Wilson",
        email: "james@example.com",
      },
      inviteCode: {
        code: "BELLAS25",
        type: "creator_program",
      },
      revenueSplit: {
        creator: 75,
        platform: 15,
        affiliate: 10,
      },
      channels: [
        {
          id: "ch_b1",
          name: "BellaBeauty",
          subscribers: 125000,
          status: "approved",
          url: "https://youtube.com/channel/UC789",
        },
      ],
      analytics: {
        totalViews: 3456700,
        monthlyViews: 356000,
        totalRevenue: 12567.89,
        monthlyRevenue: 1278.45,
        contentCount: 98,
      },
      paymentMethods: [
        {
          id: "pm_b1",
          type: "bank_transfer",
          isDefault: true,
          details: {
            bankName: "Bank of America",
            accountName: "Bella Smith",
            accountNumber: "****2345",
            routingNumber: "****6789",
          },
        },
      ],
      taxInfo: {
        status: "W-9",
        taxId: "****1234",
        country: "United States",
        state: "New York",
        taxRate: 0,
      },
    },
    {
      id: "usr_c34567",
      email: "carlos.rodriguez@example.com",
      name: "Carlos Rodriguez",
      createdAt: "2023-07-20T09:45:00Z",
      status: "active",
      affiliateStatus: "tier_1",
      invitedBy: {
        id: "usr_s56789",
        name: "Sarah Williams",
        email: "sarah@example.com",
      },
      inviteCode: {
        code: "CARLOS30",
        type: "creator_program",
      },
      revenueSplit: {
        creator: 65,
        platform: 25,
        affiliate: 10,
      },
      channels: [
        {
          id: "ch_c1",
          name: "CarlosGaming",
          subscribers: 67800,
          status: "approved",
          url: "https://youtube.com/channel/UC101112",
        },
        {
          id: "ch_c2",
          name: "CarlosTech",
          subscribers: 23400,
          status: "pending",
          url: "https://youtube.com/channel/UC131415",
        },
      ],
      analytics: {
        totalViews: 1876500,
        monthlyViews: 187000,
        totalRevenue: 6789.45,
        monthlyRevenue: 789.23,
        contentCount: 76,
      },
      paymentMethods: [
        {
          id: "pm_c1",
          type: "paypal",
          isDefault: true,
          details: {
            email: "carlos.rodriguez@example.com",
          },
        },
        {
          id: "pm_c2",
          type: "cryptocurrency",
          isDefault: false,
          details: {
            currency: "Bitcoin",
            address: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
            network: "Bitcoin",
          },
        },
      ],
      taxInfo: {
        status: "W-8BEN",
        taxId: "****9876",
        country: "Spain",
        state: "Madrid",
        taxRate: 15,
      },
    },
    {
      id: "usr_d45678",
      email: "diana.lee@example.com",
      name: "Diana Lee",
      createdAt: "2023-10-12T16:20:00Z",
      status: "active",
      affiliateStatus: "none",
      invitedBy: {
        id: "usr_e56789",
        name: "Emma Thompson",
        email: "emma@example.com",
      },
      inviteCode: {
        code: "DIANAL40",
        type: "creator_program",
      },
      revenueSplit: {
        creator: 60,
        platform: 30,
        affiliate: 10,
      },
      channels: [
        {
          id: "ch_d1",
          name: "DianaLifestyle",
          subscribers: 45600,
          status: "approved",
          url: "https://youtube.com/channel/UC161718",
        },
      ],
      analytics: {
        totalViews: 987600,
        monthlyViews: 98700,
        totalRevenue: 3456.78,
        monthlyRevenue: 456.78,
        contentCount: 54,
      },
      paymentMethods: [
        {
          id: "pm_d1",
          type: "venmo",
          isDefault: true,
          details: {
            username: "@dianalee",
          },
        },
      ],
      taxInfo: {
        status: "W-9",
        taxId: "****5432",
        country: "United States",
        state: "Texas",
        taxRate: 0,
      },
    },
    {
      id: "usr_e56789",
      email: "emma.thompson@example.com",
      name: "Emma Thompson",
      createdAt: "2023-06-30T11:10:00Z",
      status: "active",
      affiliateStatus: "tier_2",
      invitedBy: null,
      inviteCode: {
        code: "EMMAT60",
        type: "creator_program",
      },
      revenueSplit: {
        creator: 70,
        platform: 20,
        affiliate: 10,
      },
      channels: [
        {
          id: "ch_e1",
          name: "EmmaFashion",
          subscribers: 98700,
          status: "approved",
          url: "https://youtube.com/channel/UC192021",
        },
        {
          id: "ch_e2",
          name: "EmmaTravel",
          subscribers: 45600,
          status: "approved",
          url: "https://youtube.com/channel/UC222324",
        },
      ],
      analytics: {
        totalViews: 2876500,
        monthlyViews: 287000,
        totalRevenue: 9876.54,
        monthlyRevenue: 1087.65,
        contentCount: 112,
      },
      paymentMethods: [
        {
          id: "pm_e1",
          type: "bank_transfer",
          isDefault: true,
          details: {
            bankName: "Wells Fargo",
            accountName: "Emma Thompson",
            accountNumber: "****3456",
            routingNumber: "****7890",
          },
        },
        {
          id: "pm_e2",
          type: "paypal",
          isDefault: false,
          details: {
            email: "emma.thompson@example.com",
          },
        },
      ],
      taxInfo: {
        status: "W-9",
        taxId: "****6543",
        country: "United States",
        state: "Florida",
        taxRate: 0,
      },
    },
    {
      id: "usr_f67890",
      email: "frank.miller@example.com",
      name: "Frank Miller",
      createdAt: "2023-11-05T13:25:00Z",
      status: "pending",
      affiliateStatus: "none",
      invitedBy: {
        id: "usr_a12345",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
      },
      inviteCode: {
        code: "FRANKM20",
        type: "creator_program",
      },
      revenueSplit: {
        creator: 60,
        platform: 30,
        affiliate: 10,
      },
      channels: [
        {
          id: "ch_f1",
          name: "FrankSports",
          subscribers: 12300,
          status: "pending",
          url: "https://youtube.com/channel/UC252627",
        },
      ],
      analytics: {
        totalViews: 345600,
        monthlyViews: 45600,
        totalRevenue: 1234.56,
        monthlyRevenue: 234.56,
        contentCount: 23,
      },
      paymentMethods: [
        {
          id: "pm_f1",
          type: "bank_transfer",
          isDefault: true,
          details: {
            bankName: "Citibank",
            accountName: "Frank Miller",
            accountNumber: "****4567",
            routingNumber: "****8901",
          },
        },
      ],
      taxInfo: {
        status: "No Form",
        taxId: null,
        country: "United States",
        state: "Illinois",
        taxRate: 24,
      },
    },
    {
      id: "usr_g78901",
      email: "grace.wang@example.com",
      name: "Grace Wang",
      createdAt: "2023-08-25T15:40:00Z",
      status: "active",
      affiliateStatus: "tier_3",
      invitedBy: {
        id: "usr_b23456",
        name: "Bella Smith",
        email: "bella.smith@example.com",
      },
      inviteCode: {
        code: "GRACEW70",
        type: "creator_program",
      },
      revenueSplit: {
        creator: 75,
        platform: 15,
        affiliate: 10,
      },
      channels: [
        {
          id: "ch_g1",
          name: "GraceBeauty",
          subscribers: 156000,
          status: "approved",
          url: "https://youtube.com/channel/UC282930",
        },
        {
          id: "ch_g2",
          name: "GraceLifestyle",
          subscribers: 87000,
          status: "approved",
          url: "https://youtube.com/channel/UC313233",
        },
      ],
      analytics: {
        totalViews: 4567800,
        monthlyViews: 456000,
        totalRevenue: 15678.9,
        monthlyRevenue: 1678.9,
        contentCount: 145,
      },
      paymentMethods: [
        {
          id: "pm_g1",
          type: "bank_transfer",
          isDefault: true,
          details: {
            bankName: "TD Bank",
            accountName: "Grace Wang",
            accountNumber: "****5678",
            routingNumber: "****9012",
          },
        },
        {
          id: "pm_g2",
          type: "cryptocurrency",
          isDefault: false,
          details: {
            currency: "Ethereum",
            address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
            network: "Ethereum",
          },
        },
      ],
      taxInfo: {
        status: "W-8BEN",
        taxId: "****7654",
        country: "Canada",
        state: "Ontario",
        taxRate: 15,
      },
    },
    {
      id: "usr_h89012",
      email: "henry.davis@example.com",
      name: "Henry Davis",
      createdAt: "2023-09-18T12:35:00Z",
      status: "suspended",
      affiliateStatus: "none",
      invitedBy: {
        id: "usr_c34567",
        name: "Carlos Rodriguez",
        email: "carlos.rodriguez@example.com",
      },
      inviteCode: {
        code: "HENRYD10",
        type: "creator_program",
      },
      revenueSplit: {
        creator: 60,
        platform: 30,
        affiliate: 10,
      },
      channels: [
        {
          id: "ch_h1",
          name: "HenryGaming",
          subscribers: 34500,
          status: "suspended",
          url: "https://youtube.com/channel/UC343536",
        },
      ],
      analytics: {
        totalViews: 876500,
        monthlyViews: 0, // Suspended account
        totalRevenue: 3456.78,
        monthlyRevenue: 0, // Suspended account
        contentCount: 45,
      },
      paymentMethods: [
        {
          id: "pm_h1",
          type: "paypal",
          isDefault: true,
          details: {
            email: "henry.davis@example.com",
          },
        },
      ],
      taxInfo: {
        status: "W-9",
        taxId: "****8765",
        country: "United States",
        state: "Georgia",
        taxRate: 0,
      },
    },
    {
      id: "usr_i90123",
      email: "spyx20088@gmail.com",
      name: "Spy X",
      createdAt: "2023-10-30T09:50:00Z",
      status: "active",
      affiliateStatus: "tier_3", // Premium Affiliate
      invitedBy: null,
      inviteCode: {
        code: "SPYX100",
        type: "premium_affiliate",
      },
      revenueSplit: {
        creator: 70,
        platform: 15,
        affiliate: 15,
      },
      channels: [
        {
          id: "ch_i1",
          name: "SpyXTech",
          subscribers: 245000,
          status: "approved",
          url: "https://youtube.com/channel/UC373839",
        },
        {
          id: "ch_i2",
          name: "SpyXGaming",
          subscribers: 178000,
          status: "approved",
          url: "https://youtube.com/channel/UC404142",
        },
        {
          id: "ch_i3",
          name: "SpyXVlogs",
          subscribers: 98000,
          status: "approved",
          url: "https://youtube.com/channel/UC434445",
        },
      ],
      analytics: {
        totalViews: 8765000,
        monthlyViews: 876000,
        totalRevenue: 25678.9,
        monthlyRevenue: 2678.9,
        contentCount: 210,
      },
      paymentMethods: [
        {
          id: "pm_i1",
          type: "bank_transfer",
          isDefault: true,
          details: {
            bankName: "Chase Bank",
            accountName: "Spy X",
            accountNumber: "****6789",
            routingNumber: "****0123",
          },
        },
        {
          id: "pm_i2",
          type: "cryptocurrency",
          isDefault: false,
          details: {
            currency: "Bitcoin",
            address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
            network: "Bitcoin",
          },
        },
        {
          id: "pm_i3",
          type: "paypal",
          isDefault: false,
          details: {
            email: "spyx20088@gmail.com",
          },
        },
      ],
      taxInfo: {
        status: "W-9",
        taxId: "****9876",
        country: "United States",
        state: "California",
        taxRate: 0,
      },
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setError("")
    setIsEditing(false)
    setIsEditingRevenue(false)

    // Simulate API call with timeout
    setTimeout(() => {
      // This is mock data - in a real app, you would fetch this from your API
      if (email.includes("@")) {
        // Create a more dynamic mock user based on the email
        const emailName = email.split("@")[0]
        const mockUserData = {
          id: "usr_" + Math.random().toString(36).substr(2, 9),
          email: email,
          name: emailName.charAt(0).toUpperCase() + emailName.slice(1) + " Creator",
          createdAt: "2023-09-15T14:30:00Z",
          status: "active",
          affiliateStatus: "tier_2", // "none", "tier_1", "tier_2", "tier_3"
          invitedBy: {
            id: "usr_abc123",
            name: "Sarah Johnson",
            email: "sarah@example.com",
          },
          inviteCode: {
            code: "CREATOR50",
            type: "creator_program",
          },
          revenueSplit: {
            creator: 70,
            platform: 20,
            affiliate: 10,
          },
          channels: [
            {
              id: "ch_1",
              name: `${emailName}Channel1`,
              subscribers: 45600,
              status: "approved",
              url: `https://youtube.com/channel/UC${Math.floor(Math.random() * 1000000)}`,
            },
            {
              id: "ch_2",
              name: `${emailName}Channel2`,
              subscribers: 12300,
              status: "pending",
              url: `https://youtube.com/channel/UC${Math.floor(Math.random() * 1000000)}`,
            },
          ],
          analytics: {
            totalViews: 1245600,
            monthlyViews: 124500,
            totalRevenue: 4567.89,
            monthlyRevenue: 678.45,
            contentCount: 87,
          },
          recentActivity: [
            {
              type: "channel_connect",
              date: "2023-11-10T09:15:00Z",
              details: `Connected new channel '${emailName}Channel2'`,
            },
            {
              type: "content_upload",
              date: "2023-11-08T16:22:00Z",
              details: "Uploaded new short 'My Latest Creation'",
            },
            { type: "payment_received", date: "2023-11-01T12:00:00Z", details: "Received monthly payment of $678.45" },
          ],
          paymentMethods: [
            {
              id: "pm_1",
              type: "bank_transfer",
              isDefault: true,
              details: {
                bankName: "Example Bank",
                accountName: `${emailName} Account`,
                accountNumber: "****1234",
                routingNumber: "****5678",
              },
            },
          ],
          taxInfo: {
            status: "W-9",
            taxId: "****1234",
            country: "United States",
            state: "California",
            taxRate: 0,
          },
        }
        setUserData(mockUserData)
        setEditedUser(JSON.parse(JSON.stringify(mockUserData))) // Deep copy for editing
      } else {
        setError("No user found with that email address")
        setUserData(null)
        setEditedUser(null)
      }
      setIsSearching(false)
    }, 1000)
  }

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing
      setEditedUser(JSON.parse(JSON.stringify(userData))) // Reset to original
    }
    setIsEditing(!isEditing)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name.includes(".")) {
      // Handle nested properties
      const [parent, child] = name.split(".")

      // Create updated user data
      const updatedUser = {
        ...editedUser,
        [parent]: {
          ...editedUser[parent],
          [child]: value,
        },
      }

      // If changing revenue split, recalculate revenue distribution
      if (parent === "revenueSplit") {
        setNeedsSync(true)

        // Get the total revenue
        const totalRevenue = editedUser.analytics.totalRevenue

        // Calculate new monthly revenue based on the updated split
        // This is a simplified calculation for demonstration
        if (child === "creator") {
          const newCreatorShare = (Number.parseFloat(value) / 100) * totalRevenue
          // Update the monthly revenue to reflect the new creator share
          // In a real app, this would be more complex
          updatedUser.analytics.monthlyRevenue = Number.parseFloat((newCreatorShare / 6).toFixed(2))
        }
      }

      setEditedUser(updatedUser)
    } else {
      setEditedUser({
        ...editedUser,
        [name]: value,
      })
      setNeedsSync(true)
    }
  }

  const handleRevenueEditToggle = () => {
    if (isEditingRevenue) {
      // Cancel editing
      setEditedRevenue(null)
    } else {
      // Start editing
      setEditedRevenue({
        totalRevenue: userData.analytics.totalRevenue,
        monthlyRevenue: userData.analytics.monthlyRevenue,
      })
    }
    setIsEditingRevenue(!isEditingRevenue)
  }

  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (editedRevenue) {
      setEditedRevenue({
        ...editedRevenue,
        [name]: Number.parseFloat(value) || 0,
      })
    }
  }

  const handleRevenueSave = () => {
    if (editedRevenue) {
      // Update the userData with the new revenue values
      const updatedUserData = {
        ...userData,
        analytics: {
          ...userData.analytics,
          totalRevenue: editedRevenue.totalRevenue,
          monthlyRevenue: editedRevenue.monthlyRevenue,
        },
      }

      setUserData(updatedUserData)

      // Also update editedUser to keep them in sync
      if (editedUser) {
        setEditedUser({
          ...editedUser,
          analytics: {
            ...editedUser.analytics,
            totalRevenue: editedRevenue.totalRevenue,
            monthlyRevenue: editedRevenue.monthlyRevenue,
          },
        })
      }

      // In a real app, this would trigger an API call to sync with user's dashboard
      alert("Revenue updated and synced with user's dashboard")

      // Exit edit mode
      setIsEditingRevenue(false)
      setEditedRevenue(null)
    }
  }

  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call with timeout
    setTimeout(() => {
      setUserData(editedUser)
      setIsEditing(false)
      setIsSaving(false)

      // In a real app, this would trigger an API call to sync with user's dashboard
      if (needsSync) {
        // Show a success message
        alert("Changes saved and synced with user's dashboard")
        setNeedsSync(false)
      }
    }, 1000)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getAffiliateStatusLabel = (status: string) => {
    switch (status) {
      case "tier_3":
        return "Premium Affiliate"
      case "tier_2":
      case "tier_1":
        return "Affiliate"
      default:
        return "Non Affiliate"
    }
  }

  const getAffiliateStatusColor = (status: string) => {
    switch (status) {
      case "tier_1":
        return "bg-blue-500/20 text-blue-400"
      case "tier_2":
        return "bg-blue-500/20 text-blue-400"
      case "tier_3":
        return "bg-purple-500/20 text-purple-400"
      default:
        return "bg-zinc-500/20 text-zinc-400"
    }
  }

  /* Top scrollbar */
  const [tableWidth, setTableWidth] = useState(0)

  useEffect(() => {
    if (tableContainerRef.current) {
      const updateWidth = () => {
        const tableElement = tableContainerRef.current?.querySelector("table")
        if (tableElement) {
          setTableWidth(tableElement.offsetWidth)
        }
      }

      // Initial calculation
      updateWidth()

      // Update on window resize
      window.addEventListener("resize", updateWidth)

      return () => {
        window.removeEventListener("resize", updateWidth)
      }
    }
  }, [])

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Search</h1>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-500" />
              </div>
              <input
                type="email"
                placeholder="Search by email address..."
                className="block w-full pl-10 pr-3 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50"
            >
              {isSearching ? "Searching..." : "Search"}
            </button>
          </form>
        </div>

        {error && <div className="bg-red-900/20 border border-red-800 text-red-200 rounded-lg p-4 mb-6">{error}</div>}

        {userData && (
          <div className="space-y-6">
            {/* User Profile */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold flex items-center">
                  <User className="h-5 w-5 mr-2 text-red-500" />
                  User Profile
                </h3>
                <div className="flex items-center">
                  <button
                    onClick={handleEditToggle}
                    className={`flex items-center px-3 py-1 rounded-md ${
                      isEditing ? "bg-zinc-700 text-zinc-300" : "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                    }`}
                  >
                    {isEditing ? (
                      <>
                        <X className="h-4 w-4 mr-1" />
                        Cancel
                      </>
                    ) : (
                      <>
                        <Edit className="h-4 w-4 mr-1" />
                        Edit User
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      const newStatus = userData.status === "suspended" ? "active" : "suspended"
                      setUserData({
                        ...userData,
                        status: newStatus,
                      })
                      if (editedUser) {
                        setEditedUser({
                          ...editedUser,
                          status: newStatus,
                        })
                      }
                      alert(
                        `User ${userData.name} has been ${newStatus === "suspended" ? "suspended" : "unsuspended"}.`,
                      )
                    }}
                    className={`flex items-center px-3 py-1 ml-2 rounded-md ${
                      userData.status === "suspended"
                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                        : "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                    }`}
                  >
                    {userData.status === "suspended" ? "Unsuspend" : "Suspend"}
                  </button>
                </div>
              </div>

              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Display Name</label>
                    <input
                      type="text"
                      name="name"
                      value={editedUser.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editedUser.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Affiliate Status</label>
                    <select
                      name="affiliateStatus"
                      value={editedUser.affiliateStatus}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="none">Non Affiliate</option>
                      <option value="tier_1">Normal Affiliate</option>
                      <option value="tier_3">Premium Affiliate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">User Status</label>
                    <select
                      name="status"
                      value={editedUser.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="suspended">Suspended</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Creator Revenue Split (%)</label>
                    <input
                      type="number"
                      name="revenueSplit.creator"
                      value={editedUser.revenueSplit.creator}
                      onChange={handleInputChange}
                      min="0"
                      max="100"
                      className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Platform Revenue Split (%)</label>
                    <input
                      type="number"
                      name="revenueSplit.platform"
                      value={editedUser.revenueSplit.platform}
                      onChange={handleInputChange}
                      min="0"
                      max="100"
                      className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Affiliate Revenue Split (%)</label>
                    <input
                      type="number"
                      name="revenueSplit.affiliate"
                      value={editedUser.revenueSplit.affiliate}
                      onChange={handleInputChange}
                      min="0"
                      max="100"
                      className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-zinc-400 text-sm">Display Name</p>
                      <p className="font-medium">{userData.name}</p>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm">Email</p>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm">Joined</p>
                      <p className="font-medium">{formatDate(userData.createdAt)}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-zinc-400 text-sm">Affiliate Status</p>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${getAffiliateStatusColor(userData.affiliateStatus)}`}
                      >
                        {getAffiliateStatusLabel(userData.affiliateStatus)}
                      </span>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm">Status</p>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          userData.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : userData.status === "pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {userData.status.charAt(0).toUpperCase() + userData.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {isEditing && (
                <div className="flex justify-between mt-4">
                  {needsSync && (
                    <div className="text-yellow-400 text-sm flex items-center">
                      <span className="mr-2">●</span> Changes will be synced with user's dashboard
                    </div>
                  )}
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50"
                  >
                    {isSaving ? (
                      "Saving..."
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Referral Information */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-red-500" />
                Referral Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <User className="h-5 w-5 mr-2 text-blue-400" />
                      <h4 className="font-medium">Invited By</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Name</p>
                    <p className="font-medium mb-2">{userData.invitedBy.name}</p>
                    <p className="text-sm text-zinc-400">Email</p>
                    <p className="font-medium">{userData.invitedBy.email}</p>
                  </div>
                </div>
                <div>
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Tag className="h-5 w-5 mr-2 text-yellow-400" />
                      <h4 className="font-medium">Invite Code Details</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Code</p>
                    <p className="font-medium mb-2">{userData.inviteCode.code}</p>
                    <p className="text-sm text-zinc-400">Type</p>
                    <p className="font-medium capitalize">{userData.inviteCode.type.replace("_", " ")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Split */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Percent className="h-5 w-5 mr-2 text-red-500" />
                Revenue Split
              </h3>
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Creator</span>
                    <span className="font-bold text-green-400">{userData.revenueSplit.creator}%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: `${userData.revenueSplit.creator}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Platform</span>
                    <span className="font-bold text-blue-400">{userData.revenueSplit.platform}%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${userData.revenueSplit.platform}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Affiliate</span>
                    <span className="font-bold text-purple-400">{userData.revenueSplit.affiliate}%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2.5">
                    <div
                      className="bg-purple-500 h-2.5 rounded-full"
                      style={{ width: `${userData.revenueSplit.affiliate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-red-500" />
                Analytics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-zinc-400 text-sm">Total Views</p>
                  <p className="text-2xl font-bold mt-1">{userData.analytics.totalViews.toLocaleString()}</p>
                  <p className="text-zinc-400 text-sm mt-1">
                    {userData.analytics.monthlyViews.toLocaleString()} this month
                  </p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4 relative">
                  <div className="flex justify-between items-center">
                    <p className="text-zinc-400 text-sm">Total Revenue</p>
                    <button
                      onClick={handleRevenueEditToggle}
                      className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-700"
                    >
                      {isEditingRevenue ? <X className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                    </button>
                  </div>

                  {isEditingRevenue && editedRevenue ? (
                    <>
                      <div className="mt-2 space-y-3">
                        <div>
                          <label className="block text-xs text-zinc-500 mb-1">Total Revenue ($)</label>
                          <input
                            type="number"
                            name="totalRevenue"
                            value={editedRevenue.totalRevenue}
                            onChange={handleRevenueChange}
                            step="0.01"
                            min="0"
                            className="w-full px-2 py-1 text-lg border border-zinc-700 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-zinc-500 mb-1">Monthly Revenue ($)</label>
                          <input
                            type="number"
                            name="monthlyRevenue"
                            value={editedRevenue.monthlyRevenue}
                            onChange={handleRevenueChange}
                            step="0.01"
                            min="0"
                            className="w-full px-2 py-1 text-sm border border-zinc-700 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          />
                        </div>
                        <button
                          onClick={handleRevenueSave}
                          className="w-full mt-2 px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          Save
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-2xl font-bold mt-1">${userData.analytics.totalRevenue.toLocaleString()}</p>
                      <p className="text-zinc-400 text-sm mt-1">
                        ${userData.analytics.monthlyRevenue.toLocaleString()} last month
                      </p>
                    </>
                  )}
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-zinc-400 text-sm">Content Count</p>
                  <p className="text-2xl font-bold mt-1">{userData.analytics.contentCount}</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-zinc-400 text-sm">Channels</p>
                  <p className="text-2xl font-bold mt-1">{userData.channels.length}</p>
                  <p className="text-zinc-400 text-sm mt-1">
                    {userData.channels.filter((c) => c.status === "approved").length} approved
                  </p>
                </div>
              </div>
            </div>

            {/* Channels */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Video className="h-5 w-5 mr-2 text-red-500" />
                Channels
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-800">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                        Channel
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {userData.channels.map((channel) => (
                      <tr key={channel.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a
                            href={channel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            {channel.name}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              channel.status === "approved"
                                ? "bg-green-500/20 text-green-400"
                                : channel.status === "pending"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {channel.status.charAt(0).toUpperCase() + channel.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payment Methods & Tax Information */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-red-500" />
                Payment & Tax Information
              </h3>

              <h4 className="font-medium text-zinc-300 mb-3">Payment Methods</h4>
              <div className="space-y-4 mb-6">
                {userData.paymentMethods.map((method) => (
                  <div key={method.id} className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium capitalize">{method.type.replace("_", " ")}</span>
                      <span className={`text-xs ${method.isDefault ? "text-green-400" : "text-zinc-400"}`}>
                        {method.isDefault ? "Default" : ""}
                      </span>
                    </div>
                    {method.type === "bank_transfer" && (
                      <>
                        <p className="text-sm text-zinc-400">Bank Name</p>
                        <p className="font-medium">{method.details.bankName}</p>
                        <p className="text-sm text-zinc-400">Account Name</p>
                        <p className="font-medium">{method.details.accountName}</p>
                        <p className="text-sm text-zinc-400">Account Number</p>
                        <p className="font-medium">{method.details.accountNumber}</p>
                        <p className="text-sm text-zinc-400">Routing Number</p>
                        <p className="font-medium">{method.details.routingNumber}</p>
                      </>
                    )}
                    {method.type === "paypal" && (
                      <>
                        <p className="text-sm text-zinc-400">Email</p>
                        <p className="font-medium">{method.details.email}</p>
                      </>
                    )}
                    {method.type === "cryptocurrency" && (
                      <>
                        <p className="text-sm text-zinc-400">Currency</p>
                        <p className="font-medium">{method.details.currency}</p>
                        <p className="text-sm text-zinc-400">Address</p>
                        <p className="font-medium">{method.details.address}</p>
                        <p className="text-sm text-zinc-400">Network</p>
                        <p className="font-medium">{method.details.network}</p>
                      </>
                    )}
                    {method.type === "venmo" && (
                      <>
                        <p className="text-sm text-zinc-400">Username</p>
                        <p className="font-medium">{method.details.username}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-700 my-6"></div>

              <h4 className="font-medium text-zinc-300 mb-3">Tax Information</h4>
              <div className="bg-zinc-800 rounded-lg p-4">
                <p className="text-sm text-zinc-400">Status</p>
                <p className="font-medium">{userData.taxInfo.status}</p>
                <p className="text-sm text-zinc-400">Tax ID</p>
                <p className="font-medium">{userData.taxInfo.taxId || "N/A"}</p>
                <p className="text-sm text-zinc-400">Country</p>
                <p className="font-medium">{userData.taxInfo.country}</p>
                <p className="text-sm text-zinc-400">State</p>
                <p className="font-medium">{userData.taxInfo.state}</p>
                <p className="text-sm text-zinc-400">Tax Rate</p>
                <p className="font-medium">{userData.taxInfo.taxRate}%</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {userData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className={`p-2 rounded-full ${
                        activity.type === "channel_connect"
                          ? "bg-blue-500/20 text-blue-400"
                          : activity.type === "content_upload"
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {activity.type === "channel_connect" ? (
                        <Video className="h-5 w-5" />
                      ) : activity.type === "content_upload" ? (
                        <Video className="h-5 w-5" />
                      ) : (
                        <DollarSign className="h-5 w-5" />
                      )}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{activity.details}</p>
                      <p className="text-zinc-400 text-sm">{formatDate(activity.date)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All Users List */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">All Users</h2>
            <div className="text-sm text-zinc-400">{mockUsers.length} users registered</div>
          </div>

          {/* Top scrollbar */}
          <div className="relative mb-4">
            <div className="overflow-x-auto h-4 rounded bg-zinc-700/30" ref={topScrollbarRef} onScroll={handleScroll}>
              <div className="h-full" style={{ width: tableWidth ? `${tableWidth}px` : "100%" }}></div>
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900 opacity-30"></div>
          </div>

          <div className="overflow-x-auto" ref={tableContainerRef} onScroll={handleScroll}>
            <table className="min-w-full divide-y divide-zinc-800">
              <thead>
                <tr className="text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">Invitation Source</th>
                  <th className="px-4 py-3">Invite Code</th>
                  <th className="px-4 py-3">Affiliate</th>
                  <th className="px-4 py-3">Revenue</th>
                  <th className="px-4 py-3">Channels</th>
                  <th className="px-4 py-3">Payment Methods</th>
                  <th className="px-4 py-3">Tax Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {mockUsers
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((user) => (
                    <tr key={user.id} className="hover:bg-zinc-800/50 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-start space-x-3">
                          <div className="bg-zinc-800 rounded-full h-10 w-10 flex items-center justify-center">
                            <span className="text-lg font-medium text-red-500">{user.name.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-zinc-500">{user.email}</p>
                            <p className="text-xs text-zinc-600">
                              Joined: {new Date(user.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs inline-block ${
                            user.invitedBy === null
                              ? "bg-blue-500/20 text-blue-400"
                              : user.affiliateStatus === "tier_3"
                                ? "bg-purple-500/20 text-purple-400"
                                : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {user.invitedBy === null
                            ? "Admin"
                            : user.affiliateStatus === "tier_3"
                              ? "Premium Affiliate"
                              : "Affiliate"}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-yellow-400">{user.inviteCode.code}</span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs inline-block ${
                            user.affiliateStatus === "tier_3"
                              ? "bg-purple-500/20 text-purple-400"
                              : user.affiliateStatus === "tier_2" || user.affiliateStatus === "tier_1"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-zinc-500/20 text-zinc-400"
                          }`}
                        >
                          {user.affiliateStatus === "tier_3"
                            ? "Premium Affiliate"
                            : user.affiliateStatus === "tier_2" || user.affiliateStatus === "tier_1"
                              ? "Affiliate"
                              : "Non Affiliate"}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div>
                          <p className="font-medium">${user.analytics.totalRevenue.toLocaleString()}</p>
                          <p className="text-xs text-zinc-500">
                            ${user.analytics.monthlyRevenue.toLocaleString()} last month
                          </p>
                          <div className="flex items-center text-xs text-zinc-600 mt-1">
                            <span className="mr-1">Split:</span>
                            <span className="text-green-400">{user.revenueSplit.creator}%</span>
                            <span className="mx-1">/</span>
                            <span className="text-blue-400">{user.revenueSplit.platform}%</span>
                            {user.invitedBy !== null && (
                              <>
                                <span className="mx-1">/</span>
                                <span className="text-purple-400">{user.revenueSplit.affiliate}%</span>
                              </>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div>
                          <p className="font-medium">{user.channels.length} channels</p>
                          <div className="mt-1">
                            {user.channels.map((channel) => (
                              <div key={channel.id} className="flex items-center text-xs">
                                <span
                                  className={`h-2 w-2 rounded-full mr-1 ${
                                    channel.status === "approved"
                                      ? "bg-green-500"
                                      : channel.status === "pending"
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                  }`}
                                ></span>
                                <a
                                  href={channel.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="truncate max-w-[120px] text-blue-400 hover:text-blue-300 hover:underline"
                                >
                                  {channel.name}
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div>
                          {user.paymentMethods.map((method) => (
                            <div key={method.id} className="mb-1 flex items-center text-xs">
                              <span
                                className={`h-2 w-2 rounded-full mr-1 ${method.isDefault ? "bg-green-500" : "bg-zinc-500"}`}
                              ></span>
                              <span className="capitalize">
                                {method.type.replace("_", " ")}
                                {method.type === "bank_transfer" && `: ${method.details.bankName}`}
                                {method.type === "paypal" && `: ${method.details.email}`}
                                {method.type === "cryptocurrency" && `: ${method.details.currency}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div>
                          <p className="font-medium">{user.taxInfo.status}</p>
                          <p className="text-xs text-zinc-500">
                            {user.taxInfo.country}, {user.taxInfo.state}
                          </p>
                          <p className="text-xs text-zinc-600">Rate: {user.taxInfo.taxRate}%</p>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              setEmail(user.email)
                              // Small delay to ensure the email state is updated before search
                              setTimeout(() => {
                                // Use the actual email directly instead of relying on state
                                if (user.email.includes("@")) {
                                  // Find the user directly from mockUsers instead of relying on handleSearch
                                  const foundUser = mockUsers.find((u) => u.email === user.email)
                                  if (foundUser) {
                                    setUserData(foundUser)
                                    setEditedUser(JSON.parse(JSON.stringify(foundUser)))
                                    setError("")
                                    // Scroll to top
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                  }
                                }
                              }, 100)
                            }}
                            className="p-1.5 bg-blue-500/20 hover:bg-blue-500/30 rounded-md transition-colors"
                          >
                            <Search className="h-4 w-4 text-blue-500" />
                          </button>
                          <button
                            onClick={() => {
                              setEmail(user.email)
                              // Small delay to ensure the email state is updated before search
                              setTimeout(() => {
                                // Use the actual email directly instead of relying on state
                                if (user.email.includes("@")) {
                                  // Find the user directly from mockUsers instead of relying on handleSearch
                                  const foundUser = mockUsers.find((u) => u.email === user.email)
                                  if (foundUser) {
                                    setUserData(foundUser)
                                    setEditedUser(JSON.parse(JSON.stringify(foundUser)))
                                    setError("")
                                    // Scroll to top and set editing mode
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                    setIsEditing(true)
                                  }
                                }
                              }, 100)
                            }}
                            className="p-1.5 bg-green-500/20 hover:bg-green-500/30 rounded-md transition-colors"
                          >
                            <Edit className="h-4 w-4 text-green-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
