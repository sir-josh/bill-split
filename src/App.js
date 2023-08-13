import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

export const initialFriends = [
	{
		id: 118836,
		name: "Clark",
		image: "https://i.pravatar.cc/48?u=118836",
		balance: -7,
	},
	{
		id: 933372,
		name: "Sarah",
		image: "https://i.pravatar.cc/48?u=933372",
		balance: 20,
	},
	{
		id: 499476,
		name: "Anthony",
		image: "https://i.pravatar.cc/48?u=499476",
		balance: 0,
	},
];

export default function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [friends, setFriends] = useState(initialFriends);

	function handleShowAddFriend() {
		setShowAddFriend((show) => !show);
	}

	function handleAddFriendToList(friend) {
		setFriends((friends) => [...friends, friend]);
		setShowAddFriend(false);
	}

	return (
		<div className="app">
			<div className="sidebar">
				<FriendList friends={friends} />
				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriendToList}/>}
				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? "Close" : "Add friend"}
				</Button>
			</div>
			<FormSplitBill />
		</div>
	);
}
