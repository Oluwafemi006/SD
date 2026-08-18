import { ImageResponse } from "next/og";

export const alt = "SD International Group — Des solutions pour vos projets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 84px",
        color: "white",
        background: "#0b1f33",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <div style={{ width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "#0d6efd", fontSize: 30, fontWeight: 900 }}>SD</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 31, fontWeight: 800 }}>SD International Group</span>
          <span style={{ marginTop: 7, color: "#b9c8d8", fontSize: 17, textTransform: "uppercase" }}>Groupe multisectoriel</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
        <span style={{ color: "#f5b82e", fontSize: 20, fontWeight: 800, textTransform: "uppercase" }}>Conseil · Réalisation · Fourniture · Coordination</span>
        <span style={{ marginTop: 20, fontSize: 64, lineHeight: 1.08, fontWeight: 900 }}>Transformer vos besoins en solutions concrètes.</span>
      </div>
      <div style={{ width: 160, height: 8, background: "#0d6efd" }} />
    </div>,
    size,
  );
}
