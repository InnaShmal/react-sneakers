import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
    return (
        <div className="wrap">
            <Drawer/>
            <Header/>
            <div className="content">
                <div className="contentTop">
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock">
                        <img src="/img/search.svg" alt="search" />
                        <input placeholder="Search" />
                    </div>
                </div>

                <div className="allSneakers">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default App;
