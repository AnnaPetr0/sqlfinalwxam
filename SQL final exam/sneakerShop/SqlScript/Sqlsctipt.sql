CREATE DATABASE IF NOT EXISTS sneaker_shop;
USE sneaker_shop;

CREATE TABLE Users (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

CREATE TABLE Sneakers (
    snkID INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(50),
    size INT,
    price DECIMAL(10,2),
    image_URL TEXT,
    description TEXT
);

CREATE TABLE Wishlist (
    wishID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    snkID INT,
    date_added DATE,
    FOREIGN KEY (userID) REFERENCES Users(userID),
    FOREIGN KEY (snkID) REFERENCES Sneakers(snkID)
);

CREATE TABLE Orders (
    orderID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    order_date DATE,
    total_price DECIMAL(10,2),
    FOREIGN KEY (userID) REFERENCES Users(userID)
);

CREATE TABLE OrderItems (
    ordItemID INT AUTO_INCREMENT PRIMARY KEY,
    orderID INT,
    snkID INT,
    quantity INT,
    unit_price DECIMAL(10,2),
    FOREIGN KEY (orderID) REFERENCES Orders(orderID),
    FOREIGN KEY (snkID) REFERENCES Sneakers(snkID)
);




SELECT * FROM Users;

INSERT INTO Sneakers (brand, model, size, price, image_URL, description) VALUES
('Adidas', 'Pink Blue Spezial', 41, 359.00, 'https://footlocker.co.il/cdn/shop/files/IF6561_10_FOOTWEAR_Photography_MirroredPairView_grey.png?v=1739172835&width=500', 'Retro casual look'),
('Adidas', 'Blue Spezial', 42, 499.99, 'https://footlocker.co.il/cdn/shop/files/F227270035-1.jpg?v=1726495127&width=500', 'Classic Air Max with comfort and style'),
('Adidas', 'Green Spezial', 43, 699.90, 'https://footlocker.co.il/cdn/shop/files/IF6491_5_FOOTWEAR_Photography_Side-Medial-Center-View_white.jpg?v=1727604627&width=500', 'Premium running shoes with Boost cushioning'),
('Adidas', 'Grey Spezial', 41, 379.00, 'https://footlocker.co.il/cdn/shop/files/JS0242_6_FOOTWEAR_Photography_FrontLateralTopView_grey.png?v=1737289426&width=500', 'Bold retro design'),
('Adidas', 'Ping Spezial', 44, 299.90, 'https://footlocker.co.il/cdn/shop/files/JS0250_7_FOOTWEAR_Photography_BackLateralTopView_grey.png?v=1742378755&width=500', 'Timeless canvas sneaker'),
('Adidas', 'Bazz Spezial', 42, 649.00, 'https://footlocker.co.il/cdn/shop/files/JI2651_6_FOOTWEAR_Photography_FrontLateralTopView_grey.png?v=1742398051&width=500', 'Luxury and stability'),
('Adidas', 'Purple green Spezial', 43, 549.90, 'https://footlocker.co.il/cdn/shop/files/JI2650_5_FOOTWEAR_Photography_SideMedialCenterView_grey.png?v=1742398766&width=500', 'Popular black-white low top'),
('Adidas', 'Pink white Spezial', 40, 289.90, 'https://footlocker.co.il/cdn/shop/files/JI2646_8_FOOTWEAR_Photography_DetailView1_grey.png?v=1737294653&width=500', 'Skater favorite'),
('Adidas', 'Pink Blue Spezial', 41, 359.00, 'https://footlocker.co.il/cdn/shop/files/IF6561_10_FOOTWEAR_Photography_MirroredPairView_grey.png?v=1739172835&width=500', 'Retro casual look');



INSERT INTO Wishlist (userID, snkID, date_added) VALUES
(1, 1, '2025-04-01'),
(1, 6, '2025-04-03'),
(2, 2, '2025-04-04'),
(3, 3, '2025-04-04'),
(4, 4, '2025-04-05'),
(5, 5, '2025-04-06'),
(6, 6, '2025-04-06'),
(7, 7, '2025-04-07'),
(8, 8, '2025-04-08'),
(9, 9, '2025-04-09');

INSERT INTO Orders (userID, order_date, total_price) VALUES
(1, '2025-04-10', 1049.89),
(2, '2025-04-11', 699.90),
(3, '2025-04-12', 379.00),
(4, '2025-04-13', 299.90),
(5, '2025-04-14', 649.00),
(6, '2025-04-15', 549.90),
(7, '2025-04-16', 289.90),
(8, '2025-04-17', 359.00),
(9, '2025-04-18', 499.90),
(10, '2025-04-19', 319.90);

INSERT INTO OrderItems (orderID, snkID, quantity, unit_price) VALUES
(1, 1, 1, 499.99),
(1, 2, 1, 549.90),
(2, 2, 1, 699.90),
(3, 3, 1, 379.00),
(4, 4, 1, 299.90),
(5, 5, 1, 649.00),
(6, 6, 1, 549.90),
(7, 7, 1, 289.90),
(8, 8, 1, 359.00),
(9, 9, 1, 499.90);
