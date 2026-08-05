"use client";

import { useState } from "react";

const questions = [
  "パソコンやスマートフォンの操作に自信がない",
  "AIを使いこなせていない",
  "講座や教材を自分だけで作る自信がない",
  "自分の強みを、講座にする方法が分からない",
  "オンライン講座を通じて人に喜んでもらいたい",
  "スキマ時間を活用して講師活動を始めたい",
];

function resultFor(count: number) {
  if (count >= 5) return { label: "今のあなたにピッタリです", text: "声の表現アカデミー開講パックで、講師としての一歩を具体的に始められます。" };
  if (count >= 3) return { label: "あなたに向いています", text: "講座づくりや運営を一人で抱えず、得意な「教えること」に集中できます。" };
  return { label: "あなたの可能性を整理してみませんか？", text: "無料相談で、これまでの経験から講座にできる強みを一緒に見つけられます。" };
}

export default function FitCheck() {
  const [checked, setChecked] = useState<boolean[]>(questions.map(() => false));
  const count = checked.filter(Boolean).length;
  const result = resultFor(count);

  const toggle = (index: number) => {
    setChecked((current) => current.map((value, i) => i === index ? !value : value));
  };

  return (
    <section className="fitCheck section" id="fit-check">
      <div className="fitCheckIntro">
        <span>QUICK CHECK</span>
        <h2>あなたはいくつ<br/>当てはまりますか？</h2>
        <p>気になる項目をチェックしてください。3つ以上当てはまる方には、声の表現アカデミー開講パックが向いています。</p>
        <div className={`fitResult level${count >= 5 ? "High" : count >= 3 ? "Mid" : "Low"}`} aria-live="polite">
          <small>現在のチェック数</small>
          <strong>{count}<em>／6</em></strong>
          <b>{result.label}</b>
          <p>{result.text}</p>
        </div>
      </div>

      <div className="fitCheckMain">
        <div className="fitQuestions">
          {questions.map((question, index) => (
            <label className={checked[index] ? "isChecked" : ""} key={question}>
              <input type="checkbox" checked={checked[index]} onChange={() => toggle(index)}/>
              <span aria-hidden="true">✓</span>
              <b>{question}</b>
            </label>
          ))}
        </div>

        <div className="planChoice">
          <small>NEXT STEP</small>
          <h3>あなたに合うのは、どちらのプラン？</h3>
          <div>
            <a href="#price"><span>費用回収を早めたい</span><strong>スタンダードプランがおすすめ</strong><b>→</b></a>
            <a href="#price"><span>最初に支払う費用を抑えたい</span><strong>ライトプランがおすすめ</strong><b>→</b></a>
          </div>
        </div>
      </div>
    </section>
  );
}
