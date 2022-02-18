import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // pegar o cookie de autenticao

  // chamar alguma api

  return NextResponse.redirect(req.nextUrl.origin);
}
