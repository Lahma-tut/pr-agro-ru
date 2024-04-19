import prisma from '@/db/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const query = searchParams.get('q');

  const data = await prisma.product.findMany()

  let currentProduct = data;

  if (query) {
    currentProduct = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
  }
  
  return NextResponse.json(currentProduct)
}