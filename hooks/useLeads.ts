import { useQuery } from "@tanstack/react-query";

export interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  package_name: string;
  notes?: string;
  status?: string;
  preferred_time?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  remarks?: string;
}

const fetchLeads = async (): Promise<Lead[]> => {
  const response = await fetch('/api/leads');
  if (!response.ok) throw new Error('Failed to fetch leads');
  return response.json();
};

export const useLeads = () => {
  return useQuery({
    queryKey: ['leads'],
    queryFn: fetchLeads,
  });
};
