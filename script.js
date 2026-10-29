/* Kelsiy's Closet - Inventory and Sales System */

const money = amount =>
    new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        maximumFractionDigits: 0
    }).format(amount);

const image = (photoId) =>
    `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=600&q=80`;

// These are starter products and example prices.
// Update names, prices, quantities and photos to match your real stock.

const starterProducts = [
    {
        id: 1, name: "Classic Blue Denim Jeans", category: "Women's Jeans",
        audience: "Women", price: 1200, stock: 10,
        photo: "photo-1541099649105-f69ad21f3246"
    },
    {
        id: 2, name: "High-Waist Jeans", category: "Women's Jeans",
        audience: "Women", price: 1400, stock: 8,
        photo: "photo-1542272604-787c3835535d"
    },
    {
        id: 3, name: "Wide-Leg Denim Jeans", category: "Women's Jeans",
        audience: "Women", price: 1500, stock: 7,
        photo: "photo-1594633312681-425c7b97ccd1"
    },
    {
        id: 4, name: "Straight-Leg Denim Jeans", category: "Women's Jeans",
        audience: "Women", price: 1300, stock: 9,
        photo: "photo-1490481651871-ab68de25d43d"
    },

    {
        id: 5, name: "Men's Classic Blue Jeans", category: "Men's Jeans",
        audience: "Men", price: 1500, stock: 8,
        photo: "photo-1542272604-787c3835535d"
    },
    {
        id: 6, name: "Men's Slim-Fit Jeans", category: "Men's Jeans",
        audience: "Men", price: 1400, stock: 6,
        photo: "photo-1515886657613-9f3515b0c78f"
    },
    {
        id: 7, name: "Men's Relaxed Jeans", category: "Men's Jeans",
        audience: "Men", price: 1600, stock: 5,
        photo: "photo-1594633312681-425c7b97ccd1"
    },

    {
        id: 8, name: "Denim Shirt Dress", category: "Denim Dresses",
        audience: "Women", price: 1800, stock: 5,
        photo: "photo-1490481651871-ab68de25d43d"
    },
    {
        id: 9, name: "Casual Denim Dress", category: "Denim Dresses",
        audience: "Women", price: 1600, stock: 6,
        photo: "photo-1529139574466-a303027c1d8b"
    },
    {
        id: 10, name: "Button-Front Denim Dress", category: "Denim Dresses",
        audience: "Women", price: 2000, stock: 4,
        photo: "photo-1483985988355-763728e1935b"
    },

    {
        id: 11, name: "Converse-Style Canvas Trainers", category: "Shoes",
        audience: "Unisex", price: 1800, stock: 8,
        photo: "photo-1543163521-1bf539c55dd2"
    },
    {
        id: 12, name: "Classic High Heels", category: "Shoes",
        audience: "Women", price: 1600, stock: 6,
        photo: "photo-1543163521-1bf539c55dd2"
    },
    {
        id: 13, name: "Dolly Flat Shoes", category: "Shoes",
        audience: "Women", price: 1200, stock: 7,
        photo: "photo-1543163521-1bf539c55dd2"
    },
    {
        id: 14, name: "Everyday Casual Shoes", category: "Shoes",
        audience: "Unisex", price: 1500, stock: 5,
        photo: "photo-1542291026-7eec264c27ff"
    },

    {
        id: 15, name: "Elegant Everyday Blouse", category: "Tops & Blouses",
        audience: "Women", price: 800, stock: 10,
        photo: "photo-1483985988355-763728e1935b"
    },
    {
        id: 16, name: "Long-Sleeve Bodysuit", category: "Tops & Blouses",
        audience: "Women", price: 700, stock: 9,
        photo: "photo-1521572163474-6864f9cf17ab"
    },
    {
        id: 17, name: "Off-Shoulder Top", category: "Tops & Blouses",
        audience: "Women", price: 600, stock: 8,
        photo: "photo-1529139574466-a303027c1d8b"
    },
    {
        id: 18, name: "Turtleneck Top", category: "Tops & Blouses",
        audience: "Women", price: 900, stock: 7,
        photo: "photo-1434389677669-e08b4cac3105"
    },

    {
        id: 19, name: "Soft Knit Sweater", category: "Knitwear & Outerwear",
        audience: "Unisex", price: 1500, stock: 6,
        photo: "photo-1434389677669-e08b4cac3105"
    },
    {
        id: 20, name: "Classic Cardigan", category: "Knitwear & Outerwear",
        audience: "Women", price: 1400, stock: 7,
        photo: "photo-1434389677669-e08b4cac3105"
    },
    {
        id: 21, name: "Long Rain Coat", category: "Knitwear & Outerwear",
        audience: "Unisex", price: 2500, stock: 4,
        photo: "photo-1591047139829-d91aecb6caea"
    },
    {
        id: 22, name: "Leather-Style Jacket", category: "Knitwear & Outerwear",
        audience: "Unisex", price: 2800, stock: 4,
        photo: "photo-1551028719-00167b16eac5"
    },

    {
        id: 23, name: "Unisex Everyday Hoodie", category: "Hoodies",
        audience: "Unisex", price: 1500, stock: 10,
        photo: "photo-1556821840-3a63f95609a7"
    },
    {
        id: 24, name: "Oversized Hoodie", category: "Hoodies",
        audience: "Unisex", price: 1800, stock: 8,
        photo: "photo-1556821840-3a63f95609a7"
    },
    {
        id: 25, name: "Classic Pullover Hoodie", category: "Hoodies",
        audience: "Unisex", price: 1600, stock: 7,
        photo: "photo-1618354691373-d851c5c3a990"
    },

    {
        id: 26, name: "Simple Pendant Necklace", category: "Jewellery",
        audience: "All", price: 500, stock: 12,
        photo: "photo-1611652022419-a9419f74343d"
    },
    {
        id: 27, name: "Fashion Rings", category: "Jewellery",
        audience: "All", price: 200, stock: 15,
        photo: "photo-1605100804763-247f67b3557e"
    },
    {
        id: 28, name: "Bracelet Set", category: "Jewellery",
        audience: "All", price: 400, stock: 10,
        photo: "photo-1611591437281-460bfbe1220a"
    },
    {
        id: 29, name: "Statement Earrings", category: "Jewellery",
        audience: "All", price: 300, stock: 10,
        photo: "photo-1535632066927-ab7c9ab60908"
    },
    {
        id: 30, name: "Decorative Hair Clip", category: "Hair Accessories",
        audience: "All", price: 100, stock: 20,
        photo: "photo-1529139574466-a303027c1d8b"
    },
    {
        id: 31, name: "Pearl Hair Clip", category: "Hair Accessories",
        audience: "All", price: 200, stock: 15,
        photo: "photo-1529139574466-a303027c1d8b"
    }
];

