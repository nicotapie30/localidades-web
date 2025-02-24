class MyCarousel extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const article = document.createElement('article');
    article.classList.add('article__carousel');

    const divContainer = document.createElement('div');
    divContainer.classList.add('carousel__container');
    divContainer.innerHTML = `  <div class="carousel">
                                        <img src="./imgs/buenosaires.webp" alt="Buenos-Aires" title="Buenos Aires">
                                        <p>Buenos Aires</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/catamarca.webp" alt="Catamarca" title="Catamarca">
                                        <p>Catamarca</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/chaco.webp" alt="Chaco" title="Chaco">
                                        <p>Chaco</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/chubut.webp" alt="Chubut" title="Chubut">
                                        <p>Chubut</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/cordoba.webp" alt="Córdoba" title="Córdoba">
                                        <p>Córdoba</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/corrientes.webp" alt="Corrientes" title="Corrientes">
                                        <p>Corrientes</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/entre-rios.webp" alt="Entre Ríos" title="Entre Ríos">
                                        <p>Entre Ríos</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/formosa.webp" alt="Formosa" title="Formosa">
                                        <p>Formosa</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/jujuy.webp" alt="Jujuy" title="Jujuy">
                                        <p>Jujuy</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/la-rioja.webp" alt="La Rioja" title="La Rioja">
                                        <p>La Rioja</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/la-pampa.webp" alt="La Pampa" title="La Pampa">
                                        <p>La Pampa</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/mendoza.webp" alt="Mendoza" title="Mendoza">
                                        <p>Mendoza</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/misiones.webp" alt="Misiones" title="Misiones">
                                        <p>Misiones</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/neuquen.webp" alt="Neuquen" title="Neuquen">
                                        <p>Neuquen</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/rio-negro.webp" alt="Río Negro" title="Río Negro">
                                        <p>Río Negro</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/salta.webp" alt="Salta" title="Salta">
                                        <p>Salta</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/san-luis.webp" alt="San Luis" title="San Luis">
                                        <p>San Luis</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/san-juan.webp" alt="San Juan" title="San Juan">
                                        <p>San Juan</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/santa-fe.webp" alt="Santa Fe" title="Santa Fe">
                                        <p>Santa Fe</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/santa-cruz.webp" alt="Santa Cruz" title="Santa Cruz">
                                        <p>Santa Cruz</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/santiago-del-estero.webp" alt="Santiago del Estero" title="Santiago del Estero">
                                        <p>Santiago del Estero</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/tierra-del-fuego.webp" alt="Tierra del Fuego" title="Tierra del Fuego">
                                        <p>Tierra del Fuego</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/tucuman.webp" alt="Tucuman" title="Tucuman">
                                        <p>Tucumán</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/buenosaires.webp" alt="Buenos-Aires" title="Buenos Aires">
                                        <p>Buenos Aires</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/catamarca.webp" alt="Catamarca" title="Catamarca">
                                        <p>Catamarca</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/chaco.webp" alt="Chaco" title="Chaco">
                                        <p>Chaco</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/chubut.webp" alt="Chubut" title="Chubut">
                                        <p>Chubut</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/cordoba.webp" alt="Córdoba" title="Córdoba">
                                        <p>Córdoba</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/corrientes.webp" alt="Corrientes" title="Corrientes">
                                        <p>Corrientes</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/entre-rios.webp" alt="Entre Ríos" title="Entre Ríos">
                                        <p>Entre Ríos</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/formosa.webp" alt="Formosa" title="Formosa">
                                        <p>Formosa</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/jujuy.webp" alt="Jujuy" title="Jujuy">
                                        <p>Jujuy</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/la-rioja.webp" alt="La Rioja" title="La Rioja">
                                        <p>La Rioja</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/la-pampa.webp" alt="La Pampa" title="La Pampa">
                                        <p>La Pampa</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/mendoza.webp" alt="Mendoza" title="Mendoza">
                                        <p>Mendoza</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/misiones.webp" alt="Misiones" title="Misiones">
                                        <p>Misiones</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/neuquen.webp" alt="Neuquen" title="Neuquen">
                                        <p>Neuquen</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/rio-negro.webp" alt="Río Negro" title="Río Negro">
                                        <p>Río Negro</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/salta.webp" alt="Salta" title="Salta">
                                        <p>Salta</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/san-luis.webp" alt="San Luis" title="San Luis">
                                        <p>San Luis</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/san-juan.webp" alt="San Juan" title="San Juan">
                                        <p>San Jaun</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/santa-fe.webp" alt="Santa Fe" title="Santa Fe">
                                        <p>Santa Fe</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/santa-cruz.webp" alt="Santa Cruz" title="Santa Cruz">
                                        <p>Santa Cruz</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/santiago-del-estero.webp" alt="Santiago del Estero" title="Santiago del Estero">
                                        <p>Santiago del Estero</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/tierra-del-fuego.webp" alt="Tierra del Fuego" title="Tierra del Fuego">
                                        <p>Tierra del Fuego</p>
                                    </div>
                                    <div class="carousel">
                                        <img src="./imgs/tucuman.webp" alt="Tucuman" title="Tucuman">
                                        <p>Tucumán</p>
                                    </div>`;

    article.appendChild(divContainer);

    shadow.innerHTML = `
                        <style>

                            .article__carousel {
                                width: 100%;
                                height: auto;
                                margin: 0 -2rem;
                                overflow: hidden;
                            }


                            .carousel__container {
                                width: calc(10rem * 46);                             
                                margin-top: 5rem;
                                display: flex;
                                align-items: center;
                                gap: 5rem;
                                overflow: hidden;
                                animation: scroll 100s linear infinite;
                            }


                            .carousel {
                                width: 10rem;
                                height: 10rem;
                                display: grid;
                                flex-direction: column;
                                background-size: contain;
                                backgound-position: center;
                            }


                            img {
                                width: 100%;
                                height: 85%;
                                filter: drop-shadow(0px 0px 1px #000)
                            }


                            @keyframes scroll {
                                0% {
                                    transform: translateX(0);
                                }
                                100% {
                                    transform: translateX(calc(-10rem * 23));
                                }
                            }

                            p {
                                height: 0.8rem;
                                font-size: 0.5rem;
                                font-weight: 500;
                                color: #333;
                                text-align: center;
                                margin-bottom: 0;
                                padding: 0.2rem 0.2rem;
                                background-color: #ffffff;
                                border: 1px solid transparent;
                                border-radius: 10px;
                                box-shadow: 0px 0px 2px #ddd;
                                font-family: 'Montserrat';
                                cursor: default;
                                align-self: end;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                &:hover {
                                    border: 1px solid #ccc;
                                    background: rgba(255, 255, 255, 0.9);
                                    color: #444;
                                }
                            }

                        </style>`;

    shadow.appendChild(article);
  }
}

customElements.define('my-carousel', MyCarousel);
