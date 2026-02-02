"use client"

import { useState } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface DashboardCardProps {
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}

export function DashboardCard({ title, children, action }: DashboardCardProps) {
  const [isMaximized, setIsMaximized] = useState(false)

  return (
    <>
      {/* Overlay when maximized */}
      {isMaximized && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMaximized(false)}
        />
      )}
      
      <div 
        className={cn(
          "bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 flex flex-col",
          isMaximized 
            ? "fixed inset-4 z-50 h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] m-auto" 
            : "relative h-full"
        )}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2">
            {/* Optional Icon could go here */}
            <h3 className="font-bold text-lg text-gray-800 font-serif">{title}</h3>
          </div>
          
          <div className="flex items-center gap-3">
            {action}
            <button 
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
              title={isMaximized ? "Minimize" : "Maximize"}
            >
              {isMaximized ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
          </div>
        </div>
        
        <div className="p-0 flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </>
  )
}
