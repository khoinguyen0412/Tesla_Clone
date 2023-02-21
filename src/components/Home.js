import React from 'react';
import styled from 'styled-components';
import Section from './Section';


function Home(){
    return(

        
        <Container >
                <Section
                    title = "Model 3"
                    description = "Order online for Toucheless Delivery"
                    background_img = "model-3.jpg"
                    leftBtnText = "Custom Order"
                    rightBtnText = "Demo Drive"
                />
            

            
                <Section
                    title = "Model Y"
                    description = "Order online for Toucheless Delivery"
                    background_img = "model-y.jpg"
                    leftBtnText = "Custom Order"
                    rightBtnText = "View Inventory"
                />
            
            
            
                <Section
                    title = "Model S"
                    description = "Order online for Toucheless Delivery"
                    background_img = "model-s.jpg"
                    leftBtnText = "Custom Order"
                    rightBtnText = "View Inventory"
                />
 
                <Section
                    title = "Model X"
                    description = "Order online for Toucheless Delivery"
                    background_img = "model-x.jpg"
                    leftBtnText = "Custom Order"
                    rightBtnText = "View Inventory"/>
 
                <Section
                    title = "Solar Panels"
                    description = "Lowest Cost Solar Panels in America"
                    background_img = "solar-panel.jpg"
                    leftBtnText = "Order Now"
                    rightBtnText = "Learn More"
                />
  
                <Section 
                    title = "Solar Roof"
                    description = "Produce Clean Energy From Your Roof"
                    background_img = "solar-roof.jpg"
                    leftBtnText = "Order Now"
                    rightBtnText = "Learn More"
                />
            
                <Section 
                    title = "Acessories"
                    background_img = "accessories.jpg"
                    leftBtnText = "Shop Now"        
                
                />
             
    </Container>
     )
}

export default Home;

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
`
