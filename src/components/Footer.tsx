import Link from "next/link";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#1f2937", // abu gelap
                color: "#e5e7eb", // abu terang
                padding: "2rem 0",
                marginTop: "3rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1rem",
                }}
            >
                {/* Nama Perusahaan */}
                <h2 style={{ color: "#ffffff", fontWeight: "bold", fontSize: "1.5rem" }}>
                    Andalan Team
                </h2>

                {/* Deskripsi singkat */}
                <p style={{ maxWidth: "600px", lineHeight: "1.6", fontSize: "0.95rem" }}>
                    Ahli dalam broadcasting, manajemen live event, dan produksi audio-visual.
                </p>

                {/* Garis pemisah */}
                <hr
                    style={{
                        width: "80%",
                        border: "none",
                        borderTop: "1px solid #374151",
                        margin: "1rem 0",
                    }}
                />

                {/* Navigasi Footer */}
                <div style={{ display: "flex", gap: "20px" }}>
                    <Link href="http://www.youtube.com/@suryadanda4038" style={{ color: "#E53935", textDecoration: "none" }}>
                        YouTube
                    </Link>
                    <Link href="/service" style={{ color: "#0D47A1", textDecoration: "none" }}>
                        Facebook
                    </Link>
                    <Link href="/team" style={{ color: "#9B59B6", textDecoration: "none" }}>
                        Instagram
                    </Link>

                </div>

                {/* Hak Cipta */}
                <small style={{ color: "#6b7280", marginTop: "0.5rem", fontSize: "0.85rem" }}>
                    © {new Date().getFullYear()} Andalan Team. All rights reserved.
                </small>
            </div>
        </footer>
    );
}