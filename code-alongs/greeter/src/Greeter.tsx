import { useState } from "react";
import Expression from './Expression';
interface GreeterProps {
	startingName: string
}

function Greeter({ startingName }: GreeterProps) {
	console.log(startingName);
	const [name, setName] = useState(startingName);
	const [show, showHide] = useState(false);

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

		{
			show && <div className={'edit'}>
				<label> Changes as you type
					<input onChange={(e) => setName(e.target.value as string)} />
				</label>

				<form onSubmit={e => {
					e.preventDefault(); // prevents the page from reloading when you submit
					console.log(e.target); // the form that you submitted
					const data = new FormData(e.target as HTMLFormElement); // gettign the data from the form
					const newName = data.get('name'); // console.log()ing name
					setName(newName as string); // guaranteeing that this is a string
				}
				}>
					<label>
						Changes when you hit submit
						<input name="name" placeholder="Enter Name Here" />
					</label>
					<button>Submit</button>
				</form>
			</div>
		}
		{
			/* 
					showHide() is setting the state, 
				 isShowing is previous state
				  !isShowing means set it to the opposite
			 */
		}
		<button onClick={() => {
			showHide(isShowing => !isShowing)
		}}> {show ? 'Hide' : 'Show'} Edit Form </button>


	</div>;
}

export default Greeter;
