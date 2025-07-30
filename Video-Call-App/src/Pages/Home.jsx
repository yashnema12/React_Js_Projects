// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';

// function Home() {
//     let navigate = useNavigate();
//     let [input,setInput] = useState("")
//     function handleJoin(){
//         navigate(`/room/${input}`)
//     }
//   return (
//     <div id='home'
//         style={{ 
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       padding: '10px',
//       display: 'flex',
//       gap: '10px'
//     }}>
//       <input type="text" placeholder='enter room id' value={input} onChange={(e)=>setInput(e.target.value)}/>
//       <button onClick={handleJoin}>Join Now</button>
//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    function handleJoin() {
        if (input.trim()) {
            navigate(`/room/${input.trim()}`);
        }
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw'
        }}>
            <div style={{
                display: 'flex',
                gap: '10px',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <input 
                    type="text" 
                    placeholder='Enter room id' 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        minWidth: '200px'
                    }}
                />
                <button 
                    onClick={handleJoin}
                    style={{
                        padding: '8px 16px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: '#007bff',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                >
                    Join Now
                </button>
            </div>
        </div>
    );
}

export default Home;