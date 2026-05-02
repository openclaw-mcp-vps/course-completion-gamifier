import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Completion Gamifier — Boost Course Completion with Badges & Streaks",
  description: "Add achievement badges, streaks, and leaderboards to any online course platform. Increase student engagement and completion rates starting at $8/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b48069b5-27db-442c-89f8-2da553d32f70"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
