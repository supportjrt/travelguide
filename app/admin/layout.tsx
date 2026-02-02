import Image from "next/image";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/images/logo/Jaya-Travel-Tours-Logo-200x64.webp"
              alt="Jaya Travel & Tours"
              width={200}
              height={64}
              priority
              className="object-contain"
            />
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
             <span className="cursor-pointer hover:text-orange-500 transition-colors">Dashboard</span>
             <span className="cursor-pointer hover:text-orange-500 transition-colors">Leads</span>
             <span className="cursor-pointer hover:text-orange-500 transition-colors">Settings</span>
          </nav>
        </div>
      </header>
      
      {/* Hero Banner */}
      <div className="bg-gray-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold  mb-2">Welcome back, Admin</h1>
          <p className="text-gray-300">Manage your leads, tours, and bookings efficiently.</p>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Jaya Travels Admin Panel
        </div>
      </footer>
    </div>
  );
}
