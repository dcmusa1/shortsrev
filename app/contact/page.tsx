import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function ContactPage() {
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="text-zinc-400 md:text-xl max-w-2xl mx-auto">
                Get in touch with our team for any questions or inquiries
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card className="bg-zinc-900/50 border-zinc-800">
                    <CardHeader>
                      <CardTitle>Send Us a Message</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Fill out the form below and we'll get back to you as soon as possible
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
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

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select>
                            <SelectTrigger className="bg-zinc-800 border-zinc-700">
                              <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="creator">Creator Support</SelectItem>
                              <SelectItem value="label">Label Partnership</SelectItem>
                              <SelectItem value="technical">Technical Support</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Your message here..."
                            className="min-h-[150px] bg-zinc-800 border-zinc-700"
                          />
                        </div>

                        <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-red-500/20 w-10 h-10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-bold">Email Us</h3>
                        <p className="text-zinc-400">contact@shortsrev.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold">Email Addresses</h3>
                      <p className="text-zinc-400">General: contact@shortsrev.com</p>
                      <p className="text-zinc-400">Support: support@shortsrev.com</p>
                      <p className="text-zinc-400">Business: business@shortsrev.com</p>
                      <p className="text-zinc-400">Legal: legal@shortsrev.com</p>
                    </div>
                  </Card>

                  <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold">Company Information</h3>
                      <p className="text-zinc-400">Based in the United States</p>
                      <p className="text-zinc-400">30 N Gould St, Sheridan, WY 82801, USA</p>
                      <p className="text-zinc-400">CEO: Louis R. (louis@shortsrev.com)</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/color-wordmark-transparent.png"
            alt="Shorts Rev Logo"
            width={240}
            height={80}
            className="h-16 w-auto mx-auto mb-4"
          />
          <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Shorts Rev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
