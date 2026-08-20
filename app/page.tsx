export default function Home() {
  return (
    <div className="wrap">
      <header>
        <p className="eyebrow">PORTFOLIO / 2026</p>
        <h1>唯</h1>
        <p className="tagline">
          デザインから実装まで一気通貫で対応する、AI活用フルスタックエンジニア。業務効率化ツールの構築を得意としています。
        </p>
        <div className="seal">制作者</div>
      </header>

      <section className="fields">
        <div className="field-row">
          <div className="field-label">職種</div>
          <div className="field-value">AIエンジニア / フルスタック開発者（元Webデザイナー）</div>
        </div>
        <div className="field-row">
          <div className="field-label">得意領域</div>
          <div className="field-value">
            Claude APIを活用した業務自動化・AIツール開発、要件定義から本番デプロイまでの一気通貫対応
          </div>
        </div>
        <div className="field-row">
          <div className="field-label">スキル</div>
          <div className="field-value">
            <div className="skill-tags">
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Supabase / pgvector</span>
              <span className="skill-tag">Claude API</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">Photoshop</span>
              <span className="skill-tag">LP / バナー制作</span>
            </div>
          </div>
        </div>
      </section>

      <section className="profile">
        <h2 className="section-title">
          <span className="no">PROFILE</span>唯について
        </h2>
        <p className="profile-text">
          Webデザイナーとしてのキャリアは、「デザインをするのが好き」というシンプルな気持ちから始まりました。AI分野に興味を持ったのは、今まさに市場で注目されている領域だからです。デザインで培った視点に、AIを活用した実装力を掛け合わせることで、見た目だけでなく実際に機能するものづくりを目指しています。
        </p>
        <p className="profile-text">
          仕事で特に大切にしているのは、丁寧なコミュニケーションと納期を守ることです。要件のすり合わせを丁寧に行い、進捗をこまめに共有しながら、約束した期日には確実に成果物をお届けします。
        </p>
      </section>

      <section>
        <h2 className="section-title">
          <span className="no">案件 001</span>社内文書検索AI（RAG）
        </h2>
        <div className="project">
          <div className="project-head">
            <div>
              <p className="project-no">DELIVERY NOTE — 001</p>
              <h3 className="project-title">社内文書検索AI</h3>
            </div>
            <div className="stamp-done">
              検収
              <br />済
            </div>
          </div>
          <p className="project-desc">
            社内文書が散在し検索性が低いという課題に対し、自然言語で問い合わせられる文書検索AIを構築。
          </p>
          <p className="project-note">
            <b>工夫した点：</b>
            pgvectorによるベクトル検索基盤とClaude APIを組み合わせ、根拠付きで回答できるRAGシステムを実現。要件定義から本番デプロイまで完走。
          </p>
          <figure className="project-shot">
            <img
              src="/images/rag-search-result.png"
              alt="社内文書検索AIで質問に対する回答と参照元PDFが表示されている画面"
            />
            <figcaption>質問応答画面 — 回答と参照元文書（出典付き）</figcaption>
          </figure>
          <div className="tech-tags">
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Supabase</span>
            <span className="tech-tag">pgvector</span>
            <span className="tech-tag">Claude API</span>
          </div>
          <div className="project-links">
            <a href="https://rag-document-search-flame.vercel.app" target="_blank" rel="noopener">
              Demo ↗
            </a>
            <a href="https://github.com/yoshiakiyui0214" target="_blank" rel="noopener">
              GitHub ↗
            </a>
          </div>
        </div>

        <h2 className="section-title">
          <span className="no">案件 002</span>ブログ記事自動生成システム
        </h2>
        <div className="project">
          <div className="project-head">
            <div>
              <p className="project-no">DELIVERY NOTE — 002</p>
              <h3 className="project-title">ブログ記事自動生成システム</h3>
            </div>
            <div className="stamp-done">
              検収
              <br />済
            </div>
          </div>
          <p className="project-desc">ブログ記事の作成・投稿作業を自動化し、コンテンツ運用の工数を削減。</p>
          <p className="project-note">
            <b>工夫した点：</b>
            GASからClaude APIで記事を生成し、WordPress REST API経由で自動投稿する一連のパイプラインを構築。API連携部分のエラーハンドリングを重ね、安定稼働するフローに仕上げた。
          </p>
          <figure className="project-shot">
            <img
              src="/images/blog-gas-prompt.png"
              alt="GASのコードエディタで記事生成用プロンプトを設計している画面"
            />
            <figcaption>GAS — 記事生成プロンプトの設計（トーン・文字数・出力形式を厳密に指定）</figcaption>
          </figure>
          <div className="tech-tags">
            <span className="tech-tag">GAS</span>
            <span className="tech-tag">Claude API</span>
            <span className="tech-tag">WordPress REST API</span>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/yoshiakiyui0214/blog-auto-generator-gas"
              target="_blank"
              rel="noopener"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <h2 className="section-title">
          <span className="no">案件 003</span>美容室向けLINE公式アカウントBot
        </h2>
        <div className="project">
          <div className="project-head">
            <div>
              <p className="project-no">DELIVERY NOTE — 003</p>
              <h3 className="project-title">line-bot-salon</h3>
            </div>
            <div className="stamp-done">
              検収
              <br />済
            </div>
          </div>
          <p className="project-desc">
            美容室向けのLINE公式アカウントBot。お客様からの質問にClaudeがFAQをもとにその場で自動回答し、店舗運営の一次対応を効率化。
          </p>
          <p className="project-note">
            <b>工夫した点：</b>
            FAQに無い内容は推測で答えず問い合わせ案内に誘導する設計に加え、回答ごとの確信度をAIが自己判定し、確信度が低い場合はオーナーへLINEで自動通知する仕組みを構築。Basic認証付きの管理画面からFAQ・メニュー・お知らせ配信・会話ログまで一括管理できる。
          </p>
          <div className="shot-grid">
            <figure className="project-shot">
              <img src="/images/line-bot-salon-admin.png" alt="line-bot-salon 管理画面のFAQ管理一覧" />
              <figcaption>管理画面 — FAQ管理</figcaption>
            </figure>
            <figure className="project-shot">
              <img
                src="/images/line-bot-salon-chat.png"
                alt="LINEトーク画面。確信度が低い回答をオーナーへ自動通知している様子"
              />
              <figcaption>LINEトーク — 確信度判定＆オーナー自動通知</figcaption>
            </figure>
          </div>
          <div className="tech-tags">
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Supabase</span>
            <span className="tech-tag">LINE Messaging API</span>
            <span className="tech-tag">Claude API</span>
          </div>
          <div className="project-links">
            <a href="https://line-bot-salon-six.vercel.app" target="_blank" rel="noopener">
              Demo ↗
            </a>
            <a href="https://github.com/yoshiakiyui0214/line-bot-salon" target="_blank" rel="noopener">
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>お仕事のご相談はお気軽にお問い合わせください。</p>
        <a className="contact-btn" href="mailto:yuichan.501@icloud.com">
          お問い合わせ ↗
        </a>
      </footer>
    </div>
  );
}
