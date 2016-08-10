class FourSpaces extends React.Component{
	render(){
		return (
			<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
		);
	}
}
class TwoSpaces extends React.Component{
	render(){
		return (
			<span>&nbsp;&nbsp;</span>
		);
	}
}
class SingleSpace extends React.Component{
	render(){
		return(
			<span>&nbsp;</span>
		);
	}
}	
ReactDOM.render(<SingleSpace />, document.getElementById('special-id'));