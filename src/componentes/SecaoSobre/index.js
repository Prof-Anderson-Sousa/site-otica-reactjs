import React from "react";
import './style.css'

function SecaoSobre() {
    return (
        <section className="sobre">
            <a name="sobre"></a>
            <div className="limitar-secao">
                <h2 className="subtitulo">QUEM SOMOS NÓS?</h2>
                <p className="p-sobre">Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="box-sobre">
                    <img src="../assets/loja.png" alt="loja" className="picture"/>
                    <div className="info">
                        <h4 className="t-info">NOSSAS FILIAIS</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>   
                    </div>
                    <div className="info">
                        <h4 className="t-info">ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe possui é treinada para te atender</p> 
                    </div>
                    <img src="../assets/atendimento.png" alt="atendimento" className="picture"/>
                </div>
            </div>
        </section>
    );
}

export default SecaoSobre;