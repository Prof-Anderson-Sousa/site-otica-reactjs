import React from "react";
import './style.css'

function SecaoProdutos() {
    return (
        <section className="s-produtos">
            <div className="limitar-secao">
                <a name="produtos"></a>
                <h2 className="subtitulo">NOSSOS PRODUTOS</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                <div className="box-cards">
                    <div className="card"> 
                        <h3 className="sub-card">Óculos de grau</h3>
                        <img className="img-card" src="../assets/oculos01.png" alt=""/>
                        <p className="value-card">R$ 500,00</p>
                    </div>
                    <div className="card"> 
                        <h3 className="sub-card">Óculos transition</h3>
                        <img className="img-card" src="../assets/oculos02.png" alt=""/>
                        <p className="value-card">R$ 750,00</p>
                    </div>
                    <div className="card"> 
                        <h3 className="sub-card">Óculos de sol</h3>
                        <img className="img-card" src="../assets/oculos03.png" alt=""/>
                        <p className="value-card">R$ 700,00</p>
                    </div>
                    <div className="card"> 
                        <h3 className="sub-card">Óculos infantil</h3>
                        <img className="img-card" src="../assets/oculos01.png" alt=""/>
                        <p className="value-card">R$ 500,00</p>
                    </div>
                </div>
                <div>
                    <p>Todos os nossos produtos incluem:</p>
                    <ul className="lista-produtos">
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SecaoProdutos;