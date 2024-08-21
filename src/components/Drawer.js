function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
                <div className="drawer">
                    <h2>
                        Bag
                        <img
                            className="removeBtn"
                            src="/img/remove.svg"
                            alt="remove"
                        />
                    </h2>
                    <div className="items">
                        <div className="cartItem">
                            <div
                                style={{
                                    backgroundImage: 'url(/img/sneakers/6.jpg',
                                }}
                                className="imgItemCard"
                            ></div>

                            <div className="cardItemDescription">
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="/img/remove.svg"
                                alt="remove"
                            />
                        </div>
                        <div className="cartItem">
                            <div
                                style={{
                                    backgroundImage: 'url(/img/sneakers/9.jpg',
                                }}
                                className="imgItemCard"
                            ></div>

                            <div className="cardItemDescription">
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="/img/remove.svg"
                                alt="remove"
                            />
                        </div>
                    </div>

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Total:</span>
                                <div></div>
                                <b>21 498 RUB.</b>
                            </li>
                            <li>
                                <span>Tax 5%:</span>
                                <div></div>
                                <b>1074 RUB.</b>
                            </li>
                        </ul>
                        <button className="greenBtn">
                            Checkout
                            <img
                                width={13}
                                height={12}
                                src="/img/arrow.svg"
                                alt="logo"
                            />
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Drawer;