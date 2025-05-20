"use client"

import { useState, useEffect } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import { Search, Eye, Check, X } from "lucide-react"

export default function FormSubmissions() {
  const [filter, setFilter] = useState<"all" | "creator" | "label" | "contact" | "track-request">("all")
  const [viewingSubmission, setViewingSubmission] = useState<any>(null)
  const [searchText, setSearchText] = useState("")
  const [filteredSubmissions, setFilteredSubmissions] = useState<any[]>([])

  // Sample data for form submissions
  const submissions = [
    // Creator Applications (from /creator-application page)
    {
      id: 1,
      type: "creator",
      name: "John Smith",
      email: "john@example.com",
      dateSubmitted: "Apr 5, 2024",
      status: "pending",
      data: {
        channelName: "Gaming Shorts",
        channelUrl: "youtube.com/c/gamingshorts",
        subscribers: "245K",
        contentType: "Gaming",
        channelDescription: "I create daily gaming shorts focusing on popular titles and gaming tips.",
        shortsExamples: "youtube.com/shorts/abc123, youtube.com/shorts/def456, youtube.com/shorts/ghi789",
        country: "United States",
        age: "27",
        whyJoin: "I'd love to use your music in my gaming shorts. I post daily content and have a growing audience.",
        musicExperience: "I've been using royalty-free music but would prefer licensed tracks for better quality.",
        postingFrequency: "Daily",
      },
    },
    {
      id: 2,
      type: "creator",
      name: "Mike Chen",
      email: "mike@example.com",
      dateSubmitted: "Apr 2, 2024",
      status: "pending",
      data: {
        channelName: "Tech Shorts",
        channelUrl: "youtube.com/c/techshorts",
        subscribers: "780K",
        contentType: "Technology",
        channelDescription: "Quick tech reviews and tips in short-form content.",
        shortsExamples: "youtube.com/shorts/tech123, youtube.com/shorts/tech456, youtube.com/shorts/tech789",
        country: "Canada",
        age: "31",
        whyJoin: "Looking for background music for my tech review shorts. I post 3-4 times per week.",
        musicExperience: "I've used various music services but need more tech-oriented tracks.",
        postingFrequency: "Several times a week",
      },
    },

    // Label Submissions (from /label-submission page)
    {
      id: 3,
      type: "label",
      name: "Indie Records",
      email: "contact@indierecords.com",
      dateSubmitted: "Apr 4, 2024",
      status: "pending",
      data: {
        labelName: "Indie Records",
        established: "2018",
        website: "indierecords.com",
        catalogSize: "Medium (100-1,000 tracks)",
        genres: "Pop, Rock, Electronic",
        notableArtists: "The Indie Band, Electronic Dreams, Rock Solid",
        distribution: "DistroKid, CD Baby",
        rights: "Fully Owned",
        position: "Licensing Manager",
        phone: "+1 (555) 123-4567",
        sampleLinks: "spotify.com/track/123, youtube.com/watch?v=abc123, soundcloud.com/indierecords/track1",
      },
    },
    {
      id: 4,
      type: "label",
      name: "Global Music Group",
      email: "licensing@globalmusicgroup.com",
      dateSubmitted: "Apr 1, 2024",
      status: "responded",
      data: {
        labelName: "Global Music Group",
        established: "2010",
        website: "globalmusicgroup.com",
        catalogSize: "Large (1,000-10,000 tracks)",
        genres: "Hip Hop, R&B, Pop",
        notableArtists: "Urban Beat, R&B Queen, Pop Star, Hip Hop Legend, New Artist",
        distribution: "Universal, Sony, Own Distribution",
        rights: "Mixed Ownership",
        position: "Head of Digital Licensing",
        phone: "+1 (555) 987-6543",
        sampleLinks: "spotify.com/artist/123, apple.music.com/artist/456, youtube.com/channel/abc123",
      },
    },

    // Contact Forms (from /contact page)
    {
      id: 5,
      type: "contact",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      dateSubmitted: "Apr 3, 2024",
      status: "responded",
      data: {
        subject: "Partnership Opportunity",
        message:
          "I represent a network of creators with over 10M combined subscribers. We're interested in a bulk licensing deal for all our creators.",
      },
    },
    {
      id: 6,
      type: "contact",
      name: "David Wilson",
      email: "david@example.com",
      dateSubmitted: "Mar 30, 2024",
      status: "pending",
      data: {
        subject: "Technical Support",
        message:
          "I'm having trouble accessing my creator dashboard. The page keeps loading indefinitely after login. I've tried different browsers but the issue persists.",
      },
    },

    // Track Requests
    {
      id: 7,
      type: "track-request",
      name: "Alex Rodriguez",
      email: "alex@example.com",
      dateSubmitted: "Apr 6, 2024",
      status: "pending",
      data: {
        channelName: "Alex Shorts",
        channelUrl: "youtube.com/c/alexshorts",
        views: "1.2M",
        libraryExplored: "Yes, I've searched through the entire music library",
        trackCount: "3",
        genres: "EDM, House, Dance",
        usage:
          "I create dance and choreography shorts that need upbeat music with strong beats. Looking for tracks that would complement high-energy dance videos.",
        referenceLink: "https://open.spotify.com/track/example",
        comments: "Preferably tracks with minimal vocals or vocal chops only.",
        manager: "Sarah from Shorts Rev",
      },
    },
  ]

  // Filter submissions based on type and search text
  useEffect(() => {
    let filtered = submissions

    // Apply type filter
    if (filter !== "all") {
      filtered = filtered.filter((submission) => submission.type === filter)
    }

    // Apply search filter
    if (searchText) {
      const search = searchText.toLowerCase()
      filtered = filtered.filter(
        (submission) =>
          submission.name.toLowerCase().includes(search) ||
          submission.email.toLowerCase().includes(search) ||
          (submission.type && submission.type.toLowerCase().includes(search)),
      )
    }

    setFilteredSubmissions(filtered)
  }, [filter, searchText]) // Only depend on filter and searchText, not submissions

  const markAsResponded = (id: number) => {
    // In a real app, this would call an API to update the submission status
    const updatedSubmissions = filteredSubmissions.map((sub) => (sub.id === id ? { ...sub, status: "responded" } : sub))
    setFilteredSubmissions(updatedSubmissions)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Form Submissions</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search submissions..."
                className="pl-9 pr-4 py-1.5 bg-zinc-800 border border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex border-b border-zinc-800">
          {["all", "creator", "label", "contact", "track-request"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                filter === type ? "border-red-500 text-red-500" : "border-transparent text-zinc-400 hover:text-zinc-300"
              }`}
            >
              {type === "all"
                ? "All Submissions"
                : type === "creator"
                  ? "Creator Applications"
                  : type === "label"
                    ? "Label Submissions"
                    : type === "contact"
                      ? "Contact Forms"
                      : "Track Requests"}
              {type === "all" && (
                <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">
                  {submissions.filter((s) => s.status === "pending").length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Submissions table */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                  <th className="px-6 py-3">Submission</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.map((submission) => (
                  <tr key={submission.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium">{submission.name}</div>
                        <div className="text-sm text-zinc-400">{submission.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          submission.type === "creator"
                            ? "bg-green-500/20 text-green-400"
                            : submission.type === "label"
                              ? "bg-purple-500/20 text-purple-400"
                              : submission.type === "contact"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-orange-500/20 text-orange-400"
                        }`}
                      >
                        {submission.type === "track-request" ? "track request" : submission.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">{submission.dateSubmitted}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          submission.status === "responded"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {submission.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setViewingSubmission(submission)}
                          className="p-1 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {submission.status === "pending" && (
                          <button
                            onClick={() => markAsResponded(submission.id)}
                            className="p-1 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30"
                            title="Mark as Responded"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Submission Details Modal */}
      {viewingSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <h3 className="font-bold">Submission Details</h3>
              <button onClick={() => setViewingSubmission(null)} className="p-1 rounded-full hover:bg-zinc-800">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {/* Personal/Contact Information Section */}
              <div className="grid grid-cols-2 gap-4">
                {/* Common fields for all submission types */}
                <div>
                  <p className="text-sm text-zinc-400">Name</p>
                  <p className="font-medium">{viewingSubmission.name}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="font-medium">{viewingSubmission.email}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Date Submitted</p>
                  <p className="font-medium">{viewingSubmission.dateSubmitted}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Status</p>
                  <p className="font-medium capitalize">{viewingSubmission.status}</p>
                </div>

                {/* Creator-specific personal fields */}
                {viewingSubmission.type === "creator" && (
                  <>
                    {viewingSubmission.data.country && (
                      <div>
                        <p className="text-sm text-zinc-400">Country</p>
                        <p className="font-medium">{viewingSubmission.data.country}</p>
                      </div>
                    )}
                    {viewingSubmission.data.age && (
                      <div>
                        <p className="text-sm text-zinc-400">Age</p>
                        <p className="font-medium">{viewingSubmission.data.age}</p>
                      </div>
                    )}
                  </>
                )}

                {/* Label-specific contact fields */}
                {viewingSubmission.type === "label" && (
                  <>
                    {viewingSubmission.data.position && (
                      <div>
                        <p className="text-sm text-zinc-400">Your Position</p>
                        <p className="font-medium">{viewingSubmission.data.position}</p>
                      </div>
                    )}
                    {viewingSubmission.data.phone && (
                      <div>
                        <p className="text-sm text-zinc-400">Phone Number</p>
                        <p className="font-medium">{viewingSubmission.data.phone}</p>
                      </div>
                    )}
                  </>
                )}

                {/* Track request-specific contact fields */}
                {viewingSubmission.type === "track-request" && (
                  <>
                    {viewingSubmission.data.manager && (
                      <div>
                        <p className="text-sm text-zinc-400">Your Shorts Rev Manager</p>
                        <p className="font-medium">{viewingSubmission.data.manager}</p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Form-specific data section */}
              <div className="border-t border-zinc-800 pt-4">
                <h4 className="font-medium mb-2">
                  {viewingSubmission.type === "creator"
                    ? "Creator Application Details"
                    : viewingSubmission.type === "label"
                      ? "Label Information"
                      : viewingSubmission.type === "contact"
                        ? "Message Details"
                        : "Track Request Details"}
                </h4>

                <div className="space-y-3">
                  {Object.entries(viewingSubmission.data).map(([key, value]) => {
                    // Skip fields that are already shown in the top section
                    if (
                      key === "country" ||
                      key === "age" ||
                      (viewingSubmission.type === "label" && (key === "position" || key === "phone")) ||
                      (viewingSubmission.type === "track-request" && key === "manager")
                    ) {
                      return null
                    }

                    // Creator application fields
                    if (viewingSubmission.type === "creator") {
                      return (
                        <div key={key}>
                          <p className="text-sm text-zinc-400">
                            {key === "channelName"
                              ? "Channel Name"
                              : key === "channelUrl"
                                ? "Channel URL"
                                : key === "subscribers"
                                  ? "Subscriber Count"
                                  : key === "contentType"
                                    ? "Content Type/Niche"
                                    : key === "channelDescription"
                                      ? "Channel Description"
                                      : key === "shortsExamples"
                                        ? "Examples of Your Shorts"
                                        : key === "whyJoin"
                                          ? "Why do you want to join the Shorts Rev Creator Program?"
                                          : key === "musicExperience"
                                            ? "What is your experience with music in your content?"
                                            : key === "postingFrequency"
                                              ? "How often do you post Shorts?"
                                              : key}
                          </p>
                          <p className="font-medium">{value as string}</p>
                        </div>
                      )
                    }

                    // Label submission fields
                    else if (viewingSubmission.type === "label") {
                      return (
                        <div key={key}>
                          <p className="text-sm text-zinc-400">
                            {key === "labelName"
                              ? "Label Name"
                              : key === "established"
                                ? "Year Established"
                                : key === "website"
                                  ? "Website"
                                  : key === "catalogSize"
                                    ? "Catalog Size"
                                    : key === "genres"
                                      ? "Genres"
                                      : key === "notableArtists"
                                        ? "Notable Artists"
                                        : key === "distribution"
                                          ? "Distribution Partners"
                                          : key === "rights"
                                            ? "Rights Ownership"
                                            : key === "sampleLinks"
                                              ? "Sample Links"
                                              : key}
                          </p>
                          <p className="font-medium">{value as string}</p>
                        </div>
                      )
                    }

                    // Contact form fields
                    else if (viewingSubmission.type === "contact") {
                      return (
                        <div key={key}>
                          <p className="text-sm text-zinc-400">
                            {key === "subject" ? "Subject" : key === "message" ? "Message" : key}
                          </p>
                          <p className="font-medium">{value as string}</p>
                        </div>
                      )
                    }

                    // Track request fields
                    else if (viewingSubmission.type === "track-request") {
                      return (
                        <div key={key}>
                          <p className="text-sm text-zinc-400">
                            {key === "channelName"
                              ? "Channel Name"
                              : key === "channelUrl"
                                ? "Channel URL"
                                : key === "views"
                                  ? "Average Views"
                                  : key === "libraryExplored"
                                    ? "Have you thoroughly explored our current library?"
                                    : key === "trackCount"
                                      ? "How many tracks are you requesting?"
                                      : key === "genres"
                                        ? "What genres are you looking for?"
                                        : key === "usage"
                                          ? "How will you use these tracks?"
                                          : key === "referenceLink"
                                            ? "Reference Track Link"
                                            : key === "comments"
                                              ? "Additional Comments"
                                              : key}
                          </p>
                          <p className="font-medium">{value as string}</p>
                        </div>
                      )
                    }

                    // Default case
                    return (
                      <div key={key}>
                        <p className="text-sm text-zinc-400">{key}</p>
                        <p className="font-medium">{value as string}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-zinc-800 flex justify-end gap-2">
              {viewingSubmission.status === "pending" && (
                <button
                  onClick={() => {
                    markAsResponded(viewingSubmission.id)
                    setViewingSubmission({ ...viewingSubmission, status: "responded" })
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                >
                  Mark as Responded
                </button>
              )}
              <button
                onClick={() => setViewingSubmission(null)}
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}
