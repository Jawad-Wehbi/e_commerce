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
    const sellerName = document.getElementById("seller-name");

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
    //Variables
    //
    const totalSalesLastYear = document.getElementById(
        "seller-total-sales-last-year"
    );
    const totalSalesLastMonth = document.getElementById(
        "seller-total-sales-last-month"
    );
    const totalSalesLastWeek = document.getElementById(
        "seller-total-sales-last-week"
    );
    const displayStats = document.getElementById("seller-display-stats");

    //
    // functions
    //
    // get last week total sales
    const getRevenueLastWeek = () => {
        const inputData = {
            seller_user_id: sellerId,
        };
        axios
            .post(
                "http://localhost/electrostate/seller_revenue_week.php",
                inputData
            )
            .then(response => {
                totalSalesLastWeek.innerText = `${response.data.revenue}`;
            })
            .catch(error => {
                console.log(error);
            });
    };

    // get last month total sales
    const getRevenueLastMonth = () => {
        const inputData = {
            seller_user_id: sellerId,
        };
        axios
            .post(
                "http://localhost/electrostate/seller_revenue_month.php",
                inputData
            )
            .then(response => {
                totalSalesLastMonth.innerText = `${response.data.revenue}`;
            })
            .catch(error => {
                console.log(error);
            });
    };

    // get last year total sales
    const getRevenueLastYear = () => {
        const inputData = {
            seller_user_id: sellerId,
        };
        axios
            .post(
                "http://localhost/electrostate/seller_revenue_year.php",
                inputData
            )
            .then(response => {
                totalSalesLastYear.innerText = `${response.data.revenue}`;
            })
            .catch(error => {
                console.log(error);
            });
    };

    // function to create a bar chart using d3.js
    const d3Graph = () => {
        dataset = [
            totalSalesLastYear.innerText,
            totalSalesLastMonth.innerText,
            totalSalesLastWeek.innerText,
        ];

        //
        // d3 graph
        //
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

        // the next commented code was for display labels but didn't work and no time to fix it
        // let labelDataset = ["week", "month", "year"];
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

    localStorage.setItem("sellerId", "1"); // should be the id we got from the login
    localStorage.setItem("sellerName", "Seller Name"); // should be the name we got from the login
    sellerName.innerText = localStorage.getItem("sellerName");
    sellerId = localStorage.getItem("sellerId");
    let dataset;
    getRevenueLastWeek();
    getRevenueLastMonth();
    getRevenueLastYear();
    displayStats.addEventListener("click", e => {
        e.preventDefault();
        d3Graph();
    });
};
