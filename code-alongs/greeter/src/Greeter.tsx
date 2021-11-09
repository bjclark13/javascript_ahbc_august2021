import { useState } from "react";
import Expression from './Expression';
function Greeter() {
	const [name, setName] = useState("BJ");


	const lower = name.toLowerCase();

	// only include the name 
	// if the name is BJ

	//	

	return <div>
		<p>
			Hello, {
				(name === 'BJ') ?
					<strong> Captain </strong>
					: <strong>Peasant</strong>
			} {name}<Expression />
		</p>

		<div>

		</div>

	</div>;
}

export default Greeter;
