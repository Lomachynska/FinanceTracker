import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Брелок Audi',
          img: 'Audi',
          desc: 'Стильний шкіряний Брелок з логотипом',
          category: 'Автоаксесуари',
          price: '199.00'
        },
        {
          id: 2,
          title: 'Брелок Fiat',
          img: 'Fiat',
          desc: 'Стильний шкіряний Брелок з логотипом',
          category: 'Автоаксесуари',
          price: '199.00'
        },
        {
          id: 3,
          title: 'Брелок Mitsubishi',
          img: 'Mitsubishi',
          desc: 'Стильний шкіряний Брелок з логотипом',
          category: 'Автоаксесуари',
          price: '199.00'
        },
        {
          id: 4,
          title: 'Брелок Toyota',
          img: 'Toyota',
          desc: 'Стильний шкіряний Брелок з логотипом',
          category: 'Автоаксесуари',
          price: '199.00'
        },
        {
          id: 5,
          title: 'Брелок VW',
          img: 'VW',
          desc: 'Стильний шкіряний Брелок з логотипом',
          category: 'Автоаксесуари',
          price: '199.00'
        },
      ]
    };
    this.addToOrder = this.addToOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
