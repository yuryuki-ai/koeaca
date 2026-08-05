import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = (() => {
  const title = "声の表現アカデミー｜朗読検定対策講座なら最短14日で募集開始";
  const description = "まだオンライン講座を持っていないプロフェッサー資格者へ。朗読検定対策講座なら、資格と経験を最短14日を目安に募集できる講座へ変えます。";
  return {
    metadataBase:new URL("https://yuryuki-ai.github.io/koeaca/"), title, description,
    openGraph:{title,description,type:"website",images:[{url:"/koeaca/og.png",width:1732,height:910,alt:"声の表現アカデミー 朗読検定対策講座なら最短14日で募集開始。"}]},
    twitter:{card:"summary_large_image",title,description,images:["/koeaca/og.png"]}
  };
})();

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}
