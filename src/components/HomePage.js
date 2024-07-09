import React, { useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';
import {  Link  } from 'react-router-dom';


const sportImage = '/assets/background.jpg';
const promoImage = '/assets/promotion.jpg';



const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentShoeIndex, setCurrentShoeIndex] = useState(0);
  const [currentAccessoryIndex, setCurrentAccessoryIndex] = useState(0);

  const shoes = [
    { id: 1, name: 'Nike', price: '79.99$', image: '/assets/nike.jpg' },
    { id: 2, name: 'Adidas', price: '79.99$', image: '/assets/adidas.webp' },
    { id: 3, name: 'Puma', price: '79.99$', image: '/assets/puma.jpg' },
    { id: 4, name: 'Abibos', price: '79.99$', image: '/assets/abibos.webp' }
  ];
  
  const accessories = [
    { id: 1, name: 'Montre', price: '49.99$', image: '/assets/montre.jpg' },
    { id: 2, name: 'Altere', price: '49.99$', image: '/assets/altere.jpg' },
    { id: 3, name: 'Casquette', price: '49.99$', image: '/assets/casquette.jpg' },
    { id: 4, name: 'Debardeur', price: '49.99$', image: '/assets/debardeur.jpg' }
  ];

  useEffect(() => {
    setIsVisible(true);

    const shoeInterval = setInterval(() => {
      setCurrentShoeIndex((prevIndex) => (prevIndex + 1) % shoes.length);
    }, 5000);

    const accessoryInterval = setInterval(() => {
      setCurrentAccessoryIndex((prevIndex) => (prevIndex + 1) % accessories.length);
    }, 5000);

    return () => {
      clearInterval(shoeInterval);
      clearInterval(accessoryInterval);
    };
  }, [shoes.length, accessories.length]);

  const handleNextShoe = () => {
    setCurrentShoeIndex((prevIndex) => (prevIndex + 1) % shoes.length);
  };

  const handlePrevShoe = () => {
    setCurrentShoeIndex((prevIndex) => (prevIndex - 1 + shoes.length) % shoes.length);
  };

  const handleNextAccessory = () => {
    setCurrentAccessoryIndex((prevIndex) => (prevIndex + 1) % accessories.length);
  };

  const handlePrevAccessory = () => {
    setCurrentAccessoryIndex((prevIndex) => (prevIndex - 1 + accessories.length) % accessories.length);
  };

  const visibleShoes = shoes.slice(currentShoeIndex, currentShoeIndex + 3).concat(shoes.slice(0, Math.max(0, 3 - shoes.slice(currentShoeIndex, currentShoeIndex + 3).length)));
  const visibleAccessories = accessories.slice(currentAccessoryIndex, currentAccessoryIndex + 3).concat(accessories.slice(0, Math.max(0, 3 - accessories.slice(currentAccessoryIndex, currentAccessoryIndex + 3).length)));

  return (
    <Container>
      <ContentBox className={isVisible ? 'visible' : ''}>
        <TextSection>
          <Title>Boostez Votre Performance</Title>
          <Description>
            Découvrez notre sélection de vêtements, chaussures, et accessoires de sport. Qualité, confort et style au top!
          </Description>
          <Description>
            Chez NovaSport, nous nous engageons à vous fournir les meilleurs équipements pour améliorer votre performance.
            Que vous soyez un athlète professionnel ou amateur, nos produits sont conçus pour répondre à tous vos besoins.
            
            Restez motivé et atteignez vos objectifs avec style et confort.
          </Description>

          <LinkButton to="/products">Magasinez</LinkButton>
        </TextSection>
        <ImageSection>
          <StyledImage src={sportImage} alt="Sport Image" />
        </ImageSection>
      </ContentBox>
      <ProductsSection>
        <SectionTitle style={{ color: '#00BFFF', fontStyle: 'italic' }}>Voici des produits soigneusement sélectionnés pour Vous!</SectionTitle>
        <SectionTitle>Chaussures</SectionTitle>
        <ProductSlider>
          <ArrowButton onClick={handlePrevShoe}>◀</ArrowButton>
          <ProductGrid>
            {visibleShoes.map((shoe) => (
              <ProductCard key={shoe.id}>
                <ProductLink href="/productdetails">
                  <ProductImage src={shoe.image} alt={shoe.name} />
                  <ProductInfo>
                    <ProductName>{shoe.name}</ProductName>
                    <ProductPrice>{shoe.price}</ProductPrice>
                  </ProductInfo>
                </ProductLink>
              </ProductCard>
            ))}
          </ProductGrid>
          <ArrowButton onClick={handleNextShoe}>▶</ArrowButton>
        </ProductSlider>
        <SectionTitle>Accessoires</SectionTitle>
        <ProductSlider>
          <ArrowButton onClick={handlePrevAccessory}>◀</ArrowButton>
          <ProductGrid>
            {visibleAccessories.map((accessory) => (
              <ProductCard key={accessory.id}>
                <ProductLink href="/productdetails">
                  <ProductImage src={accessory.image} alt={accessory.name} />
                  <ProductInfo>
                    <ProductName>{accessory.name}</ProductName>
                    <ProductPrice>{accessory.price}</ProductPrice>
                  </ProductInfo>
                </ProductLink>
              </ProductCard>
            ))}
          </ProductGrid>
          <ArrowButton onClick={handleNextAccessory}>▶</ArrowButton>
        </ProductSlider>
      </ProductsSection>
      <PromotionSection className={isVisible ? 'visible' : ''}>
        <PromoImage src={promoImage} alt="Promotion Image" />
        <PromoContent>
          <PromoTitle>PROMOTIONS EXCLUSIVES</PromoTitle>
          <PromoDescription>
            Ne ratez pas nos offres Exceptionnelles sur une sélection de vêtements, chaussures et accessoires !
          </PromoDescription>
          <LinkButton to="/products">Magasinez</LinkButton>
        </PromoContent>
      </PromotionSection>
      <AboutUsSection className={isVisible ? 'visible' : ''}>
        <AboutUsTitle>About Us</AboutUsTitle>
        <AboutUsContent>
          We'd love to hear from you! Here are our contact details:
          <br />
          <strong>Opening Hours:</strong>
          <br />
          - Monday to Friday: 9:00 AM - 6:00 PM
          <br />
          - Saturday: 10:00 AM - 4:00 PM
          <br />
          <strong>Location:</strong>
          <br />
          NovaSport Headquarters
          <br />
          123 Sports Avenue
          <br />
          Ottawa, ON K1A 0B1 Canada
        </AboutUsContent>
      </AboutUsSection>
    </Container>
  );
};

