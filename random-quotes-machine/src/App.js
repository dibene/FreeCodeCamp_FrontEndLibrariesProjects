import React from "react";
import "./App.css";
import Icon from "./assets/pied-piper.png";
import IconButton from "./assets/button.png";
import Tweet from "./assets/tweet.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selectAuthor: '',
      selectQuote: ''
    }
  }
  
  handleClick() {
    const data = [
      {
        autor: "Erlich",
        text: "Your muffins smell like shit and so do your ideas."
      },
      {
        autor: "Erlich",
        text:
          "We're walking in there with three foot cocks covered in Elvis dust."
      },
      { autor: "Erlich", text: "You just brought piss to a shit fight!" },
      {
        autor: "Erlich",
        text:
          "Yeah, we're gonna win even if I have to go into the auditorium and personally jerk off every guy in the audience."
      },
      {
        autor: "Erlich",
        text:
          "Jared? I want you call the VC's and set up meetings with all of them. Line 'em up. Nuts to butts."
      },
      {
        autor: "Gavin",
        text:
          "I don't know about you people, but I don't want to live in a world where someone else makes the world a better place better than we do."
      },
      {
        autor: "Gavin",
        text:
          "It's weird. They always travel in groups of five. These programmers, there's always a tall, skinny white guy; short, skinny Asian guy; fat guy with a ponytail; some guy with crazy facial hair; and then an East Asian guy. It's like they trade guys until they all have the right group."
      },
      {
        autor: "Gavin",
        text:
          "The greatness of human accomplishment has always been measured by size. The bigger, the better. Until now. Nanotech. Smart cars. Small is the new big. In the coming months, Hooli will deliver Nucleus, the most sophisticated compression software platform the world has ever seen. Because if we can make your audio and video files smaller, we can make cancer smaller. And hunger. And AIDS."
      },
      {
        autor: "Richard",
        text: "Jobs was a poser. He didn't even write code."
      },
      {
        autor: "Jared",
        text:
          'Hey! Sorry if I scared you, I know I have somewhat ghost-like features. My uncle used to say, "You look like someone starved a virgin to death".'
      },
      {
        autor: "Jared",
        text:
          "But Hooli was like an abusive spouse to me. You know, like that guy who married Julia Roberts in \"Sleeping With The Enemy\"? It was dehumanizing. But then, you, Richard, you pulled me out of the life and you gave me hope and you gave me a sense of self-worth. Like Richard Gere did to Julia Roberts in 'Pretty Woman'. Every day here has been like that shopping-spree scene. I'm putting on hats."
      },
      {
        autor: "Gilfoyle",
        text:
          "While you were busy minoring in gender studies and singing a capella at Sarah Lawrence, I was gaining root access to NSA servers. I was one click away from starting a second Iranian Revolution."
      },
      {
        autor: "Gilfoyle",
        text:
          "I prevent cross-site scripting. I monitor for DDoS attacks, emergency database rollbacks, and faulty transaction handlings. The Internet - heard of it? - transfers half a petabyte of data minute; do you have any idea how that happens? All those YouPorn ones and zeroes streaming directly to your shitty little smartphone day after day, every dipshit who shits his pants if he can't get the new dubstep Skrillex remix in under twelve seconds? It's not magic, it's talent and sweat. People like me ensure your packets get delivered unsniffed. So what do I do? I makes sure that one bad config on one key component doesn't bankrupt the entire fucking company. That's what the fuck I do."
      },
      {
        autor: "Gilfoyle",
        text: "Face it, Dinesh, you're gay for my code. You're code gay."
      },
      { autor: "Gilfoyle", text: "You'd like to fuck my code" },
      {
        autor: "Dinesh",
        text:
          "That's not really our logo, is it? It looks like a guy sucking a dick, and he's got another dick tucked behind his ear for later. Like a snack dick."
      },
      {
        autor: "Dinesh",
        text:
          "Hey, Jared, you know who else is Canadian? Justin Bieber, the Hitler of music."
      },
      {
        autor: "Dinesh",
        text:
          "I know Gilfoyle probably came in here and puked out a bunch of tech specs, three-fourths of which are total horse-shit. Did he bring up the Iranian revolution thing? Yeah, those words mean nothing. But here's a fact: I'm the only one of these clowns that can code in Java. And I write sleek performant low-overhead scala code with higher order functions that will run on anything. Period. End of sentence. So basically, I think whatever equity I get, it should reflect that I contribute more than Gilfoyle. "
      }
    ];
    const selectId = Math.floor(Math.random() * data.length); 
    this.setState({
      selectAuthor: data[selectId].autor,
      selectQuote: data[selectId].text
    });
  }
  render() {
    return (
      <div className="App">
        <div className="Quote" id="quote-box">
          <div className="Head">
            <img className="icon" src={Icon}></img>
          </div>
          <p className="Text" id="text">
            {this.state.selectQuote}
          </p>
          <p className="Author" id="author">
            <i>{this.state.selectAuthor}</i>
          </p>
          <div className="Buttons">
            <a className="link-tweet" id="tweet-quote" scr="#">
              <img src={Tweet}></img>
            </a>
            <button
              onClick={this.handleClick}
              className="Button"
              id="new-quote"
            >
              <img className="icon-button" src={IconButton}></img> New Quote{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
