import css from 'styled-jsx/css';

export default css`
nav {
    background: #f5da55;
    color:#323330;
    width:100%;
    height: auto;
    border-bottom: 1px solid #323330;
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    -webkit-box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.75);
     box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.75);
}

a:link {
    text-decoration: none;
}

a:visited {
    color:black;
}


.header h1 {
    font-size:40px;
    margin:0 0 0.1em 0;
}

ul.nav-items {
   list-style: none
   display:flex;
   justify-content: space-between;
   padding:5px;
}

li {
   font-family: Lusitana, Georgia, sans-serif;
   font-size:22px;
   border: 1px solid #323330;
   margin:5px;
   padding:0.6em;
   border-radius: 8px;
   transition: 0.3s ease-in-out;
}

li.disabled {
    border: 1px solid gray;
    cursor: not-allowed;
    transition:none;
}

li a {
  text-decoration: none;
  color: #323330;
  cursor:pointer;
  transition: all 0.4s ease-in;
}

li.disabled a{
    pointer-events:none;
    color: gray;
    opacity:0.8;
    font-style: italic;
    transition:none;
}

li.disabled:hover {
    background:none;
    border-color:gray;
    transform: none;
    color: gray;
}

li.disabled:hover a {
    cursor: not-allowed;
    color: gray;
}

li:hover {
   background: #323330;
   border-color: #f1d131;
   transform: scale(1.1);
}

li:hover a {
    cursor: pointer;
    color: #f5da55;
}

.bars-icon {
   display:none;
}

.activeToggle {
   visibility:visible !important;
   height: auto !important;
   opacity:1 !important;
}
@media screen and (max-width:985px) {
   .header {
       margin: 0.3em 0;
       border-bottom:1px solid black;
       text-align:center;
       width: 95%;
   }
}

@media screen and (max-width:758px) {
    .header {
        display:flex;
        justify-content: space-between;
        align-items: center;
        border: none;
    }

   .bars-icon {
        display:block;
        cursor:pointer;
   }
      ul.nav-items {
          flex-direction:column;
          align-content:center;
          width:50%;
          height:0;
          opacity: 0;
          visibility: hidden;
          transition: visibility 0s opacity 0.3s linear;
      }

      ul.nav-items li{
          text-align:center;
      }
   
   }
}
`;
