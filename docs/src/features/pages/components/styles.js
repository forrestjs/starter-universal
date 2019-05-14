import styled from 'styled-components'

export const Subtitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    margin-top: 3rem;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    border: 1px solid #ddd;

    & li {
        border-bottom: 1px solid #ddd;
        padding: 5px 10px;
    }

    & li:last-child {
        border-bottom: 0px solid #ddd;
    }

    & li:hover {
        background: #f6f6f6;
    }

    & a {
        color: #106cce;
        text-decoration: none;
    }
`

export const ResponsiveWrapper = styled.div`
    & > :nth-child(1) {
        margin-bottom: 40px;
    }

    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        & > :nth-child(1) {
            margin-bottom: auto;
        }

        & > :nth-child(2) {
            width: 650px;
            margin-left: 80px;
        }

        & > :nth-child(2) {
            margin-top: 1rem;
        }
        
        & > :nth-child(2) h3 {
            margin-top: 0;
        }
    }
`

export const Footer = styled.div`
    border-top: 1px solid #ddd;
    padding-top: 0.5rem;
    margin-top: 4.5rem;
    color: #333;
    text-align: center;

    & a {
        color: #106cce;
        text-decoration: none;
    }
`
