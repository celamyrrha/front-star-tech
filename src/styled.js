.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Josefin Sans', sans-serif;
}

ul{
  list-style: none;
  font-size: 20px;
  font-weight: 600;
}

a{
  text-decoration: none;
  color: #fff;
}

body{
  height: 100vh;
  background-size: cover;
  background-color:#288d9c;
}

header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #1f4e70;
  
}

header ul {
  display: flex;
}

header ul li {
  padding: 10px;
}

.grid {
  margin: 0 auto;
  width: 80%;
display: grid;
grid-template-columns: 1fr 1fr;
  
}

.container{
  margin-top: 8px;
  color: #fff;
}

.container .titulo{
  text-align: center;
}

.container .titulo h1{
  font-size: 35px;
}

.container .titulo h5{
  font-size: 15px;
  font-weight: 600;
}

#subtitulo p{
  max-width: 1080px;
  margin: 20px auto;
  text-align: left;
  font-weight: 600;
}

.red{
  color: red;
}


fieldset {
  border:none;
}

.form button{
  width: 15%;
}

input,
textarea,
button,
select {
width: 100%;
height: 43px;
}

.not{
  width: 10%;
  height: initial;
  padding: 0;
}

form {
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 15px;
}
form label {
display: block;
}
form p {
margin: 0;
}

button,
input,
textarea, select {
padding: 1em;
}

button {
background:whitesmoke;
width: 100%;
border: 0;
font-weight: 600;
font-size: 15px;

}
.box8 {
  grid-column-start: 1;
  grid-column-end: 3;
  
}