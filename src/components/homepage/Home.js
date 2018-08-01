import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from 'react-slick';
import { Parallax } from 'react-parallax';
import Header from '../fixed/Header';
import Title from './Title';
import RecipeBox from './RecipeBox';
import RecipeBoxBis from '../recipes/Recipe'
import Starter from './Starter';
import MainCourse from './MainCourse';
import Dessert from './Dessert';
import CookingVideo from './../../media/BurgerVideo.mp4'
import { connect } from 'react-redux';
import Recipe1 from './../../media/paella.jpg';
import Recipe2 from './../../media/waffle.jpg';
import Recipe3 from './../../media/pizza.jpg';
import StarterPhoto from './../../media/starter.jpg';
import MainCoursePhoto from './../../media/maincourse.jpg';
import DessertPhoto from './../../media/dessert.jpg';
import Cookin from './../../media/cookin.jpg';
import Pancakes from './../../media/pancakes.jpg';
import Vegetables from './../../media/vegetables.jpg';
import Mask from '../fixed/Mask';


const Homepage = styled.div`
background-color: #FBF8F3;
width: 98.25vw;
overflow: hidden;
`
// #endregion
// #region Video
const Video = styled.video`
    position: relative;
    width: 100%;
`
// #endregion
// #region HomeHeader
const HomeHeader = styled.div`
width: 100vw;
height: 110vh;
background-color: transparent;
overflow: hidden;
`
// #endregion
// #region Title1
const Title1 = styled.h2`
    position : absolute;
    text-shadow: 1px 1px 15px #031D44;
    background-attachment: fixed;
    margin: 0;
    margin-top: 10.5vh;
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
margin-top: 90vh;
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
margin-top: 190vh;
margin-left: 65vw;
z-index:10;
`
// #endregion
// #region ListTitle
const ListTitle = styled.h4`
margin-top: 250vh;
margin-left: 15vw;
font-family: 'Playfair Display', serif;
font-size: 2rem;
color: #031D44;
`
// #endregion
// #region RecipeList
const RecipeList = styled.div`
margin: 5vh 10vw;
display: flex;
justify-content: space-around;
`
// #endregion
// #region RecipeButton
const RecipeButton = styled.button`
text-transform: uppercase;
box-shadow: 0px 0px 15px #888888;
color: white;
font-size: 1rem;
padding: 3.5% 3%;
border-radius: 50%;
margin: 1vh 44vw;
border : 10px double #e8e2dc;
background-color: #DAB785;
-webkit-transition: all .5s ease-in-out;
-moz-transition: all .5s ease-in-out;
transition: all .5s ease-in-out;

&:hover {
transform: scale(1.2);
background-color: #D5896F;
}
`
// #endregion
// #region Categories
const Categories = styled.div`
position: relative;


img {
    position: relative;
    left: 0px;
    width: 49.9vw;
    height: 60vh;
    z-index: 1;
    margin: 26vh 0;
    box-shadow: 1px 1px 5px grey;
    opacity: 0.9;
}
`
// #endregion
// #region Title2
const Title2 = styled.h2`
position : absolute;
text-shadow: 1px 1px 15px #031D44;
margin: 0;
font-family: 'Montserrat', sans-serif;
color: white;
z-index:2;
font-size: 9rem;
padding-left: 15vw;
padding-top: 10.5vh;
`
// #endregion
// #region CategoryBox
const CategoryBox = styled.div` 
position: absolute;
float: right;
margin: -87vh ;
background-color: #FBF8F3;

article {
    margin: 6vh;
}
`
// #endregion
// #region Section
const Section = styled.div`
position : relative;
`

