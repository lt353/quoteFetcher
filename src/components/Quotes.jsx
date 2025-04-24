import React, { useState, useEffect } from "react";
import "../Quotes.css";

// TODO: Import useEffect

function Quotes(props) {
	// TODO: Remove hard-coded quotes
	const [quotes, setQuotes] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	// TODO: Add other state variables here

	// TODO: Call useEffect() to fetch quotes here
	useEffect(() => {
		async function fetchQuotes() {
			setQuotes([]);
			setError("");
			setLoading(true);

			const url = `https://wp.zybooks.com/quotes.php?topic=${props.topic.toLowerCase()}&count=${
				props.count
			}`;
			const response = await fetch(url);

			if (response.ok) {
				const result = await response.json();
				if (Array.isArray(result)) {
					setQuotes(result);
				} else if (result.quotes) {
					setQuotes(result.quotes);
				} else if (result.error) {
					setError(result.error);
				} else {
					setError("Unexpected response format from server");
				}
			} else {
				setError(`Topic '${props.topic}' not found`);
			}
			setLoading(false);
		}
		fetchQuotes();
	}, [props.topic, props.count]);
	// TODO: Render error message and loading message
	return (
		<section>
			{error && <p className="error">{error}</p>}
			{loading ? (
				<p>Loading...</p>
			) : (
				<ol>
					{quotes.map((q, index) => (
						<li key={index}>
							{q.quote} - {q.source}
						</li>
					))}
				</ol>
			)}
		</section>
	);
}

export default Quotes;
