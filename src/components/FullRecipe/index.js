import React from 'react';
import { Link } from 'react-router-dom';
import IconInfo from '../IconInfo';
import { Cook } from '../../icons';
import { Prep } from '../../icons';
import { Serve } from '../../icons';

function FullRecipe(props) {
	const {
		prepTime,
		cookingTime,
		servings,
		image,
		title,
		content,
		description,
		ingredients,
	} = props.recipe;

	const raw = ingredients;
	const rawToString = raw.toString();
	console.log(rawToString);

	const rawList = rawToString.split(',');
	console.log(rawList);

	const ingredientList = rawList.map(ingredient => (
		<li className="ingredient" key={ingredient}>
			{ingredient}
		</li>
	));

	return (
		<div className="recipe-full">
			<header>
				<div className="lg-img">{image && <img src={image.src} alt={image.alt} />}</div>
			</header>
			<section className="recipe-info">
				<div className="description">
					<h1 dangerouslySetInnerHTML={{ __html: title }} />
					<p dangerouslySetInnerHTML={{ __html: description }} />
				</div>
				<div className="timing">
					<ul className="icon-info">
						<IconInfo icon={<Serve />} text={servings} unit="per" />
						<IconInfo icon={<Prep />} text={prepTime} unit="min" />
						<IconInfo icon={<Cook />} text={cookingTime} unit="min" />
					</ul>
				</div>
				<div className="instructions">
					<h2>Instructions:</h2>
					<p dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			</section>
			<aside className="sidebar">
				<div className="close-btn">
					<Link to={{ pathname: `/` }}>BACK</Link>
				</div>
				<div className="ingredients">
					<h3>Ingredients</h3>
					<ul className="ingredientList">{ingredientList}</ul>
				</div>
			</aside>
		</div>
	);
}

export default FullRecipe;
