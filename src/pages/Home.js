import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import {Header,Footer,Screen,MenuBar,Clients,SocialMedia} from "../component";
const Home = () => {
    const [hover, setHover] = useState({activeIndex: 0})
    const [dataPosts, dataPostsSet] = useState([])
    const articles = [
        {
            "id":1,
            "image":"https://picsum.photos/900",
            "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda",
            "date":"22 Oct 2020",
            "paragraph1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            "id":2,
            "image":"https://picsum.photos/900",
            "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda",
            "date":"22 Oct 2020",
            "paragraph1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            "id":3,
            "image":"https://picsum.photos/900",
            "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda",
            "date":"22 Oct 2020",
            "paragraph1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            "id":4,
            "image":"https://picsum.photos/900",
            "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda",
            "date":"22 Oct 2020",
            "paragraph1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            "id":5,
            "image":"https://picsum.photos/900",
            "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda",
            "date":"22 Oct 2020",
            "paragraph1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            "id":6,
            "image":"https://picsum.photos/900",
            "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda",
            "date":"22 Oct 2020",
            "paragraph1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        }
    ]
    useEffect(() => {
        async function getPosts() {
            try {
                let response = await fetch('http://localhost:8000/api/posts')
                response = await response.json()
                console.log(response)
                if(response.status==200){
                    dataPostsSet(response.data)
                }else{
                    alert("Data not found now using dummy local data")
                    dataPostsSet(articles)
                }
            }catch (error) {
                alert("Server not online please online your server, please make sure server run on http://localhost:8000,if not you will using dummy local data")
                dataPostsSet(articles)
                console.error(error);
            }
        }
    
        getPosts()
    }, [])

    return (
        // All Pages
        <div className="min-h-screen">
            {/* Header */}
            <Header/>
            {/* Menu Bar */}
            <MenuBar/>
            {/* Screen  */}
            <Screen/>
            {/* Content Container */}
            <div className="flex pt-10" style={{backgroundColor:'#F5F5F5'}}>
                {/* Content */}
                <div className="invisible lg:visible w-0 lg:w-32">
                    <a href="#">
                        <img src="assets/arrow_left.png"  className="w-8 h-16 mx-8 mt-64" alt="arrow_left"/>
                    </a>
                </div>
                <div className="w-full">
                    <div className="lg:grid lg:grid-cols-3">
                        {/* Card */}
                        {dataPosts.map((article) => 
                            (
                                <div className="h-80 mx-4 mt-20 lg:my-2 group" onMouseEnter={() => setHover({activeIndex: article.id})} onMouseLeave={() => setHover({activeIndex: 0})}>
                                    <Link to={`/article/${article.id}`}>
                                    {hover.activeIndex != article.id&&(
                                        <div className="h-4/5">
                                            <img src={article.image}  className="object-cover h-full w-full" alt="screen2"/>
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-xs mt-2 text-gray-400">{article.date}</p>
                                    </div>
                                    <div className="text-sm font-semibold mt-2 group-hover:text-yellow-600">
                                        {article.title}
                                    </div>
                                    {hover.activeIndex == article.id&& (
                                        <div className="mt-2">
                                            <p className="text-sm">{`${article.paragraph1.substring(0, 250)}...`}</p>
                                            <p className="text-sm text-yellow-600 mt-2">Read more . . .</p>
                                        </div>
                                    )}
                                    </Link>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="invisible lg:visible w-0 lg:w-32">
                    <a href="#">
                        <img src="assets/arrow_right.png"  className="w-8 h-16 mx-8 mt-64" alt="arrow_right"/>
                    </a>
                </div>
            </div>

            <div className="" style={{backgroundColor:'#F5F5F5'}}>
                <div className="pt-10 pb-10">
                    <center>
                        <input id="radio1" type="radio" name="radio" className="mx-2" />
                        <input id="radio1" type="radio" name="radio" className="mx-2" />
                        <input id="radio1" type="radio" name="radio" className="mx-2" />
                        <input id="radio1" type="radio" name="radio" className="mx-2" />
                    </center>
                </div>
            </div>
            {/* Clients */}
            <Clients/>
            {/* Social Media */}
            <SocialMedia/>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Home;