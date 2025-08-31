// Callback version

function fetchData(url, callback) {
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
        .then(data => callback(null, data))
        .catch(err => callback(err));
}

function fetchSettings(userId) {
    fetchData(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`, (err, settings) => {
        if (err) return console.error("Error fetching settings:", err);
        console.log("Settings loaded:", settings);
    });
}

function fetchOrdersAndShipments(userId, callback) {
    fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, (err, orders) => {
        if (err) return callback(err);
        console.log("Orders loaded:", orders);

        let shipmentResults = [];
        let pending = orders.length;

        if (pending === 0) return callback(null, shipmentResults);

        orders.forEach(order => {
            fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${order.id}`, (err, shipment) => {
                if (err) {
                    console.error(`Shipment fetch failed for Order ${order.id}:`, err);
                    shipment = []; 
                }

                shipmentResults.push({
                    orderId: order.id,
                    title: order.title,
                    shipment
                });

                pending--;
                if (pending === 0) callback(null, shipmentResults);
            });
        });
    });
}

function fetchProfileThenOrders(userId, callback) {
    fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`, (err, profile) => {
        if (err) return callback(err);
        console.log("Profile loaded:", profile);

        fetchOrdersAndShipments(userId, (err, shipmentData) => {
            if (err) return callback(err);
            callback(null, { profile, shipmentData });
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
    let userId = 1;

    fetchSettings(userId);

    fetchProfileThenOrders(userId, (err, data) => {
        if (err) return console.error("Dashboard loading failed:", err);
        console.log("Dashboard data ready:");
        console.log("Profile:", data.profile);
        console.log("Orders + Shipments:", data.shipmentData);
    });
});
