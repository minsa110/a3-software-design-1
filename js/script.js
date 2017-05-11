

function comparisonChart() {


	var margin = {top: 100, right: 100, bottom: 60, left: 10};
	var catNum = 0


	var rectHeight = 20
	var width = 700;
	var maleColor = "#Edf0f8";
	var femaleColor = "#FFFFFF";
	var labelColor = "black";
	var chartTitle = "Population in San Francisco, by age and gender: 2010 Census";

	function myChart(selection) {

		selection.each(function (data) {

			// console.log(data)
		  // ensure numbers are being interpreted as numbers, not strings
			var rows = 0;
			data.forEach(function(d) {
			  	d.female = +d.female;
			  	d.male = +d.male;
			  	rows = rows + 1;
			});
			catNum = rows;

			var height = rectHeight * catNum;



			var svg = d3.select(this).append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)

			var chart = svg.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


			var xScale = d3.scale.linear()
					.range([0,width/2]);

			var maleScale = d3.scale.linear()
				.range([0,-width/2]);

			var yScale = d3.scale.linear()
				.range([height,0]);

			var maleAxis = d3.svg.axis().scale(maleScale).orient("bottom")

			var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom");



			//
			var xMax = d3.max(data, function(d) {
				if(d.male > d.female) return d.male;
					return d.female;
			})
			xScale.domain([0, xMax]);
			maleScale.domain([0,xMax])

			//
			yScale.domain([0, catNum]);

			//
			var labels = svg.append("g")
				.attr("class", "labels")

			labels.append("text").attr("transform", "translate(" + (width / 2 + 14) + "," + (margin.top - 15) + ")")
				.text("male    |    female")
				.attr("text-anchor", "middle")

			//
			chart.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(" + width / 2 + "," + (height + 5) + ")")
				.call(xAxis);

			chart.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(" + width / 2 + "," + (height + 5) + ")")
				.call(maleAxis);

			//
			var rectangleGroup = chart.selectAll(".rectangle-group")
				.data(data)
				.enter()
				// and group
				.append("g")
				.attr("class", "rectangle-group")
				.attr("transform", function(d,idx) { return "translate(0," + yScale(idx + 1) + ")"; })

			//
			rectangleGroup.append("rect")
				.attr("class", "female")
				.attr("x", width / 2)
				.attr("height", rectHeight)
				.attr("width", function(d){ return xScale(d.female)})
				.attr("y", 0)
				.attr("fill", femaleColor)

			rectangleGroup.append("rect")
				.attr({
					"class": "male",
					"x": function(d){return width / 2 - xScale(d.male)},
					"height": rectHeight,
					"width": function(d){ return xScale(d.male)},
					"y": 0,
					"fill": maleColor,
				})

			//
			rectangleGroup.append("text")
				.text(function(d) { return d.age; })
				.attr("fill", labelColor)
				.attr("dx", xScale(xScale.domain()[1]))
				.attr("dy", +12);


			svg.append("text")
		        .attr("x", (width / 2) + margin.left + 10)             
		        .attr("y", 60)
		        .attr("text-anchor", "middle")  
		        .style("font-size", "25px") 
		        .style("text-decoration", "underline")  
		        .text(chartTitle);

		})

	}

	myChart.rectHeight = function(value) {     
		if (!arguments.length) 
			return rectHeight;     
		rectHeight = value;     
		return myChart;   
	};

	myChart.width = function(value) {
		if (!arguments.length)
			return width;
		width = value;
		return myChart;
	}

	myChart.maleColor = function(value) {
		if (!arguments.length)
			return maleColor;
		maleColor = value;
		return myChart;
	}

	myChart.femaleColor = function(value) {
		if (!arguments.length)
			return femaleColor;
		femaleColor = value;
		return myChart;
	}

	myChart.labelColor = function(value) {
		if (!arguments.length)
			return labelColor;
		labelColor = value;
		return myChart;
	}

	myChart.chartTitle = function(value) {
		if (!arguments.length)
			return chartTitle;
		chartTitle = value;
		return myChart;
	}

	return myChart;

}


// var file1 = "data/sfpopulation.csv"


// d3.csv(file1, function(data) {
// 	var usedData = data;

// 	var compChart = comparisonChart()
// 	d3.select('#myDiv')
//         .datum(usedData)
//         .call(compChart);


// });



// d3.csv(file1, function(data) {
// 	var usedData = data;

// 	var compChart = comparisonChart().rectHeight(40).maleColor("#00ff00").femaleColor("purple").labelColor("red").width(1000)
// 	d3.select('#myDiv')
//         .datum(usedData)
//         .call(compChart);


// });

// var file2 = "data/2017worldpopulation.csv"

// d3.csv(file2, function(data) {
// 	var usedData = data;

// 	var compChart = comparisonChart().rectHeight(10).chartTitle("2017 World Population by Age and Sex")
// 	d3.select('#myDiv')
//         .datum(usedData)
//         .call(compChart);


// });







