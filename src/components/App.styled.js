import styled from 'styled-components';

export const Container = styled('div')`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 40px 20px;
    margin-top: 20px;
    left: 50%;
    transform: translate(-50%);
    overflow-y: auto;
    background-color:lightcyan;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: 300px;
` 
export const Title= styled('h3')`
    text-align: center;
`
export const StatisticList = styled('ul')`
list-style: none;
padding: 0;
display: flex;
flex-direction: column;
gap: 5px;
font-weight: 500;
`