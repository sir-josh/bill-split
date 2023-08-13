import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
	const [bill, setBill] = useState("");
	const [paidByUser, setPaidByUser] = useState("");
	const paidByFriend = bill ? bill - paidByUser : "";
	const [whoPays, setWhoPays] = useState("user");

	const { name } = selectedFriend;

	function handleSubmit(e) {
		e.preventDefault();

		if (!bill || !paidByUser) return;

        /*
        onSpitBill() should accepts Balance value as argument
            +ve Balance means that the friend is owing the User(You)
            -ve Balance means that the user(You) is owing the friend
            ----------------------------------------------------------
            (whoPays == user)[you] then return the balance(+ve) your friend is owing you
            (whoPays == friend) then return the balance(-ve) you're owing your friend
        */
		onSplitBill(whoPays === "user" ? paidByFriend : -paidByUser);
	}

	return (
		<form className="form-split-bill" onSubmit={handleSubmit}>
			<h2>Split a bill with {name}</h2>

			<label>💰 Bill value</label>
			<input
				type="text"
				value={bill}
				onChange={(e) => setBill(Number(e.target.value))}
			/>

			<label>🧍‍♀️ Your expense</label>
			<input
				type="text"
				value={paidByUser}
				onChange={(e) =>
					setPaidByUser(
						Number(e.target.value) > bill
							? paidByUser
							: Number(e.target.value),
					)
				}
			/>

			<label>👫 {name}'s expense</label>
			<input type="text" value={paidByFriend} disabled />

			<label>🤑 Who is paying the bill</label>
			<select
				value={whoPays}
				onChange={(e) => setWhoPays(e.target.value)}>
				<option value="user">You</option>
				<option value="friend">{name}</option>
			</select>

			<Button>Split bill</Button>
		</form>
	);
};

export default FormSplitBill;
