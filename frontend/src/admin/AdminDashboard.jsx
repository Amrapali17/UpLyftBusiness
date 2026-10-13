
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Enquiries", value: "0", icon: "✉" },
    { title: "Total Services", value: "6", icon: "▦" },
    { title: "Portfolio Projects", value: "0", icon: "◫" },
  ];

  return (
    <>
      <style>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background: #f5f8fb;
          color: #111418;
          font-family: inherit;
        }

        .admin-sidebar {
          width: 250px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          padding: 30px 18px 20px;
          background: #123b52;
          color: #fff;
          box-sizing: border-box;
        }

        .admin-brand {
          padding: 0 10px 28px;
          border-bottom: 1px solid rgba(255,255,255,.14);
        }

        .admin-brand h2 {
          margin: 0 0 8px;
          font-size: 21px;
          letter-spacing: -.6px;
        }

        .admin-brand span {
          color: #a9d8f3;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .admin-nav {
          display: grid;
          gap: 7px;
          margin-top: 28px;
        }

        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 13px 14px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          color: #d8e7ef;
          font: inherit;
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: background .2s ease;
        }

        .admin-nav-item > span {
          width: 20px;
          font-size: 18px;
          text-align: center;
        }

        .admin-nav-item:hover,
        .admin-nav-item.active {
          background: #2f79a8;
          color: #fff;
        }

        .admin-sidebar-footer {
          margin-top: auto;
          padding: 24px 10px 0;
          color: #b8d2e0;
        }

        .admin-sidebar-footer p {
          margin: 0 0 8px;
          font-size: 13px;
          font-weight: 600;
        }

        .admin-sidebar-footer span {
          font-size: 11px;
        }

        .admin-main {
          flex: 1;
          min-width: 0;
          padding: 36px 40px 20px;
          box-sizing: border-box;
        }

        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 30px;
        }

        .admin-eyebrow,
        .admin-welcome-label {
          margin: 0 0 8px;
          color: #2f79a8;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .admin-header h1 {
          margin: 0;
          color: #123b52;
          font-size: clamp(28px, 3vw, 36px);
          letter-spacing: -1px;
        }

        .admin-subtitle {
          margin: 9px 0 0;
          color: #6b7c89;
          font-size: 14px;
        }

        .admin-view-button {
          padding: 12px 17px;
          border: 1px solid #d9e6ee;
          border-radius: 9px;
          background: #fff;
          color: #123b52;
          font: inherit;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .admin-view-button:hover {
          background: #eaf6fc;
        }

        .admin-welcome {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 28px 30px;
          border: 1px solid #d8eaf5;
          border-radius: 15px;
          background: linear-gradient(115deg, #eaf6fc, #fff);
        }

        .admin-welcome h2 {
          margin: 0;
          color: #123b52;
          font-size: clamp(20px, 2.5vw, 27px);
          letter-spacing: -.6px;
        }

        .admin-welcome > div:first-child > p:last-child {
          max-width: 520px;
          margin: 10px 0 0;
          color: #627786;
          font-size: 14px;
          line-height: 1.7;
        }

        .admin-welcome-icon {
          display: grid;
          width: 62px;
          height: 62px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 17px;
          background: #2f79a8;
          color: #fff;
          font-size: 34px;
        }

        .admin-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
        }

        .admin-stat-card {
          padding: 22px;
          border: 1px solid #e0e9ef;
          border-radius: 13px;
          background: #fff;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .admin-stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(18,59,82,.06);
        }

        .admin-stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: #617482;
          font-size: 13px;
        }

        .admin-stat-icon {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border-radius: 10px;
          background: #eaf6fc;
          color: #2f79a8;
          font-size: 21px;
        }

        .admin-stat-card h3 {
          margin: 18px 0 4px;
          color: #123b52;
          font-size: 32px;
        }

        .admin-stat-card > p {
          margin: 0;
          color: #8595a0;
          font-size: 12px;
        }

        .admin-content-grid {
          display: grid;
          grid-template-columns: minmax(0,1.4fr) minmax(260px,1fr);
          gap: 20px;
          margin-top: 24px;
        }

        .admin-panel {
          min-width: 0;
          padding: 24px;
          border: 1px solid #e0e9ef;
          border-radius: 13px;
          background: #fff;
        }

        .admin-panel h2 {
          margin: 0;
          color: #123b52;
          font-size: 17px;
        }

        .admin-panel-heading > div > p,
        .admin-status-panel > p {
          margin: 8px 0 0;
          color: #82919c;
          font-size: 12px;
          line-height: 1.6;
        }

        .admin-quick-actions {
          display: grid;
          gap: 6px;
          margin-top: 18px;
        }

        .admin-action {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 14px 0;
          border: 0;
          border-bottom: 1px solid #edf1f4;
          background: transparent;
          color: #123b52;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }

        .admin-action:last-child {
          border-bottom: 0;
        }

        .admin-action-icon {
          display: grid;
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 10px;
          background: #edf7fc;
          color: #2f79a8;
          font-size: 21px;
        }

        .admin-action > span:nth-child(2) {
          display: grid;
          flex: 1;
          gap: 5px;
        }

        .admin-action strong {
          font-size: 13px;
        }

        .admin-action small {
          color: #8595a0;
          font-size: 11px;
        }

        .admin-action-arrow {
          color: #2f79a8;
          font-size: 20px;
          transition: transform .2s ease;
        }

        .admin-action:hover .admin-action-arrow {
          transform: translateX(4px);
        }

        .admin-status-panel {
          align-self: start;
        }

        .admin-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 17px 0;
          border-bottom: 1px solid #edf1f4;
          color: #506473;
          font-size: 12px;
        }

        .admin-status-row:last-child {
          border-bottom: 0;
        }

        .admin-status-badge {
          padding: 6px 9px;
          border-radius: 6px;
          background: #eaf6fc;
          color: #236b96;
          font-size: 11px;
          font-weight: 600;
        }

        .admin-status-muted {
          color: #8b969f;
          font-size: 11px;
        }

        .admin-footer {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: 30px;
          padding: 20px 0 5px;
          border-top: 1px solid #e0e9ef;
          color: #81919d;
          font-size: 11px;
        }

        .admin-footer span {
          color: #2f79a8;
        }

        @media (max-width: 1050px) {
          .admin-main {
            padding: 28px 24px 20px;
          }

          .admin-content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .admin-layout {
            flex-direction: column;
          }

          .admin-sidebar {
            width: 100%;
            padding: 20px 16px;
          }

          .admin-brand {
            padding-bottom: 18px;
          }

          .admin-nav {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-top: 18px;
          }

          .admin-nav-item {
            padding: 11px 9px;
            font-size: 12px;
          }

          .admin-sidebar-footer {
            display: none;
          }

          .admin-main {
            padding: 25px 16px 18px;
          }

          .admin-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-welcome {
            padding: 22px 18px;
          }

          .admin-welcome-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            font-size: 25px;
          }

          .admin-stats {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .admin-stat-card {
            padding: 19px;
          }

          .admin-panel {
            padding: 20px 16px;
          }

          .admin-footer {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="admin-layout">
        <aside className="admin-sidebar">
          <div className="admin-brand">
            <h2>UpLyftBusiness</h2>
            <span>ADMIN PANEL</span>
          </div>

          <nav className="admin-nav">
            <button
              className="admin-nav-item active"
              onClick={() => navigate("/admin")}
            >
              <span>▦</span> Dashboard
            </button>

            <button
              className="admin-nav-item"
              onClick={() => navigate("/admin/enquiries")}
            >
              <span>✉</span> Enquiries
            </button>

            <button
              className="admin-nav-item"
              onClick={() => navigate("/admin/services")}
            >
              <span>◇</span> Services
            </button>

            <button
              className="admin-nav-item"
              onClick={() => navigate("/admin/projects")}
            >
              <span>▧</span> Projects
            </button>

            <button
              className="admin-nav-item"
              onClick={() => navigate("/")}
            >
              <span>↗</span> View Website
            </button>
          </nav>

          <div className="admin-sidebar-footer">
            <p>Build. Grow. Scale.</p>
            <span>UpLyftBusiness © 2026</span>
          </div>
        </aside>

        <main className="admin-main">
          <header className="admin-header">
            <div>
              <p className="admin-eyebrow">OVERVIEW</p>
              <h1>Dashboard</h1>
              <p className="admin-subtitle">
                Welcome to your UpLyftBusiness workspace.
              </p>
            </div>

            <button
              className="admin-view-button"
              onClick={() => navigate("/")}
            >
              View Website ↗
            </button>
          </header>

          <section className="admin-welcome">
            <div>
              <p className="admin-welcome-label">YOUR WORKSPACE</p>
              <h2>Manage your business in one place.</h2>
              <p>
                Monitor enquiries, manage services, and keep your portfolio
                up to date.
              </p>
            </div>
            <div className="admin-welcome-icon">↗</div>
          </section>

          <section className="admin-stats">
            {stats.map((stat) => (
              <article className="admin-stat-card" key={stat.title}>
                <div className="admin-stat-top">
                  <span>{stat.title}</span>
                  <span className="admin-stat-icon">{stat.icon}</span>
                </div>
                <h3>{stat.value}</h3>
                <p>Overview</p>
              </article>
            ))}
          </section>

          <section className="admin-content-grid">
            <article className="admin-panel">
              <div className="admin-panel-heading">
                <div>
                  <h2>Quick Actions</h2>
                  <p>Shortcuts to your main admin tasks.</p>
                </div>
              </div>

              <div className="admin-quick-actions">
                <button
                  className="admin-action"
                  onClick={() => navigate("/admin/enquiries")}
                >
                  <span className="admin-action-icon">✉</span>
                  <span>
                    <strong>View Enquiries</strong>
                    <small>Review client requests</small>
                  </span>
                  <span className="admin-action-arrow">→</span>
                </button>

                <button
                  className="admin-action"
                  onClick={() => navigate("/admin/services")}
                >
                  <span className="admin-action-icon">◇</span>
                  <span>
                    <strong>Manage Services</strong>
                    <small>Review your service offerings</small>
                  </span>
                  <span className="admin-action-arrow">→</span>
                </button>

                <button
                  className="admin-action"
                  onClick={() => navigate("/admin/projects")}
                >
                  <span className="admin-action-icon">▧</span>
                  <span>
                    <strong>Manage Projects</strong>
                    <small>Review portfolio content</small>
                  </span>
                  <span className="admin-action-arrow">→</span>
                </button>
              </div>
            </article>

            <article className="admin-panel admin-status-panel">
              <h2>Website Status</h2>
              <p>Current project overview.</p>

              <div className="admin-status-row">
                <span>Frontend</span>
                <span className="admin-status-badge">React + Vite</span>
              </div>

              <div className="admin-status-row">
                <span>Backend</span>
                <span className="admin-status-muted">Not configured</span>
              </div>

              <div className="admin-status-row">
                <span>Database</span>
                <span className="admin-status-muted">Not connected</span>
              </div>
            </article>
          </section>

          <footer className="admin-footer">
            UpLyftBusiness Admin Panel
            <span>Build. Grow. Scale.</span>
          </footer>
        </main>
      </div>
    </>
  );
}

export default AdminDashboard;
