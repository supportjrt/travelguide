import { useMutation } from "@tanstack/react-query";

interface CreateLeadData {
  phone: string;
  packageName?: string;
}

interface UpdateLeadData {
  id: string; // The row ID returned from creation
  name: string;
  email: string;
  time: string;
  timezone: string;
}

const createLead = async (data: CreateLeadData) => {
  const response = await fetch('/api/leads/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create lead');
  return response.json(); // Should return { id }
};

const updateLead = async (data: UpdateLeadData) => {
  const response = await fetch('/api/leads/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update lead');
  return response.json();
};

export const useCreateLead = () => {
  return useMutation({
    mutationFn: createLead,
  });
};

export const useUpdateLead = () => {
  return useMutation({
    mutationFn: updateLead,
  });
};
