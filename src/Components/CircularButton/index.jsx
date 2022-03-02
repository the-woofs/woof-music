import './index.css'

function CircularButton(props) {
	return (
		<button class="CircularButton" onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default CircularButton
