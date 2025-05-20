"use client"

import type React from "react"

import { useState } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import { Upload, CheckCircle, AlertCircle, BarChart3, DollarSign, Eye, Video, User, FileText } from "lucide-react"

export default function DataImportPage() {
  const [file, setFile] = useState<File | null>(null)
  const [importType, setImportType] = useState("views")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<null | "success" | "error">(null)
  const [uploadMessage, setUploadMessage] = useState("")
  const [previewData, setPreviewData] = useState<any[]>([])
  const [showExample, setShowExample] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    setUploadStatus(null)

    if (selectedFile) {
      // Generate random data based on import type
      const mockEmails = [
        "creator1@example.com",
        "creator2@example.com",
        "creator3@example.com",
        "creator4@example.com",
        "creator5@example.com",
      ]

      const mockPreviewData = mockEmails.slice(0, 3).map((email) => {
        let value
        switch (importType) {
          case "views":
            value = Math.floor(Math.random() * 20000)
            break
          case "revenue":
            value = Math.floor(Math.random() * 1000) / 4
            break
          case "subscribers":
            value = Math.floor(Math.random() * 100000)
            break
          case "engagement":
            value = Math.floor(Math.random() * 200) / 10
            break
          default:
            value = Math.floor(Math.random() * 1000)
        }
        return { email, value }
      })

      setPreviewData(mockPreviewData)
    } else {
      setPreviewData([])
    }
  }

  const handleImportTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newImportType = e.target.value
    setImportType(newImportType)

    // Update preview data based on new import type if file is selected
    if (file && previewData.length > 0) {
      const updatedPreviewData = previewData.map((item) => {
        let value
        switch (newImportType) {
          case "views":
            value = Math.floor(Math.random() * 20000)
            break
          case "revenue":
            value = Math.floor(Math.random() * 1000) / 4
            break
          case "subscribers":
            value = Math.floor(Math.random() * 100000)
            break
          case "engagement":
            value = Math.floor(Math.random() * 200) / 10
            break
          default:
            value = Math.floor(Math.random() * 1000)
        }
        return { ...item, value }
      })

      setPreviewData(updatedPreviewData)
    }
  }

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setIsUploading(true)

    // Simulate API call with timeout
    setTimeout(() => {
      setIsUploading(false)
      setUploadStatus("success")
      setUploadMessage(`Successfully imported ${importType} data for ${previewData.length} users`)

      // In a real app, you would handle the actual upload here
    }, 2000)
  }

  const toggleExample = () => {
    setShowExample(!showExample)
  }

  const handleValueChange = (index: number, newValue: string) => {
    const updatedPreviewData = [...previewData]

    // Convert to appropriate format based on import type
    let parsedValue: number
    if (importType === "revenue" || importType === "engagement") {
      parsedValue = Number.parseFloat(newValue) || 0
    } else {
      parsedValue = Number.parseInt(newValue) || 0
    }

    updatedPreviewData[index] = {
      ...updatedPreviewData[index],
      value: parsedValue,
    }

    setPreviewData(updatedPreviewData)
  }

  // Example CSV content based on import type
  const getExampleCSV = () => {
    switch (importType) {
      case "views":
        return `email,views
creator1@example.com,12500
creator2@example.com,8700
creator3@example.com,15200
creator4@example.com,5600
creator5@example.com,22300`
      case "revenue":
        return `email,revenue
creator1@example.com,450.75
creator2@example.com,320.50
creator3@example.com,580.25
creator4@example.com,125.80
creator5@example.com,780.45`
      case "subscribers":
        return `email,subscribers
creator1@example.com,45000
creator2@example.com,12300
creator3@example.com,78500
creator4@example.com,5600
creator5@example.com,32100`
      case "engagement":
        return `email,engagement
creator1@example.com,8.5
creator2@example.com,12.3
creator3@example.com,6.7
creator4@example.com,9.2
creator5@example.com,15.8`
      default:
        return `email,value
creator1@example.com,value1
creator2@example.com,value2
creator3@example.com,value3`
    }
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Data Import</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Import Settings</h2>

              <form onSubmit={handleUpload} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Import Type</label>
                  <select
                    value={importType}
                    onChange={handleImportTypeChange}
                    className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="views">Views</option>
                    <option value="revenue">Revenue</option>
                    <option value="subscribers">Subscribers</option>
                    <option value="engagement">Engagement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">CSV File</label>
                  <div className="border-2 border-dashed border-zinc-700 rounded-lg p-6 text-center">
                    <input type="file" accept=".csv" onChange={handleFileChange} className="hidden" id="file-upload" />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-zinc-500" />
                      <p className="mt-2 text-sm text-zinc-400">
                        {file ? file.name : "Click to upload or drag and drop"}
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">CSV files only</p>
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!file || isUploading}
                    className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50"
                  >
                    {isUploading ? "Uploading..." : "Upload and Process"}
                  </button>
                </div>
              </form>

              {uploadStatus && (
                <div
                  className={`mt-4 p-3 rounded-md ${
                    uploadStatus === "success" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}
                >
                  <div className="flex items-center">
                    {uploadStatus === "success" ? (
                      <CheckCircle className="h-5 w-5 mr-2" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mr-2" />
                    )}
                    <p>{uploadMessage}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">CSV Example</h2>
                <button
                  onClick={toggleExample}
                  className="text-sm text-blue-400 hover:text-blue-300 focus:outline-none"
                >
                  {showExample ? "Hide Example" : "Show Example"}
                </button>
              </div>

              {showExample && (
                <div className="bg-zinc-800 p-4 rounded-lg overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <FileText className="h-5 w-5 mr-2 text-zinc-400" />
                    <span className="text-sm font-medium">Example {importType}.csv</span>
                  </div>
                  <pre className="text-xs text-zinc-300 whitespace-pre-wrap font-mono">{getExampleCSV()}</pre>
                </div>
              )}

              <div className="space-y-3 text-sm text-zinc-400 mt-4">
                <p>• CSV file must include a header row</p>
                <p>• First column must be the user's email address</p>
                <p>• Second column must contain the value to import</p>
                <p>• For views and subscribers, use whole numbers</p>
                <p>• For revenue, use decimal numbers (e.g., 123.45)</p>
                <p>• Maximum file size: 10MB</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Data Preview</h2>
                <div className="flex items-center">
                  {importType === "views" && <Eye className="h-5 w-5 mr-2 text-blue-400" />}
                  {importType === "revenue" && <DollarSign className="h-5 w-5 mr-2 text-green-400" />}
                  {importType === "subscribers" && <User className="h-5 w-5 mr-2 text-purple-400" />}
                  {importType === "engagement" && <BarChart3 className="h-5 w-5 mr-2 text-yellow-400" />}
                  <span className="text-sm font-medium capitalize">{importType}</span>
                </div>
              </div>

              {previewData.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-zinc-800">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                          {importType === "views"
                            ? "Views"
                            : importType === "revenue"
                              ? "Revenue ($)"
                              : importType === "subscribers"
                                ? "Subscribers"
                                : "Engagement (%)"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {previewData.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {importType === "revenue" ? (
                              <div className="flex items-center">
                                <span className="mr-1">$</span>
                                <input
                                  type="number"
                                  value={item.value}
                                  onChange={(e) => handleValueChange(index, e.target.value)}
                                  className="bg-transparent border-b border-zinc-700 focus:border-red-500 outline-none w-20 px-1"
                                  step={0.01}
                                />
                              </div>
                            ) : importType === "engagement" ? (
                              <div className="flex items-center">
                                <input
                                  type="number"
                                  value={item.value}
                                  onChange={(e) => handleValueChange(index, e.target.value)}
                                  className="bg-transparent border-b border-zinc-700 focus:border-red-500 outline-none w-16 px-1"
                                  step={0.1}
                                />
                                <span className="ml-1">%</span>
                              </div>
                            ) : (
                              <input
                                type="number"
                                value={item.value}
                                onChange={(e) => handleValueChange(index, e.target.value)}
                                className="bg-transparent border-b border-zinc-700 focus:border-red-500 outline-none w-24 px-1"
                              />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12 text-zinc-500">
                  <Video className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>Upload a CSV file to preview data</p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-6">
              <h2 className="text-lg font-bold mb-4">Recent Imports</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-800">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                        Records
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Apr 5, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Revenue</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">1,245</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Apr 1, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Views</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">1,245</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Mar 28, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Subscribers</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">1,245</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
