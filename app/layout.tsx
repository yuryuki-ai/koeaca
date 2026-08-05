import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = (() => {
  const title = "声の表現アカデミー｜30日で募集できるオンライン講座へ";
  const description = "まだオンライン講座を持っていないプロフェッサー資格者へ。資格と経験を、30日を目安に募集できる講座へ変える開講パッケージ。";
  return {
    metadataBase:new URL("https://yuryuki-ai.github.io/koeaca/"), title, description,
    openGraph:{title,description,type:"website",images:[{url:"/koeaca/og.png",width:1732,height:910,alt:"声の表現アカデミー 資格と経験を、30日で募集できる講座に。"}]},
    twitter:{card:"summary_large_image",title,description,images:["/koeaca/og.png"]}
  };
})();

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}
