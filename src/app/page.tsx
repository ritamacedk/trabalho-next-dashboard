import Link from "next/link";

export default function Home() {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="brand-icon">♥</div>
        <h1 className="brand">Velvet Dreams</h1>
        <p className="brand-subtitle">Confeitaria artesanal</p>
        <p className="login-description">Adoce seus melhores momentos.</p>

        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="admin@velvet.com" />
        </div>

        <div className="field">
          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" placeholder="Digite sua senha" />
        </div>

        <Link href="/dashboard" className="primary-button login-button">
          Entrar ♥
        </Link>

        <p className="login-note">Um toque de carinho em cada detalhe.</p>
      </section>
    </main>
  );
}