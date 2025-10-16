"use client";

export default function Services() {
    const services = [
        {
            icon: "🎧",
            title: "Peralatan Audio Berkualitas Tinggi",
            desc: "Menghasilkan suara jernih dan tajam untuk acara musik, seminar, atau rekaman.",
        },
        {
            icon: "👷",
            title: "Dukungan Teknisi Profesional",
            desc: "Pastikan acara berjalan lancar dengan teknisi berpengalaman dan terlatih.",
        },
        {
            icon: "📡",
            title: "Perlengkapan Streaming Profesional",
            desc: "Streaming jernih dan stabil untuk menjangkau audiens lebih luas.",
        },
    ];

    const cards = [
        {
            title: "Operator Broadcasting",
            image: "/image/cards-1.jpg",
            desc: "Dokumentasi lengkap dan profesional untuk setiap acara Anda.",
        },
        {
            title: "Operator Sound System",
            image: "/image/cards-5.jpg",
            desc: "Pengalaman audio mengesankan dengan tenaga ahli di bidangnya.",
        },
    ];

    return (
        <div
            style={{
                backgroundImage: "url('/image/bg-services3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
                padding: "100px 40px 80px",
                position: "relative",
            }}
        >
            {/* 🔹 Tambah overlay gelap biar teks dan kartu lebih kontras */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    zIndex: 0,
                }}
            ></div>

            {/* 🔹 Konten utama di atas overlay */}
            <div style={{ position: "relative", zIndex: 1 }}>
                {/* Judul Halaman */}
                <div style={{ textAlign: "center", marginBottom: "50px" }}>
                    <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", letterSpacing: "1px" }}>
                        Our Services
                    </h1>
                    <p
                        style={{
                            maxWidth: "700px",
                            margin: "15px auto",
                            lineHeight: "1.6",
                            color: "#f1f1f1",
                            fontSize: "1.1rem",
                        }}
                    >
                        Kami menyediakan layanan audio, visual, dan broadcasting profesional
                        untuk mendukung kebutuhan Anda.
                    </p>
                </div>

                {/* Bagian Layanan (Icons) */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "30px",
                    }}
                >
                    {services.map((s) => (
                        <div
                            key={s.title}
                            style={{
                                width: "300px",
                                backgroundColor: "rgba(255,255,255,0.9)",
                                borderRadius: "10px",
                                padding: "25px",
                                textAlign: "center",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                                transition: "transform 0.3s, box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-25px)";
                                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
                            }}
                        >
                            <div style={{ fontSize: "2rem" }}>{s.icon}</div>
                            <h3 style={{ fontWeight: "bold", color: "#222", marginTop: "10px" }}>{s.title}</h3>
                            <p style={{ color: "#444" }}>{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Kartu Bergambar */}
                <div
                    style={{
                        marginTop: "80px",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "30px",
                    }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            style={{
                                display: "flex",
                                backgroundColor: "rgba(255,255,255,0.9)",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                                transition: "transform 0.3s, box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.03)";
                                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
                            }}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                style={{ width: "40%", objectFit: "cover" }}
                            />
                            <div style={{ padding: "20px" }}>
                                <h3 style={{ fontWeight: "bold", color: "#222" }}>{card.title}</h3>
                                <p style={{ color: "#444" }}>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    );
}