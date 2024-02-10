import React from "react";
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
	const myMeeting = async (element) => {
		const appID = 1902558615;
		const serverSecret = "e27f879d1b15707aaef9f6085481b749";
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, Date.now().toString(), "hemang");
		const zp = ZegoUIKitPrebuilt.create(kitToken);
		zp.joinRoom({
			container: element,
			scenario: {
				mode: ZegoUIKitPrebuilt.VideoConference,
			},
		});
	}

	const { roomid } = useParams();

	return (
		<div className="room-page">
			<div ref={(element) => myMeeting(element)} />
		</div>
	);
}

export default RoomPage;
