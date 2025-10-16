"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            style={{

                display: "flex",
                justifyContent: "space-between", // ⬅ bikin kiri-kanan
                alignItems: "center",
                padding: "20px 40px",
                backgroundColor: "#1f2937",
                color: "white",
            }}
        >
            {/* Nama Perusahaan */}
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                    Andalan Team
                </Link>
            </div>

            {/* Menu di kanan */}
            <div style={{ display: "flex", gap: "25px" }}>
                <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                <Link href="../team" style={{ color: "white", textDecoration: "none" }}>Team</Link>
                <Link href="../services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
                <Link href="../contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
            </div>
        </nav>
    );
}