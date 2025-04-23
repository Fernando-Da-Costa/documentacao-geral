import React from "react";
import PropTypes from "prop-types"; // Importando o PropTypes
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Integração de Sistemas",
    emoji: "🔗",
    description: (
      <>
        Conecte sistemas internos e externos com facilidade e mantenha os dados sincronizados.
      </>
    ),
  },
  {
    title: "Arquitetura de Dados",
    emoji: "🧱",
    description: (
      <>
        Estruture, organize e otimize dados com eficiência, seguindo boas práticas de engenharia.
      </>
    ),
  },
  {
    title: "Infraestrutura e DevOps",
    emoji: "⚙️",
    description: (
      <>
        Automatize e monitore seus ambientes com foco em escalabilidade e confiabilidade.
      </>
    ),
  },
];

function Feature({ emoji, title, description }) {
  return (
    <div className={styles.feature}>
      <div className={styles.emoji}>{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Adicionando a validação das propriedades com PropTypes
Feature.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired, // Usando `node` pois a descrição pode ser JSX
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className="col col--4">
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
