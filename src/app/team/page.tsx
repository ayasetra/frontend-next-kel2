"use client";

export default function Services() {
    const team = [
        {
            name: "Andi Jambul",
            role: "Operator Sound System",
            image: "/image/1.jpg",
        },
        {
            name: "Anis Madiun",
            role: "Operator Broadcasting",
            image: "/image/2.jpg",
        },
        {
            name: "Dimas Kurnia",
            role: "Teknisi Lapangan",
            image: "/image/3.jpg",
        },
        {
            name: "Donny Bewok",
            role: "Streaming Specialist",
            image: "/image/4.jpg",
        },
    ];

    return (
        <div>
            {/* 🔹 Bagian Services */}
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


                {/* Konten utama di atas overlay */}
                <div style={{ position: "relative", zIndex: 1 }}>
                    {/* Judul Halaman */}
                    <div style={{ textAlign: "center", marginBottom: "50px" }}>
                        <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", letterSpacing: "1px" }}>
                            Team
                        </h1>
                    </div>

            {/* 🔹 Bagian Our Team */}
            <div
                style={{
                            backgroundColor: "#1f2937",
                            borderRadius: "42px",
                    color: "#fff",

                    textAlign: "center",
                    padding: "80px 40px",
                }}
            >
                <h2
                    style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        marginBottom: "50px",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        borderBottom: "3px solid #ffff",
                        display: "inline-block",
                        paddingBottom: "10px",
                    }}
                >
                    Meet Our Team
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "30px",
                        marginTop: "50px",
                        justifyItems: "center",
                    }}
                >
                    {team.map((member) => (
                        <div
                            key={member.name}
                            style={{
                                width: "250px",
                                backgroundColor: "#121923",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                                transition: "all 0.3s ease-in-out",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow = "0 10px 22px rgba(0,0,0,0.25)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
                            }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{
                                    width: "100%",
                                    height: "250px",
                                    objectFit: "cover",
                                }}
                            />
                            <div style={{ padding: "20px" }}>
                                <h3 style={{ fontWeight: "bold", marginBottom: "5px" }}>
                                    {member.name}
                                </h3>
                                <p style={{ color: "#999" }}>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}