$(function() {
    var file1 = "../data/data.csv"
    var compChart;
    var usedData;

    d3.csv(file1, function(data) {
        usedData = data;

        compChart = comparisonChart().femaleColor("pink").chartTitle("Testing by Soojin").rectHeight(5);
        d3.select('#vis')
            .datum(usedData)
            .call(compChart);
    });

    document.getElementById("fColorButton").addEventListener("click", fColorChange);

    function fColorChange() {
        var newColor = document.getElementById("fColorText").value;
        compChart = compChart.femaleColor(newColor);
        d3.select('#vis')
            .datum(usedData)
            .call(compChart);
    }
})