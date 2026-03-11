// ==================== PRODUCTS DATABASE ====================
const products = [
    {
        id: 1,
        name: 'Premium Wireless Headphones',
        category: 'electronics',
        price: 199.99,
        originalPrice: 299.99,
        rating: 4.5,
        reviews: 256,
        image: 'headphones.jpg',
        description: 'High-quality noise-cancelling wireless headphones with 30-hour battery life.',
        specs: ['Active Noise Cancellation', '30-hour Battery', 'Bluetooth 5.0', 'Comfortable Over-Ear Design'],
        inStock: true,
        colors: ['Black', 'Silver', 'Blue'],
        sizes: ['One Size']
    },
    {
        id: 2,
        name: 'Smart Watch Gen 5',
        category: 'electronics',
        price: 249.99,
        originalPrice: 349.99,
        rating: 4.3,
        reviews: 189,
        image: 'smartwatch.jpg',
        description: 'Latest generation smartwatch with health tracking and GPS.',
        specs: ['Heart Rate Monitor', 'GPS', 'Water Resistant', '5-day Battery'],
        inStock: true,
        colors: ['Black', 'Gold', 'Rose Gold'],
        sizes: ['Small', 'Medium', 'Large']
    },
    {
        id: 3,
        name: 'Minimalist Laptop Bag',
        category: 'lifestyle',
        price: 85.00,
        originalPrice: 120.00,
        rating: 4.7,
        reviews: 342,
        image: 'laptop-bag.jpg',
        description: 'Stylish water-resistant laptop bag with multiple compartments.',
        specs: ['Water Resistant', 'Fits 15" Laptops', '10 Compartments', 'Padded Straps'],
        inStock: true,
        colors: ['Black', 'Navy', 'Grey'],
        sizes: ['One Size']
    },
    {
        id: 4,
        name: 'Desk Light Pro',
        category: 'lifestyle',
        price: 45.00,
        originalPrice: 75.00,
        rating: 4.2,
        reviews: 124,
        image: 'desk-light.jpg',
        description: 'Adjustable LED desk lamp with color temperature control.',
        specs: ['Adjustable Color Temp', 'LED Technology', 'Dimmable', 'USB Charging'],
        inStock: true,
        colors: ['White', 'Black'],
        sizes: ['One Size']
    },
    {
        id: 5,
        name: '4K USB Camera',
        category: 'electronics',
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.4,
        reviews: 98,
        image: 'camera.jpg',
        description: 'Crystal clear 4K USB webcam perfect for streaming and video calls.',
        specs: ['4K Resolution', 'Auto Focus', 'Built-in Mic', 'Wide Angle Lens'],
        inStock: true,
        colors: ['Black'],
        sizes: ['One Size']
    },
    {
        id: 6,
        name: 'Wireless Phone Charger',
        category: 'electronics',
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.6,
        reviews: 456,
        image: 'charger.jpg',
        description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
        specs: ['Fast Charging', 'Qi Compatible', 'LED Indicator', 'Non-slip Base'],
        inStock: true,
        colors: ['White', 'Black'],
        sizes: ['One Size']
    },
    {
        id: 7,
        name: 'Premium Mechanical Keyboard',
        category: 'electronics',
        price: 159.99,
        originalPrice: 219.99,
        rating: 4.8,
        reviews: 203,
        image: 'keyboard.jpg',
        description: 'RGB mechanical keyboard with custom switches and aluminum frame.',
        specs: ['RGB Lighting', 'Mechanical Switches', 'Aluminum Frame', 'Programmable Keys'],
        inStock: true,
        colors: ['Black', 'White'],
        sizes: ['One Size']
    },
    {
        id: 8,
        name: 'Stylish Phone Stand',
        category: 'lifestyle',
        price: 24.99,
        originalPrice: 39.99,
        rating: 4.1,
        reviews: 178,
        image: 'phone-stand.jpg',
        description: 'Adjustable phone stand works with all smartphone models.',
        specs: ['Adjustable Angle', 'Non-slip Base', 'Aluminum Build', 'Universal Compatibility'],
        inStock: true,
        colors: ['Silver', 'Black', 'Gold'],
        sizes: ['One Size']
    },
    {
        id: 9,
        name: 'USB-C Hub',
        category: 'electronics',
        price: 69.99,
        originalPrice: 99.99,
        rating: 4.3,
        reviews: 145,
        image: 'usb-hub.jpg',
        description: 'All-in-one USB-C hub with multiple ports for connectivity.',
        specs: ['7 Ports', 'USB 3.0', 'HDMI Output', 'Power Delivery'],
        inStock: true,
        colors: ['Silver', 'Space Gray'],
        sizes: ['One Size']
    },
    {
        id: 10,
        name: 'Portable SSD 1TB',
        category: 'electronics',
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.7,
        reviews: 321,
        image: 'ssd.jpg',
        description: 'Fast portable SSD with 550MB/s read speed and rugged design.',
        specs: ['1TB Storage', '550MB/s Speed', 'Drop Resistant', 'Compact Design'],
        inStock: true,
        colors: ['Black', 'Silver'],
        sizes: ['One Size']
    },
    {
        id: 11,
        name: 'Bluetooth Speaker',
        category: 'electronics',
        price: 79.99,
        originalPrice: 129.99,
        rating: 4.4,
        reviews: 267,
        image: 'speaker.jpg',
        description: 'Portable Bluetooth speaker with 360-degree sound.',
        specs: ['360-degree Sound', '12-hour Battery', 'Waterproof', 'Bluetooth 5.0'],
        inStock: true,
        colors: ['Black', 'Red', 'Blue'],
        sizes: ['One Size']
    },
    {
        id: 12,
        name: 'Monitor Stand',
        category: 'lifestyle',
        price: 49.99,
        originalPrice: 79.99,
        rating: 4.2,
        reviews: 89,
        image: 'monitor-stand.jpg',
        description: 'Adjustable monitor stand with storage drawer.',
        specs: ['Height Adjustable', 'Storage Drawer', 'Supports up to 30"', 'Steel Construction'],
        inStock: true,
        colors: ['Black'],
        sizes: ['One Size']
    }
];

