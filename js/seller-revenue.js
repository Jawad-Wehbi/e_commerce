window.onload = () => {
    //
    // Variables for navigation (left panel)
    //
    const revenueTab = document.getElementById("revenue-tab");
    const categoriesTab = document.getElementById("categories-tab");
    const discountCodesTab = document.getElementById("discount-codes-tab");
    const messagesTab = document.getElementById("messages-tab");
    const top5Tab = document.getElementById("top5-tab");
    const addAdsTab = document.getElementById("add-ads-tab");

    //
    // Navigation
    //
    revenueTab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./revenue.html");
    });
    categoriesTab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./categories.html");
    });
    discountCodesTab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./discount-codes.html");
    });
    messagesTab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./messages.html");
    });
    top5Tab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./top-5-products-viewed.html");
    });
    addAdsTab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./add-ads.html");
    });

    //
    // Variables
    //
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

    svg.selectAll("rect")
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

    svg.selectAll("text")
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