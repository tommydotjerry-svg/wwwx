import React from "react";

const sections = [
  {
    title: "1. 基本信息",
    items: [
      ["产品名称", "手机扫码支付"],
      ["文档版本", "V1.0"],
      ["适用终端", "iOS / Android"],
      ["文档类型", "产品需求文档"],
      ["创建日期", "2026-07-05"],
    ],
  },
  {
    title: "2. 背景与问题定义",
    body: "当前线下支付场景中仍存在操作步骤多、支付反馈不清晰、异常处理分散等问题。本页将 PRD 以可线上访问的网页形式展示，方便评审、分享和部署。",
  },
  {
    title: "3. 产品目标",
    bullets: [
      "提升扫码支付效率，缩短支付路径",
      "提高支付成功率，减少支付中断",
      "让支付过程可视化、结果明确化",
      "降低门店收银和人工确认成本",
    ],
  },
  {
    title: "4. 需求范围",
    columns: [
      {
        heading: "本期包含",
        list: ["扫码识别", "支付确认", "结果反馈", "订单详情", "异常提示"],
      },
      {
        heading: "本期不包含",
        list: ["退款功能", "分账功能", "发票功能", "多币种支付", "离线支付"],
      },
    ],
  },
];

const protoCards = [
  {
    title: "首页入口页",
    lines: ["[扫一扫]", "最近交易", "我的钱包"],
  },
  {
    title: "扫码页",
    lines: ["┌────────────┐", "│   扫码框    │", "└────────────┘", "[相册] [手电筒]"],
  },
  {
    title: "确认支付页",
    lines: ["商家名称：XX便利店", "支付金额：¥28.50", "( ) 微信支付", "[确认支付]"],
  },
  {
    title: "支付结果页",
    lines: ["✓ 支付成功", "支付金额：¥28.50", "[查看订单] [返回首页]"],
  },
];

const flowSteps = ["首页入口", "扫码识别", "二维码校验", "支付确认页", "发起支付", "支付结果"];

