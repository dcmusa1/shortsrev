import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, BarChart, Users, Shield, Music, Mic } from "lucide-react"
// Import SiteHeader with dynamic import to handle any potential issues
import { SiteHeader } from "@/components/site-header"
import Image from "next/image"

export default function CreatorApplicationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navigation */}
      <SiteHeader />

      {/* Main Content */}
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-4 text-center">
              <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Creator Application</h1>
              <p className="text-zinc-400 md:text-xl max-w-2xl mx-auto">
                Apply to join our Creator Program and get paid to promote music in your YouTube Shorts
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              <Tabs defaultValue="submission" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-zinc-800/50 border border-zinc-700 rounded-lg mb-8">
                  <TabsTrigger value="submission">Application</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                </TabsList>

                <TabsContent value="submission" className="space-y-8">
                  <Card className="bg-zinc-900/50 border-zinc-800">
                    <CardHeader>
                      <CardTitle>Creator Application</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Complete this form to apply for our Creator Program
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-8">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">Channel Information</h3>
                          </div>

                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="channel-name">Channel Name</Label>
                              <Input
                                id="channel-name"
                                placeholder="Your YouTube Channel Name"
                                className="bg-zinc-800 border-zinc-700"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="channel-url">Channel URL</Label>
                              <Input
                                id="channel-url"
                                placeholder="https://youtube.com/c/yourchannel"
                                className="bg-zinc-800 border-zinc-700"
                              />
                            </div>
                          </div>

                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="subscribers">Subscriber Count</Label>
                              <Input
                                id="subscribers"
                                placeholder="e.g. 10000"
                                className="bg-zinc-800 border-zinc-700"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="content-type">Primary Content Type</Label>
                              <Select>
                                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                                  <SelectValue placeholder="Select content type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="entertainment">Entertainment</SelectItem>
                                  <SelectItem value="music">Music</SelectItem>
                                  <SelectItem value="gaming">Gaming</SelectItem>
                                  <SelectItem value="education">Education</SelectItem>
                                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                                  <SelectItem value="comedy">Comedy</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="channel-description">Channel Description</Label>
                            <Textarea
                              id="channel-description"
                              placeholder="Briefly describe your channel and content"
                              className="min-h-[100px] bg-zinc-800 border-zinc-700"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="shorts-examples">Examples of Your Shorts</Label>
                            <Textarea
                              id="shorts-examples"
                              placeholder="Paste links to 3-5 of your best YouTube Shorts"
                              className="min-h-[100px] bg-zinc-800 border-zinc-700"
                            />
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">Personal Information</h3>
                          </div>

                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input id="name" placeholder="Your Name" className="bg-zinc-800 border-zinc-700" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="bg-zinc-800 border-zinc-700"
                              />
                            </div>
                          </div>

                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="country">Country</Label>
                              <Input id="country" placeholder="Your Country" className="bg-zinc-800 border-zinc-700" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="age">Age</Label>
                              <Input id="age" placeholder="Your Age" className="bg-zinc-800 border-zinc-700" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">Additional Information</h3>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="why-join">Why do you want to join our Creator Program?</Label>
                            <Textarea
                              id="why-join"
                              placeholder="Tell us why you're interested in joining our program"
                              className="min-h-[100px] bg-zinc-800 border-zinc-700"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="music-experience">Experience with Music in Content</Label>
                            <Textarea
                              id="music-experience"
                              placeholder="Describe your experience using music in your content"
                              className="min-h-[100px] bg-zinc-800 border-zinc-700"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="posting-frequency">How often do you post Shorts?</Label>
                            <Select>
                              <SelectTrigger className="bg-zinc-800 border-zinc-700">
                                <SelectValue placeholder="Select posting frequency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="several-times-week">Several times a week</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="several-times-month">Several times a month</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="less-frequently">Less frequently</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Checkbox id="terms" className="mt-1" />
                            <div className="space-y-1 leading-none">
                              <Label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                I agree to the terms and conditions
                              </Label>
                              <p className="text-xs text-zinc-500">
                                By submitting this application, you agree to our{" "}
                                <Link href="/terms" className="text-red-400 hover:text-red-300">
                                  Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-red-400 hover:text-red-300">
                                  Privacy Policy
                                </Link>
                                .
                              </p>
                            </div>
                          </div>
                        </div>

                        <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                          Submit Application
                        </Button>
                      </form>
                    </CardContent>
                    <CardFooter className="border-t border-zinc-800 pt-6 flex justify-between">
                      <p className="text-sm text-zinc-500">Application review typically takes 1-2 business days</p>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="benefits" className="space-y-4">
                  <Card className="bg-zinc-900/50 border-zinc-800">
                    <CardHeader>
                      <CardTitle>Creator Program Benefits</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Why creators choose to partner with Shorts Rev
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex gap-4">
                          <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <DollarSign className="h-5 w-5 text-red-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Monetization Opportunities</h3>
                            <p className="text-zinc-400 text-sm">
                              Earn revenue through official music promotions and partnerships
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Music className="h-5 w-5 text-red-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Premium Music Access</h3>
                            <p className="text-zinc-400 text-sm">
                              Access thousands of licensed popular tracks from major labels and independent artists
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Shield className="h-5 w-5 text-red-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Legal Protection</h3>
                            <p className="text-zinc-400 text-sm">
                              Create with confidence with access to licensed music that minimizes copyright risks
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <BarChart className="h-5 w-5 text-red-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Analytics & Insights</h3>
                            <p className="text-zinc-400 text-sm">
                              Access detailed performance metrics and insights to optimize your content strategy
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Users className="h-5 w-5 text-red-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Promotional Opportunities</h3>
                            <p className="text-zinc-400 text-sm">
                              Get featured in promotional campaigns and brand collaborations to grow your audience
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mic className="h-5 w-5 text-red-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Artist Collaborations</h3>
                            <p className="text-zinc-400 text-sm">
                              Collaborate with top artists to promote their music and boost your channel’s growth
                              through official partnerships"
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
                      <CardTitle>Shorts Rev Requirements</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Eligibility criteria for the Creator Program
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs font-bold">1</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Minimum Views</h3>
                            <p className="text-zinc-400 text-sm">
                              5M+ Views in the last 28 days on your YouTube Shorts
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs font-bold">2</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Minimum Content</h3>
                            <p className="text-zinc-400 text-sm">At least 6 Shorts published on your YouTube channel</p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs font-bold">3</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Transformative Content</h3>
                            <p className="text-zinc-400 text-sm">
                              Your content must add significant value beyond the music itself
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs font-bold">4</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Original Content Only</h3>
                            <p className="text-zinc-400 text-sm">
                              All content must be ORIGINAL (No Movie Clips or repurposed content)
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs font-bold">5</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Exclusivity</h3>
                            <p className="text-zinc-400 text-sm">
                              Once signed, you can NOT use any other songs/audio (Sound effects are okay)
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs font-bold">6</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Music Selection</h3>
                            <p className="text-zinc-400 text-sm">
                              Shorts Rev has a massive catalog with songs for every type of short
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="border-t border-zinc-800 pt-6 flex flex-col items-start">
                      <h4 className="font-medium mb-2">Application Process</h4>
                      <ol className="space-y-2 text-sm text-zinc-400">
                        <li>1. Complete the creator application form</li>
                        <li>2. Our team reviews your application (typically 2-3 business days)</li>
                        <li>3. If approved, you'll receive contract and onboarding details</li>
                        <li>4. Set up your account and access our music library</li>
                        <li>5. Start creating content and earning revenue</li>
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
          {/* Use a more reliable approach for the logo */}
          <Link href="/" className="inline-block">
            <span className="sr-only">Shorts Rev</span>
            <Image
              src={"/logo-wordmark.png"}
              alt="Shorts Rev"
              width={180}
              height={50}
              className="h-8 w-auto mx-auto mb-4"
              priority
            />
          </Link>
          <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Shorts Rev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
