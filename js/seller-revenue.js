window.onload = () => {
    const dataset = [70, 450, 2300];
    // let labelDataset = ["week", "month", "year"];
    const svgWidth = 300;
    const svgHeight = 300;
    const barPadding = 20;
    const barWidth = svgWidth / dataset.length;
    const svg = d3
        .select("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, svgHeight - 20]);

    const barchart = svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("y", (d, i) => svgHeight - yScale(d))
        .attr("width", barWidth - barPadding)
        .attr("height", (d, i) => yScale(d))
        .attr("transform", (d, i) => {
            let translate = [barWidth * i, 0];
            return `translate(${translate})`;
        })
        .attr("fill", "blue");

    const text = svg
        .selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(d => d)
        .attr("y", (d, i) => svgHeight - yScale(d) - 3)
        .attr("x", (d, i) => barWidth * i)
        .attr("fill", "red");

    // const label = svg
    //     .selectAll("text")
    //     .data(labelDataset)
    //     .enter()
    //     .append("text")
    //     .text(d => d)
    //     .attr("y", (d, i) => svgHeight - yScale(d) - 2)
    //     .attr("x", (d, i) => barWidth * i)
    //     .attr("fill", "green");
};
