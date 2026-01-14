import { NextResponse } from "next/server";

export function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("referral_code");

  const playStoreUrl = new URL(
    "https://play.google.com/store/apps/details",
  );
  playStoreUrl.searchParams.set("id", "com.wavemoney.app");

  if (code) {
    playStoreUrl.searchParams.set(
      "referrer",
      `referral_code=${encodeURIComponent(code)}`,
    );
  }

  return NextResponse.redirect(playStoreUrl.toString(), 302);
}
