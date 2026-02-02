import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, packageName } = body;

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('leads')
      .insert([{ phone, package_name: packageName }])
      .select('id')
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
    }

    return NextResponse.json({ id: data.id }, { status: 200 });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