let products = JSON.parse(localStorage.getItem("kelsiysProducts")) || starterProducts;
let sales = JSON.parse(localStorage.getItem("kelsiysSales")) || [];

function saveData() {
    localStorage.setItem("kelsiysProducts", JSON.stringify(products));
    localStorage.setItem("kelsiysSales", JSON.stringify(sales));
}

function showSection(sectionId) {
    document.querySelectorAll("main section").forEach(section => {
        section.hidden = section.id !== sectionId;
    });

    if (sectionId === "dashboard") updateDashboard();
    if (sectionId === "products") renderProducts();
    if (sectionId === "sales") renderSales();
    if (sectionId === "reports") renderReports();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateDashboard() {
    const totalProducts = products.length;
    const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
    const totalSales = sales.reduce((sum, sale) => sum + sale.total, 0);

    document.getElementById("totalProducts").textContent = totalProducts;
    document.getElementById("totalStock").textContent = totalStock;
    document.getElementById("totalSales").textContent = money(totalSales);
}

function renderProducts() {
    const section = document.getElementById("products");
    const categories = [...new Set(products.map(product => product.category))];

    section.innerHTML = `
        <h2>Our Fashion Collection</h2>
        <div class="intro">
            <p>Discover your style, one beautiful piece at a time.</p>
            <span>Welcome to Kelsiy's Closet — fashion for every mood.</span>
        </div>

        <div class="catalogue-tools">
            <input id="productSearch" type="search"
                placeholder="Search jeans, hoodies, jewellery..."
                aria-label="Search products">

            <select id="categoryFilter" aria-label="Filter by category">
                <option value="all">All categories</option>
                ${categories.map(category =>
                    `<option value="${category}">${category}</option>`
                ).join("")}
            </select>
        </div>

        <div id="productCatalogue"></div>
    `;

    document.getElementById("productSearch").addEventListener("input", filterProducts);
    document.getElementById("categoryFilter").addEventListener("change", filterProducts);

    filterProducts();
}

function filterProducts() {
    const search = document.getElementById("productSearch").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;

    const filtered = products.filter(product => {
        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search) ||
            product.audience.toLowerCase().includes(search);

        const matchesCategory =
            category === "all" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    const catalogue = document.getElementById("productCatalogue");
    const grouped = {};

    filtered.forEach(product => {
        if (!grouped[product.category]) grouped[product.category] = [];
        grouped[product.category].push(product);
    });

    if (filtered.length === 0) {
        catalogue.innerHTML = `<p class="notice">No matching products found.</p>`;
        return;
    }

    catalogue.innerHTML = Object.entries(grouped).map(([categoryName, items]) => `
        <h2 class="section-heading">${categoryName}</h2>
        <div class="product-grid">
            ${items.map(product => `
                <article class="product-card">
                    <img
                        src="${image(product.photo)}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='https://placehold.co/600x600/fff8ed/702b3a?text=Kelsiys+Closet'">

                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <span class="product-category">${product.audience}</span>
                        <p class="product-price">${money(product.price)}</p>
                        <span class="stock-label">
                            ${product.stock > 0
                                ? `${product.stock} available`
                                : "Out of stock"}
                        </span>
                        <button class="primary-btn"
                            ${product.stock < 1 ? "disabled" : ""}
                            onclick="recordSale(${product.id})">
                            Record Sale
                        </button>
                    </div>
                </article>
            `).join("")}
        </div>
    `).join("");
}

function recordSale(productId) {
    const product = products.find(item => item.id === productId);
    if (!product || product.stock < 1) {
        alert("This product is out of stock.");
        return;
    }

    const quantity = Number(prompt(
        `Product: ${product.name}\nPrice: ${money(product.price)}\nAvailable: ${product.stock}\n\nEnter quantity sold:`
    ));

    if (!Number.isInteger(quantity) || quantity <= 0) {
        alert("Please enter a valid whole-number quantity.");
        return;
    }

    if (quantity > product.stock) {
        alert("Not enough stock available.");
        return;
    }

    const payment = prompt("Enter payment method: Cash or M-Pesa");
    if (!payment || !["cash", "m-pesa", "mpesa"].includes(payment.trim().toLowerCase())) {
        alert("Please enter Cash or M-Pesa.");
        return;
    }

    const total = product.price * quantity;

    if (!confirm(`Record ${quantity} × ${product.name} for ${money(total)}?`)) {
        return;
    }

    product.stock -= quantity;

    sales.push({
        id: Date.now(),
        productId: product.id,
        productName: product.name,
        quantity,
        unitPrice: product.price,
        total,
        payment: payment.trim().toLowerCase().startsWith("m") ? "M-Pesa" : "Cash",
        date: new Date().toLocaleString("en-KE")
    });

    saveData();
    updateDashboard();
    renderProducts();

    alert(`Sale recorded successfully.\nTotal: ${money(total)}`);
}

function renderSales() {
    const section = document.getElementById("sales");

    section.innerHTML = `
        <h2>Sales Records</h2>
        <p class="notice">Sales are listed below, with payment method and total amount.</p>
        ${sales.length ? `
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${[...sales].reverse().map(sale => `
                            <tr>
                                <td>${sale.date}</td>
                                <td>${sale.productName}</td>
                                <td>${sale.quantity}</td>
                                <td>${money(sale.unitPrice)}</td>
                                <td>${money(sale.total)}</td>
                                <td>${sale.payment}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        ` : `<p>No sales have been recorded yet.</p>`}
    `;
}

function renderReports() {
    const section = document.getElementById("reports");
    const totalRevenue = sales.reduce((sum, sale) => sum + sale.total, 0);
    const itemsSold = sales.reduce((sum, sale) => sum + sale.quantity, 0);
    const stockRemaining = products.reduce((sum, product) => sum + product.stock, 0);

    section.innerHTML = `
        <h2>Inventory and Sales Reports</h2>

        <div class="summary">
            <div class="card">
                <h3>Total Revenue Recorded</h3>
                <p>${money(totalRevenue)}</p>
            </div>
            <div class="card">
                <h3>Items Sold</h3>
                <p>${itemsSold}</p>
            </div>
            <div class="card">
                <h3>Units in Stock</h3>
                <p>${stockRemaining}</p>
            </div>
        </div>

        <h2 class="section-heading">Current Stock</h2>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity Remaining</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map(product => `
                        <tr>
                            <td>${product.name}</td>
                            <td>${product.category}</td>
                            <td>${money(product.price)}</td>
                            <td>${product.stock}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>

        <button class="primary-btn" onclick="exportReport()">
            Export Reports as CSV
        </button>
    `;
}

function exportReport() {
    const rows = [
        ["Product", "Category", "Price KSh", "Stock Remaining"],
        ...products.map(product => [
            product.name, product.category, product.price, product.stock
        ])
    ];

    const csv = rows.map(row =>
        row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(",")
    ).join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
        type: "text/csv;charset=utf-8;"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "kelsiys-closet-stock-report.csv";
    link.click();

    URL.revokeObjectURL(url);
}

updateDashboard();
