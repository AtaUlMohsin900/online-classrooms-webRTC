let localStream;
let remoteStream;


let init = async () =>{
    localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})
    document.getElementById('user-1').srcobject = localStream

}

init()