import styled from 'styled-components';
import wallpaper from '../../../assets/wallpaper.jpg';

export const ContainerHeader = styled.div`
    background: #222;
    width: 100%;
    height: 100%;
    background-image: url(${wallpaper});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.4);
`;