// ==================== UTILITY FUNCTIONS ====================
function formatPrice(price) {
    return '$' + price.toFixed(2);
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function getCartItems() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCartItems();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
}

function getWishlistItems() {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
}

function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

function updateWishlistCount() {
    const wishlist = getWishlistItems();
    const wishlistCount = document.querySelector('.wishlist-count');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// ==================== HOMEPAGE PRODUCTS ====================
function loadProducts(category = 'all', sortBy = 'latest', maxPrice = Infinity) {
    let filtered = category === 'all' ? [...products] : products.filter(p => p.category === category);
    
    // Filter by price
    filtered = filtered.filter(p => p.price <= maxPrice);

    // Sort
    if (sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    const productsDiv = document.getElementById('products');
    if (!productsDiv) return;

    productsDiv.innerHTML = filtered.map(product => `
        <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition group overflow-hidden">
            <div class="relative aspect-square bg-gray-200 overflow-hidden flex items-center justify-center">
                <i class="fas fa-image text-4xl text-gray-400"></i>
                <div class="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </div>
            </div>
            <div class="p-4">
                <h3 class="font-bold truncate mb-2">${product.name}</h3>
                <div class="flex items-center mb-2">
                    <div class="flex text-yellow-400 text-sm">
                        ${[...Array(Math.floor(product.rating))].map(() => '<i class="fas fa-star"></i>').join('')}
                        ${product.rating % 1 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    </div>
                    <span class="text-gray-600 text-xs ml-2">(${product.reviews})</span>
                </div>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-2xl font-black text-indigo-600">${formatPrice(product.price)}</span>
                    <span class="text-sm text-gray-500 line-through">${formatPrice(product.originalPrice)}</span>
                </div>
                <div class="flex space-x-2">
                    <button onclick="addToCart(${product.id})" class="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition text-sm font-bold">
                        <i class="fas fa-cart-plus"></i> Add
                    </button>
                    <button onclick="toggleWishlist(${product.id})" class="w-10 border-2 border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <a href="product-detail.html?id=${product.id}" class="block mt-2 text-center text-indigo-600 hover:underline text-sm">View Details</a>
            </div>
        </div>
    `).join('');
}

// ==================== CART FUNCTIONS ====================
function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return;

    const cart = getCartItems();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }

    saveCart(cart);
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    let cart = getCartItems();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function updateCartQuantity(productId, quantity) {
    const cart = getCartItems();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart(cart);
    }
}

