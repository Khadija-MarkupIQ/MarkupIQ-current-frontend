// import { NextResponse } from "next/server";

// export async function POST(req) {
//     try {
//         const body = await req.json();

//         // ✅ Correct import for Resend v6 + Next 16
//         const { Resend } = await import("resend");
//         const resend = new Resend(process.env.RESEND_API_KEY);

//         await resend.emails.send({
//             from: "onboarding@resend.dev", // SAFE sender
//             to: process.env.EMAIL_TO,
//             subject: "New Contact Request",
//             html: `
//         <p><b>Name:</b> ${body.fullName}</p>
//         <p><b>Email:</b> ${body.email}</p>
//         <p><b>Company/Organisation:</b> ${body.companyName}</p>
//         <p><b>Message:</b> ${body.message}</p>
//       `,
//         });

//         return NextResponse.json({ success: true });
//     } catch (error) {
//         console.error("RESEND ERROR:", error);
//         return NextResponse.json(
//             { error: error.message || "Internal Server Error" },
//             { status: 500 }
//         );
//     }
// }
