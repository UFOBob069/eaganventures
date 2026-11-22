import { ImageResponse } from "next/og";

export const alt = "David Eagan — Operator. Investor. Builder. Eagan Ventures.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#080a0d",
          color: "#f7f9fc",
          padding: "48px 64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 23,
            color: "#b4bfcd",
          }}
        >
          <span style={{ fontWeight: 700, color: "#f7f9fc" }}>
            eaganventures
          </span>
          <span>AUSTIN, TEXAS</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 65,
            fontSize: 94,
            fontWeight: 700,
            letterSpacing: -5,
            lineHeight: 1.05,
          }}
        >
          <span>Curious about</span>
          <span style={{ color: "#389bff" }}>what’s next.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 27,
            color: "#c7d0dc",
          }}
        >
          Operator. Investor. Builder.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            paddingTop: 25,
            borderTop: "1px solid #344253",
            justifyContent: "space-between",
            fontSize: 20,
          }}
        >
          <span>DAVID EAGAN</span>
          <span style={{ color: "#8cc4ff" }}>eaganventures.com</span>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 70,
            top: 215,
            width: 150,
            height: 150,
            border: "2px solid #265484",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            color: "#389bff",
            fontSize: 80,
          }}
        >
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <path
              d="M16 56L56 16M18 16H56V54"
              stroke="#389bff"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    ),
    size,
  );
}
