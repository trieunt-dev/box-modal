import React, { PureComponent } from "react";
import Test from "./components/Test";
import Modal from "./components/Modal";

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			title: "Modal Title",
			// modalFooter: () => {
			// 	return null;
			// },
		};
	}

	handleCloseBoxModal = () => {
		this.setState({
			isVisible: false,
		});
	};

	handleToggleModal = () => {
		this.setState({
			isVisible: !this.state.isVisible,
		});
	};

	componentDidUpdate() {
		document.addEventListener("keyup", (e) => {
			if (e.keyCode === 27 && this.state.isVisible) {
				this.handleCloseBoxModal();
			}
		});
	}

	render() {
		let { isVisible, title, modalFooter } = this.state;
		let { handleCloseBoxModal } = this;
		let injectedPropsModal = {
			isVisible,
			title,
			modalFooter,
			handleCloseBoxModal,
		};
		return (
			<>
				{isVisible && (
					<Modal {...injectedPropsModal}>
						<h3>Box Modal Content</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Distinctio minus ipsa aspernatur placeat
							officia aliquid ut vitae veritatis eligendi non
							beatae enim, magnam consequuntur necessitatibus rem
							totam natus! Saepe, nam.
						</p>
					</Modal>
				)}
				<button onClick={this.handleToggleModal}>Toggle Modal</button>
				<Test></Test>
			</>
		);
	}
}

export default App;
