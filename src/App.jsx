// Import Components
import Background from "./Components/Background/Background";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="relative z-10 overflow-x-hidden">
        <NavBar />

        <h2 className="mt-10 mb-2 font-bold text-center text-3xl">
          Projetos Pessoais
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <Card
            url="https://user-images.githubusercontent.com/100285156/193483195-665e40c5-6b59-412f-85f1-7aa887a4a06b.png"
            alt="Imagem de Cards GitHub"
            title="Cards GitHub"
            description="Projeto feito para buscar perfis do GitHub e gerar um card com as principais informações, utilizando JavaScript, AJAX, HTML e CSS"
            href="/Pessoais/Card API/index.html"
          />
        </div>
        <h2 className="mt-10 mb-2 font-bold text-center text-3xl">
          Dev Samurai
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <Card
            url="https://user-images.githubusercontent.com/100285156/192536192-faed00f9-c9ea-486d-a914-9ce1c4a54156.png"
            alt="Jogo de Ping-Pong"
            title="Ping-Pong"
            description="Jogo simples de Ping-Pong desenvolvido no curso do Dev Samurai,
            utilizando JavaScript, HTML e CSS."
            href="/Cursos/DevSamurai/Ping-Pong/index.html"
          />
        </div>

        <h2 className="mt-10 mb-2 font-bold text-center text-3xl">
          Digital Innovation One Inc
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <Card
            url="https://user-images.githubusercontent.com/100285156/192543850-861adea3-837d-45f9-b580-1314917fa780.png"
            alt="Jogo da Cobrinha"
            title="Jogo da Cobrinha"
            description="Jogo simples da Cobrinha desenvolvido no curso da DIO utilizando
            JavaScript, HTML e CSS."
            href="/Cursos/Digital Innovation One Inc/Jogo da Cobrinha/index.html"
          />
          <Card
            url="https://user-images.githubusercontent.com/100285156/192536429-4aed74fe-0872-4d1d-b9ec-8374f8df2705.png"
            alt="Imagem representando Clone da Netflix"
            title="Clone da Netflix"
            description="Clone da Netflix feito na DIO utilizando JavaScript, HTML, CSS,
            Bootstrap e OWL Carousel (jQuery)"
            href="/Cursos/Digital Innovation One Inc/Clone Netflix/index.html"
          />
          <Card
            url="https://user-images.githubusercontent.com/100285156/192537504-779a7b99-0b07-4274-a999-4da3f98dbc81.png"
            alt="Imahem representando Clone Instagram"
            title="Clone Instagram"
            description="Clone do Instagram feito na DIO utilizando HTML e CSS
            (Atualização assim que possível)"
            href="/Cursos/Digital Innovation One Inc/Login Instagram/index.html"
          />
          <Card
            url="https://user-images.githubusercontent.com/100285156/192538273-e6fb5abb-5de1-4a4b-9adf-db501823ec5e.png"
            alt="Imagem demonstrando Mundo Invertido"
            title="Mundo Invertido"
            description="Página feita em um evento da DIO inspirado na série Stranger
            Things utilizando HTML, CSS, JavaScript e FireBase"
            href="/Cursos/Digital Innovation One Inc/Mundo Invertido/index.html"
          />
          <Card
            url="https://user-images.githubusercontent.com/100285156/192898590-bc70a264-6ff3-45c1-aa66-3f0659c6b0a5.png"
            alt="Imagem demonstrando Todo-List"
            title="To-Do List"
            description="Projeto simples de To-Do List feito com HTML, CSS e JavaScript"
            href="/Cursos/Digital Innovation One Inc/To-Do List/index.html"
          />
          <Card
            url="https://user-images.githubusercontent.com/100285156/192898919-da1f98f0-93af-4b77-b620-6717daf5de0a.png"
            alt="Imagem mostrando Landing Page"
            title="Landing Page com Bootstrap"
            description="Landing Page feita com Boootstrap, HTML e CSS"
            href="/Cursos/Digital Innovation One Inc/Landing Page Bootstrap/index.html"
          />
          <Card
            url="https://user-images.githubusercontent.com/100285156/192899362-ce6154a8-f292-4460-9dc5-31aa7c65caa3.png"
            alt="Imagem mostrando contador"
            title="Contador de Clicks"
            description="Contador de Clicks simples feito com JavaScript, HTML e CSS"
            href="/Cursos/Digital Innovation One Inc/Contador Simples/index.html"
          />
        </div>

        <h2 className="mt-10 mb-2 font-bold text-center text-3xl">
          Rocketseat
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <Card
            url="https://user-images.githubusercontent.com/100285156/192899892-0cf5d2f7-26c2-4110-aa30-632a40d8afd0.png"
            alt="Imagem demonstrando projeto feito no evento"
            title="Rocket Coffee"
            description="Cardápio de cafeteria feito no evento da Maratona Explorer juntamente com Mayk Brito, utilizando HTML e CSS"
            href="/Cursos/Rocketseat/Maratona Explorer/index.html"
          />
          <Card
            url="https://user-images.githubusercontent.com/100285156/192901871-dd7e0b71-11ee-4025-af76-0746fe78d67e.png"
            alt="Imagem demonstrando NLW-eSports"
            title="NLW-eSports"
            description="Projeto feitono evento NLW, juntando o conhecimento Web com o conhecimento Mobile, feito em React, React Native, Prisma, Expo, Tailwind, Node, Express etc."
            href="https://github.com/AlehandroSV/Nlw-eSports"
          />
        </div>

        <Footer />
      </div>
      <Background />
    </>
  );
}

export default App;
