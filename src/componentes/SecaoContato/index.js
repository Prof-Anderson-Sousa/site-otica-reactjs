import React from "react";
import './style.css'

function SecaoContato() {
    return (
        <section className="contato">
            <a name="contato"></a>
            <div className="limitar-secao">
               <h3 className="subtitulo">FALE CONOSCO</h3> 
               <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
               <div className="box-contato">
                <div>
                   <h4 className="t-contato">Contato</h4>
                    <ul className="lista-contato">
                        <li><img src="../assets/local.png"/>Recife, PE</li>
                        <li><img src="../assets/telefone.png"/>(81) 99999-9999</li>
                        <li><img src="../assets/email.png"/>contato@oticavida.com</li>
                    </ul> 
                </div>
                <div>
                <h4 className="t-contato">Nossas Redes Sociais</h4>
                    <ul className="lista-contato">
                        <li><img src="../assets/fb.png"/>/OticaVida</li>
                        <li><img src="../assets/ig.png"/>@oticavidarj</li>
                        <li><img src="../assets/tt.png"/>@oticavidarj</li>
                    </ul>
                </div>
               </div>
            </div>
        </section>
    );
}

export default SecaoContato;