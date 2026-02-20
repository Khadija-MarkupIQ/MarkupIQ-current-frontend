"use client";

import { supabaseBrowser } from '../lib/supabaseClient'

export default function LogoutButton() {
    const supabase = supabaseBrowser();

    const logout = async () => {
        await supabase.auth.signOut();
        window.location.href = "/login";
    };

    return <button onClick={logout}>Logout</button>;
}
