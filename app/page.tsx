import FitCheck from "./FitCheck";
import CaseStudies from "./CaseStudies";

const inquiryUrl = "#consultation";
const standardOrderUrl = "https://6109kentei.thebase.in/items/152344793";
const lightOrderUrl = "https://6109kentei.thebase.in/items/152161314";
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd-dsCGZZ_4IYSzju4MT14z73Azl-CI85iFAbFC0mzcmfdTxg/viewform?usp=publish-editor";
const formEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd-dsCGZZ_4IYSzju4MT14z73Azl-CI85iFAbFC0mzcmfdTxg/viewform?embedded=true";

export default function Home() {
  return <main>
    <header className="header"><a className="brandLogo headerBrandLogo" href="#top" aria-label="声の表現アカデミー 開講パック トップへ"><span className="brandLogoCrop"><img src="/koeaca/koe-academy-logo-sheet.png" alt="声の表現アカデミー"/></span><span className="packageLabel">開講パック</span></a><nav><a href="#cases">講師事例</a><a href="#how">進め方</a><a href="#price">料金</a><a href="#faq">よくある質問</a></nav><a className="headerCta" href={inquiryUrl}>打合せなしで無料提案</a></header>

    <section className="hero" id="top">
      <div className="rings" aria-hidden="true"><i/><i/><i/><b/></div>
      <div className="heroInner">
        <p className="overline">プロフェッサー資格をお持ちの、50代からの女性へ</p>
        <p className="campaign">BUILT FOR BUSY TEACHERS</p>
        <h1>忙しくても始められる理由。<br/><em>ゼロから作る作業は、こちらで引き受けます。</em></h1>
        <p className="heroLead"><strong>企画のたたき台、必要な教材、動画用の台本はこちらで作ります。</strong><br/>忙しい方のための、オンライン講座開講パックです。</p>
        <div className="heroPromise" aria-label="開講と運営のサポート内容">
          <p>開講方法を教えるだけではありません。開講に必要な作業を、こちらで行います。</p>
          <p>最短14日で募集開始。お忙しい方は、ご都合に合わせたペースで進められます。</p>
        </div>
        <div className="heroActions"><a className="button primary" href={inquiryUrl}>打合せなしで、無料の講座案を受け取る <span>→</span></a><a className="button secondary" href="#cases">講師の事例を見る</a></div>
        <p className="heroReassurance">約3分のフォーム入力。この時点では打合せ不要で、お申込みにもなりません。</p>
        <p className="limit"><b>個別支援のため合計20名様限定</b><span>初期費用を抑えて始める</span><strong>¥132,000<small>（税込）</small></strong></p>
      </div>
    </section>

    <section className="workRelief section" id="work-relief">
      <div className="workReliefHeading">
        <span>YOU DO NOT HAVE TO DO IT ALL</span>
        <h2>講座を始めるために、<br/><em>今より忙しくなる必要はありません。</em></h2>
        <p>時間を取られそうな作業を一人で抱えず、ご自身のペースで準備できます。</p>
      </div>
      <div className="timeReliefGrid">
        <p><b>01</b><span>毎週、決まった時間を空ける必要はありません。</span></p>
        <p><b>02</b><span>長時間の打ち合わせを何度も行う必要はありません。</span></p>
        <p><b>03</b><span>添削なし・動画を見てもらうだけの講座も開講できます。</span></p>
        <p><b>04</b><span>動画は短く分けて撮影。一日ですべて撮る必要はありません。</span></p>
        <p><b>05</b><span>教材や販売ページを、一人でゼロから作る必要はありません。</span></p>
        <p><b>06</b><span>ご自身の予定に合わせたペースで準備を進められます。</span></p>
      </div>
      <div className="responsibilityIntro">
        <small>WHO DOES WHAT?</small>
        <h3>開講方法を教えるだけではありません。<br/><em>開講に必要な作業を、こちらで行います。</em></h3>
      </div>
      <div className="responsibilityGrid">
        <article className="academyDoes">
          <header><span>声の表現アカデミーが行うこと</span><strong>作成・設置・支援</strong></header>
          <ul>
            <li>講座企画のたたき台を作る</li>
            <li>カリキュラムを組み立てる</li>
            <li>必要な教材を作る</li>
            <li>動画収録用の台本を作る</li>
            <li>講座案内・販売ページを作る</li>
            <li>申込み・決済の仕組みを設置する</li>
            <li>メール等で集客を支援する</li>
            <li>開講後の運営・指導上の相談に対応する</li>
          </ul>
        </article>
        <article className="teacherDoes">
          <header><span>講師にお願いすること</span><strong>確認・経験・指導</strong></header>
          <ul>
            <li>作成した内容を確認する</li>
            <li>ご自身の経験や考えを加える</li>
            <li>台本を見ながら動画を収録する</li>
            <li>必要な場合だけ、添削や受講者対応を行う</li>
          </ul>
          <p>あなたには、ご自身の専門性を生かした「教えること」に集中していただきます。</p>
        </article>
      </div>
      <div className="pacePromise"><span>早く開講したい方は</span><strong>最短14日で募集開始</strong><i>お忙しい方は、ご都合に合わせたペースで進められます。</i></div>
    </section>

    <section className="experienceProof section">
      <div className="experienceProofCopy"><span>YOUR EXPERIENCE IS ENOUGH</span><h2>華やかな経歴より、<br/><em>初心者だった経験が役に立ちます。</em></h2></div>
      <div className="experienceProofBody"><p>アナウンサーやナレーターとしての出演歴がなくても、講座はつくれます。初めて朗読を学ぶ方や検定を受ける方が求めているのは、必ずしも有名な講師ではありません。</p><strong>「初心者の気持ちが分かる」「つまずいたところを丁寧に説明できる」という経験が、受講生にとっての価値になります。</strong><p>資格を取得するまでに学び、練習し、できなかったことをできるようにしてきた経験。それが、あなたに教えてほしい人のための教材になります。</p></div>
    </section>

    <CaseStudies />

    <section className="how section" id="how">
      <div className="sectionTitle centered"><span>YOUR 14-DAY LAUNCH PLAN</span><h2>朗読検定対策講座なら、<br/><em>最短14日で募集開始。</em></h2><p className="timelineLead">既存の講座フォーマットを活用し、講座内容を整えるところから、案内ページを公開して募集を始めるところまで進めます。</p></div>
      <ol className="steps">
        <li><b>01</b><div><span>WEEK 1 / COURSE DESIGN</span><h3>講座内容と教材を<br/>整える</h3><p>既存フォーマットを土台に、対象者、受講料、カリキュラム、教材、指導手順を具体化します。</p></div></li>
        <li><b>02</b><div><span>WEEK 2 / PAGE &amp; LAUNCH</span><h3>案内ページを完成し、<br/>募集を始める</h3><p>講座案内・受付ページと募集文面を整え、声の表現アカデミーや協会メルマガなどで募集を開始します。</p></div></li>
      </ol>
      <p className="launchSchedule"><span>朗読検定対策講座の募集開始まで</span><strong>最短14日</strong><small>※講座内容や準備状況によって期間は異なります。</small></p>
    </section>

    <section className="platform section" id="platform">
      <div className="sectionTitle centered light"><span>WHY THIS PLATFORM</span><h2>講座を載せるだけではなく、<br/>募集と運営を続けられる基盤。</h2></div>
      <div className="mailCampaign"><small>PLATFORM × ASSOCIATION NEWSLETTER</small><h3>オンライン講座プラットフォームへの掲載に加えて、<br/><em>協会のメールマガジンでも講座を告知します。</em></h3><p>ご自身のSNSやブログだけに頼るのではなく、協会からも講座の情報を発信。あなたの講座を必要としている人との接点を増やします。</p></div>
      <div className="trustGrid"><article><span>01</span><h3>協会メルマガで告知</h3><p>完成した講座を、一般社団法人日本朗読検定協会が運営するメールマガジンでもご案内します。</p></article><article><span>02</span><h3>申込み窓口を一本化</h3><p>講座説明、プロフィール、申込み導線を一つのページにまとめ、受講希望者が迷わない状態をつくります。</p></article><article><span>03</span><h3>指導以外の運営も支援</h3><p>決済、連絡、受講者フォローなど、オンライン講座を続けるための運営業務も一緒に整えます。</p></article></div>
    </section>

    <section className="deadlineBonus section" id="bonus">
      <div className="bonusHeading">
        <span className="bonusDeadline">8月10日までのお申込み限定</span>
        <small>SPECIAL BENEFIT</small>
        <h2>お持ちの資格に合った、<br/><em>「あなただけの案内・受付ページ」</em>を作成します。</h2>
        <p>資格を取得したものの、「どうやって申込みを受け付ければよいか分からない」「SNSで紹介したくても、案内するページがない」という方のための限定特典です。</p>
      </div>
      <div className="bonusBody">
        <div className="bonusExamples">
          <p><span>01</span><b>朗読検定の<br/>案内・受付ページ</b></p>
          <p><span>02</span><b>読み聞かせ検定の<br/>案内・受付ページ</b></p>
          <p><span>03</span><b>音読ヘルストレーナー<br/>認定講座の案内・受付ページ</b></p>
          <p><span>04</span><b>ボイスバイエル®入門講座の<br/>案内・受付ページ</b></p>
        </div>
        <div className="bonusDetails">
          <h3>資格を持っているだけの状態から、<br/><em>申込みを受け付けられる状態へ。</em></h3>
          <ul>
            <li>認定講師資格を複数お持ちの場合は、資格の数に応じてそれぞれ作成</li>
            <li>ページ内に、あなたのプロフィールも掲載可能</li>
            <li>ホームページ、ブログ、SNS、協会プロフィール欄などで紹介可能</li>
          </ul>
          <p>完成後は「詳しくはこちら」「お申込みはこちら」と案内し、実際に申込みやお問い合わせを受け付けられます。</p>
          <a className="button primary" href="#price">対象プランを確認する <span>→</span></a>
        </div>
      </div>
    </section>

    <FitCheck />

    <section className="price section" id="price">
      <div className="sectionTitle centered"><span>CHOOSE YOUR PLAN</span><h2>まず小さく始めたい方には、<br/><em>ライトプランがおすすめです。</em></h2><p className="planLead">企画・ページ作成・公開・運営自動化・集客サポートは、どちらのプランにも含まれます。</p></div>
      <div className="planGrid">
        <article className="priceCard lightPlan primaryPlan"><span className="planBadge">まず小さく始めたい方に</span><small>LIGHT PLAN</small><h2>ライトプラン</h2><div className="priceValue"><i>¥</i><b>132,000</b><span>（税込）</span></div><del>通常価格 ¥198,000</del><div className="planFee"><span>販売手数料 合計</span><strong>49.5%</strong><small>内訳：協会運営40%＋プラットフォーム等9.5%</small></div><div className="stepUp"><span>売上が伸びた後も安心</span><strong>累計売上13万5,000円を達成した翌月から<br/><em>販売手数料 29.5％</em>へ</strong><small>追加費用も変更手続きも不要。高い手数料率がずっと続くことはありません。</small></div><p>初期費用を抑え、無理のない一歩から始めたい方に。</p><a className="button primary planApply" href={lightOrderUrl} target="_blank" rel="noreferrer">ライトプランで講座開講を始める <span>→</span></a><em className="orderNote">BASEのお申込みページへ移動します</em></article>
        <article className="priceCard standardPlan"><span className="planBadge">販売手数料を最初から抑える</span><small>STANDARD PLAN</small><h2>スタンダードプラン</h2><div className="priceValue"><i>¥</i><b>198,000</b><span>（税込）</span></div><del>通常価格 ¥250,000</del><div className="planFee"><span>販売手数料 合計</span><strong>29.5%</strong><small>内訳：協会運営20%＋プラットフォーム等9.5%</small></div><p>開講直後から、販売手数料を抑えたい方に。</p><a className="button secondary planApply" href={standardOrderUrl} target="_blank" rel="noreferrer">スタンダードプランに申し込む <span>→</span></a><em className="orderNote">BASEのお申込みページへ移動します</em></article>
      </div>
      <div className="planAction"><span className="sharedLimit">企画から公開後まで個別に支援するため、合計20名様限定</span><p>まだ講座内容が決まっていなくても、最初の講座・対象者・受講料・募集開始までの進め方をご提案します。</p><a className="button secondary wide" href={inquiryUrl}>打合せなしで、無料の講座案を受け取る <span>→</span></a><em>約3分のフォーム入力。この時点では打合せ不要で、お申込みにもなりません</em></div>
      <div className="applicationAssurance"><strong>申込み前に、講座化できる内容とサポート範囲を確認できます。</strong><p>講座内容が決まっていなくても無料でご相談いただけます。料金や進め方を確認し、納得したうえでお申込みください。無理にお申込みをおすすめすることはありません。</p></div>
      <p className="zero">受講料無料の講座・体験講座には、販売手数料がかかりません。</p>
    </section>

    <section className="faq section" id="faq"><div className="sectionTitle centered"><span>FAQ</span><h2>よくあるご質問</h2></div><div className="faqList">
      <details><summary>動画・ライブどちらの講座にも対応していますか？</summary><p>はい。動画講座・ライブ講座のどちらも、プラットフォーム上で公開できます。</p></details>
      <details><summary>講座づくりに時間をかけられなくても大丈夫ですか？</summary><p>はい。企画のたたき台、カリキュラム、必要な教材、動画用台本、販売ページは、声の表現アカデミーが作成します。毎週決まった時間の打合せも必要なく、ご都合に合わせたペースで進められます。</p></details>
      <details><summary>どのジャンルの講座を開講できますか？</summary><p>朗読・読み聞かせ・アナウンス・ボイストレーニングなど、声の表現アカデミーの各ジャンルで開講いただけます。</p></details>
      <details><summary>受講料無料の講座も開講できますか？</summary><p>はい。見込み客獲得のための無料講座や体験講座も開講できます。この場合、販売手数料は必要ありません。</p></details>
      <details><summary>初期費用以外に月額費用はかかりますか？</summary><p>月額費用はかかりません。受講申込みがあった場合のみ、受講料から販売手数料等を差し引いた金額を、指定の口座へ送金します。</p></details>
      <details><summary>ライトプランの販売手数料は、ずっと49.5％ですか？</summary><p>いいえ。ライトプランには自動ステップアップ制度があります。講座の累計売上が13万5,000円に達した翌月以降の売上から、販売手数料をスタンダードプランと同じ29.5％へ自動的に引き下げます。追加費用やプラン変更の手続きは必要ありません。</p></details>
      <details><summary>初期費用を分割で支払えますか？</summary><p>クレジットカードをご利用の場合、カード会社が提供する分割払いをご利用いただけます。利用条件や手数料はカード会社へご確認ください。</p></details>
      <details><summary>売上はいつ入金されますか？</summary><p>月末締め、翌々月末のお支払いとなります。</p></details>
      <details><summary>申込み後のキャンセルや返金はできますか？</summary><p>ご納得いただいたうえでお申込みいただくため、事前に無料相談で不明点をご確認いただけます。お申込み確定後のキャンセルおよび返金は承っておりません。</p></details>
      <details><summary>以前、開講パッケージに申し込んでいます。</summary><p>以前に「声の表現アカデミー開講パッケージ」へお申込みの方は、新たなお申込みは不要で移行予定です。</p></details>
    </div></section>

    <section className="consultation section" id="consultation">
      <div className="consultationIntro"><span>YOUR PERSONAL ONLINE COURSE PROPOSAL</span><h2>まずは打合せなしで、<br/>無料の講座案を受け取れます。</h2><p>約3分のフォームで、お持ちの資格と経験をお知らせください。最初に開く講座、対象者、受講料、準備する内容、募集開始までの進め方をご提案します。この時点では打合せ不要で、お申込みにもなりません。</p><ul><li>最初に開講するオンライン講座の案</li><li>対象者・受講料・講座のゴール</li><li>最短14日を目安にした準備スケジュール</li></ul></div>
      <div className="formWrap"><iframe src={formEmbedUrl} title="オンライン講座開講・無料相談フォーム" loading="lazy">読み込んでいます…</iframe><p>フォームが表示されない場合は、<a href={formUrl} target="_blank" rel="noreferrer">Googleフォームを開いてご回答ください</a>。</p></div>
    </section>

    <section className="finalCta"><div className="rings bottom" aria-hidden="true"><i/><i/><i/><b/></div><div><span>YOUR FIRST ONLINE COURSE IN AS LITTLE AS 14 DAYS</span><h2>朗読検定対策講座なら、<br/>最短14日で募集開始。</h2><p>資格と経験を、「申込みを受け付けられる講座」へ。<br/>まずは、あなたならどんな講座を開けるのか無料提案をお受け取りください。</p><a className="button primary large" href={inquiryUrl}>打合せなしで、無料の講座案を受け取る <span>→</span></a><small>約3分のフォーム入力・この時点では打合せ不要・20名様限定</small></div></section>

    <footer><a className="brandLogo footerBrandLogo" href="#top" aria-label="声の表現アカデミー トップへ"><span className="brandLogoCrop"><img src="/koeaca/koe-academy-logo-sheet.png" alt="声の表現アカデミー"/></span></a><p>一般社団法人 日本朗読検定協会</p><small>© 一般社団法人 日本朗読検定協会</small></footer>
    <a className="mobileCta" href={inquiryUrl}>打合せなしで無料の講座案を受け取る <span>→</span></a>
  </main>;
}
