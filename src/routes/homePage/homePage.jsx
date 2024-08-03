import SearchBar from '../../components/searchbar/SearchBar';
import './homePage.scss';

const HomePage = () => {
	return (
		<div className="homepage">
			<div className="textcontainer">
				<div className="wrapper">
					<h1 className="title">Find Real Estate & Get Your Dream Place</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil facere ex, totam libero quidem eveniet numquam repellat similique soluta reprehenderit,
						ea quibusdam deserunt, sunt perferendis dolorem saepe voluptas quaerat.
					</p>
					<SearchBar />
					<div className="boxes">
						<div className="box">
							<h1>16+</h1>
							<h2>Years Of Experience</h2>
						</div>
						<div className="box">
							<h1>200</h1>
							<h2>Award Gained</h2>
						</div>
						<div className="box">
							<h1>1200+</h1>
							<h2>Property Ready</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="imgcontainer">
				<img alt="" src="/bg.png" />
			</div>
		</div>
	);
};

export default HomePage;
