import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function VideoRoom() {
    let {roomId} = useParams();
    const myMeeting = async (element) =>{
        const appID= 940720820;
        const serverSecret="3acb7b31adce9a77109f34ca77be242a";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"yash nema")

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
          container: element,
        sharedLinks: [
          {
            name: 'copy link',
            url:`http://localhost:5173/room/${roomId}`,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        })
    }
  return (
    <div ref={myMeeting}></div>
  )
}

export default VideoRoom