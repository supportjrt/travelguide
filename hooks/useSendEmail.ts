import { useMutation } from "@tanstack/react-query";

interface SendEmailData {
  phone: string;
  email: string;
  name?: string;
  time?: string;
  timezone?: string;
  step: string;
  packageName?: string;
}

const sendEmail = async (data: SendEmailData) => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to send request');
  return response.json();
};

export const useSendEmail = () => {
  return useMutation({
    mutationFn: sendEmail,
  });
};
