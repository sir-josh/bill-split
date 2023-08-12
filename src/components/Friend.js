import Button from "./Button";

export default function Friend({ friend: { id, name, image, balance } }) {
	return (
		<li>
			<img src={image} alt={`${name}-img`} />
			<h3>{name}</h3>
			{balance < 0 && (
				<p className="red">
					You owe {name} N{Math.abs(balance)}
				</p>
			)}
			{balance > 0 && (
				<p className="green">
					{name} owes You N{Math.abs(balance)}
				</p>
			)}
			{balance === 0 && <p>You and {name} are even</p>}
			<Button>Select</Button>
		</li>
	);
}
