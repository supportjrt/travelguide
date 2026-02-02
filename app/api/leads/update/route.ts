import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, name, email, time, timezone } = body;

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('leads')
      .update({ name, email, preferred_time: time, timezone })
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Lead updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