export default HomePage;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('/public/background.webp') no-repeat center center fixed;
  background-size: cover;
  margin-top: 100px;
`;

const ContentBox = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 20px;
  opacity: 0;
  transform: translateY(20px);
  &.visible {
    animation: ${fadeIn} 1s forwards;
  }
`;



const TextSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Arial', sans-serif;
  font-style: italic;
  font-weight: bold;
  color: #00BFFF;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-family: 'Arial', sans-serif;
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: start;

  &:hover {
    background-color: #0056b3;
  }
`;

const LinkButton = styled(Link)`
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;


const ImageSection = styled.div`
  flex: 1;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductsSection = styled.div`
  width: 100%;
  padding: 50px 20px;
  background: none;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
`;

const ProductSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  margin: 0 -200px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 80%;
  gap: 140px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 200px;
  text-align: center;
  padding: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  background: rgba(128, 128, 128, 0.5);
`;

const ProductInfo = styled.div`
  padding: 10px;
  background: rgba(128, 128, 128, 0.7);
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
  font-family: 'Arial', sans-serif;
  color: black;
  font-style: italic;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #007BFF;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
`;

const PromotionSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8); /* gris transparent */
  margin: 50px 0;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 80%;
  opacity: 0;
  transform: translateY(20px);
  &.visible {
    animation: ${fadeIn} 1s forwards;
  }
`;

const PromoImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
`;

const PromoContent = styled.div`
  flex: 1;
  text-align: center;
`;

const PromoTitle = styled.h3`
  font-size: 2rem;
  color: white; /* changer la couleur du texte */
  margin-bottom: 20px;
`;

const PromoDescription = styled.p`
  font-size: 1.2rem;
  color: white; /* changer la couleur du texte */
  margin-bottom: 20px;
`;



const AboutUsSection = styled.div`
  background: rgba(0, 0, 0, 0.8); /* gris transparent */
  width: 80%;
  margin: 50px 0;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  &.visible {
    animation: ${fadeIn} 1s forwards;
  }
`;

const AboutUsTitle = styled.h2`
  font-size: 2rem;
  color: white; /* changer la couleur du texte */
  margin-bottom: 20px;
`;

const AboutUsContent = styled.p`
  line-height: 1.5; /* ou tout autre valeur selon l'espacement souhaité */
  margin-bottom: 10px; /* ajoutez un margin-bottom pour espacer les lignes */
`;