// #endregion 
// #region SectionTitle
const SectionTitle = styled.h2`
position: absolute;
font-family: 'Montserrat', sans-serif;
text-shadow: 1px 1px 15px #031D44;
z-index: 3;
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
text-shadow: 1px 1px 15px #031D44;
font-family: 'Playfair Display', serif;
margin: -50vh 15vw 0 20vw;
font-size: 2rem;
color: white;
`
// #endregion
// #region SecButton
const SecButton = styled.button`
position: absolute;
margin: 71vh 0 0 -80vw;
background-color: #DAB785;
text-transform: uppercase;
font-weight: 400;
color: black;
border: 1px solid lightgrey;
width: 20%;
padding: 20px;
padding-left: 1vw;
letter-spacing: 0.2vw;
-webkit-transition: ease-out 0.5s;
-moz-transition: ease-out 0.5s;
transition: ease-out 0.5s;

&:hover {
    box-shadow: inset 0 -100px 0 0 #D5896F;
}
`
// #endregion
// #region NextArrow
const NextArrow = styled.div`
margin: 29vh 51vw;
box-shadow: 1px 1px 5px grey;
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
margin: 34vh 46vw;
box-shadow: 1px 1px 5px grey;
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
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        }


        return (
            <Homepage>
                <Mask />
                <Header />
                <HomeHeader>
                    <Title />

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
                            position: "absolute",
                            boxShadow: "1px 1px 5px grey",
                            opacity: "0.9"
                        }}>
                        <Parallax className="RECIPE1"
                            bgImage={Recipe1}
                            strength={75}
                        >
                            <div style={{
                                height: "90vh",
                                width: "93.3vw",
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
                            position: "absolute",
                            boxShadow: "1px 1px 5px grey",
                            opacity: "0.9"
                        }}>
                        <Parallax className="RECIPE2"
                            bgImage={Recipe2}
                            strength={50}
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
                            position: "absolute",
                            boxShadow: "1px 1px 5px grey",
                            opacity: "0.9"
                        }}>
                        <Parallax className="RECIPE2"
                            bgImage={Recipe3}
                            strength={50}
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
                    <RecipeBoxBis />
                    <RecipeBoxBis />
                    <RecipeBoxBis />
                </RecipeList>

                <RecipeButton>
                    More
                    <br />
                    Recipes
                </RecipeButton>

                <Title2>Courses</Title2>
                <Categories>
                    <Slider {...settings}>

                        <div>
                            <img
                                src={StarterPhoto}
                            />
                            <CategoryBox>
                                <Starter />
                            </CategoryBox>
                        </div>
                        <div>
                            <img
                                src={MainCoursePhoto}
                            />
                            <CategoryBox>
                                <MainCourse />
                            </CategoryBox>
                        </div>
                        <div>
                            <img
                                src={DessertPhoto}
                            />
                            <CategoryBox>
                                <Dessert />
                            </CategoryBox>
                        </div>

                    </Slider>

                </Categories>

                <Section>
                    <div>
                        <Parallax
                            bgImage={Pancakes}
                            strength={50}
                        >
                            <div
                                style={{
                                    boxSshadow: "1px 1px 5px grey",
                                    width: "100vw",
                                    height: "100vh",
                                    opacity: "0.25",
                                    background: "#816852"
                                }} >
                            </div>
                        </Parallax>
                        <SectionTitle>Classics</SectionTitle>
                        <SecDesc>Take a nostalgic trip to back to your childhood with our collection of classic recipes from home.</SecDesc>
                        <SecButton>Learn More</SecButton>
                    </div>

                    <div>
                        <Parallax
                            bgImage={Vegetables}
                            strength={50}
                        >
                            <div
                                style={{
                                    boxSshadow: "1px 1px 5px grey",
                                    width: "100vw",
                                    height: "100vh",
                                    opacity: "0.25",
                                    background: "#816852"
                                }} >

                            </div>
                        </Parallax>

                        <SectionTitle secondh2>
                            Seasonal
                        </SectionTitle>
                        <SecDesc>Fruit, vegetables, meat and fish tastes best with it's in season and at its peak! Find the perfect recipe to fit.</SecDesc>
                        <SecButton>Learn More</SecButton>
                    </div>

                    <div>
                        <Parallax
                            bgImage={Cookin}
                            strength={50}
                        >
                            <div
                                style={{
                                    boxSshadow: "1px 1px 5px grey",
                                    width: "100vw",
                                    height: "100vh",
                                    opacity: "0.25",
                                    background: "#816852"
                                }} >
                            </div>
                        </Parallax>

                        <SectionTitle thirdh2>
                            Healthy
                        </SectionTitle>
                        <SecDesc>Healthy meals packed with flavour, crunch and punch! Explore our healthy recipes, meal ideas and more.</SecDesc>
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
