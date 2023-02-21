import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section(props){

    return(
    <Wrap bgImage = {props.background_img}>
        
        <ItemText>
            <Fade bottom delay = {500}>
                <h1>{props.title}</h1>
            </Fade>

            <Fade bottom delay = {1000}>
                <p>{props.description}</p>
            </Fade>

            </ItemText>

        

        <Buttons>
            
                <ButtonGroup>
                    <Fade left >
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                    </Fade>
                    {props.rightBtnText &&

                    <Fade right>
                        <RightButton>
                            {props.rightBtnText}
                        </RightButton>
                    </Fade>
                    }
                </ButtonGroup>
            

            <DownArrow src = '/images/down-arrow.svg'/>
        </Buttons>

    </Wrap>
    )
    
}

export default Section

const Wrap =  styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    scroll-snap-align: start;

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    
`

const ButtonGroup = styled.div`
    display:flex;
    justify-content: center;
    @media(max-width:768px){
        flex-direction:column;
    }
    
`

const LeftButton = styled.div`
    background-color: black;
    height: 40px;
    width: 265px;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 0.65;
    font-size: 16px;
    font-weight: bold;
    cursor:pointer;
    margin: 10px;
`
const RightButton = styled(LeftButton)`
    background-color: rgba(253,253,253,0.8);
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`