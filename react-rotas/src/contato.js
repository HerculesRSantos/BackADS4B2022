import React from 'react';
import { Link } from "react-router-dom";

export default function contato() {
   return (
         <>
         
        
        <div>
        <h1>contato</h1>
            
           
           <Link to="/">retornar a página inicial</Link>
        </div>
        <main>
               <h1>Dados para contato:</h1>

               <label for="Nome">Nome completo:</label>'/n'
               <input type="text" name="Nome" id="Nome" size="60"> </input> "/n"

               <label for="email"> E-mail:</label>"/n"
               <input type="email" name="email" id="email" size="30"></input>"/n"

               <label for="disciplina">Disciplina</label>"/n"


               <select name="disciplina" id="disciplina">"/n"

                   <option>Desenvolvimento Web</option>
                   <option>Programação Orientada a Objetos</option>
                   <option>Linguagem SQL</option>
                   <option>Ambientes Operacionais</option>
                   <option>Engenharia de Software</option>

               </select>

           </main><body>

               <h1>Quais linguagens voçê conheçe?</h1>
               <input type="checkbox" id="disciplina-1" name="disciplinas" value="POO"></input>"/n"
               <label for="disciplina-1">Programacao Orientada a Objetos</label>"/n"
               <input type="checkbox" id="disciplina-2" name="disciplinas" value="DevWeb"></input>"/n"
               <label for="disciplina-2">Desenvolvimento Web</label>"/n"
               <input type="checkbox" id="disciplina-3" name="disciplinas" value="BD"></input>"/n"
               <label for="disciplina-3">Banco de Dados</label>"/n"


               <article>
                   <h2>Habilidades</h2>
                   <ul>
                       <li>HTML</li>
                       <li>CSS</li>
                       <li> JavaScript</li>
                       <li>Python e Flask</li>
                   </ul>
               </article>

               <article>
                   <h2>Programação Orientada a Objetos </h2>
                   <p>Desenvolver lógica de raciocínio para organizar os elementos necessários para o desenvolvimento de programas orientado a objetos.</p>
                   <ul>
                       <li>Dicionários</li>
                       <li>Tratamento de exceções</li>
                       <li> Testes unitários</li>
                       <li>Construções de classes, atributos e métodos</li>
                       <li> Herança e polimorfismo</li>
                   </ul>
               </article>

               </body></>

                   );
}