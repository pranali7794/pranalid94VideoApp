import axios from "axios"
import React, {useState, useEffect} from "react"
import ReactPlayer from "react-player"
import {Link} from "react-router-dom";

function HomeVideo(){
    let [video, setVideo] = useState([])	
    var baseurl = process.env.REACT_APP_BASE_URL
	let assetsurl = baseurl+"/api/allassets";
	    
	useEffect(()=>{	
		axios({
			url : assetsurl,
			method : "get" 

		}).then((response)=>{
				console.log("response from video api", response)
				setVideo(response.data.videos)				
			}, (error)=>{
				console.log("Error from video api", error)
			}) 
            
	}, [])
    console.log("videos=", video)
    return(
        <>
        <center>  <h1>All Videos</h1></center>
        <div className="container" style={{margin:"29px", padding:"10px"}}>
        <div className="row">          

                {video.length > 0 && video.map((each, index) =>{
                     var videoName = video[index]
                    //var fileExtension = videoName.split('.').pop(); //"mp4"
                    
                    var url = baseurl+"/api/playvideo?filename="+videoName;
                    var link_to = "/playvideo?filename="+videoName;
                    
                        return (
                        <>
                        <div className="col-md-4">
                        <Link to={link_to}>
                        <ReactPlayer  url={url} height="245px" width="270px">

                        </ReactPlayer>
                        </Link> 
                        </div>
                        <div className="clear-fix" style={{clear:"both"}}></div>
                        </>
                         )

                     
                   
                })
                }
        </div>
        </div>
        </>
    )
}

export default HomeVideo;