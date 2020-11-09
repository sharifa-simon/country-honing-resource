# CHR - Country Honing Resource

### Description

CHR is a web application that allows the user to view countries, within North America and Central America, that a shipment must travel through before reaching its final destination. This app uses jvectorMap to display a North America, highlighting countries based on the user's selection.

To see the fully functional site, please visit: [Country Honing Resource](https://ch-resource.herokuapp.com/)

### Screen Shot

![Image of Landing View](https://raw.githubusercontent.com/sharifa-simon/country-honing-resource/master/public/Landing.png)
![Image of Map VIew](https://github.com/sharifa-simon/country-honing-resource/blob/master/public/Map1.png)
![Image of Map](https://raw.githubusercontent.com/sharifa-simon/country-honing-resource/master/public/Map2.png)

### Prerequisites
Before you get started, make sure you have the following software installed on your computer:

Node.js

### Installation
Note: This project does not require a database.

1. Clone this repository on to your local machine.
2. Navigate to the main project directory.
3. Run npm install in your terminal.
4. Run npm start.
5. If a window did not open, you can navigate to localhost:3000 to view the application.

### Usage

> *The CHR is a fictional system to help users understand the vast supply chain of C. H. Robinson.
When users navigate to the domain, they will be presented with a top navigation, footer, and a landing view.*

The landing view is comprised of three shipping options. As two of the three shipping options are currently not available, their buttons have been disabled. The user will click a button labeled "Get Started" under the middle shipping option. This will navigate them to a new page.

After clicking "Get Started" the new view displays a description, drop down menu, and a map of North America. Here, the user can select various countries that will be reflected on the provided map to mimic how a shipment would travel through areas from North America.

The navigation bar is fixed to the top of the screen. It will bring a user Home(to shipment selection view) or to an About view.

The About view briefly describes why CHR was created.

The footer is also fixed and provides the user with four social media options for C. H. Robinson:
* LinkedIn
* Twitter
* Facebook
* Youtube

While this application is intended for web application use, it does have some responsive capabilities and will resize to fit some smaller screens/devices.

### Built With

* Node.js
* React
* React-Bootstrap
* React-Jvectormap
* MaterialUI
* Browser Tab Icon made by [https://www.flaticon.com/authors/freepik]
* GitHub
* Heroku

### Roadmap
> If the CHR were to expand, it would include maps showing flight paths for potential shipments, how shipments may travel by rail, and waterways accessed by ships/boats around the globe. It would also include some of the following ideas:

1. Increasing the accessibility.
2. Organization such as allowing for a carousel display, on the landing view, as additional forms of ships are added.
3. Increasing the functionality of the map to include markers for selected countries.
4. A more user friendly dropdown. As there are currently many options users can choose from, being able to filter by beginning to type the three-letter country code may help with selecting a result. While the assumption with this web application is that the user knows the country code they would like to select, future versions may benefit from allowing the user to type the full or partial name of a country to retrieve results without needing to know the country code.

#### Acknowledgements
Thank you, C. H. Robinson, for the opportunity to create and learn!