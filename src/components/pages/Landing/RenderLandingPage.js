import React from 'react';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { Button } from '../../common';

import './RenderLandingPage.css';

function RenderLandingPage() {
  return (
    <>
      <section className="hero-img">
        <div className="search-city-bg">
          <h1>Welcome To CitySpire</h1>
          <Link to="/map">
            <div className="search-city-btn-container">
              <span className="fa-icon-container">
                <FontAwesomeIcon className="fa-icon" icon={faSearchLocation} />
              </span>
              <Button
                classType="search-city-btn"
                buttonText="Click HERE to Search for a City..."
              ></Button>
            </div>
          </Link>
        </div>
      </section>
      <section className="hero-container">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        veniam corrupti ratione in autem quos nihil, libero tenetur laudantium
        rem incidunt sed aliquid, perferendis molestiae facilis minus aliquam
        eum. Qui vel sint, aliquid architecto officia quis consequuntur error.
        Odit porro officia sunt sit impedit voluptatem ut placeat cumque nam
        dignissimos? Ullam quisquam non quia incidunt voluptatum error excepturi
        repellendus harum repellat quibusdam, expedita possimus alias itaque
        animi perspiciatis nemo molestiae autem temporibus soluta aliquam culpa
        saepe sint quo at! Corporis aperiam neque non, suscipit libero ipsum
        obcaecati. Perferendis corrupti repellendus blanditiis sapiente
        obcaecati laboriosam qui dolore recusandae ratione vel quae id earum
        vero consectetur, doloremque nulla voluptatum? Atque blanditiis sequi
        eius impedit dolores natus quam officiis vero ab id, deserunt ipsum
        voluptates qui dolore nemo rem magnam repudiandae harum tenetur nostrum
        repellat placeat explicabo facilis vel! Nisi blanditiis ratione
        explicabo temporibus sunt similique vel quibusdam facilis repudiandae!
        Esse aliquid temporibus, ipsa, corrupti illo voluptate laborum
        recusandae praesentium quam quod rem sed nesciunt optio repellat
        quibusdam libero inventore. Quasi corporis quo labore molestiae,
        perspiciatis quis architecto atque asperiores dolore, praesentium
        consequuntur error cumque, esse ipsa dignissimos distinctio veritatis
        enim. Obcaecati repellat, aliquam explicabo temporibus animi unde, alias
        quod laudantium vel modi ea. Officiis laudantium molestiae sit autem et
        recusandae alias at quidem mollitia explicabo saepe vero, veritatis
        nesciunt praesentium numquam, ullam aspernatur sequi ipsa voluptatum.
        Esse pariatur excepturi ullam eos facere repellat quos alias ipsa
        obcaecati mollitia, exercitationem impedit reprehenderit neque officiis
        ut molestias consequatur aut perferendis aliquam, atque harum laboriosam
        itaque saepe repudiandae! Delectus sunt eveniet officiis, veritatis
        illum fuga beatae accusamus sit consequuntur voluptatem commodi rerum
        debitis magni nemo. Ea laborum, ullam nam vitae dicta pariatur magnam?
        Repellat placeat at autem quo deleniti quae ducimus fuga, repudiandae
        cumque suscipit et molestias eveniet temporibus, aliquam ab. Maiores in
        voluptatum animi illo explicabo enim doloremque repudiandae repellat
        deleniti, a autem iste aut magni pariatur saepe ab aliquam? Laboriosam
        optio dolore aut natus earum fugit accusantium sunt est omnis excepturi
        voluptatum a reprehenderit eius nihil ad unde debitis soluta nemo, esse
        aspernatur hic. Enim sed illum, error eaque nesciunt pariatur obcaecati
        debitis illo vitae nostrum odit tempore ad expedita eum rerum quibusdam
        eius voluptas quas assumenda natus temporibus repellat suscipit ut?
        Ipsam dolor unde sequi reprehenderit fuga nobis fugit maxime asperiores
        veritatis similique! Esse pariatur perferendis culpa, numquam doloremque
        inventore fugiat minima harum accusantium! Dignissimos iste voluptas
        quae quidem similique esse reprehenderit, error delectus, vel aperiam
        dolorum pariatur tempore fugiat ea illum minus laudantium adipisci
        voluptatibus totam nulla repudiandae, maiores blanditiis sit aliquid. Ab
        doloremque ad, ducimus atque fuga recusandae earum pariatur autem ex a.
        Vel ad est molestias autem pariatur consectetur enim repellat porro!
        Facere, reprehenderit? Ea vel quis tempora praesentium atque
        dignissimos? Vel, ipsum aspernatur exercitationem dolores nesciunt cum
        autem quasi delectus quis fuga perferendis quas consectetur consequatur,
        minima quo! Iste harum reprehenderit, repudiandae, repellendus fugit
        dolorem laboriosam et officiis consequuntur odio odit, possimus facilis
        recusandae. Facilis tenetur ab, aspernatur a esse amet doloremque qui
        laudantium, minus quis voluptatibus et.
      </section>
    </>
  );
}
export default RenderLandingPage;
