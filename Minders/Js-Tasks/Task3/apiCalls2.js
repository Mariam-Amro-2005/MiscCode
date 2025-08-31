// Promise version

function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function fetchProfileAndSettings(userId) {
    const profilePromise = fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const settingsPromise = fetchData(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);

    return Promise.all([profilePromise, settingsPromise])
        .then(([profile, settings]) => {
            return { profile, settings };
        })
        .catch(error => {
            throw new Error("Failed to fetch profile or settings: " + error);
        });
}

function fetchOrders(userId) {
    return fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(orders => orders)
        .catch(error => {
            throw new Error("Failed to fetch orders: " + error);
        });
}

function fetchShipments(orders) {
    const shipmentPromises = orders.map(order => 
        fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${order.id}`)
    );

    return Promise.all(shipmentPromises)
        .then(shipments => {
            return shipments;
        })
        .catch(error => {
            throw new Error("Failed to fetch shipments: " + error);
        });
}

function loadDashboard(userId) {
    fetchProfileAndSettings(userId)
        .then(({ profile, settings }) => {
            console.log("Profile:", profile);
            console.log("Settings:", settings);
            
            return fetchOrders(userId).then(orders => {
                console.log("Orders:", orders);

                return fetchShipments(orders).then(shipments => {
                    console.log("Shipments:", shipments);
                });
            });
        })
        .catch(error => {
            console.error("Error loading dashboard:", error);
        });
}

loadDashboard(1);
