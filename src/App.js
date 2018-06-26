import React, { Component } from 'react';
import './App.css';
import CardClicked from "./Components/CardClicked/CardClicked";
import cards from "./cards.json";
import Navbar from "./Components/Navbar/Navbar";
import Modal from "./Components/Modal/Modal";
import Footer from "./Components/Footer/Footer"


class App extends Component {
  state = {
    cards: cards,
    clickedCards: [],
    score:0,
    topScore:0,
    footerText: ""
  }

  clickedCharacter = (id) => {
    const [pageBody] = document.getElementsByTagName("body");

    if (this.state.clickedCards.includes(id)) {
      this.setState({score:0, clickedCards: []})

      pageBody.classList.add("shakeWrapper")
      this.setState({footerText: "You picked that already! Start Over."})
      setTimeout(() => {
        pageBody.classList.remove("shakeWrapper");
      }, 500);
      setTimeout(() => {
        this.setState({footerText: ""})
      }, 1800)
    } else {
      this.setState({clickedCards: [...this.state.clickedCards, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})
      };
      if (this.state.score === 11) {
        this.setState({footerText: "You Won!! "})
        this.setState({score: 0, clickedCards: [], cards: cards})
        setTimeout(() => {
          this.setState({footerText: ""})
        }, 1800)
      };
    };
  };

  reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({cards:cards});
  }


  renderCards = (array) => {
    return this.state.cards.map(card => (
      <section className='col s4 m3 l3' key={card.id} id={card.id}>
        <CardClicked
          name={card.name} 
          image={card.image} 
          reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
          clickedCharacter={() => {this.clickedCharacter(card.id)}} />
      </section>
      )
    );
  }
  render() {
    return (
          <div className="container-fluid">
          <Navbar score={this.state.score} topScore={this.state.topScore}/>
          <h1 className="App-title">Welcome to React</h1>
          <Modal />
        <br />
       <div className="container row cardWrapper">
       {this.renderCards(this.state.cards)}
       </div>
       <br />
       <Footer text={this.state.footerText} />
      </div>
    );
  };
};




export default App;
