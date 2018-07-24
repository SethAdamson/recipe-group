import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from 'react-slick';
import { Parallax } from 'react-parallax';
import RecipeBox from './RecipeBox';
import Classics from './ClassicsBox';
import Seasonal from './SeasonalBox';
import Healthy from './HealthyBox';
import Header from '../fixed/Header';
import CookingVideo from './../../media/14875489.mp4'
import { connect } from 'react-redux';
import Recipe1 from './../../media/paella.jpg'
import Recipe2 from './../../media/waffle.jpg'
import Recipe3 from './../../media/pizza.jpg'
import ChefSVG from './testChef1.svg'
// #region THIS ONE WILL COLLAPSE ALL OF THEM
// #region Homepage
const Homepage = styled.div`
background-color: #e8e2dc;
`
// #endregion
// #region Video
const Video = styled.video`
    position: relative;
    left: 0;
    margin: 0;
    margin-top: -21vh;
    width: 100vw;
`
// #endregion
// #region HomeHeader
const HomeHeader = styled.div`
width: 100%;
height: 100vh;
background-color: transparent;

h1 {
    position: relative;
    z-index: 1;
    float: left;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);   
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
}
`
// #endregion
// #region Title1
    const Title1 = styled.h2`
    position : absolute;
    background-attachment: fixed;
    margin: 0;
    margin-top: 10vh;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 9rem;
    padding-left: 15vw;
    z-index:2;
    `
