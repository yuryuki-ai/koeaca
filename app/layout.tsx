import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost";
  const protocol = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const title = "声の表現アカデミー｜講座開講パッケージ";
  const description = "プロフェッサー資格者限定。講座の企画・公開・運営・集客を支援し、あなたの資格を届く仕組みに変える講座開講パッケージ。";
  return {
    metadataBase:new URL(`${protocol}://${host}`), title, description,
    openGraph:{title,description,type:"website",images:[{url:"/og.png",width:1732,height:910,alt:"声の表現アカデミー 資格を、届く仕組みに。"}]},
    twitter:{card:"summary_large_image",title,description,images:["/og.png"]}
  };
}

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}
