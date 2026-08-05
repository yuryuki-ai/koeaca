const inquiryUrl = "#consultation";
const standardOrderUrl = "https://6109kentei.thebase.in/items/152344793";
const lightOrderUrl = "https://6109kentei.thebase.in/items/152161314";
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd-dsCGZZ_4IYSzju4MT14z73Azl-CI85iFAbFC0mzcmfdTxg/viewform?usp=publish-editor";
const formEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd-dsCGZZ_4IYSzju4MT14z73Azl-CI85iFAbFC0mzcmfdTxg/viewform?embedded=true";

export default function Home() {
  return <main>
    <header className="header"><a className="brandLogo" href="#top" aria-label="声の表現アカデミー トップへ"><span className="brandLogoCrop"><img src="/koeaca/koe-academy-logo-sheet.png" alt="声の表現アカデミー"/></span></a><nav><a href="#how">最短14日の進め方</a><a href="#features">できること</a><a href="#price">料金</a><a href="#faq">よくある質問</a></nav><a className="headerCta" href={inquiryUrl}>無料で講座提案を受ける</a></header>

    <section className="hero" id="top">
      <div className="rings" aria-hidden="true"><i/><i/><i/><b/></div>
      <div className="heroInner">
        <p className="overline">プロフェッサー資格者限定・講座開講パック</p>
        <p className="campaign">YOUR FIRST ONLINE COURSE IN AS LITTLE AS 14 DAYS</p>
        <h1><span className="heroTarget">朗読検定対策講座なら、</span>資格と経験を、<br/><em>最短14日で「募集できる講座」に。</em></h1>
        <p className="heroLead">朗読検定合格対策講座を土台に、講座企画・教材・案内受付ページ・募集文面まで一緒に完成。最初のオンライン講座を実際に募集できる状態まで支援します。</p>
        <p className="heroPromise">添削なし・動画を見てもらうだけの講座も開講できます。<br/>募集開始後の集客・指導・受講者対応も継続して支えます。</p>
        <div className="heroActions"><a className="button primary" href={inquiryUrl}>自分専用のオンライン講座提案を受ける <span>→</span></a><a className="button secondary" href="#how">最短14日の進め方を見る</a></div>
        <p className="heroReassurance">まずは無料で、あなたに合う最初の講座・対象者・開講手順をご提案します。相談だけでお申込みにはなりません。</p>
        <p className="limit"><b>個別支援のため合計20名様限定</b><span>初期費用を抑えて始める</span><strong>¥132,000<small>（税込）</small></strong></p>
      </div>
    </section>

    <section className="intro section">
      <div className="sectionTitle"><span>FROM QUALIFICATION TO ONLINE COURSE</span><h2>資格と指導経験は、もうある。<br/>次はオンラインで募集できる形へ。</h2><p className="sectionLead">必要なのは、新しい資格を増やすことではありません。これまで身につけた知識と経験を、受講生が安心して申し込めるオンライン講座に変えることです。</p></div>
      <div className="worryGrid">
        <article><b>01</b><h3>何を、誰に、どう教えるか<br/>決めきれない</h3><p>知識はあるのに講座の形にできず、考えるほど最初の一歩が重くなる。</p></article>
        <article><b>02</b><h3>準備や運営に追われて<br/>本業と両立できるか不安</h3><p>ページ作成、決済、連絡、出席管理。指導以外の作業が多すぎて手が止まる。</p></article>
        <article><b>03</b><h3>つくっても受講生が<br/>集まらない気がする</h3><p>自分ひとりの発信だけで、本当に必要な人へ届くのか自信が持てない。</p></article>
      </div>
    </section>

    <section className="inaction section">
      <div className="inactionCopy"><span>START WITH A PROVEN FORMAT</span><h2>最初のオンライン講座は、<br/>決まった型から始められます。</h2><p>まずは、教える内容と目標が明確な「朗読検定合格対策講座」から始められます。決まったフォーマットを土台にするため、一から講座を設計する必要はありません。</p><strong>最初の講座を実際に募集・運営した経験が、次のオリジナル講座をつくる土台になります。</strong></div>
      <div className="inactionList"><p><b>01</b><span>受講者の目的が明確</span></p><p><b>02</b><span>教える内容を組み立てやすい</span></p><p><b>03</b><span>講師としての経験を積みやすい</span></p></div>
    </section>

    <section className="concept" id="future">
      <div className="conceptInner"><span>WHAT YOU WILL GAIN</span><h2>講座を持つことで生まれる、<br/><em>4つの具体的な変化。</em></h2><p>講座を作って終わりではありません。教えることを続けながら、受講生との接点と講師としての実績を積み上げていける仕組みをつくります。</p><div className="futureGrid"><article><b>01</b><h3>資格と経験が<br/>自分の商品になる</h3></article><article><b>02</b><h3>運営に追われず<br/>指導に集中できる</h3></article><article><b>03</b><h3>無料体験講座から<br/>見込み客を増やせる</h3></article><article><b>04</b><h3>開講実績が<br/>次の仕事につながる</h3></article></div><p>あなたの「教えたい」という想いを、受講生が申し込める具体的な形へ。最初の構想から公開後の運営まで、ひとりにせず支えます。</p></div>
    </section>

    <section className="how section" id="how">
      <div className="sectionTitle centered"><span>YOUR 14-DAY LAUNCH PLAN</span><h2>朗読検定対策講座なら、<br/><em>最短14日で募集開始。</em></h2><p className="timelineLead">既存の講座フォーマットを活用し、講座内容を整えるところから、案内ページを公開して募集を始めるところまで進めます。</p></div>
      <ol className="steps">
        <li><b>01</b><div><span>WEEK 1 / COURSE DESIGN</span><h3>講座内容と教材を<br/>整える</h3><p>既存フォーマットを土台に、対象者、受講料、カリキュラム、教材、指導手順を具体化します。</p></div></li>
        <li><b>02</b><div><span>WEEK 2 / PAGE &amp; LAUNCH</span><h3>案内ページを完成し、<br/>募集を始める</h3><p>講座案内・受付ページと募集文面を整え、声の表現アカデミーや協会メルマガなどで募集を開始します。</p></div></li>
      </ol>
      <p className="launchSchedule"><span>朗読検定対策講座の募集開始まで</span><strong>最短14日</strong><small>※講座内容や準備状況によって期間は異なります。</small></p>
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
      <div className="sectionTitle centered"><span>ONGOING SUPPORT</span><h2>講座の企画から、<br/>開講後の運営まで。</h2><p className="supportLead">声の表現アカデミー開講パックでは、オンライン講座の立ち上げと運営に必要な業務を、一貫してサポートします。</p></div>
      <ul className="supportScope">
        <li>講座のテーマ・対象者・内容を決める企画支援</li>
        <li>カリキュラムや教材の制作サポート</li>
        <li>文章作成を含む講座案内ページの制作</li>
        <li>通信講座ページの作成・設置</li>
        <li>メール配信などによる集客サポート</li>
        <li>実際の講座で生じる指導上の相談</li>
        <li>受講者への連絡や継続フォローの支援</li>
        <li>受講者リストを活用した情報発信のサポート</li>
      </ul>
      <div className="afterLaunchSupport">
        <div><small>AFTER LAUNCH</small><h3>講座を作って公開するだけではありません。</h3><p>「どう教えればよいか」「受講者が伸び悩んだとき、どう対応すればよいか」「受講後、どのように次の講座へつなげればよいか」といった、実際に運営を始めてから生じる課題にも対応します。</p></div>
        <strong>あなたには、ご自身の専門性を生かした<br/>「教えること」に集中していただきます。</strong>
      </div>
      <div className="supportGrid">
        <article><b>01</b><small>相談回数・期間</small><h3>無制限・無期限でサポート</h3><p>受講料から手数料をいただく仕組みのため、講座を公開している間は、相談回数や期間を設けずサポートします。</p></article>
        <article><b>02</b><small>講座設計・指導</small><h3>企画から実際の指導まで</h3><p>ゼロからの企画、カリキュラム設計、教材づくりに加え、実際の指導で分からないことが出てきた場合もサポートします。</p></article>
        <article><b>03</b><small>販売ページ作成</small><h3>AIと専門スタッフが作成</h3><p>講座の魅力や対象者に合わせて、AIと専門スタッフが販売ページを作成します。</p></article>
      </div>
      <p className="supportClosing">企画、ページ制作、集客、運営、受講者フォローまで。講座を継続するために必要な仕組みを、声の表現アカデミーが支えます。</p>
    </section>

    <section className="platform section" id="platform">
      <div className="sectionTitle centered light"><span>WHY THIS PLATFORM</span><h2>講座を載せるだけではなく、<br/>募集と運営を続けられる基盤。</h2></div>
      <div className="mailCampaign"><small>PLATFORM × ASSOCIATION NEWSLETTER</small><h3>オンライン講座プラットフォームへの掲載に加えて、<br/><em>協会のメールマガジンでも講座を告知します。</em></h3><p>ご自身のSNSやブログだけに頼るのではなく、協会からも講座の情報を発信。あなたの講座を必要としている人との接点を増やします。</p></div>
      <div className="trustGrid"><article><span>01</span><h3>協会メルマガで告知</h3><p>完成した講座を、一般社団法人日本朗読検定協会が運営するメールマガジンでもご案内します。</p></article><article><span>02</span><h3>申込み窓口を一本化</h3><p>講座説明、プロフィール、申込み導線を一つのページにまとめ、受講希望者が迷わない状態をつくります。</p></article><article><span>03</span><h3>指導以外の運営も支援</h3><p>決済、連絡、受講者フォローなど、オンライン講座を続けるための運営業務も一緒に整えます。</p></article></div>
    </section>

    <section className="possibilities section">
      <div className="sectionTitle"><span>YOUR COURSE</span><h2>あなたの得意を、<br/>講座にできます。</h2></div>
      <div className="genreGrid"><span>朗読</span><span>読み聞かせ</span><span>アナウンス</span><span>ボイス<br/>トレーニング</span><span>朗読検定対策</span><span>読み聞かせ<br/>検定対策</span><span>朗読コンテスト<br/>対策</span><span>司会</span><span>話し方</span><span>声優</span><span>演技</span></div>
      <div className="formatBox"><div><small>VIDEO COURSE</small><h3>動画講座</h3><p>受講生が好きな時間に学べる、ストック型の講座。</p></div><i>or</i><div><small>LIVE COURSE</small><h3>ライブ講座</h3><p>リアルタイムで指導し、直接フィードバックできる講座。</p></div></div>
    </section>

    <section className="caseStudies section" id="cases">
      <div className="sectionTitle centered"><span>PROFESSOR STORIES</span><h2>自分の生活に合わせながら、<br/><em>無理なく続けられています。</em></h2><p className="caseLead">添削付き講座も、添削のない動画講座も。プロフェッサー資格者が、それぞれの働き方に合った形で運営しています。</p></div>
      <div className="caseGroups">
        <article className="caseGroup">
          <div className="caseGroupHeading"><span>添削付き</span><div><small>WITH FEEDBACK</small><h3>朗読検定対策講座の事例</h3></div></div>
          <div className="caseCards">
            <blockquote><h4 className="caseCatch">仕事の合間にカフェで休憩中に、<br/>スマホから添削。</h4><div className="casePerson"><b>Ａ</b><span>プロフェッサーＡさん</span><strong className="caseIncome">月平均受領額 <em>約72,000円</em></strong></div><p>「月平均で5名の受講申込みがあります。仕事の合間にカフェで休憩中にスマホから添削をしているので、運営の負担はほとんどありません。」</p><strong>月平均 約5名のお申込み</strong></blockquote>
            <blockquote><h4 className="caseCatch">簡単だからこそ、<br/>添削も楽。</h4><div className="casePerson"><b>Ｂ</b><span>プロフェッサーＢさん</span><strong className="caseIncome">月平均受領額 <em>約39,000円</em></strong></div><p>「4級は、簡単なので需要があるかどうかと不安でしたが、簡単だからこそ添削も楽で、スキマ時間で対応ができています。毎月8名ほど新規お申込みです。」</p><strong>毎月 約8名の新規お申込み</strong></blockquote>
          </div>
        </article>
        <article className="caseGroup videoCases">
          <div className="caseGroupHeading"><span>添削なし</span><div><small>VIDEO COURSE</small><h3>動画講座の事例</h3></div></div>
          <div className="caseCards">
            <blockquote><h4 className="caseCatch">添削ができない自分には、<br/>ピッタリ。</h4><div className="casePerson"><b>Ｃ</b><span>プロフェッサーＣさん</span><strong className="caseIncome">月平均受領額 <em>約27,000円</em></strong></div><p>「月平均で7名の新規受講をいただいています。教室やイベント開催で忙しいので、添削ができない自分にはピッタリです。」</p><strong>月平均 約7名の新規受講</strong></blockquote>
            <blockquote><h4 className="caseCatch">動画講座のみでも、<br/>合格してもらえた。</h4><div className="casePerson"><b>Ｄ</b><span>プロフェッサーＤさん</span><strong className="caseIncome">月平均受領額 <em>約39,000円</em></strong></div><p>「読み聞かせ検定は動画講座のみでも合格してもらうことができそうだと思い、動画講座にしました。月平均で8名ほど、お申込みをいただいています。」</p><strong>月平均 約8名のお申込み</strong></blockquote>
          </div>
        </article>
      </div>
      <p className="caseNote">※掲載内容は個人の実績・感想です。お申込み数や成果を保証するものではありません。</p>
    </section>

    <section className="price section" id="price">
      <div className="sectionTitle centered"><span>CHOOSE YOUR PLAN</span><h2>まず小さく始めたい方には、<br/><em>ライトプランがおすすめです。</em></h2><p className="planLead">企画・ページ作成・公開・運営自動化・集客サポートは、どちらのプランにも含まれます。</p></div>
      <div className="planGrid">
        <article className="priceCard lightPlan primaryPlan"><span className="planBadge">まず小さく始めたい方に</span><small>LIGHT PLAN</small><h2>ライトプラン</h2><div className="priceValue"><i>¥</i><b>132,000</b><span>（税込）</span></div><del>通常価格 ¥198,000</del><div className="planFee"><span>販売手数料 合計</span><strong>49.5%</strong><small>内訳：協会運営40%＋プラットフォーム等9.5%</small></div><div className="stepUp"><span>売上が伸びた後も安心</span><strong>累計売上13万5,000円を達成した翌月から<br/><em>販売手数料 29.5％</em>へ</strong><small>追加費用も変更手続きも不要。高い手数料率がずっと続くことはありません。</small></div><p>初期費用を抑え、無理のない一歩から始めたい方に。</p><a className="button primary planApply" href={lightOrderUrl} target="_blank" rel="noreferrer">ライトプランで講座開講を始める <span>→</span></a><em className="orderNote">BASEのお申込みページへ移動します</em></article>
        <article className="priceCard standardPlan"><span className="planBadge">販売手数料を最初から抑える</span><small>STANDARD PLAN</small><h2>スタンダードプラン</h2><div className="priceValue"><i>¥</i><b>198,000</b><span>（税込）</span></div><del>通常価格 ¥250,000</del><div className="planFee"><span>販売手数料 合計</span><strong>29.5%</strong><small>内訳：協会運営20%＋プラットフォーム等9.5%</small></div><p>開講直後から、販売手数料を抑えたい方に。</p><a className="button secondary planApply" href={standardOrderUrl} target="_blank" rel="noreferrer">スタンダードプランに申し込む <span>→</span></a><em className="orderNote">BASEのお申込みページへ移動します</em></article>
      </div>
      <div className="planAction"><span className="sharedLimit">企画から公開後まで個別に支援するため、合計20名様限定</span><p>まだ講座内容が決まっていなくても、最初の講座・対象者・受講料・募集開始までの進め方をご提案します。</p><a className="button secondary wide" href={inquiryUrl}>自分専用のオンライン講座提案を受ける <span>→</span></a><em>提案を受けただけで、お申込みになることはありません</em></div>
      <div className="applicationAssurance"><strong>申込み前に、講座化できる内容とサポート範囲を確認できます。</strong><p>講座内容が決まっていなくても無料でご相談いただけます。料金や進め方を確認し、納得したうえでお申込みください。無理にお申込みをおすすめすることはありません。</p></div>
      <p className="zero">受講料無料の講座・体験講座には、販売手数料がかかりません。</p>
    </section>

    <section className="faq section" id="faq"><div className="sectionTitle centered"><span>FAQ</span><h2>よくあるご質問</h2></div><div className="faqList">
      <details><summary>動画・ライブどちらの講座にも対応していますか？</summary><p>はい。動画講座・ライブ講座のどちらも、プラットフォーム上で公開できます。</p></details>
      <details><summary>講座づくりに時間をかけられなくても大丈夫ですか？</summary><p>AIによる講座構成の下書き作成や、運営・集客のサポートが用意されているため、無理なく始めていただけます。</p></details>
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
      <div className="consultationIntro"><span>YOUR PERSONAL ONLINE COURSE PROPOSAL</span><h2>あなた専用のオンライン講座を、<br/>無料でご提案します。</h2><p>お持ちの資格と経験を伺い、最初に開く講座、対象者、受講料、準備する内容、募集開始までの進め方を一緒に整理します。まだ講座内容が決まっていなくても大丈夫です。</p><ul><li>最初に開講するオンライン講座の案</li><li>対象者・受講料・講座のゴール</li><li>最短14日を目安にした準備スケジュール</li></ul></div>
      <div className="formWrap"><iframe src={formEmbedUrl} title="オンライン講座開講・無料相談フォーム" loading="lazy">読み込んでいます…</iframe><p>フォームが表示されない場合は、<a href={formUrl} target="_blank" rel="noreferrer">Googleフォームを開いてご回答ください</a>。</p></div>
    </section>

    <section className="finalCta"><div className="rings bottom" aria-hidden="true"><i/><i/><i/><b/></div><div><span>YOUR FIRST ONLINE COURSE IN AS LITTLE AS 14 DAYS</span><h2>朗読検定対策講座なら、<br/>最短14日で募集開始。</h2><p>資格と経験を、「申込みを受け付けられる講座」へ。<br/>まずは、あなたならどんな講座を開けるのか無料提案をお受け取りください。</p><a className="button primary large" href={inquiryUrl}>自分専用のオンライン講座提案を受ける <span>→</span></a><small>提案を受けただけで申込みにはなりません・20名様限定</small></div></section>

    <footer><a className="brandLogo footerBrandLogo" href="#top" aria-label="声の表現アカデミー トップへ"><span className="brandLogoCrop"><img src="/koeaca/koe-academy-logo-sheet.png" alt="声の表現アカデミー"/></span></a><p>一般社団法人 日本朗読検定協会</p><small>© 一般社団法人 日本朗読検定協会</small></footer>
    <a className="mobileCta" href={inquiryUrl}>無料で講座提案を受ける <span>→</span></a>
  </main>;
}
