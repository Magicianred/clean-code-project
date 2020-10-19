import React from "react";
import "./posts.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Submitpost from "./submitpost/Submitpost";
import Readposts from "./readposts/Readposts";
import Modal from "react-modal";
import imgInfo from "../../../assets/info.png";

function Posts(props) {
	const [isInfoActive, setIsInfoActive] = React.useState(false);
	const openInfoModal = () => {
		setIsInfoActive(true);
	};
	const closeInfoModal = () => {
		setIsInfoActive(false);
	};
	return (
		<BrowserRouter>
			<main className="main__posts">
				<div className="posts__header">
					<button
						className="postaction__link__resetfilter"
						onClick={props.getFirebase}
					>
						Reset filter
					</button>

					{/* POST LINK */}
					{props.user ? (
						<Link className="postaction__link__makeapost" to="/submit">
							Make a post
						</Link>
					) : (
						<div className="postaction__link__makeapost" to="/about">
							{/* HEADER INFO */}

							<span className="info__span" ca onClick={() => openInfoModal()}>
								What is Cleancode?
							</span>
							<Modal
								className="modal__info"
								isOpen={isInfoActive}
								onRequestClose={closeInfoModal}
							>
								<button className="close__info" onClick={closeInfoModal}>
									x
								</button>
								<div className="info__text">
									<img className="info__imgcodes" src={imgInfo} alt="info" />
									<p>
										Cleancode is a web platform to exchange
										about clean coding and everything around it.
									</p>
									<p>
										Register, post working code and ask anything you want about
										clean coding, conventions, naming, refactoring or related
										topic. Or respond to existing posts and exchange with the
										community.
									</p>
								</div>
							</Modal>
						</div>
					)}
				</div>

				{/* POST COMPONENT */}
				{props.user ? (
					<Route path="/submit">
						<Submitpost
							firebase={props.firebase}
							user={props.user}
							getFirebase={props.getFirebase}
						/>
					</Route>
				) : null}

				{/* POST COMPONENT */}
				<Route path="/">
					<Readposts
						firebase={props.firebase}
						getFirebase={props.getFirebase}
						allPostsObject={props.allPostsObject}
						user={props.user}
					/>
				</Route>
			</main>
		</BrowserRouter>
	);
}

export default Posts;
