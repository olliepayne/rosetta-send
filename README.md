# Rosetta Send

## [Deployment Link](https://blooming-retreat-36750.herokuapp.com/)
<hr>
**Known Bugs**
<br>
The CSS transitions present on the buttons dissappeared during deployment.

<hr>

### About
I built Rosetta Send as an homage to my love and pursuit of elite sport climbing. The app allows a user to add a route, of any name/type/grade/location, which can then be searched by anybody using the built in Route Finder. The user can also view their profile of submitted climbs, and delete their account if they choose to. It is a full CRUD, MERN stack application. I began building this during my time with General Assembly.

### Screenshots
<a href="https://imgur.com/wNCAcdK"><img src="https://i.imgur.com/wNCAcdK.png" title="source: imgur.com" /></a>
Route Finder specificty

<a href="https://imgur.com/hJNZWZp"><img src="https://i.imgur.com/hJNZWZp.png" title="source: imgur.com" /></a>
Route Finder displaying all routes

<a href="https://imgur.com/SbBXmQY"><img src="https://i.imgur.com/SbBXmQY.png" title="source: imgur.com" /></a>
Update Route

<a href="https://imgur.com/XlBrULC"><img src="https://i.imgur.com/XlBrULC.png" title="source: imgur.com" /></a>
Signup Page

<a href="https://imgur.com/dxNawLk"><img src="https://i.imgur.com/dxNawLk.png" title="source: imgur.com" /></a>
Route Details

<a href="https://imgur.com/rERctUz"><img src="https://i.imgur.com/rERctUz.png" title="source: imgur.com" /></a>
User Profile

### Technologies Used
I bult the MERN stack app using the following:
* MongoDB
* ExpressJS
* ReactJS
* NodeJS
* JWT Authentication

### Favorites
Besides implementing auth scratch, I am extremely proud of the Route Finder, and the handler I built to manage and divide our the search results from the Route Finder into separate pages.

### Growth
Choosing to incorporate authentication from scratch using JSON Web Tokens as opposed to using the provided template given to me by General Assembly, taught me many of React's nuances and heavily reinforced and developed my skill of working with the backend. Incorporating this was my biggest challenge, but doing so grew my as a developer in every sense. I am extremely proud of the JWT integration and the communication between the User, the Frontend, and the Backend.

#### Icebox
(In no partucular order)
* A looser name/location search in the Route Finder. I intend to splice the search string into individual words, do the same on the backend and look for comparisons between the two.
* Allow users to ' wishlist ' routes. Basically a ToDo list.
* Add a custom logo / incorporate this logo into tiling on page styling
* Route ratings / Consumer grades. Have a posted official grade and an average of consumer grades