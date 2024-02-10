import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const HomePage = () =>
{
	const [roomCode,setroomCode] = useState("");
	const naviagate = useNavigate()

	const hadleFormSubmit = (e) =>
	{
		e.preventDefault();
		naviagate(`/room/${roomCode}`);
	}
	return (
		<div className="home-page">
			<form onSubmit={hadleFormSubmit} className="form">
				<div>
					<label htmlfor="roomid">Room Code</label>
					<input type="text" required placeholder="Enter Room code here" onChange={e=>{setroomCode(e.target.value)}} name="roomid" id="roomid"/>
					<button type="submit">Enter room</button>
				</div>
			</form>
		</div>
	);
}
export default HomePage;