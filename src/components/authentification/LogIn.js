// import React from "react";
// import Modal from "react-modal";
// import LoginForm from "../forms/LoginForm";

// class Login extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			modalIsOpen: false,
// 		};
// 		this.openModal = this.openModal.bind(this);
// 		this.closeModal = this.closeModal.bind(this);
// 	}

// 	// OPEN MODAL
// 	openModal() {
// 		this.setState({
// 			modalIsOpen: true,
// 		});
// 	}

// 	// CLOSE MODAL
// 	closeModal() {
// 		this.setState({
// 			modalIsOpen: false,
// 		});
// 	}

// 	render() {
// 		return (
// 			<>
// 				{/* LOGIN OPEN MODAL BUTTON */}
// 				<button
// 					className="modal-button modal-button-login"
// 					onClick={this.openModal}
// 				>
// 					LOG IN
// 				</button>

// 				{/* LOGIN MODAL */}
// 				<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
// 					{/* LOGIN CLOSE MODAL BUTTON */}
// 					<button
// 						className="modal-button  modal-button-close"
// 						onClick={this.closeModal}
// 					>
// 						x
// 					</button>

// 					{/* LOGIN FORM COMPONENT */}
// 					<LoginForm
// 						setUser={this.props.setUser}
// 						fetchFirebase={this.props.fetchFirebase}
// 					/>
// 				</Modal>
// 			</>
// 		);
// 	}
// }

// export default Login;