import React from "react";

const NewsItem = (props) => {
	const { title, description, imageUrl, newsUrl, author, date, source } = props;

	const calculateRelativeDate = (dateString) => {
		const currentDate = new Date();
		const newsDate = new Date(dateString);

		const timeDifference = currentDate - newsDate;
		const seconds = Math.floor(timeDifference / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		if (days > 0) {
			return `${days} Day${days !== 1 ? "s" : ""} ago`;
		} else if (hours > 0) {
			return `${hours} Hour${hours !== 1 ? "s" : ""} ago`;
		} else if (minutes > 0) {
			return `${minutes} Minute${minutes !== 1 ? "s" : ""} ago`;
		} else {
			return `${seconds} Second${seconds !== 1 ? "s" : ""} ago`;
		}
	};

	const relativeDate = calculateRelativeDate(date);

	return (
		<div className='my-3'>
			<div className='card h-100 news-item'>
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
						position: "absolute",
						right: 0,
					}}
				>
					<span
						className='badge rounded-pill bg-danger'
						style={{
							padding: "5px 10px",
							margin: "5px 13px",
							position: "absolute",
							top: 0,
							right: 0,
						}}
					>
						{source}
					</span>
				</div>
				<div className='image-container' style={{ height: "225px" }}>
					<img
						src={imageUrl}
						className='card-img-top'
						alt='...'
						style={{
							width: "100%",
							height: "100%",
							borderRadius: "10px",
						}}
					/>
				</div>
				<div className='card-body d-flex flex-column'>
					<h5 className='card-title fw-bolder'>{title}</h5>
					<p className='card-text'>{description}</p>
					<p className='card-text'>
						<small className='text-black-50'>By {author || "Unknown"}</small>
						<small className='text-black'>&nbsp;|&nbsp;</small>
						<small className='text-black-50'>{relativeDate}</small>
					</p>
					<a
						rel='noreferrer'
						href={newsUrl}
						target='_blank'
						className='btn btn-sm btn-dark mt-auto'
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