function loadCart() {
    const cart = getCartItems();
    const cartItemsDiv = document.getElementById('cart-items');
    if (!cartItemsDiv) return;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = `
            <div class="p-8 text-center">
                <i class="fas fa-shopping-cart text-4xl text-gray-400 mb-4"></i>
                <p class="text-gray-600 mb-4">Your cart is empty</p>
                <a href="index.html" class="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">Continue Shopping</a>
            </div>
        `;
        return;
    }

    let subtotal = 0;
    cartItemsDiv.innerHTML = cart.map(item => {
        subtotal += item.price * item.quantity;
        return `
            <div class="border-b py-4 flex justify-between items-center">
                <div class="flex-1">
                    <h3 class="font-bold">${item.name}</h3>
                    <p class="text-gray-600 text-sm">${formatPrice(item.price)} each</p>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-2">
                        <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" class="w-6 h-6 border rounded hover:bg-gray-100">−</button>
                        <input type="number" value="${item.quantity}" onchange="updateCartQuantity(${item.id}, this.value)" class="w-12 text-center border rounded">
                        <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" class="w-6 h-6 border rounded hover:bg-gray-100">+</button>
                    </div>
                    <div class="text-right w-24">
                        <p class="font-bold">${formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-600 hover:text-red-700"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    }).join('');

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('tax').textContent = formatPrice(tax);
    document.getElementById('total').textContent = formatPrice(total);

    updateCartCount();
}

// ==================== WISHLIST FUNCTIONS ====================
function toggleWishlist(productId) {
    const wishlist = getWishlistItems();
    const index = wishlist.findIndex(id => id === productId);

    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }

    saveWishlist(wishlist);
    const product = getProductById(productId);
    showNotification(index > -1 ? `${product.name} removed from wishlist` : `${product.name} added to wishlist!`);
}

// ==================== PRODUCT DETAIL PAGE ====================
function loadProductDetail(productId) {
    const product = getProductById(productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = formatPrice(product.price);
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('stock-status').textContent = product.inStock ? 
        `✓ In Stock (${Math.floor(Math.random() * 50) + 20} items available)` : 
        '✗ Out of Stock';
    
    document.getElementById('breadcrumb-product').textContent = product.name;
    document.getElementById('breadcrumb-category').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);

    document.getElementById('specifications').innerHTML = product.specs.map(spec => 
        `<li>• ${spec}</li>`
    ).join('');

    document.getElementById('add-to-cart-btn').onclick = () => {
        const quantity = parseInt(document.getElementById('qty-input').value);
        addToCart(productId, quantity);
    };

    document.getElementById('add-to-wishlist-btn').onclick = () => {
        toggleWishlist(productId);
    };

    document.getElementById('qty-plus').onclick = () => {
        const input = document.getElementById('qty-input');
        input.value = parseInt(input.value) + 1;
    };

    document.getElementById('qty-minus').onclick = () => {
        const input = document.getElementById('qty-input');
        input.value = Math.max(1, parseInt(input.value) - 1);
    };

    // Load related products
    loadRelatedProducts(productId, product.category);

    updateCartCount();
    updateWishlistCount();
}

function loadRelatedProducts(excludeId, category) {
    const related = products.filter(p => p.category === category && p.id !== excludeId).slice(0, 4);
    const relatedDiv = document.getElementById('related-products');
    if (relatedDiv) {
        relatedDiv.innerHTML = related.map(product => `
            <a href="product-detail.html?id=${product.id}" class="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <div class="aspect-square bg-gray-200 flex items-center justify-center">
                    <i class="fas fa-image text-4xl text-gray-400"></i>
                </div>
                <div class="p-4">
                    <h3 class="font-bold truncate">${product.name}</h3>
                    <p class="text-indigo-600 font-bold">${formatPrice(product.price)}</p>
                </div>
            </a>
        `).join('');
    }
}

// ==================== PROMO CODE ====================
function applyPromoCode() {
    const code = document.getElementById('promo-code').value.toUpperCase();
    const promoCodes = {
        'SAVE10': 0.10,
        'SAVE15': 0.15,
        'SAVE20': 0.20,
        'WELCOME': 0.15
    };

    if (!promoCodes[code]) {
        showNotification('Invalid promo code', 'error');
        return;
    }

    const subtotal = parseFloat(document.getElementById('subtotal').textContent.replace('$', ''));
    const discount = subtotal * promoCodes[code];
    const newSubtotal = subtotal - discount;
    const tax = newSubtotal * 0.1;
    const total = newSubtotal + tax;

    document.getElementById('subtotal').textContent = formatPrice(newSubtotal);
    document.getElementById('tax').textContent = formatPrice(tax);
    document.getElementById('total').textContent = formatPrice(total);

    showNotification(`Promo code applied! You saved ${formatPrice(discount)}`);
}

// ==================== CHECKOUT FUNCTIONS ====================
function loadCheckoutSummary() {
    const cart = getCartItems();
    const checkoutItemsDiv = document.getElementById('checkout-items');
    let subtotal = 0;

    checkoutItemsDiv.innerHTML = cart.map(item => {
        subtotal += item.price * item.quantity;
        return `
            <div class="flex justify-between text-sm">
                <span>${item.name} (x${item.quantity})</span>
                <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
        `;
    }).join('');

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('checkout-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('checkout-tax').textContent = formatPrice(tax);
    document.getElementById('checkout-total').textContent = formatPrice(total);
}

// ==================== ACCOUNT PAGE ====================
function loadAccountData() {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Update dashboard stats
    let totalSpent = 0;
    orders.forEach(order => {
        totalSpent += order.total;
    });

    const dashboardElements = {
        'total-orders': orders.length,
        'total-spent': formatPrice(totalSpent),
        'loyalty-points': orders.length * 100
    };

    Object.entries(dashboardElements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });

    // Load recent orders
    const recentOrdersDiv = document.getElementById('recent-orders');
    if (recentOrdersDiv) {
        if (orders.length === 0) {
            recentOrdersDiv.innerHTML = '<p class="text-gray-600">No orders yet</p>';
        } else {
            recentOrdersDiv.innerHTML = orders.slice(-3).reverse().map(order => `
                <div class="border rounded-lg p-4">
                    <div class="flex justify-between mb-2">
                        <span class="font-bold">${order.id}</span>
                        <span class="text-green-600">${formatPrice(order.total)}</span>
                    </div>
                    <p class="text-sm text-gray-600">${order.date}</p>
                </div>
            `).join('');
        }
    }

    // Load all orders
    const allOrdersDiv = document.getElementById('all-orders');
    if (allOrdersDiv) {
        allOrdersDiv.innerHTML = orders.length === 0 ? 
            '<p class="text-gray-600">No orders yet</p>' : 
            orders.reverse().map(order => `
                <div class="border rounded-lg p-4">
                    <div class="grid grid-cols-4 gap-4">
                        <div>
                            <p class="text-xs text-gray-600">Order ID</p>
                            <p class="font-bold">${order.id}</p>
                        </div>
                        <div>
                            <p class="text-xs text-gray-600">Date</p>
                            <p class="font-bold">${order.date}</p>
                        </div>
                        <div>
                            <p class="text-xs text-gray-600">Amount</p>
                            <p class="font-bold">${formatPrice(order.total)}</p>
                        </div>
                        <div class="text-right">
                            <button class="text-indigo-600 hover:underline text-sm">View Details</button>
                        </div>
                    </div>
                </div>
            `).join('');
    }

    updateCartCount();
    updateWishlistCount();
}

// ==================== SEARCH FUNCTIONALITY ====================
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase();
            const results = products.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.description.toLowerCase().includes(query)
            );
            localStorage.setItem('searchResults', JSON.stringify(results));
            window.location.href = 'search-results.html?q=' + encodeURIComponent(query);
        }
    });
}

// ==================== UI HELPERS ====================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-bold z-50 animate-pulse ${
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ==================== PAGE LOAD INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname;
    
    // Home page
    if (pathname.includes('index.html') || pathname.endsWith('/')) {
        loadProducts();
        setupSearch();

        // Category filtering
        document.querySelectorAll('.category-filter').forEach(filter => {
            filter.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.category-filter').forEach(f => f.classList.remove('text-indigo-600', 'font-bold'));
                filter.classList.add('text-indigo-600', 'font-bold');
                loadProducts(filter.dataset.category);
            });
        });

        // Sorting
        document.getElementById('sortBy')?.addEventListener('change', (e) => {
            const maxPrice = parseFloat(document.getElementById('priceFilter').value) || Infinity;
            loadProducts('all', e.target.value, maxPrice);
        });

        document.getElementById('priceFilter')?.addEventListener('input', (e) => {
            const sortBy = document.getElementById('sortBy').value;
            loadProducts('all', sortBy, parseFloat(e.target.value) || Infinity);
        });
    }

    // Cart page
    if (pathname.includes('cart.html')) {
        loadCart();
    }

    // Checkout page
    if (pathname.includes('checkout.html')) {
        loadCheckoutSummary();
    }

    // Account page
    if (pathname.includes('accounts.html')) {
        loadAccountData();
    }
});