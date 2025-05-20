"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, XCircle, ExternalLink, Search, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatNumber } from "@/utils/format-numbers"

// Format number with k, M suffix
// const formatNumber = (num) => {
//   if (num >= 1000000) {
//     return (num / 1000000).toFixed(1) + 'M';
//   }
//   if (num >= 1000) {
//     return (num / 1000).toFixed(1) + 'k';
//   }
//   return num.toString();
// };

export default function ShortsReviewPage() {
  const [selectedShort, setSelectedShort] = useState(null)
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Sample data for shorts submissions
  const shortsSubmissions = [
    {
      id: 1,
      creatorName: "Alex Gaming",
      campaignName: "Nike Summer Collection",
      brandName: "Nike",
      submittedDate: "2023-11-15",
      shortsUrl: "https://youtube.com/shorts/abc123",
      logoTimestamp: "0:05-0:20",
      status: "pending",
      views: 45321,
      notes: "Logo placed in bottom right corner as requested",
    },
    {
      id: 2,
      creatorName: "FitWithSarah",
      campaignName: "Adidas Ultraboost",
      brandName: "Adidas",
      submittedDate: "2023-11-14",
      shortsUrl: "https://youtube.com/shorts/def456",
      logoTimestamp: "0:02-0:12",
      status: "pending",
      views: 32189,
      notes: "Logo appears multiple times throughout the video",
    },
    {
      id: 3,
      creatorName: "TechReviewer",
      campaignName: "Puma Fitness",
      brandName: "Puma",
      submittedDate: "2023-11-13",
      shortsUrl: "https://youtube.com/shorts/ghi789",
      logoTimestamp: "0:08-0:18",
      status: "approved",
      views: 68452,
      notes: "Logo integrated into workout routine",
      reviewedBy: "Admin1",
      reviewDate: "2023-11-14",
    },
    {
      id: 4,
      creatorName: "StyleWithEmma",
      campaignName: "Under Armour Winter",
      brandName: "Under Armour",
      submittedDate: "2023-11-12",
      shortsUrl: "https://youtube.com/shorts/jkl012",
      logoTimestamp: "0:03-0:10",
      status: "rejected",
      views: 15782,
      notes: "Logo placement as requested",
      reviewedBy: "Admin2",
      reviewDate: "2023-11-13",
      rejectionReason: "Logo not clearly visible for required duration",
    },
  ]

  const filteredSubmissions = shortsSubmissions.filter((submission) => {
    const matchesSearch =
      submission.creatorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.campaignName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.brandName.toLowerCase().includes(searchTerm.toLowerCase())

    if (filterStatus === "all") return matchesSearch
    return matchesSearch && submission.status === filterStatus
  })

  // Update the handleReviewClick function to make it more functional
  const handleReviewClick = (submission) => {
    setSelectedShort(submission)
    setIsReviewDialogOpen(true)
  }

  // Add functions for approve and reject
  const [reviewNote, setReviewNote] = useState("")

  const handleApprove = (id: string) => {
    console.log(`Approving short ${id}`)
    // Add your approval logic here
    // In a real app, this would call an API to update the status
    alert(`Approved submission from ${selectedShort.creatorName}`)
    // Update the status in the local state
    const updatedSubmissions = shortsSubmissions.map((sub) =>
      sub.id === selectedShort.id ? { ...sub, status: "approved" } : sub,
    )
    // In a real app, you would update the state with the updated submissions
    setIsReviewDialogOpen(false)
  }

  const handleReject = (id: string) => {
    console.log(`Rejecting short ${id}`)
    // Add your rejection logic here
    if (!reviewNote) {
      alert("Please provide a reason for rejection")
      return
    }
    // In a real app, this would call an API to update the status
    alert(`Rejected submission from ${selectedShort.creatorName}`)
    // Update the status in the local state
    const updatedSubmissions = shortsSubmissions.map((sub) =>
      sub.id === selectedShort.id ? { ...sub, status: "rejected", rejectionReason: reviewNote } : sub,
    )
    // In a real app, you would update the state with the updated submissions
    setIsReviewDialogOpen(false)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Shorts Review</h1>
            <p className="text-zinc-400 mt-1">Review and approve creator submissions for brand campaigns</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-zinc-400">Last updated: Today, 10:45 AM</span>
            <button
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1 rounded-md text-sm"
              onClick={() => alert("Dashboard refreshed")}
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/70 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-zinc-400">Total Submissions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{shortsSubmissions.length}</p>
              <p className="text-xs text-green-500 mt-1">+5 new today</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/70 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-zinc-400">Pending Review</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{shortsSubmissions.filter((s) => s.status === "pending").length}</p>
              <p className="text-xs text-yellow-500 mt-1">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/70 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-zinc-400">Approved</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{shortsSubmissions.filter((s) => s.status === "approved").length}</p>
              <p className="text-xs text-green-500 mt-1">+1 today</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/70 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-zinc-400">Rejected</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{shortsSubmissions.filter((s) => s.status === "rejected").length}</p>
              <p className="text-xs text-red-500 mt-1">+1 today</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Search by creator, campaign or brand..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border-zinc-700 text-zinc-300 pl-10"
            />
          </div>

          <div className="flex items-center space-x-4 w-full md:w-auto">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-700 text-zinc-300">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-700">
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Submissions Table */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Shorts Submissions</CardTitle>
            <CardDescription className="text-zinc-400">
              Review and manage creator submissions for brand campaigns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="shorts" className="w-full">
              <TabsList className="grid w-full md:w-auto grid-cols-2 bg-zinc-800 border-zinc-700 mb-4">
                <TabsTrigger value="shorts" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  Shorts Submissions
                </TabsTrigger>
                <TabsTrigger value="channels" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  Channel Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="shorts">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 font-medium text-zinc-400">Creator</th>
                        <th className="text-left py-3 px-4 font-medium text-zinc-400">Campaign</th>
                        <th className="text-left py-3 px-4 font-medium text-zinc-400">Submitted</th>
                        <th className="text-left py-3 px-4 font-medium text-zinc-400">Views</th>
                        <th className="text-left py-3 px-4 font-medium text-zinc-400">Status</th>
                        <th className="text-right py-3 px-4 font-medium text-zinc-400">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSubmissions.map((submission) => (
                        <tr key={submission.id} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                          <td className="py-3 px-4">
                            <div className="font-medium text-zinc-300">{submission.creatorName}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium text-zinc-300">{submission.campaignName}</div>
                              <div className="text-sm text-zinc-500">{submission.brandName}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-zinc-400">
                            {new Date(submission.submittedDate).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 text-zinc-400">{formatNumber(submission.views)}</td>
                          <td className="py-3 px-4">
                            <Badge
                              className={
                                submission.status === "approved"
                                  ? "bg-green-600 text-white"
                                  : submission.status === "pending"
                                    ? "bg-yellow-600 text-white"
                                    : "bg-red-600 text-white"
                              }
                            >
                              {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-zinc-700 text-zinc-300"
                                onClick={() => window.open(submission.shortsUrl, "_blank")}
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                              {submission.status === "pending" && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-zinc-700 text-zinc-300"
                                  onClick={() => handleReviewClick(submission)}
                                >
                                  Review
                                </Button>
                              )}
                              {submission.status !== "pending" && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-zinc-700 text-zinc-300"
                                  onClick={() => handleReviewClick(submission)}
                                >
                                  Details
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="channels">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 font-medium text-zinc-400">Creator</th>
                        <th className="text-left py-3 px-4 font-medium text-zinc-400">Channel</th>
                        <th className="text-left py-3 px-4 font-medium text-zinc-400">Subscribers</th>
                        <th className="text-left py-3 px-4 font-medium text-zinc-400">Submitted</th>
                        <th className="text-left py-3 px-4 font-medium text-zinc-400">Status</th>
                        <th className="text-right py-3 px-4 font-medium text-zinc-400">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: 1,
                          name: "Gaming Shorts",
                          url: "youtube.com/c/gamingshorts",
                          subscribers: "245K",
                          creator: "John Smith",
                          email: "john@example.com",
                          dateSubmitted: "Apr 5, 2024",
                          status: "pending",
                          verificationCode: "SHORTSREV-A7B9C2D4",
                        },
                        {
                          id: 2,
                          name: "Music Vibes",
                          url: "youtube.com/c/musicvibes",
                          subscribers: "1.2M",
                          creator: "Sarah Johnson",
                          email: "sarah@example.com",
                          dateSubmitted: "Apr 4, 2024",
                          status: "pending",
                          verificationCode: "SHORTSREV-X5Y7Z9A1",
                        },
                        {
                          id: 3,
                          name: "Tech Shorts",
                          url: "youtube.com/c/techshorts",
                          subscribers: "780K",
                          creator: "Mike Chen",
                          email: "mike@example.com",
                          dateSubmitted: "Apr 3, 2024",
                          status: "approved",
                          verificationCode: "SHORTSREV-B2C4D6E8",
                        },
                        {
                          id: 4,
                          name: "Travel Moments",
                          url: "youtube.com/c/travelmoments",
                          subscribers: "350K",
                          creator: "Emma Wilson",
                          email: "emma@example.com",
                          dateSubmitted: "Apr 2, 2024",
                          status: "rejected",
                          verificationCode: "SHORTSREV-F8G6H4J2",
                          rejectionReason: "Verification code not found in channel description",
                        },
                        {
                          id: 5,
                          name: "Fitness Shorts",
                          url: "youtube.com/c/fitnessshorts",
                          subscribers: "520K",
                          creator: "Alex Rodriguez",
                          email: "alex@example.com",
                          dateSubmitted: "Apr 1, 2024",
                          status: "pending",
                          verificationCode: "SHORTSREV-K3L5M7N9",
                        },
                      ].map((channel) => (
                        <tr key={channel.id} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                          <td className="py-3 px-4">
                            <div className="font-medium text-zinc-300">{channel.creator}</div>
                            <div className="text-sm text-zinc-500">{channel.email}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium text-zinc-300">{channel.name}</div>
                              <div className="text-sm text-zinc-500 flex items-center gap-1">
                                {channel.url}
                                <a href={`https://${channel.url}`} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-zinc-400">{channel.subscribers}</td>
                          <td className="py-3 px-4 text-zinc-400">{channel.dateSubmitted}</td>
                          <td className="py-3 px-4">
                            <Badge
                              className={
                                channel.status === "approved"
                                  ? "bg-green-600 text-white"
                                  : channel.status === "pending"
                                    ? "bg-yellow-600 text-white"
                                    : "bg-red-600 text-white"
                              }
                            >
                              {channel.status.charAt(0).toUpperCase() + channel.status.slice(1)}
                            </Badge>
                            {channel.status === "rejected" && channel.rejectionReason && (
                              <div className="mt-1 text-xs text-zinc-400">{channel.rejectionReason}</div>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-zinc-700 text-zinc-300"
                                onClick={() => window.open(`https://${channel.url}`, "_blank")}
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                              {channel.status === "pending" && (
                                <>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-zinc-700 text-green-500"
                                    onClick={() => alert(`Approved channel: ${channel.name}`)}
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-zinc-700 text-red-500"
                                    onClick={() => alert(`Rejected channel: ${channel.name}`)}
                                  >
                                    <XCircle className="h-4 w-4" />
                                  </Button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Review Dialog */}
        {selectedShort && (
          <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
            <DialogContent className="sm:max-w-[600px] bg-zinc-900 border-zinc-700 max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-white">
                  {selectedShort.status === "pending" ? "Review Submission" : "Submission Details"}
                </DialogTitle>
                <DialogDescription className="text-zinc-400">
                  {selectedShort.campaignName} by {selectedShort.creatorName}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="aspect-video bg-zinc-800 rounded-md flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Button
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => window.open(selectedShort.shortsUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Open YouTube Short
                    </Button>
                  </div>
                  <img
                    src="/placeholder.svg?height=270&width=480"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-zinc-400">Creator</Label>
                    <p className="text-zinc-300">{selectedShort.creatorName}</p>
                  </div>
                  <div>
                    <Label className="text-zinc-400">Campaign</Label>
                    <p className="text-zinc-300">{selectedShort.campaignName}</p>
                  </div>
                  <div>
                    <Label className="text-zinc-400">Submitted Date</Label>
                    <p className="text-zinc-300">{new Date(selectedShort.submittedDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <Label className="text-zinc-400">Brand Timestamp</Label>
                    <p className="text-zinc-300">{selectedShort.logoTimestamp}</p>
                  </div>
                  <div>
                    <Label className="text-zinc-400">Views</Label>
                    <p className="text-zinc-300">{formatNumber(selectedShort.views)}</p>
                  </div>
                  <div>
                    <Label className="text-zinc-400">Status</Label>
                    <Badge
                      className={
                        selectedShort.status === "approved"
                          ? "bg-green-600 text-white"
                          : selectedShort.status === "pending"
                            ? "bg-yellow-600 text-white"
                            : "bg-red-600 text-white"
                      }
                    >
                      {selectedShort.status.charAt(0).toUpperCase() + selectedShort.status.slice(1)}
                    </Badge>
                  </div>
                </div>

                <div>
                  <Label className="text-zinc-400">Creator Notes</Label>
                  <p className="text-zinc-300 bg-zinc-800 p-3 rounded-md mt-1">{selectedShort.notes}</p>
                </div>

                {selectedShort.status === "rejected" && (
                  <div>
                    <Label className="text-zinc-400">Rejection Reason</Label>
                    <p className="text-red-400 bg-red-900/20 p-3 rounded-md mt-1 border border-red-900">
                      {selectedShort.rejectionReason}
                    </p>
                  </div>
                )}

                {selectedShort.status === "pending" && (
                  <div className="space-y-4">
                    <div className="bg-zinc-800/50 p-3 rounded-md border border-zinc-700">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        <span className="font-medium text-white">Review Guidelines:</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-zinc-400">
                        <li>Verify that the brand is clearly visible for at least 5 seconds</li>
                        <li>Ensure the content complies with YouTube's community guidelines</li>
                        <li>Check that the brand elements have not been modified or distorted</li>
                        <li>Confirm that the content aligns with the brand's campaign goals</li>
                      </ul>
                    </div>

                    <div>
                      <Label htmlFor="review-notes" className="text-zinc-400">
                        Review Notes
                      </Label>
                      <Textarea
                        id="review-notes"
                        placeholder="Add notes about this submission..."
                        className="bg-zinc-800 border-zinc-700 text-zinc-300 mt-1 max-h-32 overflow-y-auto"
                        value={reviewNote}
                        onChange={(e) => setReviewNote(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
              <DialogFooter>
                {selectedShort.status === "pending" ? (
                  <>
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-zinc-300"
                      onClick={() => setIsReviewDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => handleReject(selectedShort.id)}
                    >
                      <XCircle className="h-4 w-4 mr-2" /> Reject
                    </Button>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handleApprove(selectedShort.id)}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" /> Approve
                    </Button>
                  </>
                ) : (
                  <Button
                    className="bg-zinc-700 hover:bg-zinc-600 text-white"
                    onClick={() => setIsReviewDialogOpen(false)}
                  >
                    Close
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </AdminLayout>
  )
}