export default function PaymentPRDWeb() {
  return (
    <div style={styles.page}>
      <div style={styles.backgroundGlow1} />
      <div style={styles.backgroundGlow2} />

      <header style={styles.hero}>
        <div style={styles.badge}>可直接部署的前端 PRD 页面</div>
        <h1 style={styles.title}>手机扫码支付 PRD 文档</h1>
        <p style={styles.subtitle}>
          将文档、流程和原型图整合到一个现代化单页中，适合评审展示、线上分享和静态部署。
        </p>
        <div style={styles.heroActions}>
          <a href="#prototype" style={styles.primaryButton}>查看原型图</a>
          <a href="#requirements" style={styles.secondaryButton}>查看需求说明</a>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.grid2}>
          {sections.slice(0, 2).map((section) => (
            <article key={section.title} style={styles.card}>
              <h2 style={styles.cardTitle}>{section.title}</h2>
              {section.items ? (
                <dl style={styles.definitionList}>
                  {section.items.map(([k, v]) => (
                    <div key={k} style={styles.definitionRow}>
                      <dt style={styles.definitionKey}>{k}</dt>
                      <dd style={styles.definitionValue}>{v}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p style={styles.paragraph}>{section.body}</p>
              )}
            </article>
          ))}
        </section>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>产品目标</h2>
          <ul style={styles.bulletList}>
            {sections[2].bullets?.map((item) => (
              <li key={item} style={styles.bulletItem}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="requirements" style={styles.grid2}>
          {sections[3].columns?.map((col) => (
            <article key={col.heading} style={styles.card}>
              <h2 style={styles.cardTitle}>{col.heading}</h2>
              <ul style={styles.bulletList}>
                {col.list.map((item) => (
                  <li key={item} style={styles.bulletItem}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>主流程</h2>
          <div style={styles.flowTrack}>
            {flowSteps.map((step, index) => (
              <div key={step} style={styles.flowStepWrap}>
                <div style={styles.flowStep}>{step}</div>
                {index !== flowSteps.length - 1 && <div style={styles.flowArrow}>→</div>}
              </div>
            ))}
          </div>
        </section>

        <section id="prototype" style={styles.card}>
          <div style={styles.sectionHeaderRow}>
            <h2 style={styles.cardTitle}>页面原型图</h2>
            <span style={styles.sectionTag}>低保真线框图</span>
          </div>
          <div style={styles.prototypeGrid}>
            {protoCards.map((card) => (
              <div key={card.title} style={styles.prototypeCard}>
                <h3 style={styles.prototypeTitle}>{card.title}</h3>
                <div style={styles.monoBlock}>
                  {card.lines.map((line) => (
                    <div key={line} style={styles.monoLine}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>异常处理与上线说明</h2>
          <div style={styles.noticeGrid}>
            <div style={styles.noticeBox}>
              <h3 style={styles.noticeTitle}>异常处理</h3>
              <p style={styles.paragraph}>
                覆盖摄像头权限、二维码无效、订单过期、支付失败和网络异常等情况，确保用户在任何节点都能得到明确反馈与下一步指引。
              </p>
            </div>
            <div style={styles.noticeBox}>
              <h3 style={styles.noticeTitle}>线上部署</h3>
              <p style={styles.paragraph}>
                该页面采用纯前端静态渲染思路，适合部署到 Vercel、Netlify、GitHub Pages 或企业静态资源 CDN。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #07111f 0%, #0f172a 45%, #111827 100%)",
    color: "#e5e7eb",
    padding: "32px",
    position: "relative",
    overflow: "hidden",
    fontFamily: 'Inter, "PingFang SC", "Microsoft YaHei", sans-serif',
  },
  backgroundGlow1: {
    position: "absolute",
    inset: "-200px auto auto -120px",
    width: "420px",
    height: "420px",
    borderRadius: "999px",
    background: "rgba(59,130,246,0.18)",
    filter: "blur(40px)",
  },
  backgroundGlow2: {
    position: "absolute",
    right: "-120px",
    top: "220px",
    width: "360px",
    height: "360px",
    borderRadius: "999px",
    background: "rgba(16,185,129,0.14)",
    filter: "blur(50px)",
  },
  hero: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1120px",
    margin: "0 auto 28px",
    padding: "36px",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    background: "rgba(15, 23, 42, 0.72)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },
  badge: { display: "inline-block", padding: "8px 12px", borderRadius: "999px", background: "rgba(59,130,246,0.18)", color: "#93c5fd", fontSize: "12px", fontWeight: 700 },
  title: { margin: "18px 0 12px", fontSize: "42px", lineHeight: 1.1 },
  subtitle: { maxWidth: "760px", fontSize: "16px", color: "#cbd5e1", lineHeight: 1.8 },
  heroActions: { display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" },
  primaryButton: { padding: "12px 18px", borderRadius: "12px", background: "#3b82f6", color: "white", textDecoration: "none", fontWeight: 700 },
  secondaryButton: { padding: "12px 18px", borderRadius: "12px", background: "rgba(255,255,255,0.06)", color: "#e5e7eb", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)" },
  main: { position: "relative", zIndex: 1, maxWidth: "1120px", margin: "0 auto", display: "grid", gap: "20px" },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" },
  card: { borderRadius: "20px", background: "rgba(17,24,39,0.72)", border: "1px solid rgba(255,255,255,0.08)", padding: "24px", boxShadow: "0 18px 50px rgba(0,0,0,0.25)" },
  cardTitle: { margin: "0 0 18px", fontSize: "22px" },
  paragraph: { margin: 0, color: "#cbd5e1", lineHeight: 1.8 },
  definitionList: { margin: 0, display: "grid", gap: "12px" },
  definitionRow: { display: "grid", gridTemplateColumns: "120px 1fr", gap: "12px", alignItems: "start" },
  definitionKey: { color: "#94a3b8", fontWeight: 700 },
  definitionValue: { margin: 0, color: "#e5e7eb" },
  bulletList: { margin: 0, paddingLeft: "18px", color: "#dbe4f0", lineHeight: 1.9 },
  bulletItem: { marginBottom: "4px" },
  flowTrack: { display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" },
  flowStepWrap: { display: "flex", alignItems: "center", gap: "12px" },
  flowStep: { padding: "10px 14px", borderRadius: "999px", background: "rgba(59,130,246,0.14)", border: "1px solid rgba(96,165,250,0.35)" },
  flowArrow: { color: "#64748b", fontSize: "20px" },
  sectionHeaderRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", marginBottom: "18px", flexWrap: "wrap" },
  sectionTag: { padding: "8px 12px", borderRadius: "999px", background: "rgba(16,185,129,0.14)", color: "#6ee7b7", fontSize: "12px", fontWeight: 700 },
  prototypeGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" },
  prototypeCard: { borderRadius: "18px", padding: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" },
  prototypeTitle: { margin: "0 0 12px", fontSize: "16px" },
  monoBlock: { padding: "14px", borderRadius: "14px", background: "#020617", color: "#d1d5db", fontFamily: '"SFMono-Regular", Consolas, monospace', fontSize: "12px", lineHeight: 1.8, border: "1px solid rgba(255,255,255,0.06)" },
  monoLine: { whiteSpace: "pre-wrap" },
  noticeGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" },
  noticeBox: { padding: "18px", borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" },
  noticeTitle: { margin: "0 0 12px", fontSize: "18px" },
};
