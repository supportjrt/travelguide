"use client";

import { useState } from 'react';

import { useLeads } from '@/hooks/useLeads';
import { DashboardCard } from '@/components/admin/DashboardCard';
import { RecentLeads } from '@/components/admin/RecentLeads';
import { ConversionChart } from '@/components/admin/ConversionChart';


export default function LeadManagementPage() {
  const { data: leads, isLoading, isError } = useLeads();
  const [chartRange, setChartRange] = useState<'Weekly' | 'Monthly'>('Weekly');
  
  if (isLoading) return <div className="text-center p-10 text-gray-600">Loading leads...</div>;
  if (isError) return <div className="text-center p-10 text-red-500">Error loading leads</div>;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold font-serif text-gray-800">Lead Management</h2>
          <p className="text-gray-500 text-sm mt-1">View and manage customer inquiries</p>
        </div>
        <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium border border-orange-200">
          Total Leads: {leads?.length || 0}
        </div>
      </div>

      {/* Dashboard Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Recent Leads" action={<div />}>
            <RecentLeads leads={leads} />
        </DashboardCard>
        
        <DashboardCard 
            title="Conversion Trends" 
            action={
                <div className="flex bg-gray-100 p-1 rounded-lg text-xs font-medium">
                    <button 
                      onClick={() => setChartRange('Weekly')}
                      className={`px-3 py-1 rounded-md transition-all ${chartRange === 'Weekly' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Weekly
                    </button>
                    <button 
                      onClick={() => setChartRange('Monthly')}
                      className={`px-3 py-1 rounded-md transition-all ${chartRange === 'Monthly' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Monthly
                    </button>
                </div>
            }
        >
            <ConversionChart leads={leads} range={chartRange} />
        </DashboardCard>
      </div>
    </div>
  );
}
