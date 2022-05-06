<div id="top"></div>










<!-- GETTING STARTED -->
## Getting Started

This is the code fixed to the Grocery control system where I added new functionality to work with the new requirements and fixed the general functionality.  

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_If you want to test the code with the preferred IDE  you have to install the necessary packages bellow._


1. Clone the repo
   ```sh
   git clone https://github.com/PabelAndino/codechalange.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the Code:
   ```js
   npm run run:code
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- Changes -->
## Changes

According to the established requirements, for the system to work correctly, certain modifications had to be made so that it can be understood and easy to maintain if new features were to be added.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Changes

- [x] Added a `forSale` property that help to know if a product may or not be sold.
- [x] Added a `category` property to now what category a product most have.
- [x] Now I use functions instead of classes.
- [x] The use of interfaces of typescript.
- [x] The Quality of an item is never negative
- [x] The Quality of an item is never more than 25,
- [x] Cheddar Cheese increases in Quality the older it gets, It keeps the limit when is get 25.
- [x] Instant Ramen
    - [x]  Has the property `forSale=false` because never have to be sold
    - [x] No decreases in Quality
- [x] Fruit Category
    - [x] Degrades in one sellIn and quality
    - [x] Degrades twice as fast once the sellIn date has passed
- [x] Organic products
    - [x] degrade in Quality twice as fast as normal items
    - [x] Once any item is 5 days past its sellIn date, can no longer sell it and its property `forSale=false` is listed.



<!-- CONTRIBUTING -->
## New code suggestion

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **otherLogic.ts**.

For better readability of the code, it is possible to separate the logic and make a separate verification by categories, where the different objects of the same are obtained and to be able to carry out different operations separately. As a small example is shown in the  **/otherLogic.ts** file.

<p align="right">(<a href="#top">back to top</a>)</p>







<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thanks to the Replicant company that allowed me to work on this exciting little project and for the time spent where I was able to learn something new every moment.!



<p align="right">(<a href="#top">back to top</a>)</p>


