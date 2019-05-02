const flavors = ['anise','bitter','boozy','chocolate','citrus','coffee','creamy','fizzy','floral','fruity','herbal','minty','nutty','savory','sour','spicy','sweet','wine'];
const types = ['After Dinner','All Day','Before Dinner','Hot Drink','Longdrink','Maybe Well','Sparkling','Well'];
const ingredients = [
    'Absinth', 'Agave', 'Almond', 'Amaretto', 'Angostura Bitters', 'Aperol', 'Apple', 'Apricot', 'Bacardi', 'Banana', 'Beer', 'Bitters', 'Blackberry', 'Bloody Mary Mix', 'Bourbon', 'Brandy', 'Cachaça', 'Calvados', 'Campari', 'Carbonated Water', 'Celery', 'Champagne', 'Cherry', 'Citron', 'Clam', 'Club Soda', 'Coconut', 'Cofee', 'Coffee', 'Cognac', 'Cointreau', 'Cola', 'Collins Mix', 'Cranberry', 'Cream', 'Crème De Cacao', 'Crème De Cassis', 'Crème De Menthe', 'Crème De Noyaux', 'Curaçao', 'Dom Bénédictine', 'Drambuie', 'Dry White Wine', 'Egg White', 'Egg Yolk', 'Galliano', 'Gin', 'Ginger', 'Gomme Syrup', 'Grand Marnier', 'Grapefruit', 'Grenadine', 'Half & Half', 'Hazelnut', 'Honey', 'Horseradish', 'Hpnotiq', 'Irish Cream', 'Irish Whiskey', 'Kahlúa', 'Kirsch', 'Lemon', 'Lemon-Lime Soda', 'Lillet Blonde', 'Lime', 'Maple', 'Maraschino', 'Margarita Mix', 'Melon', 'Milk', 'Mint', 'Olive', 'Onion', 'Orange', 'Orgeat', 'Peach', 'Pear', 'Pepper', 'Peychaud’S Bitters', 'Piña Colada Mix', 'Pineapple', 'Pisco', 'Port', 'Prosecco', 'Raspberry', 'Rum', 'Rye', 'Salt', 'Scotch', 'Sloe', 'Soda Water', 'Southern Comfort', 'Squirt', 'Stout', 'Strawberry', 'Sugar', 'Sweet & Sour Mix', 'Syrup', 'Tabasco', 'Tennessee Whiskey', 'Tequila', 'Tomato', 'Tonic Water', 'Triple Sec', 'Vanilla', 'Vermouth', 'Vodka', 'Whiskey', 'Worcestershire'
];
const drinks = [
    {name: 'Alexander', type: 'After Dinner Cocktail', group: 'The Unforgettables', ingredients: "3 cl Cognac, 3 cl Crème de Cacao (brown), 3 cl Fresh cream", flavors: 'creamy, chocolate', alcPerc: 0.266666666666667, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Americano', type: 'Before Dinner Cocktail', group: 'The Unforgettables', ingredients: "3 cl Campari, 3 cl Red Vermouth, A splash of soda water", flavors: 'fruity, herbal, fizzy', alcPerc: 0.26, alcOz:0.52, source: 'iba-world.com'},
    {name: 'Angel Face', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "3 cl Calvados, 3 cl Gin, 3 cl Apricot brandy", flavors: 'fruity, boozy', alcPerc: '', alcOz:1.2, source: 'iba-world.com'},
    {name: 'Aviation', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "4.5 cl Gin, 1.5 cl Maraschino, 1.5 cl Fresh lemon juice", flavors: 'fruity, boozy', alcPerc: 0.32, alcOz:0.8, source: 'iba-world.com'},
    {name: 'B52', type: 'After Dinner Cocktail', group: 'New Era', ingredients: "2 cl Grand Marnier, 2 cl Baileys Irish Cream, 2 cl Kahlúa", flavors: 'citrus, fruity, creamy, coffee, boozy', alcPerc: '', alcOz:0.8, source: 'iba-world.com'},
    {name: 'Bacardi', type: 'Before Dinner Cocktail', group: 'The Unforgettables', ingredients: "4.5 cl Bacardi Carta Blanca, 2 cl Fresh lime juice, 1 cl Grenadine", flavors: 'fruity, citrus', alcPerc: 0.24, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Barracuda', type: 'Sparkling Cocktail', group: 'New Era', ingredients: "4.5 cl Gold rum, 1.5 cl Galliano, 6 cl Pineapple juice, 1 dash Fresh lime juice, Top with Prosecco", flavors: 'fruity, herbal, anise, wine', alcPerc: 0.198971978113082, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Bellini', type: 'Sparkling Cocktail', group: 'Contemporary Classic', ingredients: "10 cl Prosecco, 5 cl Fresh peach puree", flavors: 'fruity, wine', alcPerc: 0.08, alcOz:0.4, source: 'iba-world.com'},
    {name: 'Between The Sheets', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "3 cl Cognac, 3 cl White Rum, 3 cl Triple Sec, 2 cl Fresh lemon juice", flavors: 'boozy, fruity, sour', alcPerc: 0.327272727272727, alcOz:1.2, source: 'iba-world.com'},
    {name: 'Black Russian', type: 'After Dinner Cocktail, Well', group: 'Contemporary Classic', ingredients: "5 cl Vodka, 2 cl Coffee liqueur", flavors: 'coffee, boozy', alcPerc: '', alcOz:0.933333333333333, source: 'iba-world.com'},
    {name: 'Bloody Mary', type: 'Longdrink, Well', group: 'Contemporary Classic', ingredients: "4.5 cl Vodka, 9 cl Tomato juice, 1.5 cl Lemon juice, 2 to 3 dashes of Worcestershire Sauce, Tabasco, Celery salt, Pepper", flavors: 'savory', alcPerc: 0.119016133298069, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Bramble', type: 'All Day Cocktail', group: 'New Era', ingredients: "4 cl Gin, 1 cl Sugar syrup, 1.5 cl Fresh Lemon Juice, 1.5 cl Blackberry liqueur", flavors: 'fruity, citrus', alcPerc: 0.275, alcOz:0.733333333333333, source: 'iba-world.com'},
    {name: 'Caipirinha', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "5 cl Cachaça, 1/2 Fresh lime (4 wedges), 2 teaspoons sugar", flavors: 'fruity, citrus, boozy', alcPerc: 0.320728695596395, alcOz:0.666666666666667, source: 'iba-world.com'},
    {name: 'Casino', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "4 cl Old Tom Gin, 1 cl Maraschino, 1 cl Orange Bitters, 1 cl Fresh lemon Juice", flavors: 'fruity, bitter', alcPerc: 0.285714285714286, alcOz:0.666666666666667, source: 'iba-world.com'},
    {name: 'Champagne Cocktail', type: 'Sparkling Cocktail', group: 'Contemporary Classic', ingredients: "9 cl Chilled Champagne, 1 cl Cognac, 2 dashes Angostura Bitters, 1 sugar cube", flavors: 'wine, bitter, herbal', alcPerc: 0.146187277755828, alcOz:0.493333333333333, source: 'iba-world.com'},
    {name: 'Clover Club', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "4.5 cl Gin, 1.5 cl Raspberry syrup, 1.5 cl Fresh lemon Juice, Few drops of Egg White", flavors: 'fruity, creamy, citrus', alcPerc: 0.239520958083832, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Cosmopolitan', type: 'All Day Cocktail', group: 'Contemporary Classic', ingredients: "4 cl Citron Vodka, 1.5 cl Cointreau, 3 cl Cranberry juice, 1.5 cl Fresh lime juice", flavors: 'citrus, fruity', alcPerc: 0.22, alcOz:0.733333333333333, source: 'iba-world.com'},
    {name: 'Cuba Libre', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "5 cl White Rum, 12 cl Cola, 1 cl Fresh lime juice", flavors: 'sweet, citrus, fruity', alcPerc: 0.111111111111111, alcOz:0.666666666666667, source: 'iba-world.com'},
    {name: 'Daiquiri', type: 'Before Dinner Cocktail', group: 'The Unforgettables', ingredients: "4.5 cl White rum, 1.5 cl Simple syrup, 2.5 cl Fresh lime juice", flavors: 'fruity', alcPerc: 0.211764705882353, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Dark ‘N’ Stormy', type: 'Longdrink', group: 'New Era', ingredients: "6 cl Dark Rum, 10 cl Ginger Beer", flavors: 'sweet, spicy, fizzy', alcPerc: 0.15, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Derby', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "6 cl Gin, 2 Drops Peach Bitters, 2 Fresh mint leafs", flavors: 'fruity, minty, bitter, boozy', alcPerc: 0.399334442595674, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Dirty Martini', type: 'Before Dinner Cocktail', group: 'New Era', ingredients: "6 cl Vodka, 1 cl Dry Vermouth, 1 cl Olive juice", flavors: 'boozy, savory, herbal', alcPerc: 0.315, alcOz:0.84, source: 'iba-world.com'},
    {name: 'Dry Martini', type: 'Before Dinner Cocktail', group: 'The Unforgettables', ingredients: "6 cl Gin, 1 cl Dry Vermouth", flavors: 'herbal, boozy', alcPerc: 0.36, alcOz:0.84, source: 'iba-world.com'},
    {name: 'Espresso Martini', type: 'After Dinner Cocktail', group: 'New Era', ingredients: "5 cl Vodka, 1 cl Kahlúa, 1 short strong Espresso", flavors: 'coffee, boozy', alcPerc: '', alcOz:0.8, source: 'iba-world.com'},
    {name: 'French 75', type: 'Sparkling Cocktail', group: 'Contemporary Classic', ingredients: "3 cl Gin, 1.5 cl Fresh lemon juice, 2 dashes Sugar syrup, 6 cl Champagne", flavors: 'citrus, wine, fruity', alcPerc: 0.180722891566265, alcOz:0.64, source: 'iba-world.com'},
    {name: 'French Connection', type: 'After Dinner Cocktail', group: 'Contemporary Classic', ingredients: "3.5 cl Cognac, 3.5 cl Amaretto", flavors: 'boozy, nutty', alcPerc: '', alcOz:0.933333333333333, source: 'iba-world.com'},
    {name: 'French Martini', type: 'Before Dinner Cocktail', group: 'New Era', ingredients: "4.5 cl Vodka, 1.5 cl Raspberry liqueur, 1.5 cl Fresh pineapple juice", flavors: 'fruity, boozy', alcPerc: 0.32, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Gin Fizz', type: 'Longdrink', group: 'The Unforgettables', ingredients: "4.5 cl Gin, 1 cl Sugar syrup, 3 cl Fresh lemon juice, 8 cl Soda water", flavors: 'citrus, fruity, sour, fizzy', alcPerc: 0.109090909090909, alcOz:0.6, source: 'iba-world.com'},
    {name: 'God Father', type: 'After Dinner Cocktail', group: 'Contemporary Classic', ingredients: "3.5 cl Scotch, 3.5 cl Amaretto", flavors: 'boozy, nutty', alcPerc: '', alcOz:0.933333333333333, source: 'iba-world.com'},
    {name: 'God Mother', type: 'After Dinner Cocktail', group: 'Contemporary Classic', ingredients: "3.5 cl Vodka, 3.5 cl Amaretto", flavors: 'boozy, nutty', alcPerc: '', alcOz:0.933333333333333, source: 'iba-world.com'},
    {name: 'Golden Dream', type: 'After Dinner Cocktail', group: 'Contemporary Classic', ingredients: "2 cl Galliano, 2 cl Triple sec, 2 cl Fresh Orange juice, 1 cl Fresh cream", flavors: 'herbal, anise, citrus, creamy, fruity', alcPerc: 0.228571428571429, alcOz:0.533333333333333, source: 'iba-world.com'},
    {name: 'Grasshopper', type: 'After Dinner Cocktail', group: 'Contemporary Classic', ingredients: "3 cl Crème de cacao (white), 3 cl Crème de menthe (green), 3 cl Fresh cream", flavors: 'creamy, minty, chocolate', alcPerc: 0.266666666666667, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Harvey Wallbanger', type: 'All Day Cocktail', group: 'Contemporary Classic', ingredients: "4.5 cl Vodka, 1.5 cl Galliano (to float on drink), 9 cl Orange juice", flavors: 'herbal, anise, citrus, fruity', alcPerc: 0.16, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Hemingway Special', type: 'All Day Cocktail', group: 'Contemporary Classic', ingredients: "6 cl White Rum, 1.5 cl Maraschino, 4 cl Grapefruit juice, 1.5cl Fresh lime juice", flavors: 'fruity, citrus, bitter', alcPerc: 0.230769230769231, alcOz:1, source: 'iba-world.com'},
    {name: 'Horse’s Neck', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "4 cl Brandy, 12 cl Ginger Ale, Dash of Angostura bitters (optional)", flavors: 'sweet, spicy, herbal, fizzy', alcPerc: 0.0996139957664052, alcOz:0.533333333333333, source: 'iba-world.com'},
    {name: 'Irish Coffee', type: 'Hot Drink', group: 'Contemporary Classic', ingredients: "4 cl Irish whiskey, 9 cl Hot coffee, 3 cl Fresh cream, 1 teaspoon of brown sugar", flavors: 'coffee, creamy', alcPerc: 0.0970114412868568, alcOz:0.533333333333333, source: 'iba-world.com'},
    {name: 'John Collins', type: 'Longdrink', group: 'The Unforgettables', ingredients: "4.5 cl Gin, 1.5 cl Sugar syrup, 3 cl Fresh lemon juice, 6 cl Soda water", flavors: 'citrus, fruity, sour, fizzy', alcPerc: 0.12, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Kamikaze', type: 'All Day Cocktail', group: 'New Era', ingredients: "3 cl Vodka, 3 cl Triple sec, 3 cl Fresh lime juice", flavors: 'citrus, fruity', alcPerc: 0.266666666666667, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Kir', type: 'Before Dinner Cocktail', group: 'Contemporary Classic', ingredients: "9 cl Dry White Wine, 1 cl Crème de Cassis", flavors: 'fruity, wine', alcPerc: 0.148, alcOz:0.493333333333333, source: 'iba-world.com'},
    {name: 'Lemon Drop Martini', type: 'All Day Cocktail', group: 'New Era', ingredients: "2.5 cl Vodka Citron, 2 cl Triple Sec, 1.5 cl Fresh lemon juice", flavors: 'citrus, fruity, sour', alcPerc: 0.3, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Long Island Ice Tea', type: 'Longdrink, Well', group: 'Contemporary Classic', ingredients: "1.5 cl Gin, 1.5 cl Tequila, 1.5 cl Vodka, 1.5 cl White Rum, 1.5 cl Triple sec, 3.0 cl Gomme syrup, 2.5 cl Lemon juice (fresh), 1 dash of Cola", flavors: 'boozy, citrus, creamy, fruity, sour, sweet', alcPerc: 0.229673863114378, alcOz:1, source: 'iba-world.com'},
    {name: 'Mai-Tai', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "4 cl White Rum, 2 cl Dark Rum, 1.5 cl Orange Curaçao, 1.5 cl Orgeat syrup, 1 cl Fresh lime juice", flavors: 'citrus, boozy, nutty, fruity, bitter', alcPerc: 0.3, alcOz:1, source: 'iba-world.com'},
    {name: 'Manhattan', type: 'Before Dinner cocktail', group: 'The Unforgettables', ingredients: "5 cl Rye Whiskey, 2 cl Red Vermouth, 1 dash Angostura Bitters", flavors: 'boozy, herbal, bitter', alcPerc: 0.317190597564429, alcOz:0.746666666666667, source: 'iba-world.com'},
    {name: 'Margarita', type: 'All Day Cocktail, Well', group: 'Contemporary Classic', ingredients: "3.5 cl Tequila, 2 cl Cointreau, 1.5 cl Freshly squeezed lime juice", flavors: 'citrus, fruity, boozy', alcPerc: 0.314285714285714, alcOz:0.733333333333333, source: 'iba-world.com'},
    {name: 'Mary Pickford', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "6 cl White Rum, 1 cl Maraschino, 1 cl Grenadine syrup, 6 cl Fresh pineapple juice", flavors: 'fruity', alcPerc: 0.2, alcOz:0.933333333333333, source: 'iba-world.com'},
    {name: 'Mimosa', type: 'Sparkling Cocktail', group: 'Contemporary Classic', ingredients: "7.5 cl Champagne, 7.5 cl Orange juice (fresh)", flavors: 'fruity, citrus, wine', alcPerc: 0.06, alcOz:0.3, source: 'iba-world.com'},
    {name: 'Mint Julep', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "6 cl Bourbon whiskey, 4 fresh mint sprigs, 1 teaspoon powdered sugar, 2 teaspoons water", flavors: 'minty, boozy', alcPerc: 0.320911388342894, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Mojito', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "4 cl White Cuban Rum, 3 cl Fresh lime juice, 6 Mint sprigs, 2 teaspoons white sugar, Soda water", flavors: 'citrus, minty, fruity, fizzy', alcPerc: 0.200355631245461, alcOz:0.533333333333333, source: 'iba-world.com'},
    {name: 'Monkey Gland', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "5 cl Gin, 3 cl Orange juice, 2 drops Absinth, 2 drops Grenadine", flavors: 'citrus, fruity, herbal, anise', alcPerc: 0.249875311720698, alcOz:0.668, source: 'iba-world.com'},
    {name: 'Moscow Mule', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "4.5 cl Vodka, 12 cl Ginger beer, 0.5 cl Lime juice (fresh), 1 slice lime in a highball glass", flavors: 'sweet, spicy, fruity, citrus, fizzy', alcPerc: 0.105882352941176, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Negroni', type: 'Before Dinner Cocktail', group: 'The Unforgettables', ingredients: "3 cl Gin, 3 cl Campari, 3 cl Sweet Red Vermouth", flavors: 'bitter, spicy, sweet, herbal, boozy, fruity', alcPerc: 0.306666666666667, alcOz:0.92, source: 'iba-world.com'},
    {name: 'Old Fashioned', type: 'Before Dinner Cocktail', group: 'The Unforgettables', ingredients: "4.5 cl Bourbon or Rye whiskey, 2 Dashes Angostura Bitters, 1 sugar cube, Few dashes plain water", flavors: 'boozy, bitter, herbal', alcPerc: 0.374220374220374, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Paradise', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "3.5 cl Gin, 2 cl Apricot Brandy, 1.5 cl Orange juice", flavors: 'citrus, fruity, boozy', alcPerc: 0.314285714285714, alcOz:0.733333333333333, source: 'iba-world.com'},
    {name: 'Pina Colada', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "3 cl White Rum, 9 cl Pineapple juice, 3 cl Coconut cream", flavors: 'fruity, creamy', alcPerc: 0.08, alcOz:0.4, source: 'iba-world.com'},
    {name: 'Pisco Sour', type: 'All Day Cocktail', group: 'New Era', ingredients: "4.5 cl Pisco, 2 cl Sugar syrup, 3 cl Fresh lemon juice, 1 raw egg white (small egg), Dash some Angostura bitters on top.", flavors: 'floral, fruity, citrus, sour, creamy, herbal', alcPerc: 0.188245137000628, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Planter’s Punch', type: 'Longdrink', group: 'The Unforgettables', ingredients: "4.5 cl Dark rum, 3.5 cl Fresh orange juice, 3.5 cl Fresh pineapple juice, 2 cl Fresh lemon juice, 1 cl Grenadine, 1 cl Sugar syrup, 3 to 4 dashes Angostura bitters", flavors: 'fruity, citrus, bitter, herbal, sour', alcPerc: 0.114752008160143, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Porto Flip', type: 'After Dinner Cocktail', group: 'The Unforgettables', ingredients: "1.5 cl Brandy, 4.5 cl Red Port, 1 cl Egg yolk", flavors: 'boozy, sweet, creamy', alcPerc: 0.162857142857143, alcOz:0.38, source: 'iba-world.com'},
    {name: 'Ramos Gin Fizz', type: 'Longdrink', group: 'The Unforgettables', ingredients: "4.5 cl Gin, 3 cl Sugar syrup, 1.5 cl Lime juice, 1.5 cl Fresh lemon juice, 6 cl Cream, 1 Egg white, 3 dashes Orange flower water, 2 drops Vanilla extract", flavors: 'fruity, citrus, creamy, sour, floral', alcPerc: 0.107810253953043, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Rose', type: 'maybe well', group: 'Contemporary Classic', ingredients: "2 cl Kirsch, 4 cl Dry Vermouth, 3 dashes Strawberry syrup", flavors: 'fruity, boozy, herbal', alcPerc: 0.206918849013902, alcOz:0.426666666666667, source: 'iba-world.com'},
    {name: 'Russian Spring Punch', type: 'Sparkling Cocktail', group: 'New Era', ingredients: "2.5 cl Vodka, 1.5 cl Crème de Cassis, 1 cl Sugar Syrup, 2.5 cl Lemon Juice (fresh)", flavors: 'fruity, citrus, sour', alcPerc: 0.213333333333333, alcOz:0.533333333333333, source: 'iba-world.com'},
    {name: 'Rusty Nail', type: 'After Dinner Cocktail', group: 'The Unforgettables', ingredients: "4.5 cl Scotch whisky, 2.5 cl Drambuie", flavors: 'boozy, spicy', alcPerc: '', alcOz:0.933333333333333, source: 'iba-world.com'},
    {name: 'Sazerac', type: 'After Dinner Cocktail', group: 'The Unforgettables', ingredients: "5 cl Cognac, 1 cl Absinthe, 1 sugar cube, 2 dashes Peychaud’s bitters", flavors: 'boozy, herbal, bitter, anise', alcPerc: 0.391900718484651, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Screwdriver', type: 'All Day Cocktail, Well', group: 'The Unforgettables', ingredients: "5 cl Vodka, 10 cl Orange juice", flavors: 'fruity, citrus', alcPerc: 0.133333333333333, alcOz:0.666666666666667, source: 'iba-world.com'},
    {name: 'Sea Breeze', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "4 cl Vodka, 12 cl Cranberry juice, 3 cl Grapefruit juice", flavors: 'fruity, citrus, bitter', alcPerc: 0.0842105263157895, alcOz:0.533333333333333, source: 'iba-world.com'},
    {name: 'Sex On The Beach', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "4 cl Vodka, 2 cl Peach schnapps, 4 cl Cranberry juice, 4 cl Orange juice", flavors: 'fruity, citrus', alcPerc: 0.171428571428571, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Sidecar', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "5 cl Cognac, 2 cl Triple Sec, 2 cl Fresh lemon juice", flavors: 'boozy, fruity, citrus, sour', alcPerc: 0.311111111111111, alcOz:0.933333333333333, source: 'iba-world.com'},
    {name: 'Singapore Sling', type: 'Longdrink', group: 'Contemporary Classic', ingredients: "3 cl Gin, 1.5 cl Cherry liqueur, 0.75 cl Cointreau, 0.75 cl DOM Bénédictine, 1 cl Grenadine, 12 cl Pineapple juice, 1.5 cl Lime juice, 1 dash Angostura bitters", flavors: 'fruity, citrus, herbal', alcPerc: 0.116720163408229, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Spritz Veneziano', type: 'Sparkling Cocktail', group: 'New Era', ingredients: "6 cl Prosecco, 4 cl Aperol, Splash of Soda water", flavors: 'fruity, citrus, wine, fizzy', alcPerc: 0.232, alcOz:0.773333333333333, source: 'iba-world.com'},
    {name: 'Stinger', type: 'After Dinner Cocktail', group: 'The Unforgettables', ingredients: "5 cl Cognac, 2 cl Crème de Menthe (white)", flavors: 'boozy, minty, creamy', alcPerc: '', alcOz:0.933333333333333, source: 'iba-world.com'},
    {name: 'Tequila Sunrise', type: 'Longdrink, Well', group: 'Contemporary Classic', ingredients: "4.5 cl Tequila, 9 cl Orange juice, 1.5 cl Grenadine", flavors: 'fruity, citrus', alcPerc: 0.12, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Tommy’s Margarita', type: 'All Day Cocktail', group: 'New Era', ingredients: "4.5 cl Tequila, 1.5 cl Freshly squeezed lime juice, 2 bar spoons of Agave nectar", flavors: 'fruity, citrus', alcPerc: 0.257142857142857, alcOz:0.6, source: 'iba-world.com'},
    {name: 'Tuxedo', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "3 cl Old Tom Gin, 3 cl Dry Vermouth, 1/2 bar spoon Maraschino, 1/4 bar spoon Absinthe, 3 dashes Orange Bitters", flavors: 'herbal, fruity, bitter, citrus', alcPerc: 0.260631001371742, alcOz:0.57, source: 'iba-world.com'},
    {name: 'Vampiro', type: 'maybe well', group: 'New Era', ingredients: "5 cl Tequila (silver), 7 cl Tomato juice, 3 cl Orange Juice (fresh), 1 cl Lime juice (fresh), 1 teaspoon clear honey, onion, red hot chili peppers, Worcestershire sauce, Salt", flavors: 'savory, fruity, citrus', alcPerc: 0.121264301608571, alcOz:0.666666666666667, source: 'iba-world.com'},
    {name: 'Vesper', type: 'Before Dinner Cocktail', group: 'New Era', ingredients: "6 cl Gin, 1.5 cl Vodka, 0.75 cl Lillet Blonde, Lemon twist (garnish)", flavors: 'fruity, boozy', alcPerc: '', alcOz:1.1, source: 'iba-world.com'},
    {name: 'Whiskey Sour', type: 'Before Dinner Cocktail, Well', group: 'The Unforgettables', ingredients: "4.5 cl Bourbon Whiskey, 1.5 cl Sugar syrup, 3.0 cl Fresh lemon juice, Dash egg white (Optional: if used shake little harder to foam up the egg white).", flavors: 'boozy, sour, citrus, fruity', alcPerc: 0.198631648642684, alcOz:0.6, source: 'iba-world.com'},
    {name: 'White Lady', type: 'All Day Cocktail', group: 'The Unforgettables', ingredients: "4 cl Gin, 3 cl Triple Sec, 2 cl Fresh lemon juice", flavors: 'fruity, citrus, sour, boozy', alcPerc: 0.311111111111111, alcOz:0.933333333333333, source: 'iba-world.com'},
    {name: 'Yellow Bird', type: 'All Day Cocktail', group: 'New Era', ingredients: "3 cl White Rum, 1.5 cl Galliano, 1.5 cl Triple sec, 1.5 cl Lime juice", flavors: 'herbal, anise, citrus, fruity, boozy', alcPerc: 0.32, alcOz:0.8, source: 'iba-world.com'},
    {name: 'Gin And Tonic', type: 'Well', group: '', ingredients: "2 oz. Gin, 6 oz. Tonic Water", flavors: 'bitter', alcPerc: 0.1, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Rum And Coke', type: 'Well', group: '', ingredients: "2 oz. Rum (Light), Cola", flavors: 'sweet', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Scotch And Soda', type: 'Well', group: '', ingredients: "2 oz. Scotch Whisky, Club Soda", flavors: 'fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Vodka And Tonic', type: 'Well', group: '', ingredients: "2 oz. Vodka, Tonic Water", flavors: 'bitter', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Alabama Fizz', type: 'well', group: '', ingredients: "2 oz. Gin, 1 oz. Lemon Juice, 1 tsp. Sugar, Club Soda / Carbonated Water", flavors: 'fruity, citrus, sour, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Alamo Splash', type: 'well', group: '', ingredients: "2 oz. Tequila, 1 oz. Orange Juice, 1/2 oz. Pineapple Juice, Splash of Lemon-Lime Soda", flavors: 'fruity, citrus, fizzy', alcPerc: 0.228571428571429, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Albemarle Fizz', type: 'well', group: '', ingredients: "2 oz. Gin, 1 oz. Lemon Juice, Splash of Raspberry Syrup, 1 tsp. Sugar, Club Soda / Carbonated Water", flavors: 'fruity, citrus, sour, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Amaretto Rose', type: 'maybe well', group: '', ingredients: "1 1/2 oz. Amaretto, 1/2 oz. Lime Juice (Rose's®), Club Soda / Carbonated Water", flavors: 'fruity, citrus, nutty, fizzy', alcPerc: 0.3, alcOz:0.6, source: 'goodcocktails.com'},
    {name: 'Amaretto Sour', type: 'maybe well', group: '', ingredients: "2 oz. Amaretto, Sweet & Sour Mix", flavors: 'nutty, sour', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Amber Amour', type: 'maybe well', group: '', ingredients: "1 1/2 oz. Amaretto, 1/2 oz. Sweet & Sour Mix, Club Soda / Carbonated Water", flavors: 'nutty, sour, fizzy', alcPerc: 0.3, alcOz:0.6, source: 'goodcocktails.com'},
    {name: 'Bay Breeze', type: 'well', group: '', ingredients: "2 oz. Vodka, Cranberry Juice, Pineapple Juice", flavors: 'fruity', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Bloody Caesar', type: 'maybe well', group: '', ingredients: "2 oz. Vodka, Clamato Juice, Dash of Worcestershire Sauce, Dash of Tabasco® Sauce, Dash of Horseradish Sauce", flavors: 'savory', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Bloody Maria', type: 'maybe well', group: '', ingredients: "2 oz. Tequila, 3 Drops of Worcestershire Sauce, 3 Drops of Tabasco® Sauce, Splash of Lime Juice, Tomato Juice or Bloody Mary Mix", flavors: 'savory', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Bocce Ball', type: 'maybe well', group: '', ingredients: "2 oz. Amaretto, Orange Juice, Splash of Club Soda / Carbonated Water", flavors: 'fruity, citrus, nutty, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Collins', type: 'well', group: '', ingredients: "2 oz. Brandy/Rum/Tequila/Vodka/Whiskey, Collins Mix (carbonated water, lemon juice and sugar)", flavors: 'fruity, citrus, sour, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Brandy Fizz', type: 'well', group: '', ingredients: "2 oz. Brandy, 1 oz. Lemon Juice, 1 tsp. Sugar, Club Soda / Carbonated Water", flavors: 'fruity, citrus, sour, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Brandy Milk Punch', type: 'well', group: '', ingredients: "2 oz. Brandy, Milk, 1 tsp. Sugar", flavors: '', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Sling', type: 'well', group: '', ingredients: "2 oz. Brandy/Gin/Vodka/Whiskey, 1 tsp. Sugar, 1 oz. Lemon Juice, Splash of Water", flavors: 'fruity, citrus, sour', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Smash', type: 'well', group: '', ingredients: "2 oz. Brandy/Gin/Whiskey, 1 tsp. Sugar, 1 oz. Club Soda / Carbonated Water, 4 Mint Leaves", flavors: 'minty, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Sour', type: 'well', group: '', ingredients: "2 oz. Brandy/Gin/Rum (Light)/Scotch/Tequila/Vodka, Sweet & Sour Mix", flavors: 'sour', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Squirt', type: 'well', group: '', ingredients: "2 oz. Brandy/Gin/Whiskey, Splash of Grenadine, 1 tsp. Sugar, Club Soda / Carbonated Water", flavors: 'fruity, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Toddy', type: 'well', group: '', ingredients: "2 oz. Brandy/Gin, Splash of Water, 1 tsp. Sugar", flavors: '', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Bull Frog', type: 'well', group: '', ingredients: "2 oz. Vodka, Lemonade", flavors: 'fruity, citrus, sour', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Bulldog Highball', type: 'well', group: '', ingredients: "2 oz. Gin, 1 oz. Orange Juice, Ginger Ale", flavors: 'citrus, fruity, spicy, sweet, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Cablegram', type: 'well', group: '', ingredients: "2 oz. Whiskey, 1 oz. Lemon Juice, 1/2 tsp. Sugar, Ginger Ale", flavors: 'fruity, citrus, sour, spicy, sweet, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'California Lemonade', type: 'well', group: '', ingredients: "2 oz. Whiskey, 1 oz. Lemon Juice, 1/2 oz. Lime Juice, Splash of Grenadine, 1 Tbsp. Sugar, Club Soda / Carbonated Water", flavors: 'fruity, citrus, sour, fizzy', alcPerc: 0.228571428571429, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Canal Street Daisy', type: 'well', group: '', ingredients: "2 oz. Whiskey, 1/2 oz. Lemon Juice, 1/2 oz. Orange Juice, Club Soda / Carbonated Water", flavors: 'fruity, citrus, sour, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Cape Cod', type: 'well', group: '', ingredients: "2 oz. Vodka, Cranberry Juice", flavors: 'fruity', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Chi-Chi', type: 'maybe well', group: '', ingredients: "2 oz. Vodka, Piña Colada Mix, Splash of Pineapple Juice", flavors: 'creamy, fruity, sweet', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Clamato Cocktail', type: 'well', group: '', ingredients: "2 oz. Vodka, 1 oz. Clam Juice, 3 oz. Tomato Juice", flavors: 'savory', alcPerc: 0.133333333333333, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Copperhead', type: 'well', group: '', ingredients: "2 oz. Vodka, Ginger Ale", flavors: 'spicy, sweet, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Cream Fizz', type: 'well', group: '', ingredients: "2 oz. Gin, 1 oz. Lemon Juice, Splash of Cream / Half & Half, 1 tsp. Sugar, Club Soda / Carbonated Water", flavors: 'fruity, citrus, sour, creamy, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Desert Sunrise', type: 'well', group: '', ingredients: "2 oz. Vodka, Orange Juice, Pineapple Juice, Splash of Grenadine", flavors: 'citrus, fruity', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Floradora Cooler', type: 'well', group: '', ingredients: "2 oz. Gin, 1 oz. Lime Juice, Splash of Grenadine, 1/2 tsp. Sugar, Club Soda / Carbonated Water or Ginger Ale", flavors: 'fruity, citrus, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Fog Horn', type: 'well', group: '', ingredients: "2 oz. Gin, 1/2 oz. Lime Juice, Ginger Ale", flavors: 'fruity, citrus, spicy, sweet, fizzy', alcPerc: 0.32, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Fuzzy Navel', type: 'maybe well', group: '', ingredients: "2 oz. Peach Schnapps, Orange Juice", flavors: 'fruity, citrus', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Gin Buck', type: 'well', group: '', ingredients: "1 1/2 oz. Gin, 1/2 oz. Lemon Juice, Ginger Ale", flavors: 'boozy, fruity, citrus, sour, spicy, sweet, fizzy', alcPerc: 0.3, alcOz:0.6, source: 'goodcocktails.com'},
    {name: 'Gin Milk Punch', type: 'well', group: '', ingredients: "2 oz. Gin, Milk, 1 tsp. Sugar", flavors: '', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Greyhound', type: 'well', group: '', ingredients: "2 oz. Vodka or Gin, Grapefruit Juice", flavors: 'fruity, citrus, bitter', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Highball', type: 'well', group: '', ingredients: "2 oz. Whiskey, Club Soda / Carbonated Water or Ginger Ale", flavors: 'fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Highland Cooler', type: 'well', group: '', ingredients: "2 oz. Scotch Whisky, Club Soda / Carbonated Water, 1/2 tsp. Sugar", flavors: 'fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'King Cole Cocktail', type: 'well', group: '', ingredients: "2 oz. Whiskey, 1 Orange Wedge, 1 Tbsp. Crushed Pineapple, 1/2 tsp. Sugar", flavors: 'fruity, citrus', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Klondike Cooler', type: 'well', group: '', ingredients: "2 oz. Whiskey, 1/2 oz. Sugar, Club Soda / Carbonated Water or Ginger Ale", flavors: 'fizzy', alcPerc: 0.32, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Madras', type: 'well', group: '', ingredients: "2 oz. Vodka, Cranberry Juice, Orange Juice", flavors: 'fruity, citrus', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Major Bailey', type: 'well', group: '', ingredients: "2 oz. Gin, Splash of Lemon Juice, Splash of Lime Juice, 1/2 tsp. Sugar, 12 Mint Leaves", flavors: 'fruity, citrus, minty', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Mamie Gilroy', type: 'well', group: '', ingredients: "2 oz. Scotch Whisky, 1 oz. Lime Juice, Ginger Ale", flavors: 'fruity, citrus, spicy, sweet, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Mamie\'s Sister', type: 'well', group: '', ingredients: "2 oz. Gin, 1 oz. Lime Juice, Ginger Ale", flavors: 'fruity, citrus, spicy, sweet, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Melon Ball', type: 'maybe well', group: '', ingredients: "1 oz. Vodka, 1 oz. Melon Liqueur, Orange Juice", flavors: 'fruity, citrus', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Melon Sour', type: 'maybe well', group: '', ingredients: "2 oz. Melon Liqueur, Sweet & Sour Mix", flavors: 'fruity, sour', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Mexican Bay Breeze', type: 'well', group: '', ingredients: "2 oz. Tequila, Pineapple Juice, Cranberry Juice", flavors: 'fruity', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Mexican Madras', type: 'well', group: '', ingredients: "2 oz. Tequila, Orange Juice, Cranberry Juice", flavors: 'fruity, citrus', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Mexican Sea Breeze', type: 'well', group: '', ingredients: "2 oz. Tequila, Grapefruit Juice, Cranberry Juice", flavors: 'fruity, citrus, bitter', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Mexicola', type: 'well', group: '', ingredients: "2 oz. Tequila, 1/2 oz. Lime Juice, Cola", flavors: 'boozy, fruity, citrus, sweet', alcPerc: 0.32, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Milk Punch', type: 'well', group: '', ingredients: "2 oz. Whiskey, Milk, 1 tsp. Sugar", flavors: '', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Orange Buck', type: 'well', group: '', ingredients: "2 oz. Gin, 1 oz. Orange Juice, 1 oz. Lime Juice, Ginger Ale", flavors: 'fruity, citrus, spicy, sweet, fizzy', alcPerc: 0.2, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Paloma', type: 'well', group: '', ingredients: "2 oz. Tequila, Squirt® Citrus Soda", flavors: 'citrus, grapefruit, fruity, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Pearl Harbor', type: 'maybe well', group: '', ingredients: "1 oz. Vodka, 1/2 oz. Melon Liqueur, Pineapple Juice", flavors: 'fruity', alcPerc: '', alcOz:0.6, source: 'goodcocktails.com'},
    {name: 'Pineapple Fizz', type: 'well', group: '', ingredients: "2 oz. Rum (Light), 1 oz. Pineapple Juice, 1/2 tsp. Sugar, Club Soda / Carbonated Water", flavors: 'fruity, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Pink Pussycat', type: 'well', group: '', ingredients: "2 oz. Gin or Vodka, Pineapple Juice or Grapefruit Juice, Splash of Grenadine", flavors: 'fruity, citrus, bitter', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Press', type: 'well', group: '', ingredients: "2 oz. Whiskey, Club Soda / Carbonated Water, Lemon-Lime Soda or Ginger Ale", flavors: 'fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Red Snapper', type: 'maybe well', group: '', ingredients: "2 oz. Gin, 3 Drops of Worcestershire Sauce, 3 Drops of Tabasco® Sauce, 1 tsp. Horseradish Sauce, Dash of Lime Juice, Tomato Juice or Bloody Mary Mix", flavors: 'savory', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Rocky Mountain Cooler', type: 'maybe well', group: '', ingredients: "2 oz. Peach Schnapps, Pineapple Juice, Lemon-Lime Soda", flavors: 'fruity, citrus, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Cobbler', type: 'well', group: '', ingredients: "2 oz. Brandy/Gin/Rum (Light), 1 oz. Simple Syrup, Club Soda / Carbonated Water", flavors: 'fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Daisy', type: 'well', group: '', ingredients: "2 oz. Brandy/Gin/Rum (Light)/Vodka/Whiskey, 1/2 oz. Lemon Juice, Splash of Grenadine, 1/2 tsp. Sugar", flavors: 'boozy, fruity, citrus, sour', alcPerc: 0.32, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Fix', type: 'well', group: '', ingredients: "2 1/2 oz. Brandy/Gin/Rum (Light)/Whiskey, 1 oz. Lemon Juice, 1 oz. Simple Syrup", flavors: 'fruity, citrus, sour', alcPerc: 0.222222222222222, alcOz:1, source: 'goodcocktails.com'},
    {name: 'Highball', type: 'well', group: '', ingredients: "2 oz. Brandy/Gin/Rum (Light) or Rum (Dark)/Scotch/Whiskey, Ginger Ale or Club Soda / Carbonated Water", flavors: 'spicy, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Rum Milk Punch', type: 'well', group: '', ingredients: "2 oz. Rum (Light), Milk, 1 tsp. Sugar", flavors: '', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Rickey', type: 'well', group: '', ingredients: "2 oz. Gin/Rum (Light)/Scotch/Whiskey, 1/2 oz. Lime Juice, Club Soda / Carbonated Water", flavors: 'fruity, citrus, fizzy', alcPerc: 0.32, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Rum Screwdriver', type: 'well', group: '', ingredients: "2 oz. Rum (Light), Orange Juice", flavors: 'fruity, citrus', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Swizzle', type: 'well', group: '', ingredients: "2 oz. Brandy/Gin/Rum (Light) or Rum (Dark)/Whiskey, 1 oz. Lime Juice, 1 tsp. Sugar, 2 Dashes of Bitters, Club Soda / Carbonated Water", flavors: 'bitter, fruity, citrus, fizzy', alcPerc: 0.266666666666667, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Rum Toddy', type: 'well', group: '', ingredients: "2 oz. Rum (Light) or Rum (Dark), Splash of Water, 1/2 tsp. Sugar", flavors: '', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Salty Dog', type: 'well', group: '', ingredients: "2 oz. Vodka or Gin, Grapefruit Juice, Salted Rim", flavors: 'fruity, citrus, bitter', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Scotch Milk Punch', type: 'well', group: '', ingredients: "2 oz. Scotch Whisky, Milk, 1 tsp. Sugar", flavors: '', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Scotch Mist', type: 'well', group: '', ingredients: "2 oz. Scotch Whisky, crushed ice", flavors: '', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Screw Mary', type: 'well', group: '', ingredients: "2 oz. Vodka, Orange Juice, Tomato Juice or Bloody Mary Mix", flavors: 'fruity, citrus, savory', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Stone Fence', type: 'well', group: '', ingredients: "2 oz. Scotch Whisky, 2 Dashes of Bitters, Club Soda / Carbonated Water", flavors: 'bitter, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Sun Kiss', type: 'maybe well', group: '', ingredients: "2 oz. Amaretto, Orange Juice", flavors: 'fruity, citrus, nutty', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Susie Taylor', type: 'well', group: '', ingredients: "2 oz. Rum (Light), 1/2 oz. Lime Juice, Ginger Ale", flavors: 'fruity, citrus, spicy, sweet, fizzy', alcPerc: 0.32, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'T.N.T. #2', type: 'well', group: '', ingredients: "2 oz. Tequila, Tonic Water", flavors: 'bitter', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Tequila Thing', type: 'well', group: '', ingredients: "2 1/2 oz. Tequila, Ginger Ale, Splash of Lime Juice (Rose's®)", flavors: 'fruity, citrus, spicy, sweet, fizzy', alcPerc: '', alcOz:1, source: 'goodcocktails.com'},
    {name: 'Tequonic', type: 'well', group: '', ingredients: "2 oz. Tequila, 1/2 oz. Lime Juice, Tonic Water", flavors: 'bitter, fruity, citrus', alcPerc: 0.32, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Tom Collins', type: 'well', group: '', ingredients: "2 oz. Gin, Collins Mix (carbonated water, lemon juice and sugar)", flavors: 'fruity, citrus, sour, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Tropica Cocktail', type: 'well', group: '', ingredients: "2 oz. Rum (Light), Pineapple Juice, Grapefruit Juice, Splash of Grenadine", flavors: 'fruity, citrus, bitter', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Twin Peach', type: 'maybe well', group: '', ingredients: "2 oz. Peach Schnapps, Cranberry Juice", flavors: 'fruity', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Van Vleet', type: 'well', group: '', ingredients: "3 oz. Rum (Light), 1 oz. Maple Syrup, 1 oz. Lemon Juice", flavors: 'fruity, citrus, sour', alcPerc: 0.24, alcOz:1.2, source: 'goodcocktails.com'},
    {name: 'Victory Collins', type: 'well', group: '', ingredients: "2 oz. Vodka, Grapefruit Juice, Lemon Juice, 1 tsp. Sugar", flavors: 'fruity, citrus, bitter, sour', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Vodka 7', type: 'well', group: '', ingredients: "2 oz. Vodka, Lemon-Lime Soda", flavors: 'fruity, citrus, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Vodka And Apple Juice', type: 'well', group: '', ingredients: "2 oz. Vodka, Apple Juice", flavors: 'fruity', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Cooler', type: 'well', group: '', ingredients: "2 oz. Gin/Rum/Vodka, 1/2 tsp. Sugar, Club Soda / Carbonated Water or Ginger Ale", flavors: 'fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Vodka Sonic', type: 'well', group: '', ingredients: "2 oz. Vodka, Club Soda / Carbonated Water, Tonic Water", flavors: 'bitter, fizzy', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Vodka Sunrise', type: 'well', group: '', ingredients: "2 oz. Vodka, Orange Juice, Splash of Grenadine", flavors: 'fruity, citrus', alcPerc: '', alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Wild Thing', type: 'well', group: '', ingredients: "2 oz. Tequila, 1/2 oz. Lime Juice, Cranberry Juice, Club Soda / Carbonated Water", flavors: 'fruity, citrus, fizzy', alcPerc: 0.32, alcOz:0.8, source: 'goodcocktails.com'},
    {name: 'Alabama Slammer', type: 'after dinner', group: '', ingredients: "1 oz. Southern Comfort®, 1 oz. Amaretto, 1/2 oz. Sloe Gin or Grenadine, Orange Juice", flavors: 'fruity, citrus, nutty, spicy, herbal', alcPerc: 0.32, alcOz:0.8, source: 'unknown'},
    {name: 'Bahama Mama', type: 'well', group: '', ingredients: "1 oz. Rum (Light), 1 oz. Rum (Dark), 1 oz. Rum (Spiced), Sweet & Sour Mix, Orange Juice, Pineapple Juice, Dash of Grenadine", flavors: 'fruity, citrus, sour, spicy', alcPerc: '', alcOz:1.2, source: 'unknown'},
    {name: 'Bahama Mama #2', type: 'maybe well', group: '', ingredients: "1/2 oz. Rum (Dark), 1/2 oz. Coconut Rum, 1/4 oz. Rum (151-Proof), 1/4 oz. Coffee Liqueur, 1/2 oz. Lemon Juice, Pineapple Juice", flavors: 'boozy, fruity, citrus, sour, coffee', alcPerc: 0.3, alcOz:0.6, source: 'unknown'},
    {name: 'Blue Hawaiian', type: 'well', group: '', ingredients: "1 oz. Rum (Light), 1 oz. Coconut Rum, 1/2 oz. Blue Curaçao, Pineapple Juice", flavors: 'fruity, citrus, bitter', alcPerc: '', alcOz:1, source: 'unknown'},
    {name: 'Blue Margarita', type: 'maybe well', group: '', ingredients: "1 1/2 oz. Tequila, 1/2 oz. Blue Curaçao, Sweet & Sour Mix or Margarita Mix", flavors: 'fruity, citrus, sour, bitter', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Brave Bull', type: 'well', group: '', ingredients: "1 1/2 oz. Tequila, 1 oz. Coffee Liqueur", flavors: 'coffee', alcPerc: '', alcOz:1, source: 'unknown'},
    {name: 'Cadillac Margarita', type: 'after dinner', group: '', ingredients: "1 1/2 oz. Tequila (Premium), 1/2 oz. Cointreau® Orange Liqueur, Sweet & Sour Mix or Margarita Mix, Float of Grand Marnier® Orange Liqueur", flavors: 'citrus, fruity, sour', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Colorado Bulldog', type: 'well', group: '', ingredients: "1 1/2 oz. Vodka, 1 oz. Coffee Liqueur, Cream / Half & Half or Milk, Splash of Cola", flavors: 'coffee, creamy, sweet', alcPerc: '', alcOz:1, source: 'unknown'},
    {name: 'Electric Lemonade', type: 'maybe well', group: '', ingredients: "1 1/2 oz. Rum (Light), 1/2 oz. Blue Curaçao, Sweet & Sour Mix, Splash of Lemon-Lime Soda", flavors: 'fruity, citrus, sour, bitter, fizzy', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Frozen Daiquiri', type: 'well', group: '', ingredients: "2 oz. Rum (Light), 1/2 oz. Triple Sec, 2 oz. Sweet & Sour Mix", flavors: 'fruity, citrus, sour', alcPerc: 0.222222222222222, alcOz:1, source: 'unknown'},
    {name: 'Frozen Margarita', type: 'well', group: '', ingredients: "1 1/2 oz. Tequila, 1/2 oz. Triple Sec, Sweet & Sour Mix or Margarita Mix", flavors: 'fruity, citrus, sour', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Grateful Dead', type: 'maybe well', group: '', ingredients: "1/2 oz. Vodka, 1/2 oz. Gin, 1/2 oz. Rum (Light), 1/2 oz. Triple Sec, Sweet & Sour Mix, Float of Raspberry Liqueur", flavors: 'fruity, citrus, sour', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Incredible Hulk', type: '', group: '', ingredients: "2 oz. Cognac, 2 oz. Hpnotiq® Original", flavors: '', alcPerc: '', alcOz:1.6, source: 'unknown'},
    {name: 'June Bug', type: 'after dinner', group: '', ingredients: "1 oz. Coconut Rum, 1 oz. Banana Liqueur, 1 oz. Melon Liqueur, Pineapple Juice", flavors: 'fruity', alcPerc: '', alcOz:1.2, source: 'unknown'},
    {name: 'Kir Royale', type: 'sparkling', group: '', ingredients: "1/2 oz. Crème de Cassis, Champagne", flavors: 'fruity, wine', alcPerc: 0.16, alcOz:0.56, source: 'unknown'},
    {name: 'L.A. Water', type: 'maybe well', group: '', ingredients: "1/2 oz. Vodka, 1/2 oz. Gin, 1/2 oz. Rum (Light), 1/2 oz. Triple Sec, 1/2 oz. Blue Curaçao, 1/2 oz. Raspberry Liqueur, Sweet & Sour Mix", flavors: 'fruity, citrus, sour, bitter', alcPerc: '', alcOz:1.2, source: 'unknown'},
    {name: 'Liquid Cocaine', type: 'after dinner', group: '', ingredients: "1/2 oz. Vodka, 1/2 oz. Amaretto, 1/2 oz. Southern Comfort®, 1/2 oz. Grand Marnier® Orange Liqueur, Pineapple Juice, Sweet & Sour Mix, Splash of Lemon-Lime Soda", flavors: 'citrus, fruity, sour, herbal, nutty, spicy, fizzy', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Long Beach Iced Tea', type: '', group: '', ingredients: "1/2 oz. Vodka, 1/2 oz. Gin, 1/2 oz. Rum (Light), 1/2 oz. Triple Sec, Sweet & Sour Mix, Splash of Cranberry Juice", flavors: 'fruity, citrus, sour', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Lynchburg Lemonade', type: '', group: '', ingredients: "2 oz. Jack Daniel's® Tennessee Whiskey, 1/2 oz. Triple Sec, Sweet & Sour Mix, Lemon-Lime Soda", flavors: 'fruity, citrus, sour, fizzy', alcPerc: '', alcOz:1, source: 'unknown'},
    {name: 'Michelada', type: '', group: '', ingredients: "2 oz. Tomato Juice or Bloody Mary Mix, 1/2 oz. Lime Juice, 3 Drops of Tabasco® Sauce, 12 oz. Beer (Mexican)", flavors: 'citrus, savory', alcPerc: 0.0352941176470588, alcOz:0.3, source: 'unknown'},
    {name: 'Midori Sour', type: '', group: '', ingredients: "2 oz. Midori® Melon Liqueur, Sweet & Sour Mix", flavors: 'fruity, sour', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Mind Eraser', type: '', group: '', ingredients: "1 oz. Vodka, 1 oz. Coffee Liqueur, Club Soda / Carbonated Water", flavors: 'coffee, fizzy', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Mudslide', type: '', group: '', ingredients: "2 oz. Vodka, 2 oz. Irish Cream, 2 oz. Coffee Liqueur", flavors: 'coffee, creamy', alcPerc: '', alcOz:2.4, source: 'unknown'},
    {name: 'Nutty Irishman', type: '', group: '', ingredients: "1 oz. Irish Cream, 1 oz. Hazelnut Liqueur, 1 oz. Cream / Half & Half", flavors: 'coffee, creamy, nutty', alcPerc: 0.266666666666667, alcOz:0.8, source: 'unknown'},
    {name: 'Rum Runner', type: '', group: '', ingredients: "1/2 oz. Rum (Light), 1/2 oz. Rum (Dark), 1/2 oz. Banana Liqueur, 1/2 oz. Blackberry Brandy, Orange Juice, Sweet & Sour Mix, Dash of Grenadine", flavors: 'fruity, citrus, sour', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Smith And Kerns', type: '', group: '', ingredients: "1 oz. Coffee Liqueur, 1 oz. Cream / Half & Half, Club Soda / Carbonated Water", flavors: 'coffee, creamy, fizzy', alcPerc: 0.2, alcOz:0.4, source: 'unknown'},
    {name: 'Snake Bite #2', type: '', group: '', ingredients: "1/2 Pint Pear Cider, 1/2 Pint Stout", flavors: '', alcPerc: 0.05, alcOz:0.8, source: 'unknown'},
    {name: 'Strawberry Daiquiri', type: '', group: '', ingredients: "2 oz. Rum (Light), 1/2 oz. Strawberry Liqueur (Optional), 1 oz. Sweet & Sour Mix, 3 Strawberries", flavors: 'fruity, sour', alcPerc: 0.285714285714286, alcOz:1, source: 'unknown'},
    {name: 'Strawberry Margarita', type: '', group: '', ingredients: "1 1/2 oz. Tequila, 1/2 oz. Triple Sec, 3 oz. Strawberry Puree, Sweet & Sour Mix", flavors: 'fruity, citrus, sour', alcPerc: 0.16, alcOz:0.8, source: 'unknown'},
    {name: 'Toasted Almond', type: '', group: '', ingredients: "1 oz. Coffee Liqueur, 1 oz. Amaretto, Cream / Half & Half or Milk", flavors: 'coffee, creamy, nutty', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'Tokyo Tea', type: '', group: '', ingredients: "1/2 oz. Vodka, 1/2 oz. Gin, 1/2 oz. Rum (Light), 1/2 oz. Triple Sec, Sweet & Sour Mix, Float of Melon Liqueur", flavors: 'fruity, citrus, sour', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'White Gummy Bear', type: '', group: '', ingredients: "1 oz. Raspberry Vodka or Pear Vodka, 1 oz. Peach Schnapps, Sweet & Sour Mix, Lemon-Lime Soda", flavors: 'fruity, sour, fizzy', alcPerc: '', alcOz:0.8, source: 'unknown'},
    {name: 'White Russian', type: '', group: '', ingredients: "1 1/2 oz. Vodka, 1 oz. Coffee Liqueur, Cream / Half & Half", flavors: 'coffee, creamy', alcPerc: '', alcOz:1, source: 'unknown'},
    {name: 'Zombie', type: '', group: '', ingredients: "1 oz. Rum (Light), 1 oz. Rum (Dark), 1/2 oz. Triple Sec, 2 oz. Orange Juice, 2 oz. Sweet & Sour Mix, Dash of Grenadine, Float of Rum (151-Proof)", flavors: 'fruity, citrus, sour', alcPerc: 0.153846153846154, alcOz:1, source: 'unknown'},
];
const drinkNames = drinks.map(each=>{return each.name}).sort();

function getDrinkNames(){
    let drinkOpts = '<option></option>';
    drinkNames.map(drink=>{drinkOpts+='<option value="'+drink+'">'+drink+'</option>'; return true;});
    return drinkOpts;
}

function getDrinkFlavors(){
    let drinkFlavors = '<option></option>';
    flavors.map(flavor=>{drinkFlavors+='<option value="'+flavor+'">'+flavor+'</option>'; return true;});
    return drinkFlavors;
}

function getDrinkTypes(){
    let drinkTypes = '<option></option>';
    types.map(type=>{drinkTypes+='<option value="'+type+'">'+type+'</option>'; return true;});
    return drinkTypes;
}

function getDrinkIngredients(){
    let drinkIngredients = '<option></option>';
    ingredients.map(ingredient=>{drinkIngredients+='<option value="'+ingredient+'">'+ingredient+'</option>'; return true;});
    return drinkIngredients;
}

function getTheDrink(name){
    const theDrink = drinks.filter(drink=>{let match = false; if(drink.name===name){match=true;} return match;});
    return theDrink[0];
}

function getDrinkList(group,term){
    let theDrinks;
    if(group==='flavor'){
        theDrinks = drinks.filter(drink=>{let match=false; if(drink.flavors.indexOf(term)>-1){match=true;} return match;});
    } else if(group==='type'){
        theDrinks = drinks.filter(drink=>{let match=false; if(drink.type.indexOf(term)>-1){match=true;} return match;});
    } else if(group==='ingredient'){
        const ingRegEx = new RegExp(term,'gi');
        theDrinks = drinks.filter(drink=>{let match=false; if(ingRegEx.test(drink.ingredients)){match=true;} return match;});
    } else if(group==='keyword'){
        const termRegEx = new RegExp(term,'gi');
        const ingredientMatches = drinks.filter(drink=>{return termRegEx.test(drink.ingredients);}).map(match=>{return match.name});
        console.log(ingredientMatches);
        const nameMatches = drinks.filter(drink=>{return termRegEx.test(drink.name);}).map(match=>{return match.name});
        console.log(nameMatches);
        const drinkMatchCombo = ingredientMatches.concat(nameMatches);
        console.log(drinkMatchCombo);
        let drinkMatches = [];
        drinkMatchCombo.map(item=>{if(drinkMatches.indexOf(item)<0){drinkMatches.push(item);}return true;});        
        drinkMatches.sort();
        theDrinks = drinkMatches.map(each=>{const result=drinks.filter(drink=>{if(drink.name===each){return true;}})[0]; return result;});        
    }
    return theDrinks;
}

function alcLevel(number){
    if(number-Math.floor(number)===0){
        return number;
    } else {
        return number.toFixed(2);
    }
}



export {getDrinkNames, getDrinkFlavors, getDrinkTypes, getDrinkIngredients, drinks, getTheDrink, getDrinkList, alcLevel};