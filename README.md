chatterbox
------

### Tech Stack:
- React
- Mobx
- SCSS
- Express Server
- Socket.io Web Sockets
- Jest (Testing)


### The process:

Original intent of the project was to get a working version of some type of websocket based chat application.

My initial plan was to set up a firebase backend and utilize redux for my front end state management.

After I set up a basic create react app project and started building my node server I realized I didn't need to make this too complicated and decided to use local storage for users and let socket.io do the heavy lifting for me.

I implemented mobx and continued to build and refactor components as I went, building with a mobile first design that is simple and functions on desktop as well.

I created a model for the conversations so when a new Conversation was created it was stored in the conversations array in the root store of the project. A small refactor made this possible and allowed for one array to hold the necessary information for most of the application.


### Happy Little Accidents:

I made the mistake of getting into authentication early on and had to back myself out of there and stub some users to conserve time. If I continued down that road, I would have used firebase for the ease of setup.

Testing was the last thing I approached and as such was somewhat neglected. I added some mounting tests just to implement a file to build off of, but this is an area I would spend more time in going forward.

I have an EADDRINUSE error and need to change the node servers port configuration (didn't break things so I didn't put time into it)

SCSS structure is not fully fleshed out. I began to refactor similar css out into a reusable file, but it needs a little more work. I would build a different view for desktop if I continued.

I didn't really need to go through all of that get a working application so I began by making a localStorage based auth system (disclaimer: I completely understand that this is insecure but it served it's purpose)

Chat channels are fixed but my next implementation would allow users to create there own channels.

I would have like to publish this as well but I ran out of time

### How to Run:

To run the project on your local machine, clone this project and follow these steps

1. From the project root in your terminal run `yarn install`
2. Then run `cd client`
3. Then `yarn install`
4. From the project root `yarn run dev`
5. You should be successfully running a local server
6. Visit [http://localhost:3000/](http://localhost:3000/)
7. To test the web socket functionality open two different browsers or an incongnito window if you are using chrome and begin to send messages back and forth.
8. To run tests: `yarn run test` in root dir
