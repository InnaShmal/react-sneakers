function Card() {
    return (
        <div className="card">
                        <div className="likedUnliked">
                            <img src="/img/unliked.svg" alt="unliked" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="/img/sneakers/1.jpg"
                            alt="sneakers1"
                        />
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="sneakerBottom">
                            <div className="sneakerPrice">
                                <span>Price:</span>
                                <b>12 999</b>
                            </div>
                            <button className="sneakerBtn">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
    )
}

export default Card