import React, {Component} from 'react';
import ComponentView from './view';
import Slider from 'bootstrap-slider';
/**
 * @name Sample Component
 * @type Component
 * @author Inderdeep Singh
 */
export default class Main extends Component {
	/**
	 * Constructor
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			sort: "saves"
		}
	}

	componentDidMount() {
		setTimeout(() => {
			const {min, max, onPriceChange} = this.props;
			this.slider = new Slider('input.slider-input', {
				formatter: function (value) {
					return 'Price : ' + value;
				},
				min,
				max,
				range: true,
				step: 10
			});
			this.slider.on("slideStop", (val) => {
				onPriceChange ? onPriceChange(val, this.state.sort) : null
			})
		})
	}

	componentWillReceiveProps(newProps) {
		if (newProps.max != this.props.max || newProps.min != this.props.min) {
			setTimeout(() => {
				const {min, max} = newProps;
				let minValue = (min < this.props.min) ? min : this.props.min;
				let maxValue = (max > this.props.max) ? max : this.props.max;
			
				//this.slider.setAttribute("min",minValue)
				this.slider.setAttribute("max",maxValue);
				this.setState({
					temp : !this.state.temp
				})
			})
		}
	}

	onSortChange(e) {
		const {onPriceChange} = this.props;
		this.setState({sort: e.target.value})
		onPriceChange ? onPriceChange(this.slider.getValue(), e.target.value) : null
	}

	/**
	 * Render the view
	 * @returns {*}
	 */
	render() {
		return (ComponentView.bind(this))();
	}
}
//Set display name to be used in React Dev Tools
Main.displayName = 'Price-Range';
