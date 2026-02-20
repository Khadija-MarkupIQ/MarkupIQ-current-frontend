import { NextResponse } from "next/server";
import { supabaseServer } from "./lib/supabaseServer";

export async function middleware(req) {
    const supabase = supabaseServer();
    const { data } = await supabase.auth.getSession();

    const isLoggedIn = !!data.session;

    const protectedRoutes = ["/dashboard"];

    if (protectedRoutes.includes(req.nextUrl.pathname) && !isLoggedIn) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}