// #endregion
// #region Recipes
const Recipes = styled.div`
position: relative;
`
// #endregion
// #region RecipeBox1
const RecipeBox1 = styled.div`
position: absolute;
margin-top: 100vh;
margin-left: 55vw;
z-index:10;
`
// #endregion
// #region RecipeBox2
const RecipeBox2 = styled.div`
position: absolute;
margin-top: 180vh;
margin-left: 20vw;
z-index:10;
`
// #endregion
// #region RecipeBox3
const RecipeBox3 = styled.div`
position: absolute;
margin-top: 200vh;
margin-left: 65vw;
z-index:10;
`
// #endregion
// #region ListTitle
const ListTitle = styled.h4`
margin-top: 240vh;
margin-left: 10vw;
font-family: Times New Roman;
font-size: 2rem;
`
// #endregion
// #region RecipeList
const RecipeList = styled.div`
margin: auto 10vw;
display: flex;
justify-content: space-around;
margin-top: 25vh;
`
// #endregion
// #region RecipeButton
const RecipeButton = styled.button`
text-transform: uppercase;
color: white;
font-size: 1rem;
padding: 3.5% 3%;
border-radius: 50%;
margin: 1vh 44vw;
border : 10px double #e8e2dc;
background-color: #85C1E9;
-webkit-transition: all .5s ease-in-out;
-moz-transition: all .5s ease-in-out;
transition: all .5s ease-in-out;

&:hover {
transform: scale(1.2);
background-color: #2E86C1;
box-shadow: 0px 0px 15px #888888;
}
`
// #endregion
// #region Categories
const Categories = styled.div`
position: relative;

img {
    width: 50vw;
    height: 60vh;
    z-index: 1;
    margin: 26vh 0vw;
}
`
// #endregion
// #region Title2
const Title2 = styled.h2`
position : absolute;
margin: 0;
font-family: 'Montserrat', sans-serif;
color: white;
z-index:2;
font-size: 9rem;
padding-left: 15vw;
padding-top: 10vh;
`
// #endregion
// #region CategoryBox
const CategoryBox = styled.div` 
position: absolute;
float: right;
margin: -87vh 50vw;
background-color: #e8e2dc;

article {
    margin: 6vh -2vw;
}
`
// #endregion
// #region Section
const Section = styled.div`
position : relative;
margin-top: 5vh;
`
// #endregion
// #region Img7
const Img7 = styled.img`
src: url(${ props => props.src});
width: 100vw;
height: 100vh;
opacity: 0.9;
`
// #endregion
// #region Img8
const Img8 = styled.img`
src: url(${ props => props.src});
width: 100vw;
height: 100vh;
opacity: 0.9;
`
// #endregion
// #region Img9
const Img9 = styled.img`
src: url(${ props => props.src});
width: 100vw;
height: 100vh;
opacity: 0.9;
`
// #endregion 
// #region SectionTitle
const SectionTitle = styled.h2`
position: absolute;
z-index: 3;
font-family: 'Montserrat', sans-serif;
font-size: 10rem;
color: white;
margin: -80vh 20vw;

${props => props.secondh2 && 'margin: -78vh 20vw ;'}
${props => props.thirdh2 && 'margin: 78vhvh 20vw ;'}
`
// #endregion
// #region SecDesc
const SecDesc = styled.p`
position: absolute;
font-family: 'Montserrat', sans-serif;
margin: -50vh 0 0 20vw;
font-size: 3rem;
color: white;
`
// #endregion
// #region SecButton
const SecButton = styled.button`
position: absolute;
margin: 71vh 0 0 -80vw;
text-transform: uppercase;
font-weight: 400;
color: black;
border: 1px solid lightgrey;
width: 20%;
padding: 20px;
letter-spacing: 0.2vw;
-webkit-transition: ease-out 0.5s;
-moz-transition: ease-out 0.5s;
transition: ease-out 0.5s;

&:hover {
    box-shadow: inset 0-100px 0 0 #2E86C1;
}
`
// #endregion
// #region NextArrow
const NextArrow = styled.div`
margin: 29vh 50vw;
z-index:10;
background: white;
height: 43px !important;
width: 43px !important;
border-radius: 50%;
border: none;

&:hover {
    background: white;
    height: 43px !important;
    width: 43px !important;
}

&:before, :after {
    content: "⇾" !important;
    color: black;
    margin: 0 1.1vw;
    line-height: 1.9 !important;
}
`
// #endregion
// #region PrevArrow
const PrevArrow = styled.div`
margin: 34vh 47vw;
z-index:10;
background: white;
height: 43px;
width: 43px;
border-radius: 50%;
border: none;

&:hover {
    background: white;
    height: 43px !important;
    width: 43px !important;
}

&:before, :after {
    content: "⇽" !important;
    color: black;
    margin: 0 1.1vw;
    line-height: 1.8 !important;
}
`
// #endregion
// #endregion
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe1: {},
            recipe2: {},
            recipe3: {},
            recipe4: {},
            recipe5: {},
            recipe6: {},
        }

    }
    componentDidUpdate(props) {
        if (props.recipes !== this.props.recipes) {
            this.setState({
                recipe1: this.props.recipes[0],
                recipe2: this.props.recipes[1],
                recipe3: this.props.recipes[2],
                recipe4: this.props.recipes[3],
                recipe5: this.props.recipes[4],
                recipe6: this.props.recipes[5]

            })
        }


    }
    render() {
        let { recipes } = this.state
        // let display = recipes.filter(e => {

        // })
        console.log(this.props)
        console.log(this.state)

        const settings = {
            arrows: true,
            infinite: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        }


        return (
            <Homepage>
            <Header />
                <HomeHeader>
                    <h1>Recipease</h1>

                    <Video autoPlay='true' loop muted>
                        {/* <Transition> 

                    <ChefTransition/>
                    </Transition> */}
                        <source src={CookingVideo} type='video/mp4' />
                    </Video>
                </HomeHeader>


                <Title1>Recipes</Title1>

                <Recipes>

                    <div
                        style={{
                            marginTop: "26.5vh",
                            position: "absolute"
                        }}>
                        <Parallax className="RECIPE1"
                            bgImage={Recipe1}
                            strenght={50}
                        >
                            <div style={{
                                height: "90vh",
                                width: "93.5vw",
                                overflow: "hidden",
                                backgroundAttachment: "cover"
                            }}></div>
                        </Parallax>
                    </div>

                    <RecipeBox1>
                        <RecipeBox />
                    </RecipeBox1>

                    <div
                        style={{
                            marginTop: "130vh",
                            position: "absolute"
                        }}>
                        <Parallax className="RECIPE2"
                            bgImage={Recipe2}
                            strenght={50}
                        >
                            <div style={{
                                height: "60vh",
                                width: "50vw",
                                overflow: "hidden",
                                backgroundAttachment: "cover",
                                backgroundPosition: "top"
                            }}></div>
                        </Parallax>
                    </div>

                    <RecipeBox2>
                        <RecipeBox />
                    </RecipeBox2>

                    <div
                        style={{
                            marginTop: "140vh",
                            marginLeft: "50vw",
                            position: "absolute"
                        }}>
                        <Parallax className="RECIPE2"
                            bgImage={Recipe3}
                            strenght={50}
                        >
                            <div style={{
                                height: "60vh",
                                width: "50vw",
                                overflow: "hidden",
                                backgroundAttachment: "cover",
                                backgroundPosition: "top"
                            }}></div>
                        </Parallax>
                    </div>
                    <RecipeBox3>
                        <RecipeBox />
                    </RecipeBox3>

                </Recipes >


                <ListTitle>
                    More recipes
                </ListTitle>
                <RecipeList>
                    <RecipeBox />
                    <RecipeBox />
                    <RecipeBox />

                </RecipeList>

                <RecipeButton>
                    More
                    <br />
                    Recipes
                </RecipeButton>

                <Title2>Categories</Title2>
                <Categories>
                    <Slider {...settings}>

                        <div>
                            <img src="http://www.delibread.fr/200/mini-pain-aux-raisins.jpg" alt="" />
                            <CategoryBox>
                                <Classics />
                            </CategoryBox>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_574,q_80,w_945/tbagzeanc4qhrnlanzgi.jpg" alt="" />
                            <CategoryBox>
                                <Seasonal />
                            </CategoryBox>
                        </div>
                        <div>
                            <img src="https://files.meilleurduchef.com/mdc/photo/recette/chouquettes/chouquettes-640.jpg" alt="" />
                            <CategoryBox>
                                <Healthy />
                            </CategoryBox>
                        </div>

                    </Slider>

                </Categories>

                <Section>
                    <div>
                        <Img7 src="http://blog.ossogoodbones.com/wp-content/uploads/2017/08/shutterstock_323139527.jpg" alt="" />
                        <SectionTitle>Classics</SectionTitle>
                        <SecDesc>Description</SecDesc>
                        <SecButton>Learn More</SecButton>
                    </div>

                    <div>
                        <Img8 src="https://cdn.shopify.com/s/files/1/0276/7495/files/healthy-lifestyle-1.jpg?13882323012555101936" alt="" />
                        <SectionTitle secondh2>
                            Seasonal
                        </SectionTitle>
                        <SecDesc>Description</SecDesc>
                        <SecButton>Learn More</SecButton>
                    </div>

                    <div>
                        <Img9 src="https://cdnexpatwomanfood.expatwoman.com/s3fs-public/healthy.jpg" alt="" />
                        <SectionTitle thirdh2>
                            Healthy
                        </SectionTitle>
                        <SecDesc>Description</SecDesc>
                        <SecButton>Learn More</SecButton>
                    </div>
                </Section>
            </Homepage >
        )
    }
}
function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}
export default connect(mapStateToProps)(Home)
