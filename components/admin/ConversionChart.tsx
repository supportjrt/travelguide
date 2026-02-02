"use client"

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts'
import { Lead } from '@/hooks/useLeads'

interface ConversionChartProps {
  leads: Lead[] | undefined
  range: 'Weekly' | 'Monthly'
}

export function ConversionChart({ leads, range }: ConversionChartProps) {
  // Aggregate leads
  const processData = (leads: Lead[] | undefined, range: 'Weekly' | 'Monthly') => {
    if (!leads) return []
    
    if (range === 'Weekly') {
      // Last 7 days, Mon-Sun
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const counts = new Array(7).fill(0)
      
      leads.forEach(lead => {
        const date = new Date(lead.created_at)
        // In real app, check if within this week
        const dayIndex = date.getDay()
        counts[dayIndex]++
      })

      return [
        { name: 'Mon', count: counts[1] },
        { name: 'Tue', count: counts[2] },
        { name: 'Wed', count: counts[3] },
        { name: 'Thu', count: counts[4] },
        { name: 'Fri', count: counts[5] },
        { name: 'Sat', count: counts[6] },
        { name: 'Sun', count: counts[0] },
      ]
    } else {
      // Monthly: Group by week (last 4 weeks)
      // For simplicity/demo with sparse data, let's just show Week 1-4 based on day of month
      // 1-7, 8-14, 15-21, 22-31
      const counts = [0, 0, 0, 0]
      
      leads.forEach(lead => {
        const date = new Date(lead.created_at)
        const day = date.getDate()
        if (day <= 7) counts[0]++
        else if (day <= 14) counts[1]++
        else if (day <= 21) counts[2]++
        else counts[3]++
      })
      
      return [
        { name: 'Week 1', count: counts[0] },
        { name: 'Week 2', count: counts[1] },
        { name: 'Week 3', count: counts[2] },
        { name: 'Week 4+', count: counts[3] },
      ]
    }
  }

  const data = processData(leads, range)
  const totalLeads = leads?.length || 0

  return (
    <div className="h-[300px] w-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            tickMargin={10}
            interval={0} // Force all labels to show
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend 
             align="center"
             verticalAlign="bottom"
             iconType="circle"
             wrapperStyle={{ paddingTop: '20px' }}
          />
          <Area 
            type="monotone" 
            dataKey="count" 
            name="Total Leads" 
            stroke="#0ea5e9" 
            fillOpacity={1} 
            fill="url(#colorLeads)" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-4 px-4 flex items-center justify-between border-t border-gray-50 pt-4">
        <div>
          <p className="text-xs text-gray-500">Total Leads (All Time)</p>
          <p className="text-2xl font-bold text-blue-500">{totalLeads}</p>
        </div>
        <div className="text-xs text-gray-400">
           Leads by Day of Week
        </div>
      </div>
    </div>
  )
}
