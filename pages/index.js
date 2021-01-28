import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//    background-image: url(${db.bg});
//    flex: 1;
//    background-size: cover;
//    background-position: center;
// `;

export const QuizContainer = styled.div`
  width:100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
  `;

export default function Home (){
  const router = useRouter();
  const [name, setName] = React.useState ('');
  console.log('retorno do useState' , name, setName);

  return (
    <QuizBackground backgroungImage = {db.bg}>
      <Head>
        <title>Filosofia Quiz - Modelo Base</title>
        <meta property="og:image" content={"https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1"}/>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
            <Widget.Header>
            <h1>Filosofia Quiz</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (infosDoEvento){
                infosDoEvento.preventDefault();
                                
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissão por meio do react');
                
                // router manda para a próxima página
              }}
              >
              <input
               onChange={function (infosDoEvento) {
                console.log(infosDoEvento.target.value); 
                // State (A "foto" da tela - o momento)
                // name = infosDoEvento.target.value;
                setName(infosDoEvento.target.value);
               }}
               placeholder="Diz ai seu nome" 
              />
              <button type="submit" disable={name.length ===0}>
                Jogar 
                {name}
              </button>
              </form>
          </Widget.Content>          
        </Widget>

        <Widget>
          <Widget.Content>
          <h1>Quiz da Galera</h1>

          <p>loren ipsum dolor sit amet...</p>
          </Widget.Content>        
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/RafaelCAguiar" />
    </QuizBackground>
  );
}
// Código para criar o <div>
//  export default function Home() {
//  return (
//    <div style = {{backgroundImage: `url(${db.bg})`}}>
//      dfgh
//    </div>
//  );
//}
