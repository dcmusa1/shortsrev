import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, BarChart, Users, Globe } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function LabelSubmissionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navigation */}
      <SiteHeader />

      {/* Main Content */}
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
                Artist & Label Partners
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Artist & Label Partnership Program
              </h1>
              <p className="text-zinc-400 md:text-xl max-w-2xl mx-auto">
                Join our network of artists and labels promoting their music on YouTube Shorts
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl">
              <Tabs defaultValue="submission" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-zinc-800/50 border border-zinc-700 rounded-lg mb-8">
                  <TabsTrigger value="submission">Music Submission</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                </TabsList>

                <TabsContent value="submission" className="space-y-8">
                  <Card className="bg-zinc-900/50 border-zinc-800">
                    <CardHeader>
                      <CardTitle>Submit Your Music</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Complete this form to apply for our artist & label partnership program
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-8">
                        <div className="space-y-6">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="label-name">Artist/Label Name</Label>
                              <Input
                                id="label-name"
                                placeholder="Your Artist or Label Name"
                                className="bg-zinc-800 border-zinc-700"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="established">Year Established</Label>
                              <Input id="established" placeholder="e.g. 2018" className="bg-zinc-800 border-zinc-700" />
                            </div>
                          </div>

                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="website">Website</Label>
                              <Input
                                id="website"
                                placeholder="https://yourlabel.com"
                                className="bg-zinc-800 border-zinc-700"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="catalog-size">Catalog Size</Label>
                              <Select defaultValue="medium">
                                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                                  <SelectValue placeholder="Select catalog size" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="small">Less than 100 tracks</SelectItem>
                                  <SelectItem value="medium">100-1,000 tracks</SelectItem>
                                  <SelectItem value="large">1,000-10,000 tracks</SelectItem>
                                  <SelectItem value="xlarge">10,000+ tracks</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="genres">Primary Genres</Label>
                            <div className="flex flex-wrap gap-2">
                              {["Pop", "Hip Hop", "Electronic", "Rock", "R&B", "Country", "Latin", "Other"].map(
                                (genre) => (
                                  <div key={genre} className="flex items-center space-x-2">
                                    <Checkbox id={`genre-${genre.toLowerCase().replace(" ", "-")}`} />
                                    <Label
                                      htmlFor={`genre-${genre.toLowerCase().replace(" ", "-")}`}
                                      className="text-sm"
                                    >
                                      {genre}
                                    </Label>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="notable-artists">Notable Artists (up to 5)</Label>
                            <Textarea
                              id="notable-artists"
                              placeholder="List your most notable artists"
                              className="min-h-[80px] bg-zinc-800 border-zinc-700"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="distribution">Current Distribution Partners</Label>
                            <Textarea
                              id="distribution"
                              placeholder="e.g. DistroKid, CD Baby, Tunecore, etc."
                              className="min-h-[80px] bg-zinc-800 border-zinc-700"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="rights">Rights Management</Label>
                            <Select defaultValue="owned">
                              <SelectTrigger className="bg-zinc-800 border-zinc-700">
                                <SelectValue placeholder="Select rights management" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="owned">Fully Owned</SelectItem>
                                <SelectItem value="licensed">Licensed</SelectItem>
                                <SelectItem value="mixed">Mixed Ownership</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">Contact Information</h3>
                          </div>

                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input id="name" placeholder="Your Name" className="bg-zinc-800 border-zinc-700" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="position">Position</Label>
                              <Input id="position" placeholder="Your Role" className="bg-zinc-800 border-zinc-700" />
                            </div>
                          </div>

                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="bg-zinc-800 border-zinc-700"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone</Label>
                              <Input
                                id="phone"
                                placeholder="Your Phone Number"
                                className="bg-zinc-800 border-zinc-700"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">Catalog Samples</h3>
                            <p className="text-sm text-zinc-400">Provide links to sample tracks from your catalog</p>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="sample-links">Sample Links</Label>
                            <Textarea
                              id="sample-links"
                              placeholder="Paste links to YouTube, Spotify, SoundCloud, etc."
                              className="min-h-[80px] bg-zinc-800 border-zinc-700"
                            />
                          </div>

                          <div className="flex items-start space-x-2">
                            <Checkbox id="terms" className="mt-1" />
                            <div className="space-y-1 leading-none">
                              <Label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                I confirm I have the rights to submit this catalog
                              </Label>
                              <p className="text-xs text-zinc-500">
                                By submitting this form, you confirm you have the necessary rights to the music catalog
                                and agree to our terms of service.
                              </p>
                            </div>
                          </div>
                        </div>

                        <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                          Submit Music Application
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="benefits" className="space-y-4">
                  <Card className="bg-zinc-900/50 border-zinc-800">
                    <CardHeader>
                      <CardTitle>Artist & Label Partnership Benefits</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Why artists and labels choose to partner with Shorts Rev
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex gap-4">
                          <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <DollarSign className="h-5 w-5 text-red-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">New Revenue Stream</h3>
                            <p className="text-zinc-400 text-sm">
                              Unlock additional revenue from your catalog through YouTube Shorts monetization
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <BarChart className="h-5 w-5 text-red-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Advanced Analytics</h3>
                            <p className="text-zinc-400 text-sm">
                              Detailed performance metrics and insights on how your catalog performs
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Users className="h-5 w-5 text-red-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Creator Exposure</h3>
                            <p className="text-zinc-400 text-sm">
                              Expand your audience as creators use your music in viral Shorts content
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Globe className="h-5 w-5 text-red-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Global Reach</h3>
                            <p className="text-zinc-400 text-sm">
                              Access to our worldwide network of YouTube Shorts creators
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="requirements" className="space-y-4">
                  <Card className="bg-zinc-900/50 border-zinc-800">
                    <CardHeader>
                      <CardTitle>Music Requirements</CardTitle>
                      <CardDescription className="text-zinc-400">What we look for in music partners</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs font-bold">1</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Clear Rights Ownership</h3>
                            <p className="text-zinc-400 text-sm">
                              You must own or have proper licenses for all submitted music
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs font-bold">2</span>
                          </div>
                          <div>
                            <h3 className="font-medium">High-Quality Audio</h3>
                            <p className="text-zinc-400 text-sm">
                              All tracks must be professionally produced with high-quality audio (minimum 320kbps)
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs font-bold">3</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Complete Metadata</h3>
                            <p className="text-zinc-400 text-sm">
                              Accurate and complete metadata for all tracks including ISRC codes where applicable
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs font-bold">4</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Exclusive Partnership</h3>
                            <p className="text-zinc-400 text-sm">
                              For YouTube Shorts monetization, we require exclusivity for submitted tracks
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="border-t border-zinc-800 pt-6 flex flex-col items-start">
                      <h4 className="font-medium mb-2">Submission Process</h4>
                      <ol className="space-y-2 text-sm text-zinc-400">
                        <li>1. Complete the label submission form</li>
                        <li>2. Our team reviews your application (typically 3-5 business days)</li>
                        <li>3. If approved, you'll receive contract and onboarding details</li>
                        <li>4. Upload your catalog through our secure portal</li>
                        <li>5. Start earning royalties as creators use your music</li>
                      </ol>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <div
            className="h-8 mx-auto mb-4 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/logo-wordmark.png')",
              width: "180px",
            }}
            aria-label="Shorts Rev Logo"
          ></div>
          <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Shorts Rev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
