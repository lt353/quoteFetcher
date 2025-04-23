import React, { useState } from "react";
import "../Quotes.css";

// TODO: Import useEffect

function Quotes(props) {
	// TODO: Remove hard-coded quotes
	const [quotes, setQuotes] = useState([
		{
			quote: "Be nice to nerds. You may end up working for them. We all could.",
			source: "Charles J. Sykes",
		},
		{
			quote: "The opposite of love is not hate, it's indifference.",
			source: "Elie Wiesel",
		},
		{
			quote: "The unexamined life is not worth living.",
			source: "Socrates",
		},
	]);

	// TODO: Add other state variables here

	// TODO: Call useEffect() to fetch quotes here

	// TODO: Render error message and loading message
	return (
		<section>
			<ol>
				{quotes.map((q, index) => (
					<li key={index}>
						{q.quote} - {q.source}
					</li>
				))}
			</ol>
		</section>
	);
}

export default Quotes;
