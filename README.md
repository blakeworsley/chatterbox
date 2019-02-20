# chatterbox

Run in dev environment:

To run the project on your local machine, clone this project and follow these steps
1. From the project root in your terminal run `yarn install`
2. Then run `cd client`
3. Then `yarn install`
4. From the project root `yarn run dev`
5. You should be successfully running a local server
6. Visit `http://localhost:3000/`

To test the web socket functionality open two different browsers or an incongnito window if you are using chrome and begin to send messages back and forth.

### What can this project do

Currently this is a chat app using React and Mobx on an Express server implementing web sockets (through socket.io) with two fixed channels (chat and new). Users and Login information is saved to LocalStorage (not secure but for the time being is a work around).

*WIP - I will continually be adding to this project*
