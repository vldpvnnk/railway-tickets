import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  try {
    const jsonPath = path.join(process.cwd(), 'src', 'data', 'mock-orders.json');
    
    const fileContent = await fs.readFile(jsonPath, 'utf-8');
    
    const orders = JSON.parse(fileContent);

    if (status) {
      const filteredOrders = orders.filter(order => order.status.toUpperCase() === status.toUpperCase());
      return NextResponse.json(filteredOrders);
    }

    return NextResponse.json(orders);
  } catch (error) {
    console.error('Failed to read or parse mock orders file:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
