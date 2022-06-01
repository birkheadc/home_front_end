# Birkheadc's Homepage

My new homepage\

In development, `REACT_APP_HOME_URL` must be declared as an environmental variable. Recommend either\
- run `export REACT_APP_HOME_URL=http://localhost:(portnumber)` in the terminal you will be starting the development application from\
- replace `npm start` with `REACT_APP_HOME_URL=http://localhost:(portnumber) npm start` every time you launch\
- create a file named `.env` in the root directory of the application, and add a line that reads `REACT_APP_HOME_URL=http://localhost:(portnumber)`\

(Replace `(portnumber)` with the correct port number)