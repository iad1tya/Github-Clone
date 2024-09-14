import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Book, ChevronDown, GitBranch, GitFork, Plus, Star } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <GitBranch className="h-8 w-8" />
            <Input className="w-64 bg-gray-800 border-gray-700" placeholder="Search or jump to..." />
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-gray-300">Pull requests</a>
              <a href="#" className="hover:text-gray-300">Issues</a>
              <a href="#" className="hover:text-gray-300">Marketplace</a>
              <a href="#" className="hover:text-gray-300">Explore</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5" />
            <div className="flex items-center space-x-1">
              <Plus className="h-5 w-5" />
              <ChevronDown className="h-4 w-4" />
            </div>
            <img
              alt="User avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg?height=32&width=32"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Repositories</h1>
        <div className="grid gap-4">
          {[
            { name: "react", description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.", stars: 189000, forks: 39100 },
            { name: "vue", description: "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.", stars: 200000, forks: 33000 },
            { name: "angular", description: "One framework. Mobile & desktop.", stars: 86000, forks: 22800 },
          ].map((repo) => (
            <div key={repo.name} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-blue-600">{repo.name}</h2>
                <Button variant="outline" size="sm">
                  <Star className="mr-2 h-4 w-4" />
                  Star
                </Button>
              </div>
              <p className="text-gray-600 mb-4">{repo.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4" />
                  {repo.stars.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <GitFork className="mr-1 h-4 w-4" />
                  {repo.forks.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <Book className="mr-1 h-4 w-4" />
                  MIT License
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-900">About</a>
              <a href="#" className="hover:text-gray-900">Blog</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Privacy</a>
            </div>
            <div>© 2023 GitHub Clone, Inc.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}