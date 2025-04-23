import React, { useState } from "react";
import "../App.css";
import Quotes from "./Quotes";

function App() {
	const [inputs, setInputs] = useState({
		topicSelection: "Humor",
		countSelection: "3",
	});

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	}

	return (
		<>
			<h1>Quote Fetcher</h1>
			<form>
				<p>
					<label htmlFor="topicSelection">Topic?</label>
					<select
						id="topicSelection"
						value={inputs.topicSelection}
						name="topicSelection"
						onChange={handleChange}
					>
						<option>Humor</option>
						<option>Love</option>
						<option>Motivational</option>
						<option>Wisdom</option>
					</select>
				</p>
				<p>
					<label htmlFor="countSelection">How many quotes?</label>
					<select
						id="countSelection"
						value={inputs.countSelection}
						name="countSelection"
						onChange={handleChange}
					>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</p>
			</form>
			<Quotes topic={inputs.topicSelection} count={inputs.countSelection} />
		</>
	);
}

export default App;
