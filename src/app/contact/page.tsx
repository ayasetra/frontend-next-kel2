"use client";
import React, { useState } from "react";
import "./contact.css";
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Pesan berhasil dikirim!");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <main className="contact-container">
            {/* HEADER */}
            <section className="contact-header">
                <h1>Contact</h1>
                <p>Hubungi kami untuk informasi lebih lanjut</p>
            </section>

            {/* INFORMASI KONTAK */}
            <section className="contact-content">
                <div className="contact-info">
                    <div className="info-box">
                        <i className="fi fi-sr-home"></i>
                        <div>
                            <h3>Alamat</h3>
                            <p>Pasar Kliwon, Surakarta, Jawa Tengah</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <i className="fi fi-sr-phone-call"></i>
                        <div>
                            <h3>Hubungi Kami</h3>
                            <p>085 229 999 696</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <i className="fi fi-sr-envelope"></i>
                        <div>
                            <h3>Email Kami</h3>
                            <p>andalan@jmail.com</p>
                        </div>
                    </div>
                </div>

                {/* FORM KONTAK */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nama Anda"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Anda"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subjek"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Pesan"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Kirim Pesan</button>
                </form>
            </section>
        </main>
    );
}