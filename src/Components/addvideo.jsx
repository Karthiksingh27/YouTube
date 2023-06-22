import { useRef } from 'react';
import '../styles/addvideo.css'
import { upload } from '@testing-library/user-event/dist/upload';
import { useNavigate } from 'react-router-dom';

const Addvideo = () => {
    let navigate = useNavigate()

    let thumbnail = useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)

    let upload = ((e)=>{
        e.preventDefault() //prevents the page from uploading
        let data  = {
            thumnnail: thumbnail.current.value,
            title : title.current.value,
            channel : channel.current.value,
            views : views.current.value

        }
            fetch('http://localhost:4000/videos',{
                method :'POST',
                headers : {'Content-Type':'application/json'},
                body:JSON.stringify(data)

            })
            alert('video uploaded successfully')
            navigate('/')  //navigating to different routes
    })

    return (
        <div className="addVideo">
            <form id="container" action=""  onSubmit={upload}>
               <div id="right">
               <p>ADD VIDEO</p>
                <label htmlFor="thumnnail"> thumnail  </label><br />
                <input ref={thumbnail} type="text" placeholder="Enter thumnail" /><br />

                <label htmlFor="title"> title  </label><br />

                <input ref={title} type="text" placeholder="Enter title" /> <br />

                <label htmlFor="channel"> channel  </label><br />

                <input ref={channel}type="text" placeholder="Enter channel" /><br />

                <label htmlFor="views"> views  </label> <br />
                <input ref={views} type="text" placeholder="Enter views" /> <br />
      
                <button>Upload video</button>                 
                
                </div>               

            </form>
        </div>
      );
}
 
export default Addvideo;