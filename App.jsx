
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

const API_URL = 'https://crabmeat-truffle-underfed.ngrok-free.dev'

function App() {
  const [entrada, setEntrada] = useState('08:00')
  const [saida, setSaida] = useState('17:00')
  const [pausa, setPausa] = useState('60')
  const [resultado, setResultado] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [baixandoPDF, setBaixandoPDF] = useState(false)

  // ANALISAR JORNADA COM IA
  async function analisarJornada(event) {
    event.preventDefault()

    setCarregando(true)
    setResultado(null)

    try {
      const resposta = await fetch(`${API_URL}/analisar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({
          entrada,
          saida,
          pausa_minutos: Number(pausa)
        })
      })

      const dados = await resposta.json()

      if (!resposta.ok) {
        throw new Error(dados.erro || 'Erro ao realizar análise.')
      }

      setResultado({
        relatorio: dados.relatorio
      })

    } catch (erro) {
      setResultado({
        erro: erro.message
      })
    } finally {
      setCarregando(false)
    }
  }

  // BAIXAR RELATÓRIO EM PDF
  async function baixarRelatorioPDF() {
    if (!resultado?.relatorio) return

    setBaixandoPDF(true)

    try {
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF()

      const texto = typeof resultado.relatorio === 'string'
        ? resultado.relatorio
        : JSON.stringify(resultado.relatorio, null, 2)

      const linhas = texto
        .replace(/\*\*/g, '')
        .replace(/^#{1,6}\s*/gm, '')
        .replace(/^\s*[-*]\s+/gm, '• ')
        .split('\n')

      let y = 20

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(18)
      doc.text('VALIA', 15, y)

      y += 10

      doc.setFontSize(13)
      doc.text('Relatorio de Analise Trabalhista', 15, y)

      y += 12

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)

      linhas.forEach((linha) => {
        const partes = doc.splitTextToSize(linha || ' ', 180)

        partes.forEach((parte) => {
          if (y > 275) {
            doc.addPage()
            y = 20
          }

          doc.text(parte, 15, y)
          y += 6
        })
      })

      doc.save('relatorio-valia.pdf')

    } catch (erro) {
      alert('Não foi possível gerar o PDF: ' + erro.message)
    } finally {
      setBaixandoPDF(false)
    }
  }

  return (
    <div className="valia">

      <header className="topbar">
        <a href="#inicio" className="logo">
          <span className="logo-icon">V</span>
          <span>Valia</span>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#recursos">Conheça o VALIA</a>
          <a href="#analise">Analisar jornada</a>
        </nav>

        <a href="#analise" className="top-button">
          Começar análise
        </a>
      </header>

      <main>

        {/* APRESENTAÇÃO */}
        <section className="hero-section" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">SEUS DIREITOS IMPORTAM</span>

            <h1>
              Seus direitos no trabalho,
              <span> na palma da mão.</span>
            </h1>

            <p>
              Informação, acompanhamento e apoio para uma relação
              de trabalho mais justa, segura e digna.
            </p>

            <a href="#analise" className="primary-button">
              Começar agora →
            </a>

            <div className="hero-note">
              Informação acessível. Tecnologia a serviço das pessoas.
            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle"></div>

            <div className="art-card">
              <span className="art-symbol">⚖</span>
              <h2>Conheça seus direitos.</h2>
              <p>Entenda sua jornada e tenha acesso à informação.</p>
              <span className="art-label">VALIA • CITIZENTECH</span>
            </div>

            <div className="art-decoration">V</div>
          </div>
        </section>

        {/* RECURSOS */}
        <section className="features" id="recursos">
          <div className="section-heading">
            <span className="eyebrow">COMO PODEMOS AJUDAR</span>
            <h2>Seus direitos, mais perto de você.</h2>
            <p>Conhecimento e tecnologia para apoiar o trabalhador.</p>
          </div>

          <div className="feature-grid">

            <article className="feature-card">
              <span>⚖️</span>
              <h3>Conheça seus direitos</h3>
              <p>Consulte informações trabalhistas de forma simples.</p>
            </article>

            <article className="feature-card">
              <span>◷</span>
              <h3>Acompanhe sua jornada</h3>
              <p>Registre horários e acompanhe suas horas trabalhadas.</p>
            </article>

            <article className="feature-card">
              <span>▥</span>
              <h3>Identifique irregularidades</h3>
              <p>Receba alertas sobre situações que merecem atenção.</p>
            </article>

            <article className="feature-card">
              <span>✦</span>
              <h3>Inteligência artificial</h3>
              <p>Conheça a análise inteligente desenvolvida pelo VALIA.</p>
            </article>

          </div>
        </section>

        {/* ANÁLISE DE JORNADA */}
        <section className="analysis-section" id="analise">

          <div>
            <span className="eyebrow">INTELIGÊNCIA VALIA</span>
            <h2>Analise sua jornada de trabalho.</h2>
            <p>
              Informe seus horários e receba uma análise
              informativa sobre sua jornada.
            </p>
          </div>

          <div className="analysis-card">

            <div className="analysis-icon">◷</div>

            <h3>Análise de jornada</h3>
            <p>Preencha os dados para iniciar sua análise.</p>

            <form onSubmit={analisarJornada} className="analysis-form">

              <label htmlFor="entrada">Horário de entrada</label>
              <input
                id="entrada"
                type="time"
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
                required
              />

              <label htmlFor="saida">Horário de saída</label>
              <input
                id="saida"
                type="time"
                value={saida}
                onChange={(e) => setSaida(e.target.value)}
                required
              />

              <label htmlFor="pausa">Intervalo em minutos</label>
              <input
                id="pausa"
                type="number"
                min="0"
                value={pausa}
                onChange={(e) => setPausa(e.target.value)}
                required
              />

              <button
                type="submit"
                className="primary-button"
                disabled={carregando}
              >
                {carregando
                  ? 'Analisando com IA...'
                  : 'Analisar jornada →'}
              </button>

            </form>

            {/* RESULTADO DA IA */}
            {resultado && (
              <div className="analysis-result" aria-live="polite">

                {resultado.erro ? (
                  <p>{resultado.erro}</p>
                ) : (
                  <>
                    <h3>Relatório inteligente VALIA</h3>

                    <div className="relatorio-texto">
                      <ReactMarkdown>
                        {typeof resultado.relatorio === 'string'
                          ? resultado.relatorio
                          : JSON.stringify(resultado.relatorio, null, 2)}
                      </ReactMarkdown>
                    </div>

                    <button
                      type="button"
                      className="primary-button"
                      onClick={baixarRelatorioPDF}
                      disabled={baixandoPDF}
                    >
                      {baixandoPDF
                        ? 'Gerando PDF...'
                        : 'Baixar relatório em PDF ↓'}
                    </button>
                  </>
                )}

              </div>
            )}

            <small>
              Análise informativa. Não substitui orientação jurídica.
            </small>

          </div>
        </section>

      </main>

      {/* RODAPÉ */}
      <footer>
        <div className="footer-logo">Valia.</div>
        <p>Seus direitos no trabalho, na palma da mão.</p>
        <span>© 2026 VALIA — CitizenTech</span>
      </footer>

    </div>
  )
}

export default App
