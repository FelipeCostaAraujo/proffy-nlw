import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/37382504?s=460&u=b7d3bad3cad9faa5bb34234d6a90aaeff6cbe543&v=4" alt="Felipe Araujo"/>
                        <div>
                            <strong>Felipe Araujo</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/>
                        <br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type='button'>
                            <img src={whatsappIcon} alt="whatsapp"/>
                            entrar em contanto
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;