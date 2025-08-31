// Asyn/Await version

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();  
}

async function fetchProfileAndSettings(userId) {
    try {
        const profilePromise = fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const settingsPromise = fetchData(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        
        const [profile, settings] = await Promise.all([profilePromise, settingsPromise]);
        
        return { profile, settings }; 
    } catch (error) {
        throw new Error("Failed to fetch profile or settings: " + error.message);
    }
}

async function fetchOrders(userId) {
    try {
        return await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    } catch (error) {
        throw new Error("Failed to fetch orders: " + error.message);
    }
}

async function fetchShipments(orders) {
    try {
        const shipmentPromises = orders.map(order => fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${order.id}`));
        return await Promise.all(shipmentPromises);
    } catch (error) {
        throw new Error("Failed to fetch shipments: " + error.message);
    }
}

async function loadDashboard(userId) {
    try {
        const { profile, settings } = await fetchProfileAndSettings(userId);
        console.log("Profile:", profile);
        console.log("Settings:", settings);

        const orders = await fetchOrders(userId);
        console.log("Orders:", orders);

        const shipments = await fetchShipments(orders);
        console.log("Shipments:", shipments);
        
    } catch (error) {
        console.error("Error loading dashboard:", error.message);
    }
}

loadDashboard(1);
