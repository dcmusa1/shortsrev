"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { Heart, Play, Search, X, Upload } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

interface Track {
  id: number
  title: string
  artist: string
  label: string
  genre: string
  duration: string
  isFavorite: boolean
}

export default function CreatorsMusicLibrary() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [selectedTrackTitle, setSelectedTrackTitle] = useState<string | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [libraryExplored, setLibraryExplored] = useState<string>("yes")
  const [tracks, setTracks] = useState<Track[]>([]) // Initialize with an empty array
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const [showGenreDropdown, setShowGenreDropdown] = useState(false)

  const [channelName, setChannelName] = useState<string>("")
  const [channelLink, setChannelLink] = useState<string>("")
  const [last28DaysViews, setLast28DaysViews] = useState<number>(0)
  const [numberOfTracksRequested, setNumberOfTracksRequested] = useState<number>(1)
  const [genreOfTracks, setGenreOfTracks] = useState<string>("")
  const [descriptionOfUsage, setDescriptionOfUsage] = useState<string>("")
  const [referenceTrackLink, setReferenceTrackLink] = useState<string>("")
  const [additionalComments, setAdditionalComments] = useState<string>("")
  const [managerName, setManagerName] = useState<string>("")
  const [emailAddress, setEmailAddress] = useState<string>("")

  const [isClient, setIsClient] = useState(false)
  const [initialTracksLoaded, setInitialTracksLoaded] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Sample music library data with state
    if (!initialTracksLoaded) {
      setTracks([
        {
          id: 1,
          title: "Summer Nights",
          artist: "DJ Horizon",
          label: "Sony Music",
          genre: "Dance/Electronic",
          duration: "2:45",
          isFavorite: true,
        },
        {
          id: 2,
          title: "Midnight Dreams",
          artist: "Luna",
          label: "Universal",
          genre: "Pop",
          duration: "3:12",
          isFavorite: false,
        },
        {
          id: 3,
          title: "Electric Feel",
          artist: "Neon Pulse",
          label: "Warner",
          genre: "Electronic",
          duration: "2:58",
          isFavorite: true,
        },
        {
          id: 4,
          title: "Sunset Vibes",
          artist: "Coastal",
          label: "Indie Label",
          genre: "Chill",
          duration: "3:24",
          isFavorite: false,
        },
        {
          id: 5,
          title: "Urban Flow",
          artist: "City Beats",
          label: "Sony Music",
          genre: "Hip Hop",
          duration: "2:36",
          isFavorite: false,
        },
        {
          id: 6,
          title: "Neon Lights",
          artist: "Glow",
          label: "Universal",
          genre: "Synthwave",
          duration: "3:05",
          isFavorite: false,
        },
        {
          id: 7,
          title: "Ocean Breeze",
          artist: "Wave Riders",
          label: "Indie Label",
          genre: "Ambient",
          duration: "4:12",
          isFavorite: false,
        },
        {
          id: 8,
          title: "City Lights",
          artist: "Urban Vibes",
          label: "Warner",
          genre: "R&B",
          duration: "3:18",
          isFavorite: false,
        },
      ])
      setInitialTracksLoaded(true)
    }
  }, [initialTracksLoaded])

  // Filter tracks based on active tab and search query
  const filteredTracks = tracks
    .filter((track) => activeTab === "all" || (activeTab === "favorites" && track.isFavorite))
    .filter(
      (track) =>
        searchQuery === "" ||
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.genre.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((track) => selectedGenre === null || track.genre === selectedGenre)

  // Toggle favorite status
  const toggleFavorite = (id: number) => {
    setTracks(tracks.map((track) => (track.id === id ? { ...track, isFavorite: !track.isFavorite } : track)))
  }

  // Play track
  const playTrack = (id: number, title: string) => {
    alert(`Playing track: ${title}`)
  }

  // Use track
  const useTrack = useCallback((title: string) => {
    alert(`Selected track "${title}" for use in content`)
  }, [])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // In a real app, you would submit the form data to your backend here
    setTimeout(() => {
      setShowRequestForm(false)
      setFormSubmitted(false)
    }, 3000)
  }

  const handleUseTrack = (title: string) => {
    setSelectedTrackTitle(title)
  }

  const getUniqueGenres = () => {
    const genres = tracks.map((track) => track.genre)
    return [...new Set(genres)]
  }

  return (
    <DashboardLayout portalType="creators">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Music Library</h1>
          <div className="flex gap-2">
            <div className="relative">
              <button
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1 rounded-md text-sm"
                onClick={() => setShowGenreDropdown(!showGenreDropdown)}
              >
                {selectedGenre ? `Genre: ${selectedGenre}` : "Browse by Genre"}
              </button>

              {showGenreDropdown && (
                <div className="absolute right-0 mt-1 w-48 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                      onClick={() => {
                        setSelectedGenre(null)
                        setShowGenreDropdown(false)
                      }}
                    >
                      All Genres
                    </button>
                    {getUniqueGenres().map((genre) => (
                      <button
                        key={genre}
                        className="w-full text-left px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                        onClick={() => {
                          setSelectedGenre(genre)
                          setShowGenreDropdown(false)
                        }}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              onClick={() => setShowRequestForm(true)}
            >
              Request Track
            </button>
          </div>
        </div>

        {/* Tabs and Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex gap-2">
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "all" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
              onClick={() => setActiveTab("all")}
            >
              All Tracks
            </button>
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "favorites" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
              onClick={() => setActiveTab("favorites")}
            >
              Favorites
            </button>
          </div>

          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search tracks..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTracks.map((track) => (
            <div
              key={track.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:bg-zinc-800/50 transition-colors"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-12 h-12 bg-zinc-800 rounded-md flex items-center justify-center cursor-pointer hover:bg-zinc-700"
                    onClick={() => playTrack(track.id, track.title)}
                  >
                    <Play className="h-5 w-5 text-zinc-400" />
                  </div>
                  <button
                    className={`p-1.5 rounded-md ${track.isFavorite ? "text-red-500" : "text-zinc-500 hover:text-zinc-300"}`}
                    onClick={() => toggleFavorite(track.id)}
                  >
                    <Heart className="h-5 w-5" fill={track.isFavorite ? "currentColor" : "none"} />
                  </button>
                </div>

                <h3 className="font-medium text-white truncate">{track.title}</h3>
                <p className="text-sm text-zinc-400 truncate">{track.artist}</p>

                <div className="flex items-center justify-between mt-3 text-xs text-zinc-500">
                  <div>{track.genre}</div>
                  <div>{track.duration}</div>
                </div>
              </div>

              <div className="border-t border-zinc-800 p-3">
                <button
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-xs font-medium flex items-center justify-center gap-1.5"
                  onClick={() => playTrack(track.id, track.title)}
                >
                  <Play className="h-3.5 w-3.5" />
                  Play
                </button>
                <div className="mt-2 w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-600 rounded-full w-0"></div>
                </div>
              </div>
            </div>
          ))}

          {filteredTracks.length === 0 && (
            <div className="col-span-full p-8 text-center text-zinc-500">No tracks found matching your criteria</div>
          )}
        </div>

        {/* Request Track Form Modal */}
        {isClient && showRequestForm && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-3xl w-full">
              <div className="flex items-center justify-between p-4 border-b border-zinc-800 shrink-0">
                <h2 className="text-lg font-medium">Shorts Rev Music Request Form</h2>
                <button className="text-zinc-400 hover:text-white" onClick={() => setShowRequestForm(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center">
                  <div className="mb-4 text-green-500 text-xl">✓</div>
                  <h3 className="text-xl font-medium mb-2">Request Submitted</h3>
                  <p className="text-zinc-400">
                    Thank you for your request. Our team will review it and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col h-full">
                  <div className="overflow-y-auto p-4 space-y-3 flex-grow">
                    <div className="mb-2">
                      <p className="text-zinc-400 text-xs mb-1">
                        Request a track to be added to the Shorts Rev music library. Our team will review your request
                        and add suitable tracks.
                      </p>
                    </div>

                    <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3">
                      <div className="h-[450px] overflow-y-auto pr-2 space-y-5">
                        {/* Channel Name */}
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Channel Name <span className="text-red-500">*</span>
                          </label>
                          <p className="text-xs text-zinc-400 mb-1">
                            Please provide the name of your YouTube Shorts channel that requires the music.
                          </p>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Enter your channel name"
                            value={channelName}
                            onChange={(e) => setChannelName(e.target.value)}
                          />
                        </div>

                        {/* Channel Link */}
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Channel Link <span className="text-red-500">*</span>
                          </label>
                          <p className="text-xs text-zinc-400 mb-1">
                            Please provide the URL to your YouTube Shorts channel.
                          </p>
                          <input
                            type="url"
                            required
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="https://youtube.com/@yourchannel"
                            value={channelLink}
                            onChange={(e) => setChannelLink(e.target.value)}
                          />
                        </div>

                        {/* Last 28 days YT Shorts views */}
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Last 28 days YT Shorts views <span className="text-red-500">*</span>
                          </label>
                          <p className="text-xs text-zinc-400 mb-1">
                            Enter the total number of views your YouTube Shorts channel has received in the last 28 days
                          </p>
                          <input
                            type="number"
                            required
                            min="0"
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Enter a number"
                            value={last28DaysViews}
                            onChange={(e) => setLast28DaysViews(Number(e.target.value))}
                          />
                        </div>

                        {/* Have you thoroughly explored our current library? */}
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Have you thoroughly explored our current library? <span className="text-red-500">*</span>
                          </label>
                          <p className="text-xs text-zinc-400 mb-1">
                            Before making a request, we want to confirm if you've fully explored our current music
                            library
                          </p>
                          <div className="space-y-2">
                            <label className="flex items-center p-2 border border-zinc-700 rounded-md bg-zinc-900">
                              <input
                                type="radio"
                                name="libraryExplored"
                                value="yes"
                                checked={libraryExplored === "yes"}
                                onChange={() => setLibraryExplored("yes")}
                                className="mr-2"
                                required
                              />
                              <span>Yes, I've searched through the entire music library</span>
                            </label>
                            <label className="flex items-center p-2 border border-zinc-700 rounded-md bg-zinc-900">
                              <input
                                type="radio"
                                name="libraryExplored"
                                value="no"
                                checked={libraryExplored === "no"}
                                onChange={() => setLibraryExplored("no")}
                                className="mr-2"
                              />
                              <span>No, I'd like to request new tracks for my content</span>
                            </label>
                          </div>
                        </div>

                        {/* Number of Tracks Requested */}
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Number of Tracks Requested <span className="text-red-500">*</span>
                          </label>
                          <p className="text-xs text-zinc-400 mb-1">
                            Please specify the number of tracks you are requesting for.
                          </p>
                          <input
                            type="number"
                            required
                            min="1"
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Enter a number"
                            value={numberOfTracksRequested}
                            onChange={(e) => setNumberOfTracksRequested(Number(e.target.value))}
                          />
                        </div>

                        {/* Genre of Tracks */}
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Genre of Tracks <span className="text-red-500">*</span>
                          </label>
                          <p className="text-xs text-zinc-400 mb-1">
                            Indicate the genre(s) of the tracks. If you're requesting multiple tracks of different
                            genres, please list all relevant genres.
                          </p>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Pop, Hip Hop, Electronic, etc."
                            value={genreOfTracks}
                            onChange={(e) => setGenreOfTracks(e.target.value)}
                          />
                        </div>

                        {/* Description of Usage */}
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Description of Usage <span className="text-red-500">*</span>
                          </label>
                          <p className="text-xs text-zinc-400 mb-1">
                            Briefly describe the project or scenario where you plan to use these tracks (you may also
                            include links to sample videos from your project)
                          </p>
                          <textarea
                            required
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 min-h-[100px]"
                            placeholder="Describe how you'll use the music in your content"
                            value={descriptionOfUsage}
                            onChange={(e) => setDescriptionOfUsage(e.target.value)}
                          ></textarea>
                        </div>

                        {/* Reference Tracks */}
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Reference Tracks <span className="text-red-500">*</span>
                          </label>
                          <p className="text-xs text-zinc-400 mb-1">
                            Please upload tracks that you've used before in your project and which seem suitable but are
                            missing from Shorts Rev library. This will help us understand the type of music you're
                            looking for.
                          </p>
                          <div className="border border-dashed border-zinc-700 rounded-md p-4 text-center bg-zinc-800/50">
                            <Upload className="h-6 w-6 mx-auto mb-2 text-zinc-500" />
                            <button
                              type="button"
                              className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm hover:bg-zinc-700 transition"
                              onClick={() => document.getElementById("file-upload")?.click()}
                            >
                              Select files...
                            </button>
                            <input id="file-upload" type="file" multiple accept="audio/*" className="hidden" />
                            <p className="mt-2 text-xs text-zinc-500">or drag and drop files here</p>
                          </div>
                        </div>

                        {/* Reference Track Link */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Reference Track Link</label>
                          <p className="text-xs text-zinc-400 mb-1">
                            If you have a link(s) to the track(s) you previously used, please attach it. Otherwise,
                            please leave this field blank
                          </p>
                          <input
                            type="url"
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="https://example.com/track"
                            value={referenceTrackLink}
                            onChange={(e) => setReferenceTrackLink(e.target.value)}
                          />
                        </div>

                        {/* Additional Comments */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Additional Comments</label>
                          <p className="text-xs text-zinc-400 mb-1">
                            Include any other details or specific requirements you have for the requested music.
                          </p>
                          <textarea
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 min-h-[80px]"
                            placeholder="Any additional information"
                            value={additionalComments}
                            onChange={(e) => setAdditionalComments(e.target.value)}
                          ></textarea>
                        </div>

                        {/* Manager Name */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Manager Name</label>
                          <p className="text-xs text-zinc-400 mb-1">
                            Please provide the name of the manager you discussed participation in the Shorts Rev+
                            program with.
                          </p>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Manager name (if applicable)"
                            value={managerName}
                            onChange={(e) => setManagerName(e.target.value)}
                          />
                        </div>

                        {/* Email address */}
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Email address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="your@email.com"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-zinc-800 flex justify-end gap-3 shrink-0">
                    <button
                      type="button"
                      className="px-4 py-2 border border-zinc-700 rounded-md hover:bg-zinc-800 transition"
                      onClick={() => setShowRequestForm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
        {selectedTrackTitle && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-900 rounded-lg w-full max-w-md p-6">
              <h3 className="text-lg font-bold mb-4">Use Track Confirmation</h3>
              <p className="text-zinc-400 mb-4">
                You have selected the track: <span className="font-medium text-white">{selectedTrackTitle}</span>.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-md text-xs font-medium"
                  onClick={() => setSelectedTrackTitle(null)}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-xs font-medium"
                  onClick={() => {
                    if (selectedTrackTitle) {
                      useTrack(selectedTrackTitle)
                    }
                    setSelectedTrackTitle(null)
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
