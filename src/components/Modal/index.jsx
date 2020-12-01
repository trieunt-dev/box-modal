import React, { PureComponent } from "react";

class Modal extends PureComponent {
	componentDidMount() {
		document.querySelector("body").classList.add("open-modal");
	}

	componentWillUnmount() {
		document.querySelector("body").classList.remove("open-modal");
	}
	render() {
		let { title, children, modalFooter, handleCloseBoxModal } = this.props;

		let closeBoxModal = () => {
			handleCloseBoxModal();
		};

		let renderFooter = () => {
			if (modalFooter) {
				return modalFooter();
			}
			return (
				<>
					<button className="btn btn-submit">Submit</button>
					<button
						className="btn btn-cancel"
						onClick={() => closeBoxModal()}
					>
						Cancel
					</button>
				</>
			);
		};

		return (
			<div className="modal__box">
				<div
					className="modal__overlay"
					onClick={() => closeBoxModal()}
				></div>
				<div className="modal__content">
					{title && (
						<div className="modal__header">
							<h2>{title}</h2>
							<i
								onClick={() => closeBoxModal()}
								className="modal__close fas fa-times"
							></i>
						</div>
					)}
					<div className="modal__body">{children}</div>
					<div className="modal__footer">{renderFooter()}</div>
				</div>
			</div>
		);
	}
}

export default Modal;
