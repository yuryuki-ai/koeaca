import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = (() => {
  const title = "声の表現アカデミー｜学ぶ側から教える側へ";
  const description = "子育てや仕事を優先してきた50代からの女性へ。パソコンやAIが得意でなくても、資格と経験を誰かのために。最短14日でオンライン講師としての一歩を始められます。";
  return {
    metadataBase:new URL("https://yuryuki-ai.github.io/koeaca/"), title, description,
    openGraph:{title,description,type:"website",images:[{url:"/koeaca/og.png",width:1732,height:910,alt:"声の表現アカデミー 学ぶ側から教える側へ。"}]},
    twitter:{card:"summary_large_image",title,description,images:["/koeaca/og.png"]}
  };
})();

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}
