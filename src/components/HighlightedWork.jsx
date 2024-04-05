import DreamifyImg from "../assets/images/highligtedWork/Dreamify.jpg";
import TheBankImg from "../assets/images/highligtedWork/The_Bank.jpg";
import CWarriorImg from "../assets/images/highligtedWork/ConsoleWarrior_Stylized.webp";
import CBlackjackImg from "../assets/images/highligtedWork/ConsoleBlackJack.jpg";

import "./highlightedWork.css";


export default function() {

    return (
        <>
            <section className="card-section">
                <div className="card-container">
                    {/*Dreamify*/}
                    <div className="card-object">
                        <div className="card-content">
                            <img src={DreamifyImg} alt="Dreamify" />
                            <div>
                                <h3>Dreamify</h3>
                                <p>
                                    A C#/.NET console app consiting of a client and an own built API
                                    that interracts with the Spotify API as an external API along with
                                    database connections and testing. Allowing the user to create a user
                                    profile and connect son...
                                </p>
                                <a href="https://github.com/Adrozs/Dreamify" target="blank" className="button-more-info">
                                    Find out more
                                    <span className="material-symbols-outlined">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*The Bank*/}
                    <div className="card-object">
                        <div className="card-content">
                            <img src={TheBankImg} alt="The Bank" />
                            <div>
                                <h3>"The Bank"</h3>
                                <p>
                                    A bank Console-app with Database connections made in C#/.NET. This
                                    C# console application simulates basic bank/atm functionalities.
                                    Users can log in to their accounts, view account details, create new
                                    accou...
                                </p>
                                <a href="https://github.com/Adrozs/The_Bank" target="blank" className="button-more-info">
                                    Find out more
                                    <span className="material-symbols-outlined">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Console Warrior*/}
                    <div className="card-object">
                        <div className="card-content">
                            <img
                                src={CWarriorImg}
                                alt="Console Warrior"
                            />
                            <div>
                                <h3>Console Warrior</h3>
                                <p>
                                    A little side project I started in the beginning of my programming
                                    journey to work on incorporating the knowledge I gained so far since
                                    I started studying Fullstack.NET development in september 2023. At
                                    the point of creat...{" "}
                                </p>
                                <a href="https://github.com/Adrozs/FantasyTextGame" target="blank" className="button-more-info">
                                    Find out more
                                    <span className="material-symbols-outlined">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Console Blackjack*/}
                    <div className="card-object">
                        <div className="card-content">
                            <img
                                src={CBlackjackImg}
                                alt="Console Blackjack"
                            />
                            <div>
                                <h3>Console Blackjack</h3>
                                <p>
                                    A simple blackjack game made using the Deck of Cards API. You will
                                    be able to play alone against the dealer in a text-based blackjack
                                    game. Rules are simple, you get cards dealt and chooses when to
                                    stop, when to get more car...{" "}
                                </p>
                                <a href="https://github.com/Adrozs/ConsoleBlackjack" target="blank" className="button-more-info">
                                    Find out more <span className="material-symbols-outlined">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};