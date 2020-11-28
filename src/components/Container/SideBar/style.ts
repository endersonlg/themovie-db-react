import styled from 'styled-components';

type Props = {
    collapsed: boolean;
};

export const LogoContainer = styled.div<Props>`
    position: relative;
    background: rgba(3, 37, 65, 1);
    display: flex;
    align-items: center;
    padding: 9.5px 9px;
    line-height: 32px;
    overflow: hidden;
    cursor: pointer;
    height: 64px;
    img {
        margin-right: 10px;
    }
    .tituloLogo {
        min-width: 100px;
    }
    .tituloLogo > h1,
    .tituloLogo > p {
        display: ${(props) => (props.collapsed ? 'none' : 'block')};
        margin: 0;
        line-height: 1.5;
        color: #fff;
    }
`;
