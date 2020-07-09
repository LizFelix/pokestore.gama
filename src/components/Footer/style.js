// importando o styled-components pra criar os componentes
import styled from 'styled-components';

// 1 - Pra criar um componente, precisa exportá-lo como
// uma variável.
// 2 - Sempre comece os nomes das variáveis em caixa alta.
// 3 - styled = módulo; footer = é o elemento html
export const Container = styled.footer`
    // aqui tu escreve CSS normal
    font-weight: bold;
    font-size: 1.2em;
    color: white;
    background: black;
    padding: 1em;
    maring: 1em;
    text-align: center;
`;