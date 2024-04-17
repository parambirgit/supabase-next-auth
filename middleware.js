import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"; 
import { NextResponse } from "next/server";
// i am writing this code to prevent my session to get expired 

export async function middleware(req){
    const res= NextResponse.next();
    const supabase = createMiddlewareClient({req,res});
    await supabase.auth.getSession();
    return res;
}// this code is going to run before each route is accesed , each route is rendered
