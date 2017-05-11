# a3-software-design

<b>Live example of comparison chart:</b>
https://chowicus.github.io/a3-software-design/


# Introduction
<b>Comparison Chart</b> a reusable API chart type.  It displays population data from a user's dataset based on age (or age group) and gender.

It provides a variety of methods to allow a user to dynamically change the fields in their chart type to allow for a more flexible and reusable chart.  This allows users to dynamically change the way that their chart appears, which is especially useful when using a different dataset.  Outlined below are the six dynamically modifiable methods that this API supports:

####	rectHeight
rectHeight is the height of the bars displayed at each rectangle of the chart.  Each group of data displays a bar with a height equal to the rectHeight.  The default value is 20.

#### width 
width is the width of the chart.  As it increases in width, other aspects of the chart dynamically change with it, such as the length of the bars.  The default width is 700.

#### maleColor
maleColor is the color of the bars on the male side of the chart. The default value is #Edf0f8.  It can be altered to a hex code or a color name.

#### femaleColor
femaleColor is the color of the bars on the female side of the chart. The default value is #FFFFFF.  It can be altered to a hex code or a color name.

#### labelColor
labelColor is the color of labels for each bar on the chart. The default value is "black".  It can be altered to a hex code or a color name.

#### chartTitle
chartTitle is the title of the chart.  It is displayed prominently above the chart.  Whenever a user changes the data displayed through a different dataset, it is suggested that the chart title is changed as well.  The current default title is set based on the dataset used.

#### dataset
Finally, the dataset is the most important aspect of the reusable API.  The dataset cannot be changed through an individual getter/setter method, but is instead changed through the d3.csv(file, myChart) method.  Changing the input file will change the displayed values.  It is necessary for all data being input to follow a single formula:  a csv file with 3 columns.  The first column titled "age", the second column titled "male", and the third column titled "female".  If these standards are maintained, the comparison chart API can be reused effectively.

