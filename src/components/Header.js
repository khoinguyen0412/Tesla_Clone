import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu'
import ExitIcon from '@material-ui/icons/Close'
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux'

function Header(){
    const [burgerStatus, setBurgerStatus] = useState(false);  
    const cars = useSelector(selectCars)

    const blurOverlay = document.querySelector('.blur-overlay')
    const IS_ACTIVE = 'is--active'

    const toggleBlur = () => {
        blurOverlay.classList.toggle(IS_ACTIVE)
    }

    return(
    <div>
        <Container>
            
            <Logo show= {burgerStatus} >
                <a href = "foo">
                    <img src="/images/logo.svg" alt ="Tesla Logo"/>
                </a>
            </Logo>

            <Menu show= {burgerStatus}>
                
                <a className = 'item1'href = "foo">Model 3</a>
                <a className = 'item2'href = "foo">Model Y</a>
                <a className = 'item3'href = "foo">Model S</a>
                <a className = 'item4'href = "foo">Model X</a>
                <a className = 'item5'href = "foo">Solar Roof</a>
                <a className = 'item6'href = "foo">Solar Panel</a>
                <hr className='hr1'/>
            </Menu>

            <RightMenu>
                <a className = 'item7' href = "foo">Shop</a>
                <a className='item8' href = "foo">Account</a>
                <CustomMenu className='item9' onClick={()=>{
                    setBurgerStatus(true)
                    toggleBlur()
                }}/>
                <hr className='hr2'/>
            </RightMenu>

            <BurgerNav show= {burgerStatus} >
                <ExitWrapper>
                    <CustomExit onClick = {()=>{
                        setBurgerStatus(false)
                        toggleBlur()
                    }}/>
                </ExitWrapper>
                <CarList>
                {cars && cars.map((car,index)=>(
                    <li><a href = "foo">{car}</a></li>
                ))}
                <li><a href = "foo">Solar Roof</a></li>
                <li><a href = "foo">Solar Panel</a></li>
                </CarList>
                <li><a href = "foo">Existing Inventory</a></li>
                <li><a href = "foo">Used Inventory</a></li>
                <li><a href = "foo">Trade In</a></li>
                <li><a href = "foo">Demo Drive</a></li>
                <li><a href = "foo">Insurance</a></li>
                <li><a href = "foo">Cybertruck</a></li>
                <li><a href = "foo">Roadster</a></li>
                <li><a href = "foo">Semi</a></li>
                <li><a href = "foo">Charging</a></li>
                <li><a href = "foo">Powerwall</a></li>
                <li><a href = "foo">Commerical Energy</a></li>
                <li><a href = "foo">Utilities</a></li>
                <li><a href = "foo">Find Us</a></li>
                <li><a href = "foo">Support</a></li>
                <li><a href = "foo">Investor Relations</a></li>
                <hr className='hr3'/>
            </BurgerNav>
        </Container>
    </div>
    )
    
}

export default Header;

const Container = styled.div `
    display: flex;
    min-height:60px;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px ;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1;


`

const Menu = styled.div `
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    
    a {
        font-weight: 600;
        padding: 0 20px;
        flex-wrap: nowrap;
        z-index: 5;
   
    }

 
    hr{
        opacity: 0;
        position: absolute;
        margin-right: 525px;
        background-color:rgba(140,140,140,0.3);
        height: 40px;
        width:80px;
        padding: auto;
        border-radius: 6px;
        border: none;
        transition: 0.5s step-end;
    }


    @media(max-width:1200px){
        display:none;
    }
   
    filter: ${props => props.show ? 'blur(3px)': 'blur(0px)' };

`

const RightMenu = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-right: 20px;
a {
    font-weight: 600;
    margin-right: 15px;
    z-index:5;
}


hr{
    opacity: 0;
    position: absolute;
    margin-right:110px;
    background-color:rgba(140,140,140,0.3);
    height: 40px;
    width: 45px;
    padding: auto;
    border-radius: 6px;
    border: none;
    transition: 0.5s ease-in;
}
    
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    z-index: 5;
`

const BurgerNav = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    bottom:0;
    right: 0; 
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)' };
    transition: transform 0.2s;
    li{
        text-align: start;
        margin-left: 30px;
        padding: 15px 0 ; 
        a{
            margin-left: 10px;
            font-weight: 600;
        }
        cursor:pointer;
    }

    li:hover {
        background-color: rgba(140,140,140,0.3);
        transition: 0.3s ease-out;
    }
    overflow-y: scroll;

   
`

const CustomExit = styled(ExitIcon)`
    cursor: pointer;
`
const ExitWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Logo = styled.div`
    filter: ${props => props.show ? 'blur(3px)': 'blur(0px)' };

`

const CarList = styled.div`
    @media(min-width:1200px){
        display:none;
    }
`