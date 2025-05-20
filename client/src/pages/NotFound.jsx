
import React from 'react'

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-lg">Page not found.</p>
      <a href="/" className="text-emerald-600 hover:underline">
        Go back home
      </a>
    </div>
  )
}
