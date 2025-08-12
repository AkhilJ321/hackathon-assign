import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#ffffff",
          padding: "10px 20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: "60px", width: "80px", objectFit: "contain" }}
          />
          <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>
            POWERPUFF_PEOPLE
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(to bottom, #001F54, #003F88)",
          color: "#fff",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "15px" }}>
          Unlock Actionable User Insights for Your Apps
        </h1>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.5",
          }}
        >
          Marketing Impact Measurement — Know which campaigns actually work,
          track user engagement, and optimize your app’s growth strategy with
          real-time analytics.
        </p>
      </section>

      {/* Features */}
      <section
        id="features"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "40px 20px",
          background: "#f5f5f5",
        }}
      >
        {[
          {
            title: "Real-Time Data",
            desc: "Instant insights from your user base for faster decisions.",
          },
          {
            title: "Easy Integration",
            desc: "Seamless SDK setup for iOS, Android, and web apps.",
          },
          {
            title: "Custom Reports",
            desc: "Generate tailored reports to match your KPIs.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              {item.title}
            </h3>
            <p style={{ color: "#555", fontSize: "16px" }}>{item.desc}</p>
          </div>
        ))}
      </section>
      <div style={{
        justifyContent: "center",
        marginLeft:"700px"
      }}>
      <button
          style={{
            background: "#FFD60A",
            border: "none",
            padding: "12px 25px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "20px",
          }}
           onClick={() => navigate("/dashboard")}
        >
          Get Started ➡
        </button>
      </div>
      <section
        id="about"
        style={{
          padding: "50px 20px",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>About Us</h2>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          We are a team of passionate developers and analysts dedicated to
          empowering businesses with the tools they need to understand their
          users better and grow faster.
        </p>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        style={{
          background: "#001F54",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} POWERPUFF_PEOPLE — All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
