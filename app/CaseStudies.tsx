export default function CaseStudies() {
  return (
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
  );
}
