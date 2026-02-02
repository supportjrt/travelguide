"use client"

import { useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme CSS
import "@/app/admin/lead-management/grid.css"; // Custom overrides

import { 
  ColDef, 
  ModuleRegistry, 
  ClientSideRowModelModule, 
  ValidationModule, 
  TextFilterModule, 
  NumberFilterModule, 
  DateFilterModule, 
  PaginationModule, 
  RowSelectionModule
} from 'ag-grid-community'
import { Lead } from '@/hooks/useLeads'

// Register modules if not already done globally, but safe to do here too or ensure page does it
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ValidationModule,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  PaginationModule,
  RowSelectionModule
])

interface RecentLeadsProps {
  leads: Lead[] | undefined
}

export function RecentLeads({ leads }: RecentLeadsProps) {
  
  const colDefs = useMemo<ColDef<Lead>[]>(() => [
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1.2,
      minWidth: 150,
      valueFormatter: (params) => {
        if (!params.value) return '';
        return new Date(params.value).toLocaleString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      }
    },
    { field: "name", headerName: "Name", flex: 1.5, minWidth: 150 },
    { field: "phone", headerName: "Phone", flex: 1.2, minWidth: 130 },
    { field: "email", headerName: "Email", flex: 1.5, minWidth: 180 },
    { field: "package_name", headerName: "Package", flex: 1.5, minWidth: 150 },
    { field: "preferred_time", headerName: "Pref. Time", flex: 1, minWidth: 120 },
    { field: "remarks", headerName: "Remarks", flex: 1, minWidth: 120 },
    { field: "utm_source", headerName: "Source", flex: 1 },
    { field: "utm_medium", headerName: "Medium", flex: 1 },
    { field: "utm_campaign", headerName: "Campaign", flex: 1 },
    { field: "utm_term", headerName: "Term", flex: 1 },
    { field: "utm_content", headerName: "Content", flex: 1 },
  ], [])

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    floatingFilter: false, // Keep features
  }), [])

  return (
    <div className="w-full h-[500px] flex flex-col">
       <div className="ag-theme-quartz w-full flex-1">
          <AgGridReact
              theme="legacy"
              rowData={leads}
              columnDefs={colDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={10}
              paginationPageSizeSelector={[10, 20, 50, 100]}
              rowHeight={48}
              enableCellTextSelection={true}
          />
       </div>
    </div>
  )
}
