import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = (() => {
  const title = "声の表現アカデミー｜学ぶ側から教える側へ";
  const description = "忙しい方のためのオンライン講座開講パック。企画のたたき台、教材、動画用台本、販売ページ、申込みの仕組みをこちらで作成。最短14日で募集開始できます。";
  return {
    metadataBase:new URL("https://yuryuki-ai.github.io/koeaca/"), title, description,
    openGraph:{title,description,type:"website",images:[{url:"/koeaca/og.png",width:1732,height:910,alt:"声の表現アカデミー 学ぶ側から教える側へ。"}]},
    twitter:{card:"summary_large_image",title,description,images:["/koeaca/og.png"]}
  };
})();

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}
