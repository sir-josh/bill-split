import Button from "./Button";

const FormSplitBill = ({selectedFriend}) => {
    const { name } = selectedFriend;
	return (
		<form className="form-split-bill">
			<h2>Split a bill with {name}</h2>

			<label>💰 Bill value</label>
			<input type="text" />

			<label>🧍‍♀️ Your expense</label>
			<input type="text" />

			<label>👫 {name}'s expense</label>
			<input type="text" disabled />

			<label>🤑 Who is paying the bill</label>
			<select>
				<option value="user">You</option>
				<option value="friend">{name}</option>
			</select>

			<Button>Split bill</Button>
		</form>
	);
};

export default FormSplitBill;
