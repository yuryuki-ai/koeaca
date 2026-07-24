const inquiryUrl = "#consultation";
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd-dsCGZZ_4IYSzju4MT14z73Azl-CI85iFAbFC0mzcmfdTxg/viewform?usp=publish-editor";
const formEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd-dsCGZZ_4IYSzju4MT14z73Azl-CI85iFAbFC0mzcmfdTxg/viewform?embedded=true";

export default function Home() {
  return <main>
    <header className="header"><a className="logo" href="#top"><b>声の表現</b><span>ACADEMY</span></a><nav><a href="#features">できること</a><a href="#platform">選ばれる理由</a><a href="#price">料金</a><a href="#faq">よくある質問</a></nav><a className="headerCta" href={inquiryUrl}>無料相談</a></header>

    <section className="hero" id="top">
      <div className="rings" aria-hidden="true"><i/><i/><i/><b/></div>
      <div className="heroInner">
        <p className="overline">プロフェッサー資格者限定・講座開講パック</p>
        <p className="campaign">FAST TRACK FOR INSTRUCTORS</p>
        <h1>講師として、<br/><em>最速で経験を積む。</em></h1>
        <p className="heroMetaphor">ＡＩ時代の高速道路に乗るという選択。</p>
        <p className="heroLead">朗読検定合格対策講座という、すでに整備された道。<br/>そして、講座の立ち上げから実践・改善まで、<br/>あなたを個別に支える専属コンサルティング。</p>
        <p className="heroPromise">一人で試行錯誤する何年もの時間を、<br/>講師としての実践と成長の時間に変えます。</p>
        <div className="heroActions"><a className="button primary" href={inquiryUrl}>最速で講師経験を積む方法を相談する <span>→</span></a><a className="button secondary" href="#features">サポート内容を見る</a></div>
        <p className="limit"><b>合計20名様限定</b><span>選べる2つの開講プラン</span><strong>¥132,000<small>〜（税込）</small></strong></p>
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
      <div className="conceptInner"><span>THE FUTURE YOU CREATE</span><h2>あなたが教えて、<br/><em>人が喜ぶ講座</em>が始まる。</h2><p>「声の表現アカデミー」は、朗読・読み聞かせ・アナウンス・ボイストレーニングの総合オンライン学習拠点へ全面リニューアル。講座開講パッケージにお申込みのプロフェッサー資格者の皆さまは、アカデミー内にご自身の講座を開講できます。</p><div className="futureGrid"><article><b>01</b><h3>見込み客の<br/>リストが作れる</h3></article><article><b>02</b><h3>運営に追われず<br/>指導に集中できる</h3></article><article><b>03</b><h3>学びを求める人に<br/>講座が届いていく</h3></article><article><b>04</b><h3>資格が実績となり<br/>次の機会につながる</h3></article></div><p>「教えたい」という思いを、受講生が申し込める具体的な形へ。最初の構想から公開後の運営まで、専用の仕組みが支えます。</p></div>
    </section>

    <section className="how section" id="how">
      <div className="sectionTitle centered"><span>HOW IT WORKS</span><h2>はじめかたは、<em>たった3ステップ。</em></h2></div>
      <ol className="steps">
        <li><b>01</b><div><span>APPLY</span><h3>パッケージに<br/>お申込み</h3><p>講座開講パッケージにお申込み。決済・契約はオンラインで完結します。</p></div></li>
        <li><b>02</b><div><span>PUBLISH</span><h3>プラットフォームで<br/>公開</h3><p>専用プラットフォームを使い、あなたの講座ページを作成・公開します。</p></div></li>
        <li><b>03</b><div><span>REACH</span><h3>声の表現<br/>アカデミーへ</h3><p>新しいアカデミーの一講座として公開。全体の集客にも相乗りできます。</p></div></li>
      </ol>
      <p className="launchSchedule"><span>公開までの目安</span><strong>2〜4週間</strong><small>※講座内容や準備状況により異なります。</small></p>
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

    <section className="supportDetails section" id="support">
      <div className="sectionTitle centered"><span>ONGOING SUPPORT</span><h2>公開して終わりではなく、<br/>講座運営を継続して支えます。</h2></div>
      <div className="supportGrid">
        <article><b>01</b><small>相談回数・期間</small><h3>無制限・無期限でサポート</h3><p>受講料から手数料をいただく仕組みのため、講座を公開している間は、相談回数や期間を設けずサポートします。</p></article>
        <article><b>02</b><small>講座設計・指導</small><h3>企画から実際の指導まで</h3><p>ゼロからの企画、カリキュラム設計、教材づくりに加え、実際の指導で分からないことが出てきた場合もサポートします。</p></article>
        <article><b>03</b><small>販売ページ作成</small><h3>AIと専門スタッフが作成</h3><p>講座の魅力や対象者に合わせて、AIと専門スタッフが販売ページを作成します。</p></article>
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
      <div className="genreGrid"><span>朗読</span><span>読み聞かせ</span><span>アナウンス</span><span>ボイス<br/>トレーニング</span><span>朗読検定対策</span><span>読み聞かせ<br/>検定対策</span><span>朗読コンテスト<br/>対策</span><span>司会</span><span>話し方</span><span>声優</span><span>演技</span></div>
      <div className="formatBox"><div><small>VIDEO COURSE</small><h3>動画講座</h3><p>受講生が好きな時間に学べる、ストック型の講座。</p></div><i>or</i><div><small>LIVE COURSE</small><h3>ライブ講座</h3><p>リアルタイムで指導し、直接フィードバックできる講座。</p></div></div>
    </section>

    <section className="price section" id="price">
      <div className="sectionTitle centered"><span>CHOOSE YOUR PLAN</span><h2>始め方に合わせて選べる、<br/>2つの開講プラン。</h2><p className="planLead">企画・ページ作成・公開・運営自動化・集客サポートは、どちらのプランにも含まれます。</p></div>
      <div className="planGrid">
        <article className="priceCard recommended"><span className="planBadge">開講後の手取りを重視</span><small>STANDARD PLAN</small><h2>標準プラン</h2><div className="priceValue"><i>¥</i><b>198,000</b><span>（税込）</span></div><del>通常価格 ¥250,000</del><div className="planFee"><span>協会運営手数料</span><strong>20%</strong><small>プラットフォーム利用料等を含む合計 29.5%</small></div><p>初期費用を抑えるよりも、開講後の手取りを多くしたい方に。</p></article>
        <article className="priceCard lightPlan"><span className="planBadge">初期費用を抑えてスタート</span><small>LIGHT PLAN</small><h2>ライトプラン</h2><div className="priceValue"><i>¥</i><b>132,000</b><span>（税込）</span></div><del>通常価格 ¥198,000</del><div className="planFee"><span>協会運営手数料</span><strong>40%</strong><small>プラットフォーム利用料等を含む合計 49.5%</small></div><p>最初にかかる費用を抑えて、講座を始めたい方に。</p></article>
      </div>
      <div className="planAction"><span className="sharedLimit">プロフェッサー資格者限定・合計20名様</span><a className="button primary wide" href={inquiryUrl}>自分に合うプランを相談する <span>→</span></a><em>お申込み時期・条件の詳細は無料相談でご確認ください</em></div>
      <div className="recoveryExamples">
        <div className="recoveryHeading"><span>COURSE FEE SIMULATION</span><h3>何名の受講で、初期費用回収の達成ができる？</h3><p>販売手数料を差し引いた講師受取額を、初期費用に充てた場合の目安です。</p></div>
        <div className="recoveryGrid">
          <article><div className="courseName"><small>朗読検定</small><h4>3級対策講座</h4><strong>受講料例 17,800円</strong></div><div className="recoveryPlans"><p><span>スタンダード</span><b>16<small>名</small></b><em>1名あたり受取 12,549円</em><strong className="cumulativeFee"><small>達成時の累計受取指導料</small>200,784円</strong></p><p><span>ライト</span><b>15<small>名</small></b><em>1名あたり受取 8,989円</em><strong className="cumulativeFee"><small>達成時の累計受取指導料</small>134,835円</strong></p></div></article>
          <article><div className="courseName"><small>朗読検定</small><h4>準2級対策講座</h4><strong>受講料例 35,200円</strong></div><div className="recoveryPlans"><p><span>スタンダード</span><b>8<small>名</small></b><em>1名あたり受取 24,816円</em><strong className="cumulativeFee"><small>達成時の累計受取指導料</small>198,528円</strong></p><p><span>ライト</span><b>8<small>名</small></b><em>1名あたり受取 17,776円</em><strong className="cumulativeFee"><small>達成時の累計受取指導料</small>142,208円</strong></p></div></article>
        </div>
        <p className="recoveryNote">※受講料全額をプラットフォーム上で販売し、返金やその他の経費がない場合の概算です。実際の端数処理等により金額が異なる場合があります。</p>
      </div>
      <p className="zero">受講料無料の講座・体験講座には、販売手数料がかかりません。</p>
    </section>

    <section className="faq section" id="faq"><div className="sectionTitle centered"><span>FAQ</span><h2>よくあるご質問</h2></div><div className="faqList">
      <details><summary>動画・ライブどちらの講座にも対応していますか？</summary><p>はい。動画講座・ライブ講座のどちらも、プラットフォーム上で公開できます。</p></details>
      <details><summary>講座づくりに時間をかけられなくても大丈夫ですか？</summary><p>AIによる講座構成の下書き作成や、運営・集客のサポートが用意されているため、無理なく始めていただけます。</p></details>
      <details><summary>どのジャンルの講座を開講できますか？</summary><p>朗読・読み聞かせ・アナウンス・ボイストレーニングなど、声の表現アカデミーの各ジャンルで開講いただけます。</p></details>
      <details><summary>受講料無料の講座も開講できますか？</summary><p>はい。見込み客獲得のための無料講座や体験講座も開講できます。この場合、販売手数料は必要ありません。</p></details>
      <details><summary>初期費用以外に月額費用はかかりますか？</summary><p>月額費用はかかりません。受講申込みがあった場合のみ、受講料から販売手数料等を差し引いた金額を、指定の口座へ送金します。</p></details>
      <details><summary>初期費用を分割で支払えますか？</summary><p>クレジットカードをご利用の場合、カード会社が提供する分割払いをご利用いただけます。利用条件や手数料はカード会社へご確認ください。</p></details>
      <details><summary>売上はいつ入金されますか？</summary><p>月末締め、翌々月末のお支払いとなります。</p></details>
      <details><summary>申込み後のキャンセルや返金はできますか？</summary><p>お申込み確定後のキャンセルおよび返金は承れません。内容をご確認のうえ、お申込みください。</p></details>
      <details><summary>以前、開講パッケージに申し込んでいます。</summary><p>以前に「声の表現アカデミー開講パッケージ」へお申込みの方は、新たなお申込みは不要で移行予定です。</p></details>
    </div></section>

    <section className="consultation section" id="consultation">
      <div className="consultationIntro"><span>FREE CONSULTATION</span><h2>まずは、あなたの講座について<br/>無料で相談してみませんか。</h2><p>講座内容が決まっていなくても大丈夫です。フォームを送信しただけで、お申込みになることはありません。</p><ul><li>どんな講座が作れるか知りたい</li><li>費用やサポート内容を確認したい</li><li>集客や運営への不安を相談したい</li></ul></div>
      <div className="formWrap"><iframe src={formEmbedUrl} title="オンライン講座開講・無料相談フォーム" loading="lazy">読み込んでいます…</iframe><p>フォームが表示されない場合は、<a href={formUrl} target="_blank" rel="noreferrer">Googleフォームを開いてご回答ください</a>。</p></div>
    </section>

    <section className="finalCta"><div className="rings bottom" aria-hidden="true"><i/><i/><i/><b/></div><div><span>COURSE LAUNCH CAMPAIGN</span><h2>あなたの教えを、<br/>オンライン講座で届けませんか。</h2><p>あなたが教えてくれることを、待っている人がいます。<br/>まずは、どんな講座が形にできるかをご相談ください。</p><a className="button primary large" href={inquiryUrl}>自分の講座について相談する <span>→</span></a><small>20名様限定・プロフェッサー資格者限定</small></div></section>

    <footer><a className="logo footerLogo" href="#top"><b>声の表現</b><span>ACADEMY</span></a><p>一般社団法人 日本朗読検定協会</p><small>© 一般社団法人 日本朗読検定協会</small></footer>
    <a className="mobileCta" href={inquiryUrl}>無料相談フォームへ <span>→</span></a>
  </main>;
}
