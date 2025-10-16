"use client";

export default function Home() {
    const highlights = [
        {
            icon: "🎧",
            title: "Produksi Audio",
            desc: "Kualitas suara profesional untuk konser, seminar, dan siaran langsung.",
        },
        {
            icon: "🎥",
            title: "Produksi Video",
            desc: "Dokumentasi acara Anda dengan hasil visual terbaik dan sinematik.",
        },
        {
            icon: "📡",
            title: "Streaming Live",
            desc: "Siarkan acara Anda ke seluruh dunia dengan koneksi yang stabil dan jelas.",
        },
    ];



    return (
        <div
            style={{
                backgroundColor: "#1E293B", // biru gelap elegan
                color: "white",
                paddingBottom: "60px",
            }}
        >
            {/* Hero Section */}
            <section
                style={{
                    height: "80vh",
                    backgroundImage: "url('/image/hero-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        backgroundColor: "rgba(0,0,0,0.6)",
                        position: "absolute",
                        inset: 0,
                    }}
                ></div>
                <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
                    <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
                        Sound and Broadcasting Specialist
                    </h1>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                        Kami ahli dalam manajemen siaran langsung, produksi acara, dan layanan audio-visual profesional.
                    </p>
                    <a
                        href="#about"
                        style={{
                            display: "inline-block",
                            marginTop: "25px",
                            backgroundColor: "#4C1D95", // ungu
                            color: "white",
                            padding: "12px 28px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Pelajari Lebih Lanjut
                    </a>
                </div>
            </section>

            {/* Tentang Kami */}
            <section
                id="about"
                style={{
                    padding: "40px 40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap", // supaya responsif di layar kecil
                    gap: "40px",
                    backgroundColor: "rgba(30,41,59,0.85)",
                }}
            >
                {/* Gambar Kiri */}
                <div style={{ flex: "1 1 400px", textAlign: "center" }}>
                    <img
                        src="/image/why-us-bg.png" // 👉 ganti sesuai logo kamu
                        alt="Logo Andalan Team"
                        style={{
                            width: "350px",
                            maxWidth: "100%",
                            borderRadius: "12px",
                            marginLeft: "130px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        }}
                    />
                </div>

                {/* Teks Kanan */}
                <div style={{ flex: "1 1 500px", color: "white" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}>
                        Tentang Kami
                    </h2>
                    <p
                        style={{
                            lineHeight: "1.8",
                            color: "#E5E7EB",
                            marginBottom: "20px",
                            fontSize: "1.05rem",
                        }}
                    >
                        <strong>Andalan Team</strong>adalah penyedia layanan broadcasting, audio-visual, dan event support dengan tim profesional serta peralatan modern.
                    </p>
                    <p style={{ color: "#D1D5DB" }}>
                        Kami berkomitmen menghadirkan pengalaman terbaik untuk pelanggan melalui
                        dukungan teknis yang andal dan solusi kreatif di setiap proyek.
                    </p>
                </div>
            </section>


            {/* Layanan Unggulan */}
            <section id="services" style={{ padding: "60px 40px", backgroundColor: "#111827" }}>
                <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: "40px" }}>
                    Layanan Unggulan
                </h2>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "30px",
                    }}
                >
                    {highlights.map((s) => (
                        <div
                            key={s.title}
                            style={{
                                width: "300px",
                                backgroundColor: "white",
                                borderRadius: "10px",
                                padding: "25px",
                                textAlign: "center",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                            }}
                        >
                            <div style={{ fontSize: "2rem" }}>{s.icon}</div>
                            <h3 style={{ fontWeight: "bold", color: "#333", marginTop: "10px" }}>{s.title}</h3>
                            <p style={{ color: "#555" }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section
                style={{
                    backgroundImage: "url('/image/cta-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "100px 40px",
                    textAlign: "center",
                    position: "relative",
                    color: "white",
                }}
            >
                <div
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        position: "absolute",
                        inset: 0,
                    }}
                ></div>
                <div style={{ position: "relative", zIndex: 1 }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
                        Lihat Karya Kami
                    </h2>
                    <p style={{ marginBottom: "30px" }}>
                        Saksikan dokumentasi dan siaran langsung dari berbagai acara yang telah kami tangani.
                    </p>
                    <a
                        href="https://www.youtube.com/@suryadanda4038"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: "#E11D48",
                            color: "white",
                            padding: "12px 28px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Andalan Channel
                    </a>
                </div>
            </section>
        </div>
    );
}
