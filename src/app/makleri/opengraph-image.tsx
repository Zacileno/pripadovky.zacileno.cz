import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Mystery shopping — případová studie Zacíleno";

const logo =
  "data:image/png;base64,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";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ED1E00",
          padding: "64px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 560,
            height: 560,
            backgroundColor: "#770B00",
            right: -160,
            bottom: -220,
            borderRadius: 60,
            transform: "rotate(28deg)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 240,
            height: 240,
            borderRadius: "50%",
            backgroundColor: "#FFB000",
            right: 70,
            top: -110,
          }}
        />

        <img src={logo} width={190} height={34} style={{ objectFit: "contain" }} />

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 700,
                color: "#FFB000",
                textTransform: "uppercase",
                letterSpacing: 2,
                marginBottom: 24,
              }}
            >
              Případová studie · realitní sektor
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 54,
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.15,
              }}
            >
              Mystery shopping na vlastních makléřích
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 150,
                fontWeight: 900,
                fontStyle: "italic",
                color: "#FFB000",
                lineHeight: 1,
              }}
            >
              40&nbsp;%
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                color: "#FFFFFF",
                textAlign: "center",
                maxWidth: 240,
                justifyContent: "center",
                marginTop: 8,
              }}
            >
              rychlejší prodej nemovitostí
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Zacíleno
        </div>
      </div>
    ),
    { ...size }
  );
}
