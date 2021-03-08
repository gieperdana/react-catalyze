import React, {useEffect,useState} from 'react';
import {Header,Footer} from "../component";
import {useParams} from "react-router-dom";
const Article = () => {
    let { id } = useParams();
    const [dataPost, dataPostSet] = useState({})

    const content = {
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        "sub_title":"Marem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. sed do eiusmod tempor incididunt ut labore. sed do eiusmod tempor incididunt ut labore.",
        "article_date":"June 2016",
        "pargraph1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Excepteur sint occaecat cupidatat non proident",
        "paragraph2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Excepteur sint occaecat cupidatat non proident",
        "paragraph3":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Excepteur sint occaecat cupidatat non proident",
        "image":"https://source.unsplash.com/random",
        "caption_image":"Donec non nunc vehicula Lorem ipsum dolor sit amet",
        "quote":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        "author":{
            "name":"John Broke",
            "position":"Public Relation WWF",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ."
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        async function getPosts() {
            try {
                let response = await fetch('http://localhost:8000/api/posts/'+id)
                response = await response.json()
                if(response.status==200){
                    dataPostSet(response.data)
                }else{
                    alert("Data not found now using dummy local data")
                    dataPostSet(content)
                }
            }catch(error){
                alert("Server not online please online your server, please make sure server run on http://localhost:8000, if not you will using dummy local data")
                dataPostSet(content)
                console.error(error);
            }
          
        }
    
        getPosts()
    }, [])
    
    return (
        <div className="min-h-screen">
            {/* Header */}
            <Header/>
            {/* Content */}
            <div className="pt-5 pb-10 mx-10 lg:mx-80">
                {/* Breadcumb */}
                <p> <span className="text-gray-700 font-bold text-xs">Blog</span><span className="text-gray-500 font-normal text-xs"> / Lorem ipsum dolor sit amet</span></p>
                
                {/* Title */}
                <p className="text-4xl pt-7 font-bold"> 
                    {dataPost.title}
                </p>

                {/* Date */}
                <p className="pt-2"><span className="text-gray-400 font-normal text-xs"> {content.author.name} / {content.article_date} / WWF</span></p>

                {/* Button Box */}
                <div className="flex items-center mt-2">
                    <div className="text-xs mx-1">
                        Topics
                    </div>
                    <div className="text-xs mx-1 p-1 bg-gray-200 text-gray-600">
                        Valuing Ecosystem Services
                    </div>
                    <div className="text-xs mx-1 p-1 border-2 border-yellow-600 text-yellow-600">
                        Reuse and recycing
                    </div>
                    <div className="text-xs mx-1 p-1 bg-gray-200 text-gray-600">
                        RED ++
                    </div>
                </div>

                {/* Sub Title */}
                <p className="text-2xl mt-7 font-semibold"> 
                    {dataPost.sub_title}
                </p>

                {/* Heading */}
                <p className="text-xl mt-7 font-semibold"> 
                HEADING 1
                </p>

                {/* Paragraph 1 */}
                <p className="text-sm mt-2 text-gray-500"> 
                    {dataPost.paragraph1}
                </p>

                {/* image */}
                <div className="mt-10">
                    <img src={dataPost.image}  className="object-cover h-96 w-full" alt="screen1"/>
                </div>
                {/* Caption Image */}
                <p><span className="text-gray-500 font-normal text-xs">{dataPost.caption_image}</span></p>

                {/* Paragraph 2 */}

                <p className="text-sm mt-10 text-gray-500"> 
                    {dataPost.paragraph2}
                </p>

                {/* Quotes */}
                <hr className="mt-10"/>
                <p className="mt-5 text-2xl text-blue-400 italic text-center mx-10">{dataPost.quote}</p>
                <hr className="mt-5"/>

                {/* Paragraph 3 */}

                <p className="text-sm mt-10 text-gray-500"> 
                    {dataPost.paragraph3}
                </p>

                {/* Share Icon */}
                <div className="mt-5 flex items-center">
                    <div className="text-center">
                        <span className="text-gray-600 font-bold text-xs">SHARE ON</span>
                    </div>
                    <div className="text-center mt-2 flex">
                        <a href="#"><span><img src="/assets/facebook-icon.svg" className="w-6 flex-1 mx-2" alt="facebook"/></span></a>
                        <a href="#"><span><img src="/assets/twitter-icon.svg" className="w-6 flex-1 mx-2" alt="twitter"/></span></a>
                        <a href="#"><span><img src="/assets/google-icon.jpg" className="w-6 flex-1 mx-2" alt="google"/></span></a>
                    </div>
                </div>

                 {/* Line */}
                 <hr className="mt-7"/>

                {/* User Publisher */}
                <div className="flex mt-7">
                    <div className="w-24">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"  className="object-cover rounded-full" alt="screen1"/>
                    </div>
                    <div className="ml-6">
                        <p className="text-gray-600 font-bold text-sm">{content.author.name}</p>
                        <p className="text-gray-600 font-light text-xs">{content.author.position}</p>
                        <p className="text-gray-600 font-light text-xs mt-2">
                            {content.author.description}
                        </p>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Article;