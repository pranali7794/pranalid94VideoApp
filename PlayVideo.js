import React from "react"
import ReactPlayer from "react-player"
import queryString from "query-string";

function PlayVideo(props) {
var baseurl = process.env.REACT_APP_BASE_URL
const parsed = queryString.parse(props.location.search);
var url = baseurl+'/api/playvideo?filename='+parsed.filename;

	return(
        <div>
        <center> <h1>Watch full video</h1></center>

		<div className="row" style={{margin:"5px", padding:"2px", marginLeft:"180px"}}>
                    <div className="col-md-6">
                        <ReactPlayer 
                        controls width='800px'
                        height='600px' url={url}  />
                        
                        </div>
                    
                

        </div>
        </div>
		)
}

export default PlayVideo;