// Import Components
import Background from "./Components/Background/Background";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <div className="relative z-10 overflow-x-hidden">
        <NavBar />

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
          />
        </div>

        <h2 className="mt-10 mb-2 font-bold text-center text-3xl">
          Digital Innovation One Inc
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <Card
            url="https://user-images.githubusercontent.com/100285156/192543850-861adea3-837d-45f9-b580-1314917fa780.png"
            alt="Jogo da Cobrinha"
            title="Ping-Pong"
            description="Jogo simples da Cobrinha desenvolvido no curso da DIO utilizando
            JavaScript, HTML e CSS."
            href=""
          />
          <Card
            url="https://user-images.githubusercontent.com/100285156/192536429-4aed74fe-0872-4d1d-b9ec-8374f8df2705.png"
            alt="Imagem representando Clone da Netflix"
            title="Clone da Netflix"
            description="Clone da Netflix feito na DIO utilizando JavaScript, HTML, CSS,
            Bootstrap e OWL Carousel (jQuery)"
            href=""
          />
          <Card
            url="https://user-images.githubusercontent.com/100285156/192537504-779a7b99-0b07-4274-a999-4da3f98dbc81.png"
            alt="Imahem representando Clone Instagram"
            title="Clone Instagram"
            description="Clone do Instagram feito na DIO utilizando HTML e CSS
            (Atualização assim que possível)"
            href=""
          />
          <Card
            url="https://user-images.githubusercontent.com/100285156/192538273-e6fb5abb-5de1-4a4b-9adf-db501823ec5e.png"
            alt="Imagem demonstrando Mundo Invertido"
            title="Mundo Invertido"
            description="Página feita em um evento da DIO inspirado na série Stranger
            Things utilizando HTML, CSS, JavaScript e FireBase"
            href=""
          />
        </div>

        <h2 className="mt-10 mb-2 font-bold text-center text-3xl">
          Rocketseat
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <Card url="" alt="" title="" description="" href="" />
        </div>
      </div>
      <Background />
    </>
  );
}

export default App;
