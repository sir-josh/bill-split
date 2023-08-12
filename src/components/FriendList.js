import { initialFriends } from "../App";
import Friend from "./Friend";

export default function FriendList() {
	const friends = initialFriends;
	return (
		<ul>
			{friends.map((friend) => (
				<Friend friend={friend} key={friend.id} />
			))}
		</ul>
	);
}
