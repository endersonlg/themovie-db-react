import styled from 'styled-components';

export const ContainerMovieIndex = styled.div`
    .ant-card-meta-description {
        height: 75px;
        display: -webkit-box;
        height: 60px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    width: 400px;
    border-radius: 8px;
    object-fit: scale-down;

    @media only screen and (max-width: 500px) {
        object-fit: scale-down;
        width: 200px;
        height: 400px;
    }
`;

export const ContainerDescriptionMovie = styled.div`
    max-width: 90%;

    h1 {
        font-size: 36px;
    }

    p {
        color: #222;
        line-height: 1.5rem;
    }

    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const VoteStars = styled.div`
    display: flex;
    h2 {
        margin-right: 5px;
    }
`;
