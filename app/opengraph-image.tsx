import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "UD AQSA AULIA AC - Spesialis Jual Beli AC Bekas Terpercaya"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1628 0%, #0f2447 40%, #1a3a6c 70%, #0f2447 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #1e40af, #3b82f6, #60a5fa)",
            marginBottom: 30,
            boxShadow: "0 20px 60px rgba(59,130,246,0.4)",
          }}
        >
          <span style={{ fontSize: 40, color: "white" }}>❄</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: "white",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          UD AQSA AULIA AC
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 24,
            color: "rgba(148,163,184,0.9)",
            margin: "16px 0 0 0",
            letterSpacing: "0.02em",
          }}
        >
          Spesialis Jual Beli AC Bekas Terpercaya
        </p>

        {/* Badges */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          {["Harga Tertinggi", "Bongkar Gratis", "Bayar Cash Langsung"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  padding: "10px 20px",
                  borderRadius: 999,
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: "rgba(147,197,253,0.9)",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}
