const inquiryUrl = "mailto:info@roudokukentei.jp?subject=%E5%A3%B0%E3%81%AE%E8%A1%A8%E7%8F%BE%E3%82%A2%E3%82%AB%E3%83%87%E3%83%9F%E3%83%BC%E8%AC%9B%E5%BA%A7%E9%96%8B%E8%AC%9B%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6";

export default function Home() {
  return <main>
    <header className="header"><a className="logo" href="#top"><b>声の表現</b><span>ACADEMY</span></a><nav><a href="#features">できること</a><a href="#platform">選ばれる理由</a><a href="#price">料金</a><a href="#faq">よくある質問</a></nav><a className="headerCta" href={inquiryUrl}>お問い合わせ</a></header>

    <section className="hero" id="top">
      <div className="rings" aria-hidden="true"><i/><i/><i/><b/></div>
      <div className="heroInner">
        <p className="overline">資格を取った、その先で止まっていませんか。</p>
        <p className="campaign">COURSE LAUNCH CAMPAIGN</p>
        <h1>眠っている資格を、<br/><em>あなたを選ぶ理由</em>に。</h1>
        <p className="heroLead">学んだ知識も、磨いてきた声も、講座として届かなければ、<br/>受講生の変化にも、あなたの実績にもつながりません。<br/>企画・公開・運営・集客をひとつにして、最初の講座を形にします。</p>
        <div className="heroActions"><a className="button primary" href={inquiryUrl}>自分の講座を形にする <span>→</span></a><a className="button secondary" href="#future">開講後の未来を見る</a></div>
        <p className="limit"><b>20名様限定</b><span>講座開講パッケージ</span><strong>¥198,000<small>（税込）</small></strong><del>通常価格 ¥250,000</del></p>
      </div>
    </section>

    <section className="intro section">
      <div className="sectionTitle"><span>FOR WHO</span><h2>「いつか教えたい」が、<br/>止まったままになっていませんか。</h2></div>
      <div className="worryGrid">
        <article><b>01</b><h3>何を、誰に、どう教えるか<br/>決めきれない</h3><p>知識はあるのに講座の形にできず、考えるほど最初の一歩が重くなる。</p></article>
        <article><b>02</b><h3>準備や運営に追われて<br/>本業と両立できるか不安</h3><p>ページ作成、決済、連絡、出席管理。指導以外の作業が多すぎて手が止まる。</p></article>
        <article><b>03</b><h3>つくっても受講生が<br/>集まらない気がする</h3><p>自分ひとりの発信だけで、本当に必要な人へ届くのか自信が持てない。</p></article>
      </div>
    </section>

    <section className="inaction section">
      <div className="inactionCopy"><span>THE COST OF WAITING</span><h2>「いつか始めよう」のままでは、<br/>資格は使われない。</h2><p>時間が経つほど、学んだときの熱と自信は少しずつ薄れていきます。その間にも、あなたの指導を必要としている人は、別の講座を選んでいるかもしれません。</p><strong>今必要なのは、もう一つ資格を増やすことではなく、<br/>今ある資格を「選ばれる講座」に変える仕組みです。</strong></div>
      <div className="inactionList"><p><b>01</b><span>調べ続けるだけで、公開日は決まらない</span></p><p><b>02</b><span>経験を積めず、講師としての自信も育たない</span></p><p><b>03</b><span>届けたい相手との出会いが先送りになる</span></p></div>
    </section>

    <section className="concept" id="future">
      <div className="conceptInner"><span>THE FUTURE YOU CREATE</span><h2>あなたの名前で、<br/><em>人を変える講座</em>が始まる。</h2><p>「声の表現アカデミー」は、朗読・読み聞かせ・アナウンス・ボイストレーニングの総合オンライン学習拠点へ全面リニューアル。講座開講パッケージにお申込みのプロフェッサー資格者の皆さまは、アカデミー内にご自身の講座を開講できます。</p><div className="futureGrid"><article><b>01</b><h3>自分の名前で<br/>講座が公開される</h3></article><article><b>02</b><h3>運営に追われず<br/>指導に集中できる</h3></article><article><b>03</b><h3>学びを求める人に<br/>講座が届いていく</h3></article><article><b>04</b><h3>資格が実績となり<br/>次の機会につながる</h3></article></div><p>「教えたい」という思いを、受講生が申し込める具体的な形へ。最初の構想から公開後の運営まで、専用の仕組みが支えます。</p></div>
    </section>

    <section className="how section" id="how">
      <div className="sectionTitle centered"><span>HOW IT WORKS</span><h2>はじめかたは、<em>たった3ステップ。</em></h2></div>
      <ol className="steps">
        <li><b>01</b><div><span>APPLY</span><h3>パッケージに<br/>お申込み</h3><p>講座開講パッケージにお申込み。決済・契約はオンラインで完結します。</p></div></li>
        <li><b>02</b><div><span>PUBLISH</span><h3>プラットフォームで<br/>公開</h3><p>専用プラットフォームを使い、あなたの講座ページを作成・公開します。</p></div></li>
        <li><b>03</b><div><span>REACH</span><h3>声の表現<br/>アカデミーへ</h3><p>新しいアカデミーの一講座として公開。全体の集客にも相乗りできます。</p></div></li>
      </ol>
    </section>

    <section className="features section" id="features">
      <div className="sectionTitle"><span>PACKAGE FEATURES</span><h2>ひとりでは止まりやすい4つを、<br/>まとめて前に進めます。</h2></div>
      <div className="featureList">
        <article><span>＋</span><div><small>PLANNING</small><h3>「何を教えるか」を、選ばれる講座の形へ</h3><p>市場分析をもとに、講座構成やカリキュラムのたたき台をご用意。あなたは専門性を生かした内容の確認に集中できます。</p></div></article>
        <article><span>＋</span><div><small>AUTOMATION</small><h3>運営の手間を自動化</h3><p>出席リマインド、受講生への連絡、決済・入金管理などの細かな事務作業をプラットフォーム側で自動化します。</p></div></article>
        <article><span>＋</span><div><small>MARKETING</small><h3>「届け方が分からない」も、ひとりで抱えない</h3><p>メール配信や紹介記事掲載などのサポートを用意。アカデミー全体の発信も活用しながら、必要な人との接点をつくります。</p></div></article>
        <article><span>＋</span><div><small>FLEXIBLE</small><h3>動画・ライブ、どちらにも対応</h3><p>時間を選ばず学べる動画講座も、受講生とリアルタイムにつながるライブ講座も公開できます。</p></div></article>
      </div>
    </section>

    <section className="platform section" id="platform">
      <div className="sectionTitle centered light"><span>WHY THIS PLATFORM</span><h2>集客と運営を支える、<br/>信頼できる基盤。</h2></div>
      <div className="metrics"><div><b>25〜35<small>%</small></b><span>メール開封率</span></div><div><b>3〜6<small>%</small></b><span>クリック率（CTR）</span></div><div><b>10〜20<small>%</small></b><span>説明会申込CVR</span></div></div>
      <p className="metricNote">※プラットフォーム全体で示されている実績値です。成果を保証するものではありません。</p>
      <div className="trustGrid"><article><span>01</span><h3>上場企業グループが運営</h3><p>大手インターネット関連グループの企業が運営するサービスです。</p></article><article><span>02</span><h3>国際基準のセキュリティ</h3><p>情報セキュリティマネジメントシステムの国際規格、ISMSを取得しています。</p></article><article><span>03</span><h3>動画・データも安心の容量</h3><p>動画は1本あたり最大5GB。文字起こし・要約もAIが自動で行います。</p></article></div>
    </section>

    <section className="possibilities section">
      <div className="sectionTitle"><span>YOUR COURSE</span><h2>あなたの得意を、<br/>講座にできます。</h2></div>
      <div className="genreGrid"><span>朗読</span><span>読み聞かせ</span><span>アナウンス</span><span>ボイス<br/>トレーニング</span></div>
      <div className="formatBox"><div><small>VIDEO COURSE</small><h3>動画講座</h3><p>受講生が好きな時間に学べる、ストック型の講座。</p></div><i>or</i><div><small>LIVE COURSE</small><h3>ライブ講座</h3><p>リアルタイムで指導し、直接フィードバックできる講座。</p></div></div>
    </section>

    <section className="price section" id="price">
      <div className="priceCard">
        <span className="stamp">20名様<br/>のみ</span><small>プロフェッサー資格者限定</small><h2>「いつか」を、開講日に変えるパッケージ</h2><p className="priceIntro">企画・ページ作成・公開・運営自動化・集客サポート。ひとりで調べ、作り、設定する時間をまとめて短縮します。</p><div className="priceValue"><i>¥</i><b>198,000</b><span>（税込）</span></div><del>通常価格 ¥250,000</del><a className="button primary wide" href={inquiryUrl}>自分の講座について相談する <span>→</span></a><em>お申込み時期・条件の詳細はお問い合わせください</em>
      </div>
      <div className="feeInfo"><div className="sectionTitle"><span>COURSE SALES</span><h2>講座開講後の手数料</h2></div><div className="fees"><div><b>9.5%</b><span>決済手数料等<br/>プラットフォーム利用料</span></div><i>＋</i><div><b>20%</b><span>協会運営手数料</span></div><i>＝</i><div className="total"><b>29.5%</b><span>合計差引額</span></div></div><div className="examples"><p><b>受講料22,000円の場合</b><span>講師の手取り 15,510円</span></p><p><b>受講料7,700円の場合</b><span>講師の手取り 5,429円</span></p></div><p className="zero">受講料無料の講座・体験講座は、上記手数料がかかりません。</p></div>
    </section>

    <section className="faq section" id="faq"><div className="sectionTitle centered"><span>FAQ</span><h2>よくあるご質問</h2></div><div className="faqList">
      <details><summary>動画・ライブどちらの講座にも対応していますか？</summary><p>はい。動画講座・ライブ講座のどちらも、プラットフォーム上で公開できます。</p></details>
      <details><summary>講座づくりに時間をかけられなくても大丈夫ですか？</summary><p>AIによる講座構成の下書き作成や、運営・集客のサポートが用意されているため、無理なく始めていただけます。</p></details>
      <details><summary>どのジャンルの講座を開講できますか？</summary><p>朗読・読み聞かせ・アナウンス・ボイストレーニングなど、声の表現アカデミーの各ジャンルで開講いただけます。</p></details>
      <details><summary>受講料無料の講座も開講できますか？</summary><p>はい。見込み客獲得のための無料講座や体験講座も開講できます。この場合、販売手数料は必要ありません。</p></details>
      <details><summary>以前、開講パッケージに申し込んでいます。</summary><p>以前に「声の表現アカデミー開講パッケージ」へお申込みの方は、新たなお申込みは不要で移行予定です。</p></details>
    </div></section>

    <section className="finalCta"><div className="rings bottom" aria-hidden="true"><i/><i/><i/><b/></div><div><span>COURSE LAUNCH CAMPAIGN</span><h2>次に資格を取る前に、<br/>今ある資格を届けませんか。</h2><p>あなたの経験だから学べることを、待っている人がいます。<br/>まずは、どんな講座が形にできるかをご相談ください。</p><a className="button primary large" href={inquiryUrl}>自分の講座について相談する <span>→</span></a><small>20名様限定・プロフェッサー資格者限定</small></div></section>

    <footer><a className="logo footerLogo" href="#top"><b>声の表現</b><span>ACADEMY</span></a><p>一般社団法人 日本朗読検定協会</p><small>© 一般社団法人 日本朗読検定協会</small></footer>
    <a className="mobileCta" href={inquiryUrl}>お問い合わせ <span>→</span></a>
  </main>;
}
